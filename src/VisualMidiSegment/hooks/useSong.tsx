import { createContext, useContext, useState } from "react";
import Song from "@/signalFamilyCommon/song/Song";
import { IViewSong } from "../view/IViewSong";
import { DEFAULT_HEIGHT, DEFAULT_TRANSFORMS, DEFAULT_WIDTH } from "@/data/config";
import { IViewSegment } from "../view/IViewSegment";
import { IInputSegment } from "../studioConnector/IInputSegment";
import { NoteCoordTransform } from "@/signalFamilyCommon/entities/transform/NoteCoordTransform";
import { getTransform } from "../view/Transform";

export type Transforms = {
  pixelsPerTick: number;
  segmentHeight: number;
}

type SongContextType = {
  song: IViewSong | null;
  setSong: (song: IViewSong) => void;

  inputSegment: IInputSegment | null;
  setInputSegment: (segment: IInputSegment) => void;

  viewSegment: IViewSegment | null;
  setViewSegment: (segment: IViewSegment) => void;
  
  width: number;
  setWidth: (width: number) => void;
  height: number;
  setHeight: (height: number) => void;

  transforms: Transforms,
  setTransforms: React.Dispatch<React.SetStateAction<Transforms>>

  noteCoordTransform: NoteCoordTransform;
}

const SongContext = createContext<SongContextType>(null!);

export function SongProvider({ children }: { children: React.ReactNode }) {
  const [song, setSong] = useState<IViewSong | null>(null);

  const [inputSegment, setInputSegment] = useState<IInputSegment | null>(null);
  const [viewSegment, setViewSegment] = useState<IViewSegment | null>(null);

  const [width, setWidth] = useState<number>(DEFAULT_WIDTH);
  const [height, setHeight] = useState<number>(DEFAULT_HEIGHT);

  const [transforms, setTransforms] = useState<Transforms>(() => {return DEFAULT_TRANSFORMS});
  const [noteCoordTransform, ] = useState<NoteCoordTransform>(getTransform())
  return (
    <SongContext.Provider value={{
        song, setSong,
        inputSegment, setInputSegment,
        viewSegment, setViewSegment,
        width, setWidth,
        height, setHeight,
        transforms, setTransforms,
        noteCoordTransform,
      }}>
      {children}
    </SongContext.Provider>
  );
}

export function useSongContext() {
  const song = useContext(SongContext);
  return song;
}