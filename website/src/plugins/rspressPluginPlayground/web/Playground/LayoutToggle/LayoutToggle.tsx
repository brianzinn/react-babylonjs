import { PanelsLayout } from '../Playground/Playground'
import { ToggleButton } from './ToggleButton'
import styles from './LayoutToggle.module.css'

type LayoutToggleProps = {
  layout: PanelsLayout
  setLayout: (value: PanelsLayout) => void
}

export const LayoutToggle = (props: LayoutToggleProps) => {
  const { layout, setLayout } = props

  return (
    <div className={styles.wrapper}>
      <ToggleButton
        value={PanelsLayout.Preview}
        setLayout={setLayout}
        isActive={layout === PanelsLayout.Preview}
      />
      <ToggleButton
        value={PanelsLayout.Editor}
        setLayout={setLayout}
        isActive={layout === PanelsLayout.Editor}
      />
      <ToggleButton
        value={PanelsLayout.Split}
        setLayout={setLayout}
        isActive={layout === PanelsLayout.Split}
      />
    </div>
  )
}
