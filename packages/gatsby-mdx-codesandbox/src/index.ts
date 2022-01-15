import { forEach } from "@s-libs/micro-dash";
import { existsSync, readFileSync } from "fs";
import { basename, dirname, resolve } from "path";
import prettier, { Options as PrettierOptions } from "prettier";
import { CSSProperties } from "react";
//@ts-ignore Can't figure out ambient module declaration for a subpackage
import codesandbox from "remark-codesandbox/gatsby";
import { PartialDeep, SetOptional } from "type-fest";
import visit from "unist-util-visit";
import type { Code, Content, LinkReference, Parent, Tsx } from "./mdast";

function getRandomInt(max = 10000) {
  return Math.floor(Math.random() * max);
}

type MaybeParent = SetOptional<Parent, "children">;

type CustomTemplate = {
  extends: string;
  entry: string;
};

export type PluginOptions = {
  development: {
    style: CSSProperties;
  };
  prettier: PrettierOptions;
  codesandbox: {
    mode: "iframe" | "button";
    defaultQuery: CodeSandBoxQuery;
    customTemplates: {
      [_: string]: CustomTemplate;
      default: CustomTemplate;
    };
  };
};

type CodeSandBoxQuery = {
  template: string;
  fontsize: string;
  hidenavigation: "0" | "1";
  theme: "dark" | "light";
  entry: string;
  module: string;
  style: string;
};

type MarkdownAST = Parent;

type GatsbyMdxNodeId = string;

type GatsbyMdxNode = {
  id: GatsbyMdxNodeId;
  children: GatsbyMdxNode[];
  parent: GatsbyMdxNodeId;
  internal: {
    content: any;
    type: `Mdx` | "File";
  };
  frontmatter: {
    title: string;
    [key: string]: string;
  };
  excerpt: string;
  exports: any;
  rawBody: string;
};

type GatsbyMdxFileNode = GatsbyMdxNode & {
  internal: GatsbyMdxNode["internal"] & {
    type: "File";
  };
  fileAbsolutePath: string;
};

type GatsbyMdxPluginMeta = {
  markdownAST: MarkdownAST;
  markdownNode: GatsbyMdxFileNode;
};

type GatsbyMdxPlugin<TOptions extends {}> = (
  meta: GatsbyMdxPluginMeta,
  pluginOptions: PartialDeep<TOptions>
) => Promise<MarkdownAST>;

const plugin: GatsbyMdxPlugin<PluginOptions> = async (meta, pluginOptions) => {
  const _options: PluginOptions = {
    development: {
      style: (pluginOptions?.development?.style as
        | CSSProperties
        | undefined) || {
        marginTop: "20px",
        padding: "16px",
        border: "15px solid rgb(245, 247, 249)",
        backgroundColor: "black",
        color: "white",
        marginBottom: "20px",
      },
    },
    prettier: {
      jsxBracketSameLine: false,
      singleQuote: true,
      tabWidth: 2,
      trailingComma: "es5",
      semi: false,
      printWidth: 80,
      proseWrap: "always",
      parser: "typescript",
    },
    codesandbox: {
      mode: pluginOptions?.codesandbox?.mode || "button",
      defaultQuery: {
        template: "default",
        entry: "src/App.tsx",
        fontsize: "14px",
        hidenavigation: "0",
        theme: "dark",
        module: "",
        style: "",
      },
      customTemplates: {
        //@ts-ignore
        default: (pluginOptions.codesandbox?.customTemplates?.default as
          | CustomTemplate
          | undefined) || {
          extends: `file:${__dirname}/../src/codesandbox-template`,
          entry: "src/App.tsx",
        },
        ...pluginOptions.codesandbox?.customTemplates,
      },
    },
  };
  // console.log('options', _options)
  const { markdownAST, markdownNode } = meta;

  const seen: { [_: string]: boolean } = {};

  const isCodeOrDemo = (type: string): type is "demo" | "code" => {
    return ["code", "demo"].includes(type);
  };

  const isLinkReference = (node: Content): node is LinkReference => {
    return node.type === "linkReference";
  };

  const isParent = (node: MaybeParent): node is Parent => {
    return !!node.children;
  };

  const isSoloChild = (node: Parent) => {
    return node.children.length === 1;
  };

  const ALLOWED_EXT = ["tsx"];
  const isAllowedExt = (ext: string): ext is Tsx["type"] =>
    ALLOWED_EXT.includes(ext);

  visit(markdownAST, "paragraph", (paragraphNode: MaybeParent, idx) => {
    // Only process paragraph nodes
    if (!isParent(paragraphNode)) return;

    // Only allow the shortcode by itself in a paragraph
    if (!isSoloChild(paragraphNode)) return;

    // The [shortcode] syntax shows up as a linkReference node - filter out all others
    const [linkRefNode] = paragraphNode.children;
    if (!isLinkReference(linkRefNode)) return;

    // The 'label' is the shortcode. Filter out any empty links
    const { label } = linkRefNode;
    if (!label) return;

    // Shortcode format:  (demo|code):fname.ext[?params...]
    const [shortCodeType, fnameWithQuery] = label.split(":");
    const [fname, querystring] = fnameWithQuery.split("?");
    const [moduleName, ext] = fname.split(".");

    // Filter out any shortcode that is not ours
    if (!isCodeOrDemo(shortCodeType)) return;

    // Error on any file type not currently supported
    if (!isAllowedExt(ext)) {
      throw new Error(
        `${fname} is not supported. Only jsx and tsx are supported.`
      );
    }

    // Copy default values into query
    const query = new URLSearchParams();
    forEach(_options.codesandbox.defaultQuery, (v, k) => {
      if (!!v) query.set(k, v);
    });

    // Calculate the template name
    const parsed = new URLSearchParams(querystring);
    const templateName = parsed.get("template") || query.get("template");
    parsed.delete("template");
    query.delete("template");
    console.log(`Template name is ${templateName}`);

    // Overwrite defaults with tempalte defaults if available
    const { customTemplates } = _options.codesandbox;
    if (templateName && customTemplates[templateName]) {
      forEach(customTemplates[templateName], (v, k) => {
        if (!!v) query.set(k, v);
      });
    }

    // Overwrite default value union with values specified on querystring
    parsed.forEach((v, k) => {
      if (!!v) query.set(k, v);
    });

    // Compute the new querystring
    const computedQuerystring = decodeURIComponent(query.toString());
    console.log(`full query: ${templateName}?${computedQuerystring}`);

    // Calculate the full path to the code file name and error out if it doesn't exist
    const { fileAbsolutePath } = markdownNode;
    const absoluteDir = dirname(fileAbsolutePath);
    const codeFileAbsolutePath = resolve(absoluteDir, fname);
    if (!existsSync(codeFileAbsolutePath)) {
      throw new Error(`${fname} was not found at ${codeFileAbsolutePath}.`);
    }
    console.log(codeFileAbsolutePath);

    // Read the source file
    const source = readFileSync(codeFileAbsolutePath, { encoding: "utf-8" });

    // Prettify it so it displays nicely in the site
    const formattedSource = prettier.format(
      `// ${basename(codeFileAbsolutePath)}\n\n${source}`,
      _options.prettier
    );

    switch (shortCodeType) {
      // The 'code' case is where we do normal inline code
      case "code":
        {
          // Typescript kung fu to convert to a Code node
          ((node: Code) => {
            node.type = "code";
            node.lang = "tsx";
            node.meta = ``;
            node.value = formattedSource;
            console.log(`converted node`, JSON.stringify(node, null, 2));
          })(linkRefNode as unknown as Code);
        }
        break;

      // The 'demo' case is a codesandbox and, if in dev/localhost mode, a working demo running aginst local code
      case "demo":
        {
          // Wire up local dev harness
          if (true) {
            const importSymbol = `Component_${moduleName}`;

            // Splice in a dev container
            markdownAST.children.splice(idx, 0, {
              type: "jsx",
              value: `
              <div style={${JSON.stringify(_options.development.style)}}>
                {true && 
                  <div>
                     <div style={{}}>Development mode detected. Running local code.</div>
                     <br/>
                     <hr/>
                     <br/>
                  </div>
                }
                <${importSymbol}/>
              </div>
            `,
            });
            console.log(`Adding dev harness for ${moduleName}`);

            // Insert an import if this component hasn't been seen yet
            if (!seen[moduleName]) {
              const node: Content = {
                type: "import",
                value: `import ${importSymbol} from './${moduleName}'`,
              };
              markdownAST.children.unshift(node);
              console.log(`Adding: ${node.value}`);
              seen[moduleName] = true;
            }
          }

          // Swap current node for a codesandbox node
          ((node: Code) => {
            node.type = "code";
            // @ts-ignore
            node.children = [];
            node.lang = ext;
            node.meta = `codesandbox=${templateName}?${computedQuerystring}`;
            node.value = formattedSource;
            // console.log(`converted node`, JSON.stringify(node, null, 2))
          })(paragraphNode as unknown as Code);
        }
        break;
    }
  });

  // console.log('calling codesandbox', _options.codesandbox)

  await codesandbox(meta, _options.codesandbox);
  // console.log(JSON.stringify(markdownAST, null, 2))
  return markdownAST;
};

module.exports = plugin;
