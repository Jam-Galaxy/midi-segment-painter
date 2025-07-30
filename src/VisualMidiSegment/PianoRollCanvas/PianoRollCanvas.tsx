/* Not used in this app */
// import { useTheme } from "@emotion/react" //INFO: theme will be from studio
// import { useContextMenu } from "../../../hooks/useContextMenu" //INFO: context menu will be from studio
/* /Not used in this app */

import { mat4 } from "gl-matrix";

import { GLCanvas, Transform } from "@ryohey/webgl-react"
import { useCallback, useEffect, useMemo } from "react";
import type { FC, MouseEventHandler } from "react"; 
import { matrixFromTranslation } from "../helpers/matrix";


// import { useKeyScroll } from "../../../hooks/useKeyScroll"
// import { usePianoRoll } from "../../../hooks/usePianoRoll"
// import { useRuler } from "../../../hooks/useRuler"
// import { useTickScroll } from "../../../hooks/useTickScroll"
// import { Beats } from "../../GLNodes/Beats"
// import { Cursor } from "../../GLNodes/Cursor"
// import { Selection } from "../../GLNodes/Selection"
// import { useNoteMouseGesture } from "../MouseHandler/useNoteMouseGesture"
// import { PianoRollStageProps } from "../PianoRollStage"
// import { PianoSelectionContextMenu } from "../PianoSelectionContextMenu"
import { Lines } from "./Lines"
import { Notes } from "./Notes"

export const PianoRollCanvas: FC<{ width: number, height: number }> = ({ width, height }) => {
  // const { notesCursor, selectionBounds, ghostTrackIds, mouseMode } = usePianoRoll()
  // const { beats } = useRuler()
  // const { cursorX, setCanvasWidth, scrollLeft } = useTickScroll()
  // const { scrollTop, setCanvasHeight } = useKeyScroll()

  // const mouseHandler = useNoteMouseGesture()

  // const { onContextMenu, menuProps } = useContextMenu();

  // const theme = useTheme()

  // const handleContextMenu: MouseEventHandler = useCallback(
  //   (e) => {
  //     // Ctrl + Click is used to copy the selected notes
  //     if (e.ctrlKey) {
  //       return
  //     }

  //     if (mouseMode === "selection") {
  //       e.stopPropagation()
  //       onContextMenu(e)
  //       return
  //     }
  //   },
  //   [mouseMode, onContextMenu],
  // )

  // useEffect(() => {
  //   setCanvasWidth(width)
  // }, [width])

  // useEffect(() => {
  //   setCanvasHeight(height)
  // }, [height])

  // const scrollXMatrix = useMemo(
  //   () => matrixFromTranslation(-scrollLeft, 0),
  //   [scrollLeft],
  // )

  // const scrollYMatrix = useMemo(
  //   () => matrixFromTranslation(0, -scrollTop),
  //   [scrollLeft, scrollTop],
  // )

  // const scrollXYMatrix = useMemo(
  //   () => matrixFromTranslation(-scrollLeft, -scrollTop),
  //   [scrollLeft, scrollTop],
  // )
  const scrollXYMatrix = mat4.create();

  // console.log("scrollXMatrix=", scrollXMatrix, "scrollYMatrix=", scrollYMatrix, "scrollXYMatrix=", scrollXYMatrix);
  return (
    <>
      <GLCanvas
        width={width}
        height={height}
        style={{
          border: "1px solid red"
          // cursor: notesCursor,
          // background: theme.pianoWhiteKeyLaneColor,
        }}
        // onContextMenu={handleContextMenu}
        // onMouseDown={mouseHandler.onMouseDown}
        // onMouseMove={mouseHandler.onMouseMove}
        // onMouseUp={mouseHandler.onMouseUp}
      >
        {/* <Transform matrix={scrollYMatrix}> */}
          <Lines zIndex={0} />
        {/* </Transform> */}
        {/* <Transform matrix={scrollXMatrix}> */}
          {/* <Beats height={height} beats={beats} zIndex={1} /> */}
          {/* <Cursor x={cursorX} height={height} zIndex={5} /> */}
        {/* </Transform> */}
        <Transform matrix={scrollXYMatrix}>
          {/* {ghostTrackIds.map((trackId) => (
            <GhostNotes key={trackId} trackId={trackId} zIndex={2} />
          ))} */}
          <Notes zIndex={3} />
          {/* <Selection rect={selectionBounds} zIndex={4} /> */}
        </Transform>
      </GLCanvas>
      {/* <PianoSelectionContextMenu {...menuProps} /> */}
    </>
  )
}
