import { configureStore } from '@reduxjs/toolkit'
import countReducer from './slice/counter/index.js'

export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
})