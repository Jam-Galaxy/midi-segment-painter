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
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
}