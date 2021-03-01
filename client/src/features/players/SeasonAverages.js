import React, {useEffect, useState} from 'react'

function SeasonAverages(props) {
  const players = props.players
  const [averages, setAverages] = useState([])

  async function callApi() {
    try {
      const queryString = players.reduce((acc, player) => {
        return acc + 'player_ids[]=' + player.id + '&'
      }, '')
      const url = `http://localhost:9000/players/stats/2018?${queryString}`
      console.log(url)
      const res = await fetch(url);
      console.log(res)
      const json = await res.json();
      return json;
    } catch (err) {
      console.error('err', err);
      return null;
    }
  }

  useEffect(() => {
    callApi().then((json) => {
            console.log(json)

      setAverages(json)
    })
  }, [players])

  return <div>
    {players && players.map((player) => <div>{player.id}</div>)}
  

  </div>
}

export default SeasonAverages