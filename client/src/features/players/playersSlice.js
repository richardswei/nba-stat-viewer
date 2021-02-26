import { createSlice } from '@reduxjs/toolkit';

export const playersSlice = createSlice({
  name: 'players',
  initialState: {
    value: [],
  },
  reducers: {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    addPlayers: (state, action) => {
      const ids = state.value.map((player) => player.id)
      action.payload.forEach((player, idx) => {
        if (!ids.includes(player.id)) {
          state.value.push(player)
        }
      })
    },
    removePlayers: (state, action) => {
      const ids = action.payload.map((player) => player.id)
      state.value = state.value.filter((item, i) => !ids.includes(item.id))
    },
  },
});

export const { addPlayers, removePlayers } = playersSlice.actions;

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched

/*export const incrementAsync = amount => dispatch => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};*/

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.players.value)`
export const selectPlayers = state => state.players.value;

export default playersSlice.reducer;
