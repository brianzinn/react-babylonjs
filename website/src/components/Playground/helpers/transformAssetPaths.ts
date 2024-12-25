const PREFIX =
  'https://raw.githubusercontent.com/brianzinn/react-babylonjs/refs/heads/master/packages/static/static'
export function transformAssetPaths(input: string) {
  // Matches paths starting with /assets/ in various contexts
  // Captures the quotes/backticks and the path separately
  const assetPathRegex = /(['"`])(\/assets\/[^'"`\s)}\]>]+)(['"`])/g

  // Replace each match, preserving the original quotes
  return input.replace(assetPathRegex, (match, openQuote, path, closeQuote) => {
    return `${openQuote}${PREFIX}${path}${closeQuote}`
  })
}

// Test cases
const testCode = `
// Image tags
<img src="/assets/images/logo.png" alt="Logo">
<img src='/assets/images/hero/banner.jpg' />

// CSS backgrounds
.background { background-image: url("/assets/backgrounds/pattern.svg") }
.icon { background: url('/assets/icons/menu.svg') }

// JavaScript string literals
const imagePath = '/assets/uploads/user/profile.jpg';
const templateLiteral = \`/assets/docs/guide.pdf\`;

// JSON data
{
  "avatar": "/assets/avatars/default.png",
  "thumbnail": "/assets/thumbnails/video.jpg"
}

// Shouldn't transform:
"/assets" // incomplete
"/assets/" // no filename
"not/assets/file.jpg" // wrong prefix
"/assetsfolder/file.jpg" // wrong format
`

// Run test
// const transformed = transformAssetPaths(testCode)
// console.log('Original vs Transformed:')
// console.log('\nORIGINAL:\n', testCode)
// console.log('\nTRANSFORMED:\n', transformed)

// // Test with different prefix
// const customPrefix = transformAssetPaths(testCode)
// console.log('\nWITH CUSTOM PREFIX:\n', customPrefix)
