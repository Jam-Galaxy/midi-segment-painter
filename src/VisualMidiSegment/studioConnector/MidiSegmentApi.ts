// import { useConductorTrack } from "../hooks/useConductorTrack";
// import { usePlayer } from "../hooks/usePlayer";

import { useState } from "react";
import { ISerializedSong } from "./serializer/ISerializedSong";
import Song from "@/signalFamilyCommon/song/Song";
import { testSerializedSong1 } from "../data/testData";
import { deserialize } from "./serializer";
// import { domainToView } from "../view/DomainToViewSongMapper";
import { IViewSong } from "../view/IViewSong";
import { useSongContext } from "../hooks/useSong";
// import { debounce } from "@/utils/miscellaneous";
import { debounce } from "lodash";
import { DEBOUNCE_DELAY } from "@/data/config";
import { IViewSegment } from "../view/IViewSegment";
import { inputToViewSegment } from "../view/InputToViewSegmentMapper";
import { IInputSegment, IInputTransformProperties } from "./IInputSegment";

export interface ConnectorEventEmitter {
  test: string
}

export interface MidiSegmentApi {
  setSerializedSong: (serializedSong: ISerializedSong) => void;
  setSerializedSongDebounced: (serializedSong: ISerializedSong) => void;
  setSegment: (segment: IInputSegment, transformProperties: IInputTransformProperties) => void;
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
}

export function useCreateSignalApi(): MidiSegmentApi {
  const {setSong, setWidth, setHeight, setSegment: setSegmentContext} = useSongContext();

  const setSerializedSong = (serializedSong: ISerializedSong) => {
    console.log("setSerializedSongHelper: serializedSong=", serializedSong);
    // serializedSong = testSerializedSong1; //TODO: remove
    const song = deserialize(serializedSong);
    
    // const viewSongFromMapper: IViewSong = domainToView(song);
    
    // setSong(viewSongFromMapper);    

  }
  const setSerializedSongDebounced = debounce(setSerializedSong, DEBOUNCE_DELAY);

  const setSegment = (segment: IInputSegment, transformProperties: IInputTransformProperties) => {
    const viewSegment: IViewSegment = inputToViewSegment(segment, transformProperties);
    setSegmentContext(viewSegment);
  }

  return {
    setSerializedSong,
    setSerializedSongDebounced,
    setSegment,
    setWidth,
    setHeight
  }
}
