import { mat4 } from "gl-matrix";

import { GLCanvas, Transform } from "@ryohey/webgl-react"
import { useCallback, useEffect, useMemo } from "react";
import type { FC, MouseEventHandler } from "react"; 
import { matrixFromTranslation } from "@/signalFamilyCommon/helpers/matrix";

import { Lines } from "./Lines"
import { Notes } from "./Notes"
import { IViewSong } from "@/VisualMidiSegment/view/IViewSong";

export const PianoRollCanvas: FC<{ width: number; height: number; song: IViewSong | null }> = ({ width, height, song }) => {
  // const { setCanvasWidth } = useTickScroll()
  // const { setCanvasHeight } = useKeyScroll()

  // useEffect(() => { //TODO:
  //   setCanvasWidth(width)
  // }, [width])

  // useEffect(() => {
  //   setCanvasHeight(height)
  // }, [height])

  const scrollXYMatrix = mat4.create();

  // console.log("scrollXYMatrix=", scrollXYMatrix);
  return (
    <>
      <GLCanvas
        width={width}
        height={height}
        style={{
          border: "1px solid red",
          // background: theme.pianoWhiteKeyLaneColor,
          // background: "green"
        }}
      >
        {/* <Transform matrix={scrollYMatrix}> */}
          <Lines zIndex={0} />
        {/* </Transform> */}
        { song && <Transform matrix={scrollXYMatrix}>
          <Notes song={song} zIndex={3}  />
        </Transform> }
      </GLCanvas>
    </>
  )
}
