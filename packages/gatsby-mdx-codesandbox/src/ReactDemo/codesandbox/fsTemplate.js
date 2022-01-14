const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const readdir = require("recursive-readdir");
// un-documented APIs, we lock the version in package.json to prevent breaks
const {
  getMainFile,
  getTemplate,
} = require("codesandbox-import-utils/lib/create-sandbox/templates");

const readFile = promisify(fs.readFile);

async function fsTemplate(directoryPath, rootPath) {
  let absDirectoryPath;

  if (path.isAbsolute(directoryPath)) {
    absDirectoryPath = directoryPath;
  } else if (!rootPath) {
    throw new Error(
      "No rootPath provided, are you running on a non-remark environment?"
    );
  } else {
    absDirectoryPath = path.resolve(rootPath, directoryPath);
  }

  const filePaths = await readdir(absDirectoryPath, [
    ".gitignore",
    "*.log",
    ".DS_Store",
    "node_modules",
    "package-lock.json",
    "yarn.lock",
    ".yarn",
    ".pnp.js",
    ".cache",
  ]);

  const files = {};

  for (const filePath of filePaths) {
    const relativePath = path.relative(absDirectoryPath, filePath);
    // CodeSandbox expects posix path
    const posixRelativePath = toPosixPath(relativePath);

    files[posixRelativePath] = {
      content: await readFile(filePath, "utf8"),
    };
  }

  if (!files["package.json"]) {
    throw new Error(
      'No "package.json" found, it\'s required to be used with file templates.'
    );
  }

  const packageJSON = JSON.parse(files["package.json"].content);

  const templateName = getTemplate(packageJSON, files);
  const entry = getMainFile(templateName);

  return {
    files,
    entry,
    title: path.basename(absDirectoryPath),
  };
}

function toPosixPath(pathString) {
  return pathString.split(path.sep).join(path.posix.sep);
}

module.exports = fsTemplate;
