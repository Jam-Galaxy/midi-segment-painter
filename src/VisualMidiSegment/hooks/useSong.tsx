import { createContext, useContext, useState } from "react";
import Song from "@/signalFamilyCommon/song/Song";
import { IViewSong } from "../view/IViewSong";
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from "@/data/config";
import { IViewSegment } from "../view/IViewSegment";

type SongContextType = {
  song: IViewSong | null;
  setSong: (song: IViewSong) => void;
  segment: IViewSegment | null;
  setSegment: (segment: IViewSegment) => void;
  width: number;
  setWidth: (width: number) => void;
  height: number;
  setHeight: (height: number) => void;
}

const SongContext = createContext<SongContextType>(null!);

export function SongProvider({ children }: { children: React.ReactNode }) {
  const [song, setSong] = useState<IViewSong | null>(null);
  const [segment, setSegment] = useState<IViewSegment | null>(null);
  const [width, setWidth] = useState<number>(DEFAULT_WIDTH);
  const [height, setHeight] = useState<number>(DEFAULT_HEIGHT);
  return (
    <SongContext.Provider value={{song, setSong, segment, setSegment, width, setWidth, height, setHeight }}>
      {children}
    </SongContext.Provider>
  );
}

export function useSongContext() {
  const song = useContext(SongContext);
  return song;
}