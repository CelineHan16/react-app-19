import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter", // counter/increment
  initialState: {
    number: 0
  },
  reducers: {
    increment: function(store) {
      store.number++;
    },
    decrement: function(store) {
      store.number--;
    },
    reset: function(store) {
      store.number = 0;
    },
    set: function(store, action) {
      store.number = action.payload;
    },
  }
});

export default counterSlice.reducer;



// import { createSlice } from "@reduxjs/toolkit";

// export const counterSlice = createSlice( {
//   name: "counter",
//   initialState: {
//     number: 0,
//   },
//   reducer: {
//     increment: (store) => {
//       store.number++;
//     },
//     // decrement: (store) => {
//     //   store.number--;
//     // }
//   }
// });

// // export const { increment, decrement } = counterSlice.actions;

// export default counterSlice.reducer;