import React from 'react';
import { GridShape } from '../../domain/Grid';
import { HooverShape, Orientation } from '../../domain/Hoover';
import Grid from '../Grid';
import GridForm from '../GridForm';
import HooverForm from '../HooverForm';

export interface IAppProps {
}

export interface IAppStates {
  grid: GridShape;
  hoover: HooverShape;
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

  handleGridSubmit = (gridSize: GridShape) => {
    this.setState({
      ...this.state,
      grid: {
        ...gridSize
      },
    });
  }

  handlHooverSubmit = (hooverPosition: HooverShape) => {
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
          <div className="col-md-6">
            <Grid
              hoover={this.state.hoover}
              {...this.state.grid}
            />
          </div>
          <div className="col-md-6">
            <fieldset>
              <GridForm handleSubmit={this.handleGridSubmit} {...this.state.grid} />
            </fieldset>
            <fieldset>
              <HooverForm
                handleSubmit={this.handlHooverSubmit}
                {...this.state.hoover}
              />
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
