import React, {useEffect, useState} from 'react'
import PlayerSearch from 'components/PlayerSearch'
import TableDisplay from 'components/TableDisplay'
import PlayersStaging from 'features/players/PlayersStaging'
import SeasonsSearch from 'components/SeasonsSearch'
import SeasonsStaging from 'features/players/SeasonsStaging'
import SeasonAverages from 'features/players/SeasonAverages'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import {selectPlayers} from 'features/players/playersSlice';
import {selectSeasons} from 'features/players/seasonsSlice';

function Players() {

  const players = useSelector(selectPlayers);
  const seasons = useSelector(selectSeasons);

  return (<div>
    <PlayerSearch/>
    <PlayersStaging/>
    <SeasonsSearch/>
    <SeasonsStaging/>
    <SeasonAverages players={players} seasons={seasons}/>
  </div>
  );
}

export default Players