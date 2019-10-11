import * as React from 'react';

export interface IGridFormProps {
  handleSubmit: (gridSize: {x: number, y: number}) => void;
  x: number;
  y: number;
}

export interface IGridFormStates {
  x: number;
  y: number;
}

export class GridForm extends React.Component<IGridFormProps, IGridFormStates> {
  constructor(props: IGridFormProps){
    super(props);
    this.state = {
      x: this.props.x,
      y: this.props.y,
    };
  }

  handleChangeX = (e: any) => {
    this.setState({ x: e.target.value });
  }

  handleChangeY = (e: any) => {
    this.setState({ y: e.target.value });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="gridX">x</label>
          <input
            id="gridX"
            className="form-control"
            type="number"
            aria-describedby="horizontal axis"
            placeholder="Enter horizontal axis"
            required
            value={this.state.x}
            onChange={this.handleChangeX}
            />
        </div>
        <div className="form-group">
          <label htmlFor="gridY">y</label>
          <input
            id="gridY"
            className="form-control"
            type="number"
            aria-describedby="vertical axis"
            placeholder="Enter vertical axis"
            required
            value={this.state.y}
            onChange={this.handleChangeY}
          />
        </div>
        <button type="submit" className="btn btn-primary">Draw grid</button>
      </form>
    );
  }
}

export default GridForm;
