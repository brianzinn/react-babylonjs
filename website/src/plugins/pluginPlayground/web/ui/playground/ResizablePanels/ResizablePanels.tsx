import { useElementSize } from '@mantine/hooks'
import clsx from 'clsx'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { View } from '../../../constants'
import { useIsPlaygroundPage } from '../../../hooks/location'
import { useLocalStorageView } from '../../../hooks/useLocalStorageSettings'
import { EditorCodeMirror } from '../../editor/EditorCodeMirror/EditorCodeMirror'
import { EditorMonaco } from '../../editor/EditorMonaco/EditorMonaco'
import { FileTabs } from '../../editor/FileTabs/FileTabs'
import { Preview } from '../../preview/Preview/Preview'
import styles from './ResizablePanels.module.css'

const SMALL_THRESHOLD = 580

export const ResizablePanels = () => {
  const isPlaygroundPage = useIsPlaygroundPage()
  const wrapperSize = useElementSize()
  const isVertical = wrapperSize.width < SMALL_THRESHOLD

  const { view } = useLocalStorageView()

  const wrapperClass = clsx(styles.wrapper, {
    [styles.vertical]: isVertical,
    [styles.singlePanel]: view !== View.Split,
  })

  const getHiddenClass = (isHidden: boolean) => clsx({ [styles.hiddenPanel]: isHidden })

  return (
    <div className={wrapperClass} ref={wrapperSize.ref}>
      <PanelGroup
        style={{ flexDirection: isVertical ? 'column-reverse' : 'row' }}
        direction={isVertical ? 'vertical' : 'horizontal'}
        autoSaveId="react-babylonjs-playground"
      >
        <Panel
          id="editor"
          defaultSize={50}
          order={isVertical ? 1 : 0}
          className={getHiddenClass(view === View.Preview)}
        >
          <FileTabs />
          {isPlaygroundPage ? <EditorMonaco /> : <EditorCodeMirror />}
        </Panel>

        {view === View.Split && <PanelResizeHandle className={styles.resizeHandle} />}

        <Panel
          id="preview"
          defaultSize={50}
          order={isVertical ? 0 : 1}
          className={getHiddenClass(view === View.Code)}
        >
          <Preview />
        </Panel>
      </PanelGroup>
    </div>
  )
}
