import PlayerSearch from 'components/PlayerSearch'
import PlayersStaging from 'features/players/PlayersStaging'
import SeasonsSearch from 'components/SeasonsSearch'
import SeasonsStaging from 'features/players/SeasonsStaging'
import SeasonAverages from 'features/players/SeasonAverages'
import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
function Players() {
  return (<div>
    <PlayerSearch/>
    <PlayersStaging/>
    <SeasonsSearch/>
    <SeasonsStaging/>
  </div>
  );
}

export default Players