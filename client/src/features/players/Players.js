import PlayerSearch from 'components/PlayerSearch'

import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import {
  addPlayers,
  removePlayers,
  selectPlayers
} from 'features/players/playersSlice';
function Players() {
  const dispatch = useDispatch();
  const players = useSelector(selectPlayers);
  return (<div>
    <PlayerSearch/>
    <div>
      {players &&
        players.map((player) => 
          <button key={player.id} onClick={() => dispatch(removePlayers([player]))}>
            {player.first_name} {player.last_name}
          </button>
        )
      }
    </div>
  </div>
  );
}

export default Players