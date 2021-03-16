import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import BaseToggle from '../src/BaseToggle'

describe('BaseToggle', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<BaseToggle />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('does not show labels when not passed `enableLabels` prop', () => {
    const { queryByText } = render(<BaseToggle />)

    expect(queryByText('on')).toBeNull()
    expect(queryByText('off')).toBeNull()
  })

  it('shows labels when passed `enableLabels` prop', () => {
    const { queryByText } = render(<BaseToggle enableLabels />)
    expect(queryByText('Off')).toBeInTheDocument()
    expect(queryByText('On')).toBeInTheDocument()
  })

  it('shows the `onLabel` prop value when passed an `onLabel` prop', () => {
    const onLabel = 'foo'
    const { queryByText } = render(
      <BaseToggle enableLabels onLabel={onLabel} value={true} />
    )

    expect(queryByText(onLabel)).toBeDefined()
  })

  it('shows the `offLabel` prop value when passed an `offLabel` prop', () => {
    const offLabel = 'foo'
    const { queryByText } = render(
      <BaseToggle enableLabels offLabel={offLabel} value={false} />
    )

    expect(queryByText(offLabel)).toBeDefined()
  })
})
