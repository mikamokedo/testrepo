import React from 'react';
import Tetris from './components/Tetris';
import {randomTetromino} from './tetrominos';
function App() {
  console.log(randomTetromino());
  return (
    <div className="App">
        <Tetris />

    </div>
  );
}

export default App;
