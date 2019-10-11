import React from 'react';
import Grid from '../Grid';

const App: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Grid rowsLength={10} colsLength={10} />
        </div>
      </div>
    </div>
  );
}

export default App;
