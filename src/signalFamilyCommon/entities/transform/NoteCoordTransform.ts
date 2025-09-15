// from app\src\entities\transform\NoteCoordTransform.ts
import type { Point } from "../geometry/Point";
import type { Rect } from "../geometry/Rect";
import type { NoteEvent } from "../../track/TrackEvent"
import { KeyTransform } from "./KeyTransform"
import type { NotePoint } from "./NotePoint"
import { TickTransform } from "./TickTransform"
import { IInputTransformProperties } from "@/VisualMidiSegment/studioConnector/IInputSegment";

export class NoteCoordTransform {
  public readonly tickTransform: TickTransform;
  public readonly keyTransform: KeyTransform;

  constructor(
    tickTransform: TickTransform,
    keyTransform: KeyTransform,
  ) {
    this.tickTransform = tickTransform;
    this.keyTransform = keyTransform;
  }

  // pixels

  getX(tick: number) {
    return this.tickTransform.getX(tick)
  }

  getY(noteNumber: number, minNoteNumber: number, maxNoteNumber: number) {
    return this.keyTransform.getY(noteNumber, minNoteNumber, maxNoteNumber)
  }

  // ticks

  getTick(pixels: number) {
    return this.tickTransform.getTick(pixels)
  }

  getNoteNumber(pixels: number) {
    return this.keyTransform.getNoteNumber(pixels)
  }

  getNoteNumberFractional(pixels: number) {
    return this.keyTransform.getNoteNumberFractional(pixels)
  }

  getDeltaNoteNumber(deltaPixels: number) {
    return this.keyTransform.getDeltaNoteNumber(deltaPixels)
  }

  get numberOfKeys() {
    return this.keyTransform.numberOfKeys
  }

  get pixelsPerKey() {
    return this.keyTransform.pixelsPerKey
  }

  //

  getMaxY(): number {
    return this.keyTransform.getMaxY()
  }

  getRect(note: NoteEvent, minNoteNumber: number, maxNoteNumber: number): Rect {
    return {
      x: this.getX(note.tick),
      y: this.getY(note.noteNumber, minNoteNumber, maxNoteNumber),
      width: this.getX(note.duration),
      height: this.keyTransform.getPixelsPerKey(minNoteNumber, maxNoteNumber),
    }
  }

  getDrumRect(note: NoteEvent, minNoteNumber: number, maxNoteNumber: number): Rect {
    return {
      x: this.getX(note.tick) - this.keyTransform.pixelsPerKey / 2,
      y: this.getY(note.noteNumber, minNoteNumber, maxNoteNumber),
      width: this.keyTransform.pixelsPerKey,
      height: this.keyTransform.pixelsPerKey,
    }
  }

  getNotePoint(pos: Point): NotePoint {
    return {
      tick: this.getTick(pos.x),
      noteNumber: this.getNoteNumber(pos.y),
    }
  }

  getNotePointFractional(pos: Point): NotePoint {
    return {
      tick: this.getTick(pos.x),
      noteNumber: this.getNoteNumberFractional(pos.y),
    }
  }
}
