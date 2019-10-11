import * as React from 'react';
import { HooverShape, Orientation } from '../domain/Hoover';

export interface IHooverFormProps extends HooverShape {
  handleSubmit: (gridSize: HooverShape) => void;
}

export interface IHooverFormStates extends HooverShape {
}

export class HooverForm extends React.Component<IHooverFormProps, IHooverFormStates> {
  constructor(props: IHooverFormProps){
    super(props);
    this.state = {
      x: this.props.x,
      y: this.props.y,
      orientation: this.props.orientation,
    };
  }

  handleChangeX = (e: any) => {
    this.setState({ x: e.target.value });
  }

  handleChangeY = (e: any) => {
    this.setState({ y: e.target.value });
  }

  handleChangeOrientation = (e: any) => {
    this.setState({ orientation: parseInt(e.target.value, 10) });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="hooverX">x</label>
          <input
            id="hooverX"
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
          <label htmlFor="hooverY">y</label>
          <input
            id="hooverY"
            className="form-control"
            type="number"
            aria-describedby="vertical axis"
            placeholder="Enter vertical axis"
            required
            value={this.state.y}
            onChange={this.handleChangeY}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hooverOrientation">Orientation</label>
          <select
            className="form-control"
            id="hooverOrientation"
            onChange={this.handleChangeOrientation}
          >
            {
              Object.keys(Orientation).slice(4).map(
                (orientationName, i) => <option key={orientationName} value={i}>{orientationName}</option>
              )
            }
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Draw grid</button>
      </form>
    );
  }
}

export default HooverForm;
