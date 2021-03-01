import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {
  addPlayers,
  removePlayers,
} from 'features/players/playersSlice';
import debounce from 'utils/debounce'

function PlayerSearch() {
  const [response, setResponse] = useState("")
  const [search, setSearch] = useState("")
  const dispatch = useDispatch();
  const debouncedSearch = debounce((event) => setSearch(event.target.value), 500);

  async function callApi() {
    try {
      const res = await fetch(`http://localhost:9000/players/search/${search}/25`);
      const json = await res.json();
      return json;
    } catch (err) {
      console.error('err', err);
      return null;
    }
  }

  useEffect(() => {
    if (search!=="") {
      callApi().then((res) => {
        try {
          setResponse(res)
        } catch (error) {
          console.error('err', error);
        }
      })
    } else {
      setResponse([])
    }
  }, [search])

  return (
    <React.Fragment>
      <input id="playerSearch" type="text" placeholder="Player Name" onChange={ debouncedSearch }/>
      <div>
        {response && response.data &&
          response.data.map((i) => {
            return <button key={i.id} onClick={() => dispatch(addPlayers([i]))}>
              {i.id}, {i.first_name}, {i.last_name}
            </button>
          })
        }
      </div>
    </React.Fragment>
  );
}

export default PlayerSearch