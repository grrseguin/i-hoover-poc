import React from 'react';
import { Orientation } from '../../domain/Hoover';
import Grid from '../Grid';
import GridForm from '../GridForm';
import HooverForm from '../HooverForm';

export interface IAppProps {
}

export interface IAppStates {
  grid: {
    x: number;
    y: number;
  };
  hoover: {
    x: number;
    y: number;
    orientation: Orientation
  };
}

export class App extends React.Component<IAppProps, IAppStates> {
  constructor(props: IAppProps){
    super(props);
    this.state = {
      grid: {
        x: 10,
        y: 10,
      },
      hoover: {
        x: 0,
        y: 0,
        orientation: Orientation.North,
      },
    };
  }

  handleGridSubmit = (gridSize: { x: number, y: number }) => {
    this.setState({
      ...this.state,
      grid: {
        ...gridSize
      },
    });
  }

  handlHooverSubmit = (hooverPosition: { x: number, y: number, orientation: Orientation }) => {
    this.setState({
      ...this.state,
      hoover: {
        ...hooverPosition,
      }
    });
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Grid
              rowsLength={this.state.grid.x}
              colsLength={this.state.grid.y}
              hoover={this.state.hoover}
            />
          </div>
          <div className="col">
            <fieldset>
              <GridForm x={this.state.grid.x} y={this.state.grid.y} handleSubmit={this.handleGridSubmit} />
            </fieldset>
            <fieldset>
              <HooverForm
                x={this.state.hoover.x}
                y={this.state.hoover.y}
                orientation={this.state.hoover.orientation}
                handleSubmit={this.handlHooverSubmit}
              />
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
