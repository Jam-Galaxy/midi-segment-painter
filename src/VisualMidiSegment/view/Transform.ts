import { Layout } from "@/signalFamilyCommon/Constants";
import { KeyTransform } from "@/signalFamilyCommon/entities/transform/KeyTransform";
import { NoteCoordTransform } from "@/signalFamilyCommon/entities/transform/NoteCoordTransform";
import { TickTransform } from "@/signalFamilyCommon/entities/transform/TickTransform";

function getTickScrollStoreTransform() {
  const scaleX = 0.3;
  return new TickTransform(Layout.pixelsPerTick * scaleX)
}
function getKeyScrollStoreTransform() {
  const scaleY = 0.3;
  const segmentHeight = 100; //px
  return new KeyTransform(segmentHeight, Layout.keyHeight * scaleY, 127)
}

export function getTransform() {
  return new NoteCoordTransform(
      // this.tickScrollStore.transform,
      getTickScrollStoreTransform(),
      // this.keyScrollStore.transform,
      getKeyScrollStoreTransform(),
    )
}
// const test = getTransform();
// test.tickTransform. = test;
// export class Transform {
  
// }