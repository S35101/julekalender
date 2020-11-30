export class Random {
  private readonly m = 0x80000000;
  private readonly a = 1103515245;
  private readonly c = 12345;
  private state: number;

  constructor(seed?: number) {
    this.state = seed ?? Date.now();
  }

  public nextInt() {
    this.state = (this.a * this.state + this.c) % this.m;
    return this.state;
  }

  public nextFloat() {
    return this.nextInt() / this.m;
  }

  public nextRange(start: number, end: number) {
    return start + Math.floor(this.nextFloat() * (end - start));
  }

  public shuffle<T>(array: T[]) {
    for (let i = 0; i < array.length; i++) {
      const j = this.nextRange(i, array.length);
      const k = array[i];
      array[i] = array[j];
      array[j] = k;
    }
  }
}
