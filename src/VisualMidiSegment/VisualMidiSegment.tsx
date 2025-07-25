import type { FC } from "react";
import { PianoRollCanvas } from "./PianoRollCanvas/PianoRollCanvas";

export const VisualMidiSegment: FC<object> = () => {
return ( 
<>
  <PianoRollCanvas width={100} height={50} />
</>
)
}
