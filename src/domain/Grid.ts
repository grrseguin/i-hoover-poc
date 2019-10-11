import Cell from './Cell';

export interface GridShape {
    rowsLength: number;
    colsLength: number;
}

export class Grid {
    readonly rowsLength: number;
    readonly rowWidth = 25;
    readonly colsLength: number;
    readonly colHeight = 25;
    readonly cells: Cell[][];

    constructor(grid: GridShape){
        this.rowsLength = grid.rowsLength;
        this.colsLength = grid.colsLength;
        this.cells = Array.from(new Array(grid.colsLength), (x, i) => i + 1)
          .map(() => Array
            .from(new Array(grid.rowsLength), () => new Cell())
          )
        ;
    }

    getWidth(){
        return this.rowsLength * this.rowWidth;
    }

    getHeight(){
        return this.colsLength * this.colHeight;
    }
}

export default Grid;
