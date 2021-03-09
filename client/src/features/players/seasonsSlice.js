import { createSlice } from '@reduxjs/toolkit';

export const seasonsSlice = createSlice({
  name: 'seasons',
  initialState: {
    value: [],
  },
  reducers: {
    addSeasons: (state, action) => {
      action.payload.forEach((year) => {
        if (!state.value.includes(year)) {
          state.value.push(year)
        }
      })
    },
    removeSeasons: (state, action) => {
      state.value = state.value.filter((item, i) => !state.value.includes(item))
    },
  },
});

export const { addSeasons, removeSeasons } = seasonsSlice.actions;

export const selectSeasons = state => state.seasons.value;

export default seasonsSlice.reducer;
