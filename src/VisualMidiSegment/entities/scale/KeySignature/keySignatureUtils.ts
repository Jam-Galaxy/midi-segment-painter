import { Scale, scaleUtils } from "../Scale"
import { KeySignature } from "./IKeySignature"

// the function that transpose the scale to the key
export const getIntervals = (keySignature: KeySignature): number[] => {
  const scaleIntervals = scaleUtils.getIntegerNotation(keySignature.scale)
  return scaleIntervals.map((i) => (i + keySignature.key) % 12)
}
