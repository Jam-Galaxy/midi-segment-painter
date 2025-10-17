import { FC, useEffect } from "react";
import { useCreateSignalApi } from "./MidiSegmentApi";
import { useEventEmitter } from "./useEventEmitter";

export const StudioConnector: FC = () => {
  const eventEmitter = useEventEmitter();
  const midiSegmentApi = useCreateSignalApi();

  useEffect(() => {
    // console.log("StudioConnector: useEffect: eventEmitter=", eventEmitter, "midiSegmentApi=", midiSegmentApi);
    eventEmitter['emit']("midi-segment-api-ready", {midiSegmentApi});
  }, []);
  return <></>
}