import { createSelector, createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      if(state.value>1){
        state.value -= 1
      } else {
        alert('no')
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    setByAmount: (state, action) => {
      state.value = action.payload
    },
    doSearch: (state, action) => {
      window.location.href='/?search=true'
    }
  }
});

export const selectCount = createSelector((state) => state.counter, counter => counter.value)

export const { increment, decrement, incrementByAmount,setByAmount, doSearch } = counterSlice.actions
export default counterSlice.reducer

