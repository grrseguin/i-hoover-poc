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
}

export interface HooverShapeInGrid extends HooverShape {
  readonly grid: Grid;
}

export class Hoover {
  x: number;
  y: number;
  orientation: Orientation;
  grid: Grid;

  constructor(hoover: HooverShapeInGrid){
    this.x = hoover.x;
    this.y = hoover.y;
    this.orientation = hoover.orientation;
    this.grid = hoover.grid;
  }

  isMyPosition(x: number, y:number){
    return this.x === x && this.y === y
  }

  getOrientation(){
    return this.orientation;
  }

  setX(x: number){
    this.x = x;
  }

  setY(y: number){
    this.y = y;
  }

  setGrid(grid: Grid){
    this.grid = grid;
  }
}

export default Hoover;
