import React, { PureComponent } from 'react';
import classNames from "classnames";
import { Orientation } from '../../domain/Hoover';
import './Cell.scss';
import hooverImg from './hoover.svg';

export interface Props {
  hooverOrientation?: Orientation;
  visited: boolean;
}

export class Cell extends PureComponent<Props> {
  render() {
    return (
      <div
        className={classNames(
          'flex-fill',
          'd-flex',
          'justify-content-center',
          'grid__cell_min_size',
          'border',
          'border-dark',
          {
            'grid__cell_visited': this.props.visited,
          },
        )}
      >
        {
          this.props.hooverOrientation !== undefined &&
          <img
            className={classNames(
              'img-fluid',
              {
                cell__hoover_north_orienation: this.props.hooverOrientation === Orientation.North,
                cell__hoover_east_orienation: this.props.hooverOrientation === Orientation.East,
                cell__hoover_west_orienation: this.props.hooverOrientation === Orientation.West,
                cell__hoover_south_orienation: this.props.hooverOrientation === Orientation.South,
              }
            )}
            src={hooverImg}
            alt=""
          />
        }
      </div>
    )
  }
}

export default Cell;
