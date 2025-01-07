export const _skipForTesting = (path?: string) => {
  return false
  // return path ? ['physics'].every((part) => !path.includes(part)) : false
}
