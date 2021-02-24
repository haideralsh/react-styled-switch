import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MacOsToggle, useToggle } from '../.'

const App = () => {
  const [value, { toggle }] = useToggle()

  return <MacOsToggle onChange={toggle} value={value} />
}

ReactDOM.render(<App />, document.getElementById('root'))
