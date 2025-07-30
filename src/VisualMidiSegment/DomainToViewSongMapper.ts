//pieces of code from 
import { NoteCoordTransform } from "../signalFamilyCommon/transform/NoteCoordTransform"
import type { NoteEvent } from "../signalFamilyCommon/track/TrackEvent"
import { TickTransform } from "../signalFamilyCommon/transform/TickTransform";
import { Layout } from "../signalFamilyCommon/Constants";
import { KeyTransform } from "../signalFamilyCommon/transform/KeyTransform";

function getTickScrollStoreTransform() {
  const scaleX = 1;
  return new TickTransform(Layout.pixelsPerTick * scaleX)
}
function getKeyScrollStoreTransform() {
  const scaleY = 1;
  return new KeyTransform(Layout.keyHeight * scaleY, 127)
}

function getTransform() {
  return new NoteCoordTransform(
      // this.tickScrollStore.transform,
      getTickScrollStoreTransform(),
      // this.keyScrollStore.transform,
      getKeyScrollStoreTransform(),
    )
}

function getAllNoteBounds() {
    // const { transform, selectedTrack: track } = this
    const transform = getTransform();


    const noteEvents = track.events.filter(isNoteEvent)
    const getRect = track.isRhythmTrack
      ? (e: NoteEvent) => transform.getDrumRect(e)
      : (e: NoteEvent) => transform.getRect(e)

    return noteEvents.map((e) => {
      const bounds = getRect(e)
      return {
        bounds,
        note: e,
      }
    })
}
export function DomainToView(song: any) { //TODO: song type is SerializeObjectProperties<Song> see serializr
    // const { allNoteBounds } = 
    const allNoteBounds = getAllNoteBounds();
    console.log("allNoteBounds=", allNoteBounds);

    // const { canvasWidth, scrollLeft } = this.tickScrollStore

    // const range = Range.fromLength(scrollLeft, canvasWidth)
    // return allNoteBounds
    //   .filter((n) =>
    //     Range.intersects(Range.fromLength(n.bounds.x, n.bounds.width), range),
    //   )
    //   .map((n) => {
    //     const isSelected = selectedNoteIds.includes(n.note.id)
    //     return {
    //       ...n.bounds,
    //       id: n.note.id,
    //       velocity: n.note.velocity,
    //       isSelected,
    //     }
    //   })
}