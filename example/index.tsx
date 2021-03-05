import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { IosToggle, MacOsToggle, WindowsPhone, useToggle } from '../.'

const App = () => {
  const [value, { toggle }] = useToggle()
  const verticalDivider = <div style={{ display: 'inline-flex', width: 20 }} />

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <MacOsToggle onChange={toggle} value={value} />
      {verticalDivider}
      <IosToggle onChange={toggle} value={value} />
      {verticalDivider}
      <WindowsPhone onChange={toggle} value={value} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
