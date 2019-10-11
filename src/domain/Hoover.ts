import Grid from './Grid';

export enum Orientation {
  North,
  East,
  West,
  South,
}

export interface HooverShape {
  readonly x: number;
  readonly y: number;
  readonly orientation: Orientation;
  readonly grid?: Grid;
}

export class Hoover {
  readonly x: number;
  readonly y: number;
  readonly orientation: Orientation;
  readonly grid?: Grid;

  constructor(hoover: HooverShape){
    this.x = hoover.x;
    this.y = hoover.y;
    this.orientation = hoover.orientation;
    this.grid = hoover.grid;
  }

  isThere(x: number, y:number){
    return this.x === x && this.y === y
  }

  getOrientation(){
    return this.orientation;
  }
}

export default Hoover;
