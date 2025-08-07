import WaveSurferEventEmitter from "wavesurfer.js/dist/event-emitter.js";
// type SignalEvents = {
//   "signal-event-1": [{ arg1: number }];
// };
// type AudioEditorEvents = {
//   "audio-editor-event-1": [{ arg1: string }];
// };
// type Events = SignalEvents & AudioEditorEvents; //TODO:

interface IEvent {
  id: number,
  type: "channel" | string,
  subtype: string,
  tick: number,
  
  text?: string,

  noteNumber?: number;
  velocity?: number;
  duration?: number;
}
interface ISerializedTrack {
  id: number;
  endOfTrack: number;
  channel?: number;
  _events: {
    array: Array<IEvent>;
    descending: boolean;
    // lookupMap: duplicates array. do not use.
    lastEventId: number
  }

}
export interface ISerializedSong {
  tracks: Array<ISerializedTrack>
}


export interface MidiSegmentApi {
  setSerializedSong: (serializedSong: ISerializedSong) => void;
  setSerializedSongDebounced: (serializedSong: ISerializedSong) => void;
}

type Events = {
  "midi-segment-api-ready": [{midiSegmentApi: MidiSegmentApi}];

}
export type ConnectorEventEmitter = WaveSurferEventEmitter<Events>;
// const eventEmitter: EventEmitter<Events> = new EventEmitter();