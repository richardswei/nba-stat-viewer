import React, {useEffect, useState} from 'react'
import debounce from '../utils/debounce'

function PlayerSearch() {
  const [response, setResponse] = useState("")
  const [search, setSearch] = useState("")
  const debouncedSearch = debounce((event) => setSearch(event.target.value), 250);


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
  
  // function handleInputChange(event) {
  //   debounce((event) => setSearch(event.target.value), 500)
  // }

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
            return <div key={i.id}>
              {i.id}, {i.first_name}, {i.last_name}
            </div>
          })
        }
      </div>
    </React.Fragment>
  );
}

export default PlayerSearch