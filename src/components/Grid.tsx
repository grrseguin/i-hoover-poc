import React from 'react';
import GridClass from '../domain/Grid';
import { Orientation, Hoover } from '../domain/Hoover';
import Cell from './Cell/Cell';

export interface IGridProps {
  rowsLength: number
  colsLength: number
}

class Grid extends React.Component<IGridProps> {
  public render() {
    const grid = new GridClass({
      rowsLength: parseInt(this.props.rowsLength as any, 10),
      colsLength: parseInt(this.props.colsLength as any, 10),
    });
    const hoover = new Hoover({
      x: 0,
      y: 0,
      orientation: Orientation.North,
    });
    const rows = grid.cells.map(
      (cells, iRow) =>
        <div
          className="d-flex flex-row justify-content-around"
          key={iRow}
        >
          {
            cells.map(
              (cell, iCol) => <Cell key={`${iRow}${iCol}`} hooverOrientation={hoover.isThere(iRow, iCol) ? hoover.getOrientation() : undefined} />
            )
          }
        </div>
    );

    return (
        <div
          className="d-flex flex-column-reverse bg-secondary"
        >
          { rows }
        </div>
    );
  }
}

export default Grid;
