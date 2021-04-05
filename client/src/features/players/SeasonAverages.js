import React, {useEffect, useState} from 'react'
import TableDisplay from 'components/TableDisplay'

function SeasonAverages(props) {
  const players = props.players
  const seasons = props.seasons
  const [averages, setAverages] = useState([])

  async function callApi() {
    try {
      const playerQueryString = players.reduce((acc, player, i) => {
        return acc + '&players[]=' + player.id
      }, '')
      const seasonQueryString = seasons.reduce((acc, season, i) => {
        return acc + (i==0 ? '?' : '&') + 'seasons[]=' + season
      }, '')
      const url = `http://localhost:9000/players/averages/season/${seasonQueryString + playerQueryString}`
      const res = await fetch(url);
      const json = await res.json();
      return json;
    } catch (err) {
      console.error('err', err);
      return null;
    }
  }

  useEffect(() => {
    if (players && players.length > 0 && seasons && seasons.length > 0) {
      callApi().then((json) => {
        if (json) {setAverages(json.data)}
      })
    }
  }, [players, seasons])


  return <div>
    {averages && 
      <React.Fragment>
        {averages.map((average) => <div>{average.player_id}</div>)}
        <TableDisplay data={averages}/>
      </React.Fragment>
    }
  </div>
}

export default SeasonAverages