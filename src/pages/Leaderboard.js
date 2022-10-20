import React from 'react';
import Board from '../components/Board';

function Leaderboard({toolsInfo}) {
  return (
    <div>
      <Board toolsInfo={toolsInfo} />
    </div>
  )
}

export default Leaderboard
