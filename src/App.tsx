// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import React from 'react'

import type { EventEmitter } from './signalFamilyCommon/studioConnector/EventEmitter'
import { EventEmitterProvider } from './signalFamilyCommon/studioConnector/useEventEmitter'
import { VisualMidiSegment } from './VisualMidiSegment/VisualMidiSegment'

function App({eventEmitter}: {eventEmitter: EventEmitter}) {
  // const [count, setCount] = useState(0)

  return (
    <>
      <React.StrictMode>
        <EventEmitterProvider value={eventEmitter}>
          <VisualMidiSegment />
        </EventEmitterProvider>
      </React.StrictMode>
    </>
  )
}

export default App
