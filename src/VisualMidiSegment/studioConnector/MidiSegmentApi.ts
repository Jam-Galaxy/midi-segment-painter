// import { useConductorTrack } from "../hooks/useConductorTrack";
// import { usePlayer } from "../hooks/usePlayer";

import { useEffect, useState } from "react";
import { ISerializedSong } from "./serializer/ISerializedSong";
import Song from "@/signalFamilyCommon/song/Song";
import { testSerializedSong1 } from "../data/testData";
import { deserialize } from "./serializer";
// import { domainToView } from "../view/DomainToViewSongMapper";
import { IViewSong } from "../view/IViewSong";
import { Transforms, useSongContext } from "../hooks/useSong";
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
  setSegment: (segment: IInputSegment) => void;
  setTransforms: (transforms: Transforms) => void; 
  setWidth: (width: number) => void;
  setHeight: (height: number) => void;
}

export function useCreateSignalApi(): MidiSegmentApi {
  const {
    inputSegment, setInputSegment,
    setViewSegment,
    setWidth,
    setHeight,
    transforms, setTransforms: setTransformsContext,
    noteCoordTransform,
  } = useSongContext();

  useEffect(() => {
    noteCoordTransform.keyTransform.segmentHeight = transforms.segmentHeight;
    noteCoordTransform.tickTransform.pixelsPerTick = transforms.pixelsPerTick; //TODO:
    if(!inputSegment) {
      return;
    }
    const viewSegment: IViewSegment = inputToViewSegment(inputSegment, noteCoordTransform);
    setViewSegment(viewSegment);
  }, [transforms, inputSegment]);

  const setSerializedSong = (serializedSong: ISerializedSong) => {
    // console.log("setSerializedSongHelper: serializedSong=", serializedSong);
    // serializedSong = testSerializedSong1; //TODO: remove
    const song = deserialize(serializedSong);
    
    // const viewSongFromMapper: IViewSong = domainToView(song);
    
    // setSong(viewSongFromMapper);   

  }
  const setSerializedSongDebounced = debounce(setSerializedSong, DEBOUNCE_DELAY);

  const setSegment = (segment: IInputSegment) => {
    setInputSegment(segment);
    
    // setSegmentContext(viewSegment);
  }
  const setTransforms = (inputTransforms: Partial<Transforms>) => {
    // console.log("api: setTransforms: inputTransforms=", inputTransforms, "transforms=", transforms);
    // const newTransforms = {
    //   ...transforms,
    //   ...inputTransforms,
    // }
    
    setTransformsContext((previous: Transforms) => {
      const next: Transforms = {
        ...previous,
        ...inputTransforms
      }
      return next;
    });
  }

  return {
    setSerializedSong,
    setSerializedSongDebounced,
    setSegment,
    setTransforms,
    setWidth,
    setHeight
  }
}
