import WaveSurferEventEmitter from "wavesurfer.js/dist/event-emitter.js";
import { MidiSegmentApi } from "./connectorInterfaces";
// type SignalEvents = {
//   "signal-event-1": [{ arg1: number }];
// };
// type AudioEditorEvents = {
//   "audio-editor-event-1": [{ arg1: string }];
// };
// type Events = SignalEvents & AudioEditorEvents; //TODO:

type Events = {
  "midi-segment-api-ready": [{midiSegmentApi: MidiSegmentApi}];

}
export type ConnectorEventEmitter = WaveSurferEventEmitter<Events>;
// const eventEmitter: EventEmitter<Events> = new EventEmitter();