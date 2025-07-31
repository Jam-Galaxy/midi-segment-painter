export class TickTransform {
  private readonly pixelsPerTick: number;
  constructor(pixelsPerTick: number) {
    this.pixelsPerTick = pixelsPerTick;
  }

  getX(tick: number) {
    return tick * this.pixelsPerTick
  }

  getTick(x: number) {
    return x / this.pixelsPerTick
  }

  // Unique integer representing the horizontal transformation
  get id(): number {
    return this.pixelsPerTick
  }
}
