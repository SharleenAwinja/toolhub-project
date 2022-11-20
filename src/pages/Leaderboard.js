import React from 'react';
import Board from '../components/Board';

function Leaderboard({dataInfo}) {
  return (
    <div>
      <Board dataInfo={dataInfo} />
    </div>
  )
}

export default Leaderboard
