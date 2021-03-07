import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  IosToggle,
  MacOsToggle,
  WindowsPhoneToggle,
  useToggle,
  MaterialToggle,
} from '../.'

const App = () => {
  const [value, { toggle }] = useToggle()
  const props = {
    onChange: toggle,
    value,
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
      <MacOsToggle {...props} />
      <IosToggle {...props} />
      <MaterialToggle {...props} />
      <WindowsPhoneToggle {...props} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
