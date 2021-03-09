import React, {useEffect, useState} from 'react'
import TableDisplay from 'components/TableDisplay'
import BarChart from 'components/BarChart';

function SeasonAverages(props) {
  const players = props.players
  const [averages, setAverages] = useState([])

  async function callApi() {
    try {
      const queryString = players.reduce((acc, player, i) => {
        return acc + (i==0 ? '?' : '&') + 'players[]=' + player.id
      }, '')
      const url = `http://localhost:9000/players/stats/2018${queryString}`
      const res = await fetch(url);
      const json = await res.json();
      return json;
    } catch (err) {
      console.error('err', err);
      return null;
    }
  }

  useEffect(() => {
    if (players.length > 0) {
      callApi().then((json) => {
        setAverages(json.data)
      })
    }
  }, [players])

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