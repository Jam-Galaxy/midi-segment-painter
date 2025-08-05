import type { Point } from "./Point"

export interface Rect extends Point {
  readonly width: number
  readonly height: number
}