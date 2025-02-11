import { createSlice } from "@reduxjs/toolkit";


/**
 * Purpose: The createSlice function from @reduxjs/toolkit is imported to simplify the process of creating a slice of the Redux state. 
 * A slice is a collection of Redux reducer logic and actions for a single feature of your app.
 */

/**
 * createSlice: This function takes an object with several properties:
 */
export const counterSlice = createSlice(
    {
        name: 'counter',
        initialState:1,
        reducers: {
          increment: (state) => {
           console.log("old state "+state);
           
          state = state +1;
          console.log("new state "+state);
          return state;
        
          },
          decrement: (state) => {
           console.log("old state "+state);
           
          state = state -1;
          console.log("new state "+state);
          return state;
           
          },
        },
      }
);

/**
 * This line destructures the action creators (increment and decrement) from the slice's actions property. 
 * These action creators can be dispatched to update the state.
 */
export const {increment,decrement} =counterSlice.actions;

// 
//This line exports the slice's reducer as the default export. 
//The reducer can be used in the Redux store to handle actions and update the state accordingly.
//  
export default counterSlice.reducer;