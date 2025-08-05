
import { createRoot } from 'react-dom/client'
import App from './App'
import type { EventEmitter } from './signalFamilyCommon/studioConnector/EventEmitter.ts'

createRoot(document.getElementById('root')!).render(<App eventEmitter={null as unknown as EventEmitter}/>)
