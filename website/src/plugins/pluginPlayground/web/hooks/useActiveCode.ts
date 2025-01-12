import { useFiles } from './useCurrentFiles'

export const useActiveCode = () => {
  const { currentFiles, updateCurrentFiles, activeFile } = useFiles()

  return {
    code: currentFiles[activeFile],

    updateCode: (value: string) => {
      updateCurrentFiles({
        [activeFile]: value,
      })
    },
  }
}
