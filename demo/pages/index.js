import React, { useEffect, useState } from 'react'
import {
  IosSwitch,
  MacOsSwitch,
  MaterialSwitch,
  useSwitch,
  WindowsPhoneSwitch,
} from 'react-styled-switch'
import GlobalSwitch from './GlobalSwitch'
import { version } from '../package.json'

export default function Home() {
  const [on, { toggle }] = useSwitch()
  const props = {
    onChange: toggle,
    on,
  }

  return (
    <div className="container max-w-5xl mx-auto p-12">
      <h1 className="text-3xl font-semibold mb-12">
        react-styled-switch
        <span className="text-gray-300">@{version}</span>
      </h1>

      <div className="flex items-center mb-4 justify-between">
        <h3 className="text-gray-400 text-xl font-semibold">Switch Styles</h3>

        <GlobalSwitch {...props} />
      </div>

      <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2">
        <SwitchStyle name="iOS" handleGlobalSwitch={on}>
          <IosSwitch />
        </SwitchStyle>

        <SwitchStyle name="Material" handleGlobalSwitch={on}>
          <MaterialSwitch />
        </SwitchStyle>

        <SwitchStyle name="Windows Phone 7" handleGlobalSwitch={on}>
          <WindowsPhoneSwitch />
        </SwitchStyle>

        <SwitchStyle name="macOS" handleGlobalSwitch={on}>
          <MacOsSwitch />
        </SwitchStyle>
      </div>

      <CustomSwitch {...props} />
    </div>
  )
}

function CustomSwitch(props) {
  return (
    <div className="flex content-center flex-col my-12 justify-between">
      <h3 className="text-gray-400 mb-4 text-xl font-semibold">
        Custom Switch
      </h3>
      <div className="bg-gray-100 grid gap-10 lg:grid-cols-2 md:grid-cols-2 rounded-xl">
        <div className=" rounded-xl p-6">
          <div className="bg-white h-full shadow-sm rounded-xl flex items-center justify-center p-6">
            <GlobalSwitch {...props} />
          </div>
        </div>
        <div className="my-4">
          <h3 className="text-l font-semibold pt-2 text-gray-500">Props</h3>
          <label className="text-gray-500 block my-1">
            <label className="text-gray-500 block my-1">
              <span class="font-mono font-medium w-48 inline-block">on</span>
              <input
                class="form-input border-gray-200 rounded mt-1 shadow-sm p-2 w-28"
                type="number"
              />
            </label>

            <span class="font-mono font-medium w-48 inline-block">
              animationDuration
            </span>
            <input
              class="form-input border-gray-200 rounded mt-1 shadow-sm p-2 w-28"
              type="number"
            />
          </label>

          <label className="text-gray-500 block my-1">
            <span class="font-mono font-medium w-48 inline-block">
              endAnimationX
            </span>
            <input
              class="form-input border-gray-200 rounded mt-1 shadow-sm p-2 w-28"
              type="number"
            />
          </label>

          <label className="text-gray-500 block my-1">
            <span class="font-mono font-medium w-48 inline-block">
              trackCss
            </span>
            <input
              class="form-input border-gray-200 rounded mt-1 shadow-sm p-2 w-28"
              type="number"
            />
          </label>

          <label className="text-gray-500 block my-1">
            <span class="font-mono font-medium w-48 inline-block">
              thumbCss
            </span>
            <input
              class="form-input border-gray-200 rounded mt-1 shadow-sm p-2 w-28"
              type="number"
            />
          </label>

          {/*   
              trackCss?: string
              thumbCss?: string

              trackClassName?: string
              thumbClassName?: string

              enableLabels?: boolean
              onLabelText?: string
              offLabelText?: string

              labelsWrapperCss?: string
              labelsWrapperClassName?: string

              onLabelCss?: string
              offLabelCss?: string
              onLabelClassName?: string
              offLabelClassName?: string

              animationDuration?: number
              animationType?: 'spring' // @todo: Offer more types

              startAnimationX?: number
              endAnimationX?: number
          */}
        </div>
      </div>
    </div>
  )
}

function SwitchStyle({ name, handleGlobalSwitch, children }) {
  const [on, { toggle, setOn, setOff }] = useSwitch()
  const [size, setSize] = useState('medium')
  const props = {
    onChange: toggle,
    on,
    size,
  }

  useEffect(() => {
    handleGlobalSwitch ? setOn() : setOff()
  }, [handleGlobalSwitch])

  return (
    <div className="bg-gray-100 rounded-xl p-6">
      <h2 className="font-bold text-2xl text-gray-500 mb-4">{name}</h2>
      <div className="bg-white h-20 shadow-sm rounded-xl flex items-center justify-center p-6">
        {React.cloneElement(children, { ...props })}
      </div>

      <div className="my-4">
        <h3 className="text-l font-semibold pt-2 text-gray-500">Props</h3>
        <label className="text-gray-500 block my-1">
          <span className="font-mono font-medium w-16 inline-block">on</span>
          <select
            className="form-select border-gray-200 rounded mt-1 shadow-sm"
            value={String(on)}
            onChange={toggle}
          >
            <option value="true">true</option>
            <option value="false">false</option>
          </select>
        </label>

        <label className="text-gray-500 block my-1">
          <span class="font-mono font-medium w-16 inline-block">size</span>
          <select
            className="form-select border-gray-200 rounded mt-1 shadow-sm"
            onChange={e => setSize(e.target.value)}
            value={size}
          >
            <option value="small">small</option>
            <option value="medium">medium</option>
            <option value="large">large</option>
          </select>
        </label>
      </div>
    </div>
  )
}
