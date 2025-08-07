import type { FC } from "react";
import { PianoRollCanvas } from "@/signalFamilyCommon/components/PianoRoll/PianoRollCanvas/PianoRollCanvas";
import { useSongContext } from "../hooks/useSong";
// import 

export const VisualMidiSegment: FC<object> = () => {
  const {song, width, height} = useSongContext();
  console.log("VisualMidiSegment: song=", song);
return ( 
<>
  <PianoRollCanvas width={width} height={height} song={song} />
</>
)
}
