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

export interface ConnectorEventEmitter {
  test: string
}

export interface MidiSegmentApi {
  setSerializedSong: (serializedSong: ISerializedSong) => void
}

export function useCreateSignalApi(): MidiSegmentApi {
  const {setSong} = useSongContext();

  const setSerializedSong = (serializedSong: ISerializedSong) => {
    console.log("setSerializedSongHelper: serializedSong=", serializedSong);
    // serializedSong = testSerializedSong1; //TODO: remove
    const song = deserialize(serializedSong);
    
    const viewSongFromMapper: IViewSong = domainToView(song);
    
    setSong(viewSongFromMapper);
  }

  return {
    setSerializedSong,
  }
}
