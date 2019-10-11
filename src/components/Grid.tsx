import React from 'react';
import GridClass from '../domain/Grid';
import { Orientation, Hoover } from '../domain/Hoover';
import Cell from './Cell/Cell';

export interface IGridProps {
  rowsLength: number;
  colsLength: number;
  hoover: {
    x: number;
    y: number;
    orientation: Orientation
  };
}

class Grid extends React.Component<IGridProps> {
  public render() {
    const grid = new GridClass({
      rowsLength: parseInt(this.props.rowsLength as any, 10),
      colsLength: parseInt(this.props.colsLength as any, 10),
    });
    const hoover = new Hoover({
      x: parseInt(this.props.hoover.x as any, 10),
      y: parseInt(this.props.hoover.y as any, 10),
      orientation: this.props.hoover.orientation,
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
