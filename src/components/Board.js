import React from 'react';
import './Board.css';

const Board = ({dataInfo}) => {     

console.log(dataInfo);

function sortInfo(infoArray) {
    infoArray.sort((a, b) => {
        return parseInt(b.edits) - parseInt(a.edits);
    });
    return infoArray;
};

  return (
    <>
      <div className='board-hero'>
      <div className="item-banner">
        LeaderBoards
      </div>
    </div>
    <div className="board">
        
        {sortInfo(dataInfo).map((tool) =>  
      <div className="board-container">
        <div className="name">
            <h2>{tool.author} </h2>
        </div>
          <div className="edits">
            <h2>{tool.edits} </h2>
          </div>
          
      </div>
    
    )}
    </div>
    
    
      
    </>
  )
}

export default Board;
