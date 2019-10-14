import Grid from './Grid';

export enum Orientation {
  North,
  East,
  South,
  West,
}

export interface HooverShape {
  readonly x: number;
  readonly y: number;
  readonly orientation: Orientation;
}

export interface HooverShapeInGrid extends HooverShape {
  readonly grid: Grid;
}

enum TurningMatchers {
  d = 1,
  g = -1,
};

const OrientationMatchers = {
  4: Orientation.North,
  0: Orientation.North,
  1: Orientation.East,
  2: Orientation.South,
  3: Orientation.West,
  [-1]: Orientation.West,
};

const goForwardKey = 'a';

const goForwardMatcher = {
  [Orientation.North]: 1,
  [Orientation.South]: -1,
  [Orientation.East]: 1,
  [Orientation.West]: -1,
}

export class Hoover {
  private x: number;
  private y: number;
  private orientation: Orientation;
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

  setOrientation(orientation: Orientation){
    this.orientation = orientation;
  }

  setOrientationByTurningKey(move: TurningMatchers){
    const newKey = this.orientation + move;
    const  orientationMatcher = Object.entries(OrientationMatchers).find(
      ([ key ]) => {
        return key === newKey.toString()
      }
    );

    if (orientationMatcher !== undefined) {
      this.orientation = orientationMatcher[1];
    }
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

  move(way: string){
    const steps = way
      .trim()
      .toLowerCase()
      .split('');

    steps.forEach(
      step => {
        const turningMatcher = this.getTurningMatcher(step);
        if (turningMatcher !== undefined) {
          this.setOrientationByTurningKey(turningMatcher[1] as TurningMatchers);
        } else if (step === goForwardKey) {
          const grid = this.getCell();
          if (grid !== undefined) {
            this.grid.cells[this.x][this.y].setVisited();
          }
          this.goForward();
        }
      }
    );

    return this;
  }

  private getCell(){
    try {
      return this.grid.cells[this.x][this.y];
    } catch (error) {
      console.error('hoover out of grid bounds');
    }
  }

  private goForward(){
    switch (this.orientation) {
      case Orientation.North:
      case Orientation.South:
        this.setY(this.y + goForwardMatcher[this.orientation])
        break;
      case Orientation.West:
      case Orientation.East:
        this.setX(this.x + goForwardMatcher[this.orientation])
        break;
    }
  }

  private getTurningMatcher(letter: string){
    const turningMatcher = Object.entries(TurningMatchers).find(
      ([ key ]) => key === letter
    );

    return turningMatcher;
  }
}

export default Hoover;
