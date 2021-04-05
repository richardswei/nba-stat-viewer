import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import {
  addPlayers,
  removePlayers,
  selectPlayers
} from 'features/players/playersSlice';
function PlayersStaging() {
  const dispatch = useDispatch();
  const players = useSelector(selectPlayers);
  return (<div>
    {players && <div>   
      {players.map((player) => 
        <div key={player.id} >
          <button onClick={() => dispatch(removePlayers([player]))}>
            X {player.first_name} {player.last_name}
          </button>
        </div>
      )}
    </div>}
  </div>);
}

export default PlayersStaging