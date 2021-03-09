import { createSlice } from '@reduxjs/toolkit';

export const playersSlice = createSlice({
  name: 'players',
  initialState: {
    value: [],
  },
  reducers: {
    addPlayers: (state, action) => {
      const ids = state.value.map((player) => player.id)
      action.payload.forEach((player) => {
        if (!ids.includes(player.id)) {
          state.value.push(player)
        }
      })
      return state;
    },
    removePlayers: (state, action) => {
      const ids = action.payload.map((player) => player.id)
      return state.value.filter((item) => !ids.includes(item.id))
    },
  },
});

export const { addPlayers, removePlayers } = playersSlice.actions;

export const selectPlayers = state => state.players.value;

export default playersSlice.reducer;
