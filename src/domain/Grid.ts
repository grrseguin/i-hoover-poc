import Cell from './Cell';

export interface GridShape {
    x: number;
    y: number;
}

export class Grid {
    readonly cells: Cell[][];

    constructor(grid: GridShape){
      this.cells = Array.from(new Array(grid.x), (x, i) => i)
        .map(() => Array
          .from(new Array(grid.y), () => new Cell())
        )
      ;
    }
}

export default Grid;
