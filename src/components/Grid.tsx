import React from 'react';
import GridClass from '../domain/Grid';
import { GridShape } from '../domain/Grid';
import { Hoover, HooverShape } from '../domain/Hoover';
import Cell from './Cell/Cell';

export interface IGridProps extends GridShape {
  hoover: HooverShape;
  hooverMoves: string;
}

class Grid extends React.Component<IGridProps> {
  constructor(props: IGridProps) {
    super(props);

    this.hoover = new Hoover({
      x: parseInt(this.props.hoover.x as any, 10),
      y: parseInt(this.props.hoover.y as any, 10),
      orientation: this.props.hoover.orientation,
      grid: new GridClass({
        x: parseInt(this.props.x as any, 10),
        y: parseInt(this.props.y as any, 10),
      })
    });
  }

  private hoover: Hoover;

  shouldComponentUpdate(nextProps: IGridProps) {
    if (
      this.props.x !== nextProps.x ||
      this.props.y !== nextProps.y
    ) {
      this.hoover.setGrid(
        new GridClass({
          x: parseInt(nextProps.x as any, 10),
          y: parseInt(nextProps.y as any, 10),
        })
      );
      return true;
    }

    if (
      this.props.hoover.y !== nextProps.hoover.y ||
      this.props.hoover.x !== nextProps.hoover.x
    ) {
      this.hoover.setX(parseInt(nextProps.hoover.x as any, 10));
      this.hoover.setY(parseInt(nextProps.hoover.y as any, 10));
      return true;
    }

    if (nextProps.hooverMoves !== undefined) {
      this.hoover.move(nextProps.hooverMoves);
      return true;
    }

    return false;
  }

  public render() {
    const grid = this.hoover.grid.cells.map(
      (cells, x) =>
        <div
          className="d-flex flex-column-reverse flex-fill justify-content-around"
          key={x}
        >
          {
            cells.map(
              (cell, y) =>
                <Cell
                  key={`${y}${x}`}
                  hooverOrientation={this.hoover.isMyPosition(x, y) ? this.hoover.getOrientation() : undefined}
                  visited={cell.visited}
                />
            )
          }
        </div>
    );

    return (
        <div
          className="d-flex flex-row bg-secondary"
        >
          { grid }
        </div>
    );
  }
}

export default Grid;
