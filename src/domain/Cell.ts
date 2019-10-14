export class Cell {
  private visited: boolean = false;

  getVisited(){
    return this.visited;
  }

  setVisited(){
    this.visited = true;
  }
}

export default Cell;
