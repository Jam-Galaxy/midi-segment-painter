import React from 'react';

import type { EventEmitter } from '@/VisualMidiSegment/studioConnector/EventEmitter';
import { EventEmitterProvider } from '@/VisualMidiSegment/studioConnector/useEventEmitter';
import { VisualMidiSegment } from './VisualMidiSegment/components/VisualMidiSegment';
import { StudioConnector } from "@/VisualMidiSegment/studioConnector/StudioConnector";
import { SongProvider } from './VisualMidiSegment/hooks/useSong';

function App({eventEmitter}: {eventEmitter: EventEmitter}) {
  return (
    <>
      <React.StrictMode>
          <EventEmitterProvider value={eventEmitter}>
            <SongProvider>
              <StudioConnector />
              <VisualMidiSegment />
            </SongProvider>
          </EventEmitterProvider>
      </React.StrictMode>
    </>
  )
}

export default App
