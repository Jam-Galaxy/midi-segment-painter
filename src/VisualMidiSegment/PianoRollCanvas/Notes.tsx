import { GLFallback } from "@ryohey/webgl-react"
import type { FC } from "react"
// import { useNoteColor } from "../../../hooks/useNoteColor"
// import { usePianoRoll } from "../../../hooks/usePianoRoll"
// import { useTrack } from "../../../hooks/useTrack"
import { NoteCircles } from "./NoteCircles"
import { NoteRectangles } from "./NoteRectangles"
import { colorToVec4 } from "../gl/color"
import Color from "color"
import type { Rect } from "../entities/geometry/IRect"
import type { INoteData } from "./shaders/NoteShader"
import type { PianoNoteItem } from "../extras/types"
// import { LegacyNotes } from "./lagacy/LegacyNotes"

export interface NotesProps {
  zIndex: number
}

export const Notes: FC<NotesProps> = (props) => {
  return <GLFallback component={_Notes} fallback={_Notes} {...props} />
}

const _Notes: FC<{ zIndex: number }> = ({ zIndex }) => {
  // const { notes, selectedTrackId } = usePianoRoll();
  const notes: Array<PianoNoteItem> = [
    {
        "x": 0,
        "y": 0,
        "width": 24,
        "height": 12,
        "id": 20,
        "velocity": 100,
        "isSelected": false
    },
    {
        "x": 12,
        "y": 15,
        "width": 24,
        "height": 12,
        "id": 19,
        "velocity": 100,
        "isSelected": false
    },
    {
        "x": 600,
        "y": 744,
        "width": 24,
        "height": 12,
        "id": 18,
        "velocity": 100,
        "isSelected": false
    },
    {
        "x": 840,
        "y": 948,
        "width": 24,
        "height": 12,
        "id": 21,
        "velocity": 100,
        "isSelected": false
    },
    {
        "x": 864,
        "y": 816,
        "width": 24,
        "height": 12,
        "id": 22,
        "velocity": 100,
        "isSelected": true
    }
];
  const selectedTrackId = 0;
  // const { isRhythmTrack } = useTrack(selectedTrackId)
  const isRhythmTrack = false; //TODO: receive from connector
  // const { borderColor, inactiveColor, activeColor, selectedColor } = useNoteColor()
  const testColor = colorToVec4(new Color("hsl(230, 70%, 55%)"));
  const borderColor= testColor, inactiveColor = testColor, activeColor= testColor, selectedColor= testColor;

  console.log("Notes: notes=", notes);

  return (
    <>
      {isRhythmTrack && ( 
        <NoteCircles
          strokeColor={borderColor}
          rects={notes}
          inactiveColor={inactiveColor}
          activeColor={activeColor}
          selectedColor={selectedColor}
          zIndex={zIndex}
        />
      )}
      {!isRhythmTrack && (
        <NoteRectangles
          strokeColor={borderColor}
          inactiveColor={inactiveColor}
          activeColor={activeColor}
          selectedColor={selectedColor}
          rects={notes}
          zIndex={zIndex + 0.1}
        />
      )}
    </>
  )
}
