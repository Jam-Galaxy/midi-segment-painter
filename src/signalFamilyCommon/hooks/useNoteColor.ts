import Color from "color"
import { colorToVec4, enhanceContrast } from "../../signalFamilyCommon/gl/color"
// import { trackColorToCSSColor } from "../track/TrackColor"
// import { usePianoRoll } from "./usePianoRoll"

export function useNoteColor() {
  // const { selectedTrackId } = usePianoRoll()
  // const { color: trackColor } = useTrack(selectedTrackId)
  const theme = {
    themeColor: "hsl(230, 70%, 55%)",
    backgroundColor: "hsl(228, 10%, 16%)",
    isLightContent: true,
  }

  const baseColor = Color("hsla(0, 100%, 50%, 1.00)");

  return {
    baseColor, // for LegacyNotes
    backgroundColor: Color(theme.backgroundColor), // for LegacyNotes
    selectedColor: colorToVec4(baseColor.lighten(0.7)),
    borderColor: colorToVec4(
      enhanceContrast(baseColor, theme.isLightContent, 0.3),
    ),
    inactiveColor: colorToVec4(Color(theme.backgroundColor)),
    activeColor: colorToVec4(baseColor),
  }
}
