import type { NoteEvent, TrackEvent } from "./TrackEvent";

export const isNoteEvent = (e: TrackEvent): e is NoteEvent =>
  "subtype" in e && e.subtype === "note"
