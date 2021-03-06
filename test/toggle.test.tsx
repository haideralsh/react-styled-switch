import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { IosToggle } from '../src'

// @todo: Add comprehensive behaviour tests
describe('IosToggle', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<IosToggle />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('can be toggled on', () => {
    const div = document.createElement('div')
    ReactDOM.render(<IosToggle value={true} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
