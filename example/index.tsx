import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Toggle from '../.'

const App = () => {
  return <Toggle />
}

ReactDOM.render(<App />, document.getElementById('root'))
