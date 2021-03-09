import { configureStore } from '@reduxjs/toolkit';
import counterReducer from 'features/counter/counterSlice';
import playersReducer from 'features/players/playersSlice';
import seasonsReducer from 'features/players/seasonsSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    players: playersReducer,
    seasons: seasonsReducer,
  },
});
