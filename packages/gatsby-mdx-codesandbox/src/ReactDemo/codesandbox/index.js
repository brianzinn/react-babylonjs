"use strict";

const visit = require("unist-util-visit");
const is = require("unist-util-is");
const toString = require("mdast-util-to-string");
const u = require("unist-builder");
const { getParameters } = require("codesandbox/lib/api/define");
const fetch = require("isomorphic-fetch");

const getTemplate = require("./getTemplate");
const { parseMeta, mergeQuery, toBasePath, mergeStyle } = require("./utils");

let URLSearchParams;
if (typeof window === "undefined") {
  // URLSearchParams is added to the global object in node v10
  URLSearchParams = global.URLSearchParams || require("url").URLSearchParams;
} else {
  URLSearchParams = window.URLSearchParams;
}

const DEFAULT_CUSTOM_TEMPLATES = {
  react: {
    extends: "new",
  },
  "react-component": {
    extends: "new",
    entry: "src/App.js",
  },
};

const PLUGIN_ONLY_QUERY_PARAMS = ["overrideEntry", "entry", "style"];

function codesandbox(options = {}) {
  const templates = new Map();
  const mode = options.mode || "meta";
  const customTemplates = {
    ...DEFAULT_CUSTOM_TEMPLATES,
    ...(options.customTemplates || {}),
  };
  const defaultQuery =
    mode === "iframe"
      ? {
          fontsize: "14px",
          hidenavigation: 1,
          theme: "dark",
        }
      : undefined;
  const autoDeploy = options.autoDeploy || false;

  let baseQuery = defaultQuery;

  if (typeof options.query !== "undefined") {
    baseQuery = options.query;
  } else if (typeof options.iframeQuery !== "undefined") {
    // DEPRECATED: To support the legacy iframeQuery key
    console.warn(
      `options.iframeQuery is now deprecated and will be removed in the upcoming version, please use options.query instead.`
    );
    baseQuery = options.iframeQuery;
  }

  return async function transformer(tree, file) {
    let title;
    const codes = [];

    // Walk the tree once and record everything we need
    visit(tree, (node, index, parent) => {
      if (!title && is(node, ["heading", { depth: 1 }])) {
        title = toString(node);
      } else if (is(node, "code")) {
        codes.push([node, index, parent]);
      }
    });

    for (const [node, _, parent] of codes) {
      const meta = parseMeta(node.meta || "");
      const sandboxMeta = meta.codesandbox;

      // No `codesandbox` meta set, skipping
      if (!sandboxMeta) {
        continue;
      }

      const [templateID, queryString] = sandboxMeta.split("?");

      const template = await getTemplate(
        templates,
        templateID,
        customTemplates,
        file
      );

      template.title = title || template.title;

      const query = mergeQuery(baseQuery, template.query, queryString);

      const entryPath = query.has("entry")
        ? toBasePath(query.get("entry"))
        : template.entry;

      // If there is no predefined `module` key, then we assign it to the entry file
      if (!query.has("module")) {
        query.set(
          "module",
          // `entry` doesn't start with leading slash, but `module` requires it
          entryPath.startsWith("/") ? entryPath : `/${entryPath}`
        );
      }

      const overrideEntry = query.get("overrideEntry");

      const style = query.get("style") || "";

      // Remove any options that are only for the plugin and not relevant to CodeSandbox
      PLUGIN_ONLY_QUERY_PARAMS.forEach((param) => {
        query.delete(param);
      });

      let entryFileContent = template.files[entryPath].content;
      if (!overrideEntry) {
        entryFileContent = node.value;
      } else if (overrideEntry !== "false") {
        const [overrideRangeStart, overrideRangeEnd] = overrideEntry.split("-");

        const lines = entryFileContent.split("\n");
        entryFileContent = [
          ...lines.slice(0, Number(overrideRangeStart) - 1),
          node.value,
          ...(overrideRangeEnd === ""
            ? []
            : lines.slice(Number(overrideRangeEnd))),
        ].join("\n");
      }

      const parameters = getParameters({
        files: {
          ...template.files,
          [entryPath]: { content: entryFileContent },
        },
      });

      let url;

      if (autoDeploy) {
        const { sandbox_id } = await fetch(
          "https://codesandbox.io/api/v1/sandboxes/define",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ parameters, json: 1 }),
          }
        ).then((res) => res.json());

        url = `https://codesandbox.io/s/${sandbox_id}?${query.toString()}`;
      } else {
        url = `https://codesandbox.io/api/v1/sandboxes/define?${new URLSearchParams(
          {
            parameters,
            query,
          }
        ).toString()}`;
      }

      switch (mode) {
        case "button": {
          const button = u("paragraph", [
            u("link", { url }, [
              u("image", {
                url: "https://codesandbox.io/static/img/play-codesandbox.svg",
                alt: "Edit on CodeSandbox",
              }),
            ]),
          ]);

          // Insert the button directly after the code block
          const index = parent.children.indexOf(node);
          parent.children.splice(index + 1, 0, button);

          break;
        }
        case "iframe": {
          // Construct the iframe AST
          const iframe = u("html", {
            value: `<iframe
  src="${autoDeploy ? url.replace("/s/", "/embed/") : `${url}&embed=1`}"
  style="${mergeStyle(
    "width:100%; height:500px; border:0; border-radius:4px; overflow:hidden;",
    style
  )}"
  title="${template.title || ""}"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>`,
          });

          // Replace the code block with the iframe
          const index = parent.children.indexOf(node);
          parent.children.splice(index, 1, iframe);

          break;
        }
        case "meta":
        default: {
          // TODO: We might still want to make this happen regardless of the mode?
          node.data = node.data || {};
          node.data.hProperties = node.data.hProperties || {};

          node.data.codesandboxUrl = url;
          node.data.hProperties.dataCodesandboxUrl = url;

          break;
        }
      }
    }
  };
}

module.exports = codesandbox;
