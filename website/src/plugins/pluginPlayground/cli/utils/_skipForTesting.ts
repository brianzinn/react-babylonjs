export const _skipForTesting = (path?: string) => {
  return false
  // return ['physics', 'toggle-mesh'].every((part) => !path.includes(part))
}
