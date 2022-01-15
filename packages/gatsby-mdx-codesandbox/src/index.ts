import { forEach } from "@s-libs/micro-dash";
import { readFileSync } from "fs";
import { basename, dirname, resolve } from "path";
import prettier, { Options as PrettierOptions } from "prettier";
import { CSSProperties } from "react";
import { PartialDeep, SetOptional } from "type-fest";
import visit from "unist-util-visit";
import type { Code, Content, Jsx, LinkReference, Parent, Tsx } from "./mdast";

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
) => MarkdownAST;

const plugin: GatsbyMdxPlugin<PluginOptions> = (meta, pluginOptions) => {
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
    },
    codesandbox: {
      mode: pluginOptions?.codesandbox?.mode || "iframe",
      defaultQuery: {
        template: "default",
        entry: "./src/App.tsx",
        fontsize: "14px",
        hidenavigation: "0",
        theme: "dark",
        module: "",
        style: "",
      },
      customTemplates: {
        ...pluginOptions.codesandbox?.customTemplates,
        default: (pluginOptions.codesandbox?.customTemplates?.default as
          | CustomTemplate
          | undefined) || {
          extends: "file:./codesandbox-template",
          entry: "./src/App.tsx",
        },
      },
    },
  };
  console.log("options", _options);
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

  const isJsxOrTsx = (ext: string): ext is Jsx["type"] | Tsx["type"] =>
    ext === "jsx" || ext === "tsx";

  visit(markdownAST, "paragraph", (paragraphNode: MaybeParent, idx) => {
    if (!isParent(paragraphNode)) return;
    if (!isSoloChild(paragraphNode)) return;
    const linkRefNode = paragraphNode.children[0];
    if (!isLinkReference(linkRefNode)) return;
    const { label } = linkRefNode;
    if (!label) return;
    const [shortCodeType, fnameWithQuery] = label.split(":");
    const [fname, querystring] = fnameWithQuery.split("?");
    const query = new URLSearchParams();
    forEach(_options.codesandbox.defaultQuery, (v, k) => query.set(k, v));
    new URLSearchParams(querystring).forEach((v, k) => query.set(k, v));
    query.delete("template");

    if (!isCodeOrDemo(shortCodeType)) return;
    const { fileAbsolutePath } = markdownNode;
    const absoluteDir = dirname(fileAbsolutePath);
    const fullFname = resolve(absoluteDir, fname);
    console.log(fullFname);
    const source = readFileSync(fullFname, { encoding: "utf-8" });
    switch (shortCodeType) {
      case "code":
        {
          const formattedSource = prettier.format(
            `// ${basename(fullFname)}\n\n${source}`,
            _options.prettier
          );
          // Typescript kung fu to convert to a Code node
          ((node: Code) => {
            node.type = "code";
            node.lang = "typescript";
            node.meta = `codesandbox=${query.get(
              "template"
            )}?${query.toString()}`;
            node.value = formattedSource;
            console.log(`converted node`, JSON.stringify(node, null, 2));
          })(linkRefNode as unknown as Code);
        }
        break;
      case "demo":
        {
          const [moduleName, ext] = fname.split(".");
          if (!isJsxOrTsx(ext))
            throw new Error(
              `${fname} is not supported. Only jsx and tsx are supported.`
            );
          const importSymbol = `Component_${moduleName}`;

          // Wire up local dev harness
          {
            // Splice in a dev container
            markdownAST.children.splice(idx, 0, {
              type: "jsx",
              value: `
              <div style={${JSON.stringify(_options.development.style)}}>
                <div style={{color: 'orange'}}>DEVELOPER MODE: EXECUTING COMPONENT USING LOCAL CODE</div>
                <br/>
                <hr/>
                <br/>
                <${importSymbol}/>
              </div>
            `,
            });

            // Insert an import if this component hasn't been seen yet
            if (!seen[moduleName]) {
              markdownAST.children.unshift({
                type: "import",
                value: `import ${importSymbol} from './${moduleName}'`,
              });
              seen[moduleName] = true;
            }

            // Swap for a codesandbox node
            ((node: Code) => {
              node.type = "code";
              node.lang = ext;
              node.meta = `codesandbox=${query.get(
                "template"
              )}?${query.toString()}`;
              node.value = source;
              console.log(`converted node`, JSON.stringify(node, null, 2));
            })(paragraphNode as unknown as Code);
          }
        }
        break;
    }
  });

  console.log(JSON.stringify(markdownAST, null, 2));
  return markdownAST;
};

module.exports = plugin;
