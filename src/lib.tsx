import { createRoot } from 'react-dom/client'
import App from './App'
import type { EventEmitter } from '@/VisualMidiSegment/studioConnector/EventEmitter';

export function start(elementRef: HTMLElement, eventEmitter: EventEmitter) {
  createRoot(elementRef).render(<App eventEmitter={eventEmitter}/>)
}


