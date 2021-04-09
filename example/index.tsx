import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  IosSwitch,
  MacOsSwitch,
  WindowsPhoneSwitch,
  useSwitch,
  MaterialSwitch,
} from '../.'

const App = () => {
  const [on, { toggle }] = useSwitch()
  const props = {
    onChange: toggle,
    on,
    size: 'small',
  }

  return (
    <div
      style={{
        display: 'grid',
        gridAutoFlow: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        gridAutoColumns: 'min-content',
        columnGap: 20,
      }}
    >
      <MacOsSwitch {...props} />
      <IosSwitch {...props} />
      <MaterialSwitch {...props} />
      <WindowsPhoneSwitch {...props} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
