import { MaxNoteNumber } from "../../Constants";

export const clamp = (noteNumber: number) =>
  Math.min(MaxNoteNumber, Math.max(0, noteNumber))

export const isValid = (noteNumber: number) =>
  noteNumber >= 0 && noteNumber <= MaxNoteNumber
