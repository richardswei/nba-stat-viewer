import React, {useEffect, useState} from 'react'
import { useSelector , useDispatch} from 'react-redux';
import {
  addSeasons,
  removeSeasons,
  selectSeasons
} from 'features/players/seasonsSlice';
function SeasonsStaging() {
  const dispatch = useDispatch();
  const seasons = useSelector(selectSeasons);
  return (<div>
    {seasons && <div>   
      {seasons.map((season) => 
        <div key={season}>
          <button onClick={() => dispatch(removeSeasons([season]))}>
            X {season}
          </button>
        </div>
      )}
    </div>}
  </div>);
}

export default SeasonsStaging