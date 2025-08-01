import { createContext, useContext } from "react";
import type { EventEmitter } from "./EventEmitter";

const EventEmitterContext = createContext<EventEmitter>(null!);
export function EventEmitterProvider({ children, value}: { children: React.ReactNode; value: EventEmitter}) {
  return (
    <EventEmitterContext.Provider value={value}>
      {children}
    </EventEmitterContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useEventEmitter() {
  const eventEmitter = useContext(EventEmitterContext);
  return eventEmitter;
}