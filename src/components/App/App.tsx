import React from 'react';
import { GridShape } from '../../domain/Grid';
import { HooverShape, Orientation } from '../../domain/Hoover';
import Grid from '../Grid';
import GridForm from '../GridForm';
import HooverForm from '../HooverForm';
import HooverMovesForm from '../HooverMovesForm';

export interface IAppProps {
}

export interface IAppStates {
  grid: GridShape;
  hoover: HooverShape;
  hooverMoves: string;
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
        x: 5,
        y: 5,
        orientation: Orientation.North,
      },
      hooverMoves: 'DADADADAA',
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

  handlHooverMovesSubmit = (hooverMoves: string) => {
    this.setState({
      ...this.state,
      hooverMoves,
    });
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Grid
              hoover={this.state.hoover}
              hooverMoves={this.state.hooverMoves}
              {...this.state.grid}
            />
          </div>
          <div className="col-md-6">
            <GridForm handleSubmit={this.handleGridSubmit} {...this.state.grid} />
            <HooverForm
              handleSubmit={this.handlHooverSubmit}
              {...this.state.hoover}
            />
            <HooverMovesForm
              handleSubmit={this.handlHooverMovesSubmit}
              moves={this.state.hooverMoves}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
