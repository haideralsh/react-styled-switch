import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { IosToggle, MacOsToggle, WindowsPhone, useToggle } from '../.'

const App = () => {
  const [value, { toggle }] = useToggle()

  return (
    <div
      style={{
        display: 'grid',
        gridAutoFlow: 'column',
        alignItems: 'center',
        justifyItems: 'center',
        gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
      }}
    >
      <MacOsToggle onChange={toggle} value={value} />
      <IosToggle onChange={toggle} value={value} />
      <WindowsPhone onChange={toggle} value={value} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
