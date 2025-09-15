import { IInputTransformProperties } from "@/VisualMidiSegment/studioConnector/IInputSegment";

export class KeyTransform {
   segmentHeight: number;
  readonly pixelsPerKey: number;
  private readonly maxNoteNumber: number;
  constructor(
    segmentHeight: number,
    pixelsPerKey: number,
    maxNoteNumber: number,
  ) {
    this.segmentHeight = segmentHeight;
    this.pixelsPerKey = pixelsPerKey;
    this.maxNoteNumber = maxNoteNumber;
  }

  getPixelsPerKey(minNoteNumber:number, maxNoteNumber: number, transformProperties: IInputTransformProperties) {
    return transformProperties.segmentHeight / (maxNoteNumber - minNoteNumber);
  }

  getY(noteNumber: number, minNoteNumber:number, maxNoteNumber: number, transformProperties: IInputTransformProperties) {
    // return (this.maxNoteNumber - noteNumber) * this.pixelsPerKey
    return (noteNumber - minNoteNumber) / (maxNoteNumber - minNoteNumber) * transformProperties.segmentHeight
    
  }

  getNoteNumber(pixels: number) {
    return Math.ceil(this.getNoteNumberFractional(pixels))
  }

  getNoteNumberFractional(pixels: number) {
    return this.maxNoteNumber - pixels / this.pixelsPerKey
  }

  getDeltaNoteNumber(deltaPixels: number) {
    return -deltaPixels / this.pixelsPerKey
  }

  get numberOfKeys() {
    return this.maxNoteNumber + 1
  }

  getMaxY() {
    return this.numberOfKeys * this.pixelsPerKey
  }
}
