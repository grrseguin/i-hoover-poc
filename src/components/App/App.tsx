import React from 'react';
import Grid from '../Grid';
import GridForm from '../GridForm';

export interface IAppProps {
}

export interface IAppStates {
  x: number;
  y: number;
}

export class App extends React.Component<IAppProps, IAppStates> {
  constructor(props: IAppProps){
    super(props);
    this.state = {
      x: 10,
      y: 10,
    };
  }

  handleSubmit = (gridSize: {x: number, y: number}) => {
    this.setState({
      ...gridSize,
    });
  }

  public render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Grid rowsLength={this.state.x} colsLength={this.state.y} />
          </div>
          <div className="col">
            <fieldset>
              <GridForm x={this.state.x} y={this.state.y} handleSubmit={this.handleSubmit} />
            </fieldset>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
