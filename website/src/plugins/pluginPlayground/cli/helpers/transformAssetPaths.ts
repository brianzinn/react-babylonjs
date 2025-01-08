const PREFIX =
  'https://raw.githubusercontent.com/brianzinn/react-babylonjs/refs/heads/master/packages/static/static'

// Claude made this up :)
/**
 * Replaces `/assets/` with a PREFIX.
 * This is to make assets available remotely (in Sandbox)
 */
export function transformAssetPaths(input: string) {
  // Matches paths starting with /assets/ in various contexts
  // Captures the quotes/backticks and the path separately
  const assetPathRegex = /(['"`])(\/assets\/[^'"`\s)}\]>]+)(['"`])/g

  // Replace each match, preserving the original quotes
  return input.replace(assetPathRegex, (match, openQuote, path, closeQuote) => {
    return `${openQuote}${PREFIX}${path}${closeQuote}`
  })
}
