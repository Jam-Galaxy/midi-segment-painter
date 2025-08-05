import { Scale } from "../Scale"

export interface KeySignature {
  readonly key: number // 0 is C, 1 is C#, 2 is D, etc.
  readonly scale: Scale
}