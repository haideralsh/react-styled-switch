import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import BaseToggle from '../.'

const App = () => {
  return <BaseToggle />
}

ReactDOM.render(<App />, document.getElementById('root'))
