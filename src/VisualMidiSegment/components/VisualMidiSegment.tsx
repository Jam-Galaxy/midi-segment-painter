import type { FC } from "react";
import { PianoRollCanvas } from "@/signalFamilyCommon/components/PianoRoll/PianoRollCanvas/PianoRollCanvas";
import { useSongContext } from "../hooks/useSong";
// import 

export const VisualMidiSegment: FC<object> = () => {
  const {song} = useSongContext();
  console.log("VisualMidiSegment: song=", song);
return ( 
<>
  {song? <PianoRollCanvas width={5000} height={5000} song={song} /> : null}
</>
)
}
