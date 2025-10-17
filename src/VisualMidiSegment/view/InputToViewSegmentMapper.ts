import { TickTransform } from "@/signalFamilyCommon/entities/transform/TickTransform";
import { IInputSegment, IInputTransformProperties } from "../studioConnector/IInputSegment";
import { IViewSegment } from "./IViewSegment";
import { KeyTransform } from "@/signalFamilyCommon/entities/transform/KeyTransform";
import { Layout } from "@/signalFamilyCommon/Constants";
import { NoteCoordTransform } from "@/signalFamilyCommon/entities/transform/NoteCoordTransform";
import { isNoteEvent, NoteEvent } from "@/signalFamilyCommon/track";

function getTickScrollStoreTransform() {
  const scaleX = 0.3;
  return new TickTransform(Layout.pixelsPerTick * scaleX)
}
function getKeyScrollStoreTransform() {
  const scaleY = 0.3;
  const segmentHeight = 100; //px
  return new KeyTransform(segmentHeight, Layout.keyHeight * scaleY, 127)
}

function getTransform() {
  return new NoteCoordTransform(
      // this.tickScrollStore.transform,
      getTickScrollStoreTransform(),
      // this.keyScrollStore.transform,
      getKeyScrollStoreTransform(),
    )
}

function getAllNoteBounds(segment: IInputSegment, noteCoordTransform: NoteCoordTransform) {
    // const { transform, selectedTrack: track } = this
    // const transform = getTransform();
    const transform = noteCoordTransform; 

    const noteEvents = segment.events.filter(isNoteEvent);
    const maxNoteNumber = noteEvents.reduce((p, c) => {
      return Math.max(p, c.noteNumber);
    }, Number.NEGATIVE_INFINITY);
    const minNoteNumber = noteEvents.reduce((p, c) => {
      return Math.min(p, c.noteNumber);
    }, Number.POSITIVE_INFINITY)-1;
    const getRect = segment.isRhythmTrack
      ? (e: NoteEvent) => transform.getDrumRect(e, minNoteNumber, maxNoteNumber)
      : (e: NoteEvent) => transform.getRect(e, minNoteNumber, maxNoteNumber);

    return noteEvents.map((e) => {
      const bounds = getRect(e)
      return {
        bounds,
        note: e,
      }
    })
}

export function inputToViewSegment(segment: IInputSegment, noteCoordTransform: NoteCoordTransform): IViewSegment { //TODO: song type is SerializeObjectProperties<Song> see serializr
    const allNoteBounds = getAllNoteBounds(segment, noteCoordTransform);
    // console.log("allNoteBounds=", allNoteBounds);

    return allNoteBounds.map((n) => {
      return {
        ...n.bounds,
        id: n.note.id,
        velocity: n.note.velocity,
        isSelected: false,
      }
    })
}