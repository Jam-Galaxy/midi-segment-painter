import { GLNode, useProjectionMatrix } from "@ryohey/webgl-react"
import { vec4 } from "gl-matrix"
import type { FC } from "react"
import type { Rect } from "../entities/geometry/Rect"
import { NoteShader } from "./shaders/NoteShader"
import type { INoteData } from "./shaders/NoteShader"

export interface NoteRectanglesProps {
  rects: (Rect & INoteData)[]
  strokeColor: vec4
  inactiveColor: vec4
  activeColor: vec4
  selectedColor: vec4
  zIndex?: number
}

export const NoteRectangles: FC<NoteRectanglesProps> = ({
  rects,
  strokeColor,
  inactiveColor,
  activeColor,
  selectedColor,
  zIndex,
}) => {
  const projectionMatrix = useProjectionMatrix()

  return (
    <GLNode
      shader={NoteShader}
      uniforms={{
        projectionMatrix,
        strokeColor,
        selectedColor,
        inactiveColor,
        activeColor,
      }}
      buffer={rects}
      zIndex={zIndex}
    />
  )
}
