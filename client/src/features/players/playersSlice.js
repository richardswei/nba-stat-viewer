import { createSlice } from '@reduxjs/toolkit';

export const playersSlice = createSlice({
  name: 'players',
  initialState: [],
  reducers: {
    addPlayers: (state, action) => {
      const ids = state.map((player) => player.id)
      const arr = [...state]
      action.payload.forEach((player) => {
        if (!ids.includes(player.id)) {
          arr.push(player)
        }
      })
      return arr
    },
    removePlayers: (state, action) => {
      const ids = action.payload.map((player) => player.id)
      return state.filter((item) => !ids.includes(item.id))
    },
  },
});

export const { addPlayers, removePlayers } = playersSlice.actions;

export const selectPlayers = state => state.players;

export default playersSlice.reducer;
