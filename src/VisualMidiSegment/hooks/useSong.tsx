import { createContext, useContext, useState } from "react";
import Song from "@/signalFamilyCommon/song/Song";
import { IViewSong } from "../view/IViewSong";

type SongContextType = {
  song: IViewSong | null,
  setSong: (song: IViewSong) => void
}

const SongContext = createContext<SongContextType>(null!);

export function SongProvider({ children }: { children: React.ReactNode }) {
  const [song, setSong] = useState<IViewSong | null>(null);
  return (
    <SongContext.Provider value={{song, setSong}}>
      {children}
    </SongContext.Provider>
  );
}

export function useSongContext() {
  const song = useContext(SongContext);
  return song;
}