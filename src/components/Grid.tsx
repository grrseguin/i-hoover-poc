import React from 'react';
import GridClass from '../domain/Grid';

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
    const rows = grid.cells.map(
      (cells, iRow) =>
        <div
          className="d-flex flex-row justify-content-around"
          key={iRow}
        >
          {
            cells.map(
              (cell, iCol) =>
                <div
                  className="flex-fill d-flex justify-content-center"
                  key={iCol}
                >
                  ({iRow}, {iCol})
                </div>
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
