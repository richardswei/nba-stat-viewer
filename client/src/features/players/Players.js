import PlayerSearch from 'components/PlayerSearch'
import SeasonAverages from 'features/players/SeasonAverages'
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
      {players && <div>   
        {players.map((player) => 
          <div>
            <button key={player.id} onClick={() => dispatch(removePlayers([player]))}>
              {player.first_name} {player.last_name}
            </button>
          </div>
        )}
        <div>
          <SeasonAverages players={players}/>
        </div>
      </div>}
    </div>
  </div>
  );
}

export default Players