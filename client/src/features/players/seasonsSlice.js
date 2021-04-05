import { createSlice } from '@reduxjs/toolkit';

export const seasonsSlice = createSlice({
  name: 'seasons',
  initialState: [],
  reducers: {
    addSeasons: (state, action) => {
      let arr = [...state]
      action.payload.forEach((year) => {
        if (!arr.includes(year)) {
          arr.push(year)
        }
      })
      return arr
    },
    removeSeasons: (state, action) => {
      return state.filter((item) => !action.payload.includes(item))
    },
  },
});

export const { addSeasons, removeSeasons } = seasonsSlice.actions;

export const selectSeasons = state => state.seasons;

export default seasonsSlice.reducer;
