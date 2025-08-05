import React from 'react'

import type { EventEmitter } from './signalFamilyCommon/studioConnector/EventEmitter'
import { EventEmitterProvider } from './signalFamilyCommon/studioConnector/useEventEmitter'
import { VisualMidiSegment } from './VisualMidiSegment/components/VisualMidiSegment'

function App({eventEmitter}: {eventEmitter: EventEmitter}) {
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
