import type { TrackEvent } from "@/signalFamilyCommon/track";

export interface IInputTransformProperties {
  segmentHeight: number;
  
}

export interface IInputSegment {
  events: readonly TrackEvent[];
  isRhythmTrack: boolean;
}