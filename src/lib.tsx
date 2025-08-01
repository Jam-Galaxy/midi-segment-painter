import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

export function start(elementRef: HTMLElement, eventEmitter: ConnectorEventEmitter) {
  createRoot(elementRef).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}


