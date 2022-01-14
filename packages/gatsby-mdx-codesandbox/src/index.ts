import { readFileSync } from "fs";
import { basename, dirname, resolve } from "path";
import prettier from "prettier";
import { CSSProperties } from "react";
import { PartialDeep } from "type-fest";
import type { Code, Content, Jsx, LinkReference, Parent } from "./mdast";
function getRandomInt(max = 10000) {
  return Math.floor(Math.random() * max);
}

type CustomTemplate = {
  extends: string;
  entry: string;
};

export type PluginOptions = {
  development: {
    style: CSSProperties;
  };
  codesandbox: {
    mode: "iframe" | "button";
    customTemplates: {
      [_: string]: CustomTemplate;
      default: CustomTemplate;
    };
  };
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

export const plugin: GatsbyMdxPlugin<PluginOptions> = (meta, pluginOptions) => {
  const _options: PluginOptions = {
    development: {
      style: (pluginOptions?.development?.style as
        | CSSProperties
        | undefined) || {
        margin: 5,
        padding: 5,
        border: "1px solid white",
        backgroundColor: "black",
        color: "white",
      },
    },
    codesandbox: {
      mode: pluginOptions?.codesandbox?.mode || "iframe",
      customTemplates: {
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

  markdownAST.children.forEach((currentMarkdownNode) => {
    const { type } = currentMarkdownNode;
    if (!isLinkReference(currentMarkdownNode)) return;
    const { label } = currentMarkdownNode;
    if (!label) return;
    const [shortCodeType, fname] = label.split(":");
    if (!isCodeOrDemo(shortCodeType)) return;
    const { fileAbsolutePath } = markdownNode;
    const absoluteDir = dirname(fileAbsolutePath);
    const fullFname = resolve(absoluteDir, fname);
    console.log(fullFname);

    switch (shortCodeType) {
      case "code":
        {
          const source = readFileSync(fullFname, { encoding: "utf-8" });
          const formattedSource = prettier.format(
            `// ${basename(fullFname)}\n\n${source}`,
            {
              jsxBracketSameLine: false,
              singleQuote: true,
              tabWidth: 2,
              trailingComma: "es5",
              semi: false,
              printWidth: 80,
              proseWrap: "always",
            }
          );
          // Typescript kung fu to convert to a Code node
          ((node: Code) => {
            node.type = "code";
            node.lang = "typescript";
            node.meta = null;
            node.value = formattedSource;
          })(currentMarkdownNode as unknown as Code);
        }
        break;
      case "demo":
        {
          const [moduleName, ext] = fname.split(".");
          const importSymbol = `Component_${moduleName}`;
          if (!seen[moduleName]) {
            markdownAST.children.unshift({
              type: "import",
              value: `import ${importSymbol} from './${moduleName}'`,
            });
            seen[moduleName] = true;
            console.log(JSON.stringify(markdownAST.children, null, 2));
          }
          ((node: Jsx) => {
            node.type = "jsx";
            node.value = `
              <div style={${JSON.stringify(_options.development.style)}}>
                <${importSymbol}/>
              </ReactDemo>
            `;
          })(currentMarkdownNode as unknown as Jsx);
        }
        break;
    }
  });

  // console.log(JSON.stringify(markdownAST, null, 2))
  return markdownAST;
};

export default plugin;
