// import { useTheme } from "@emotion/react"
import { GLFallback } from "@ryohey/webgl-react"
import Color from "color"
import { useMemo } from "react";
import type { FC } from "react";
// import { Layout } from "../../../Constants"
import { KeySignature, keySignatureUtils } from "@/signalFamilyCommon/entities/scale/KeySignature"
import { colorToVec4 } from "@/signalFamilyCommon/gl/color"
// import { useKeyScroll } from "../../../hooks/useKeyScroll"
// import { usePianoRoll } from "../../../hooks/usePianoRoll"
// import { useTickScroll } from "../../../hooks/useTickScroll"
import { HorizontalGrid } from "./HorizontalGrid"
// import { LegacyLines } from "./lagacy/LegacyLines"

function keySignatureToConditions(keySignature: KeySignature) {
  const intervals = keySignatureUtils.getIntervals(keySignature)
  return new Array(12).fill(false).map((_, i) => intervals.includes(i % 12))
}

export interface LinesProps {
  zIndex: number
}

export const Lines: FC<LinesProps> = (props) => {
  // return <GLFallback component={_Lines} fallback={LegacyLines} {...props} />
  return <>Lines fallback</>
}

const theme = {
  pianoWhiteKeyLaneColor: "hsl(228, 10%, 16%)",
  pianoBlackKeyLaneColor: "hsl(228, 10%, 13%)",
  pianoHighlightedLaneColor: "hsl(230, 23%, 20%)",
  pianoLaneEdgeColor: "hsl(228, 10%, 18%)",
  editorGridColor: "hsl(224, 12%, 26%)"
}
const Layout = {
  keyHeight: 10,
}

const _Lines: FC<{ zIndex: number }> = ({ zIndex }) => {
  // const theme = useTheme()
  // const { keySignature } = usePianoRoll();
  const keySignature = null;
  // const { canvasWidth } = useTickScroll();
  const canvasWidth = 100;

  // const { scrollTop, canvasHeight, scaleY } = useKeyScroll()
  const scrollTop = 0;
  const canvasHeight = 50;
  const scaleY = 1;

  const laneColors = useMemo(() => {
    const whiteLaneColor = colorToVec4(
      Color(theme.pianoWhiteKeyLaneColor),
    ) as number[]

    const blackLaneColor = colorToVec4(
      Color(theme.pianoBlackKeyLaneColor),
    ) as number[]

    if (keySignature === null) {
      return Float32Array.from(
        Array(12)
          .fill(0)
          .map((_, i) =>
            keySignatureUtils.getIntervals({ scale: "major", key: 0 }).includes(i)
              ? whiteLaneColor
              : blackLaneColor,
          )
          .flat(),
      )
    }

    const highlightedKeys = keySignatureToConditions(keySignature)

    const highlightedLaneColor = colorToVec4(
      Color(theme.pianoHighlightedLaneColor),
    ) as number[]

    const laneColors = highlightedKeys.map((isHighlighted) =>
      isHighlighted ? highlightedLaneColor : whiteLaneColor,
    )

    return Float32Array.from(laneColors.flat())
  }, [theme, keySignature])

  const color = useMemo(
    () => colorToVec4(Color(theme.pianoLaneEdgeColor)),
    [theme],
  )

  const hightlightedColor = useMemo(
    () => colorToVec4(Color(theme.editorGridColor)),
    [theme],
  )

  return (
    <HorizontalGrid
      rect={{
        x: 0,
        y: scrollTop,
        width: canvasWidth,
        height: canvasHeight,
      }}
      color={color}
      highlightedColor={hightlightedColor}
      laneColors={laneColors}
      height={scaleY * Layout.keyHeight}
      zIndex={zIndex}
    />
  )
}
