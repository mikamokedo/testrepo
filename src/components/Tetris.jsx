import React from 'react';
import Stage from './Stage';
import Display from './Display';
import Starbutton from './Starbutton';
import {createStage} from '../gameHelper';

const Tetris = () =>{

    return(
        <div className="tetris">
            <Stage stage={createStage()}/>
            <aside>
                <div>
                    <Display text="Score"/>
                    <Display text="Row"/>
                    <Display text="Level"/>
                </div>
                <Starbutton />
            </aside>


            
        </div>
    );

};

export default Tetris;