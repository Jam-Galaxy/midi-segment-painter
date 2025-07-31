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
import { domainToViewSongTest } from "../DomainToViewSongTest"
// import { LegacyNotes } from "./lagacy/LegacyNotes"

export interface NotesProps {
  zIndex: number
}

export const Notes: FC<NotesProps> = (props) => {
  return <GLFallback component={_Notes} fallback={_Notes} {...props} />
}

const _Notes: FC<{ zIndex: number }> = ({ zIndex }) => {


  const notes = domainToViewSongTest();

  // const { notes, selectedTrackId } = usePianoRoll();

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
