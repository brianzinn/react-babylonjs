import { useEffect } from 'react'
import type { PlaygroundProps } from '../../shared/types'
import { useFilesContext } from '../context/Files'
import { db } from '../db/db'
import { useSnippetId } from './location'
import { useResetSnippet } from './useResetSnippet'

export const useQuerySnippetOnce = (setLoading: (value: boolean) => void) => {
  const snippetId = useSnippetId()
  const resetSnippet = useResetSnippet()

  const handleReset = () => {
    resetSnippet()
    setLoading(false)
  }

  const { setFiles } = useFilesContext()

  useEffect(() => {
    if (!snippetId) return

    const query = {
      files: { $: { where: { snippetId } } },
    }

    setLoading(true)

    db.queryOnce(query)
      .then((response) => {
        const snippet = response.data.files[0]

        if (!snippet) {
          handleReset()
          return
        }

        const files = JSON.parse(snippet.filesJson) as PlaygroundProps['files']

        setFiles(files)
        setLoading(false)
      })
      .catch(() => {
        handleReset()
      })
  }, [])
}
