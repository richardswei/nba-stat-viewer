import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {
  addSeasons,
} from 'features/players/seasonsSlice';
import debounce from 'utils/debounce'

function SeasonsSearch() {
  const [selection, setSelection] = useState(2021)
  const dispatch = useDispatch();

  function handleClick(seasons) {
    dispatch(addSeasons(seasons))
  }

  return (
    <React.Fragment>
      <input type="number" min="1970" max={new Date().getFullYear()}
        value={selection}
        onChange={(event) => setSelection(event.target.value)} />
      <button onClick={() => handleClick([selection])}>Submit</button>
    </React.Fragment>
  );
}

export default SeasonsSearch