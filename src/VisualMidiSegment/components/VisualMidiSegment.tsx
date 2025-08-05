import type { FC } from "react";
import { PianoRollCanvas } from "@/signalFamilyCommon/components/PianoRoll/PianoRollCanvas/PianoRollCanvas";
// import 

export const VisualMidiSegment: FC<object> = () => {
return ( 
<>
  <PianoRollCanvas width={5000} height={5000} />
</>
)
}
