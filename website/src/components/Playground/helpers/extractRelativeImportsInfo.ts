// Matches relative imports and captures both full path and filename
const relativeImportRegex =
  /(?:import\s+(?:(?:\*\s+as\s+\w+|[\w\s{},]+)\s+from\s+)?|import\s*\()\s*['"](\.[^'"]+)['"](?:\s*[);])?/g

// Helper function to extract file info from imports
export function extractRelativeImportsInfo(codeString: string) {
  const imports = []
  const regex = new RegExp(relativeImportRegex)
  let match

  while ((match = regex.exec(codeString)) !== null) {
    const [importStatement, importPath] = match

    const fileName = importPath.split(/[/\\]/).pop() // Get last segment

    imports.push({
      fileName,
      importPath,
      importStatement,
    })
  }

  return imports
}
