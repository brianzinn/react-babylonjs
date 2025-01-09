const PREFIX =
  'https://raw.githubusercontent.com/brianzinn/react-babylonjs/refs/heads/master/website/docs/public'

/**
 * Replace local paths for `/assets/` with remote ones.
 * This is to make assets available in Sandbox
 */
export function transformAssetPaths(input: string) {
  // Claude made this up :)
  // Matches paths starting with /assets/ in various contexts
  // Captures the quotes/backticks and the path separately
  const assetPathRegex = /(['"`])(\/assets\/[^'"`\s)}\]>]+)(['"`])/g

  // Replace each match, preserving the original quotes
  return input.replace(assetPathRegex, (match, openQuote, path, closeQuote) => {
    return `${openQuote}${PREFIX}${path}${closeQuote}`
  })
}
