const createSlice = require('@reduxjs/toolkit').createSlice;
const { icecreamActions } = require('../icecream/icecreamSlice');

const initialState = {
  numOfCakes: 10,
}

const cakeSlice = createSlice({
  name: 'cake',
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restock: (state, action) => {
      state.numOfCakes += action.payload;
    }
  },
  // extraReducers: (builder) => {
  //   builder.addCase(icecreamActions.ordered, (state) => {
  //     state.numOfCakes--;
  //   })
  // },
})

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;