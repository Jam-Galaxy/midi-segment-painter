// import { useConductorTrack } from "../hooks/useConductorTrack";
// import { usePlayer } from "../hooks/usePlayer";

import { useState } from "react";
import { ISerializedSong } from "./serializer/ISerializedSong";
import Song from "@/signalFamilyCommon/song/Song";
import { testSerializedSong1 } from "../data/testData";
import { deserialize } from "./serializer";
import { domainToView } from "../view/DomainToViewSongMapper";
import { IViewSong } from "../view/IViewSong";
import { useSongContext } from "../hooks/useSong";
// import { debounce } from "@/utils/miscellaneous";
import { debounce } from "lodash";
import { DEBOUNCE_DELAY } from "@/data/config";

export interface ConnectorEventEmitter {
  test: string
}

export interface MidiSegmentApi {
  setSerializedSong: (serializedSong: ISerializedSong) => void;
  setSerializedSongDebounced: (serializedSong: ISerializedSong) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
}

export function useCreateSignalApi(): MidiSegmentApi {
  const {setSong, setWidth, setHeight} = useSongContext();

  const setSerializedSong = (serializedSong: ISerializedSong) => {
    console.log("setSerializedSongHelper: serializedSong=", serializedSong);
    // serializedSong = testSerializedSong1; //TODO: remove
    const song = deserialize(serializedSong);
    
    const viewSongFromMapper: IViewSong = domainToView(song);
    
    setSong(viewSongFromMapper);    
  }
  const setSerializedSongDebounced = debounce(setSerializedSong, DEBOUNCE_DELAY);

  return {
    setSerializedSong,
    setSerializedSongDebounced,
    setWidth,
    setHeight
  }
}
