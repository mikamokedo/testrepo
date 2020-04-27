import React from 'react';
import Cell from './Cell';

const Stage = ({stage}) => {
    return (
        <div className="stage">
      {stage.map((row) => row.map((ele,key) => <Cell key={key} type={Cell[0]}/>))}
      
    </div>
    );
};

export default Stage;