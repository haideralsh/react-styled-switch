import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { MacOsToggle } from '../.'

const App = () => {
  const [on, setOn] = React.useState(false)
  return (
    <MacOsToggle
      onChange={() => {
        setOn(!on)
      }}
      value={on}
    />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
