import * as React from 'react';

export interface IHooverMovesFormProps {
  handleSubmit: (moves: string) => void;
  moves: string;
}

export interface IHooverMovesFormStates {
  moves: string;
}

export class HooverMovesForm extends React.Component<IHooverMovesFormProps, IHooverMovesFormStates> {
  constructor(props: IHooverMovesFormProps){
    super(props);
    this.state = {
      moves: this.props.moves,
    };
  }

  handleChangeMoves = (e: any) => {
    this.setState({ moves: e.target.value });
  }

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.handleSubmit(this.state.moves);
    this.setState({ moves: '' });
  }

  public render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="hooverMoves">Moves instruction</label>
          <input
            id="hooverMoves"
            className="form-control"
            type="text"
            aria-describedby="Hoover moves"
            placeholder="Enter Moves ('D' to move right, 'G' to move left and 'A' to move straight)"
            required
            value={this.state.moves}
            onChange={this.handleChangeMoves}
            />
        </div>
        <button type="submit" className="btn btn-primary">Move hoover</button>
      </form>
    );
  }
}

export default HooverMovesForm;
