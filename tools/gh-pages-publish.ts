const { cd, exec, echo, touch } = require("shelljs")
const { readFileSync } = require("fs")
const url = require("url")

let repoUrl
let pkg = JSON.parse(readFileSync("package.json") as any)

if (typeof pkg.repository === "object") {
  if (!pkg.repository.hasOwnProperty("url")) {
    throw new Error("URL does not exist in repository section")
  }
  repoUrl = pkg.repository.url
} else {
  repoUrl = pkg.repository
}

let parsedUrl = url.parse(repoUrl)
let repository = (parsedUrl.host || "") + (parsedUrl.path || "")
let ghToken = process.env.GH_TOKEN

if (ghToken === undefined || ghToken === '') {
  throw new Error("set/export GH_TOKEN before deploying...  :)");
}

/**
 * OOM exception occurs with node < v12!!!
 */
let cwdStorybookStatic = false;
try {
  const cdShellString = cd("storybook-static");

  cwdStorybookStatic = (cdShellString.code === 0);
  if (!cwdStorybookStatic) {
    throw new Error("run 'build-storybook' before publishing.");
  }

  echo("Deploying docs!!!")
  touch(".nojekyll")
  exec("git init")
  exec("git add .")
  exec('git config user.name "Brian Zinn"')
  exec('git config user.email "github@wakeskate.com"')
  exec('git commit -m "docs(docs): update gh-pages"')
  exec(
    `git push --force --quiet "https://${ghToken}@${repository}" master:gh-pages`
  )
  echo("Docs deployed!!")
  
} finally {
  if (cwdStorybookStatic) {
    cd(".."); // restore cwd
  }
}
