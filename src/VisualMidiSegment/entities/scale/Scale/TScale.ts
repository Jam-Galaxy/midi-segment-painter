export const scaleValues = [
  // Basic
  "major",
  "minor",
  // Minor
  "harmonicMajor",
  "harmonicMinor",
  // Melodic
  "melodicMinor",
  // Mode
  "ionian",
  "dorian",
  "phrygian",
  "lydian",
  "mixolydian",
  "aeolian",
  "locrian",
  // Pentatonic
  "majorPentatonic",
  "minorPentatonic",
  // Blues
  "majorBlues",
  "minorBlues",
  // Diminished
  "halfWholeDiminished",
  "wholeHalfDiminished",
  // Whole Tone
  "wholeTone",
] as const
export type Scale = (typeof scaleValues)[number]