import type { Rect } from "../../signalFamilyCommon/entities/geometry/Rect"

export type PianoNoteItem = Rect & {  //from PianoRollStore.ts
  id: number
  velocity: number
  isSelected: boolean
}