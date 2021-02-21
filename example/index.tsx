import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import IosToggle from '../.'

const App = () => {
  const [on, setOn] = React.useState(false)
  return (
    <IosToggle
      onChange={() => {
        setOn(!on)
      }}
      value={on}
    />
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
