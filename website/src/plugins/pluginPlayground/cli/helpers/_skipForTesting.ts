export const _skipForTesting = (path?: string) => {
  // return false
  return path ? ['playground'].every((part) => !path.includes(part)) : false
}
