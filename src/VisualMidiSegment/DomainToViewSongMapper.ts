//pieces of code from PianoRollStore
import { NoteCoordTransform } from "../signalFamilyCommon/entities/transform/NoteCoordTransform"
import type { NoteEvent } from "../signalFamilyCommon/track/TrackEvent"
import { TickTransform } from "../signalFamilyCommon/entities/transform/TickTransform";
import { Layout } from "../signalFamilyCommon/Constants";
import { KeyTransform } from "../signalFamilyCommon/entities/transform/KeyTransform";
import { isNoteEvent, type TrackId } from "../signalFamilyCommon/track";

import Song from "../signalFamilyCommon/song/Song";

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
function getTrack(song: Song) {
  // const song = new Song();
  console.log(song);
  const track = song.getTrack(1 as TrackId);
  if(!track) throw new Error;
  return track;
}

function getAllNoteBounds(song: Song) {
    // const { transform, selectedTrack: track } = this
    const transform = getTransform();
    const track = getTrack(song);

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
export function domainToView(song: Song) { //TODO: song type is SerializeObjectProperties<Song> see serializr
    // const { allNoteBounds } = 
    const allNoteBounds = getAllNoteBounds(song);
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

    return allNoteBounds.map((n) => {
      return {
        ...n.bounds,
        id: n.note.id,
        velocity: n.note.velocity,
        isSelected: false,
      }
    })
}