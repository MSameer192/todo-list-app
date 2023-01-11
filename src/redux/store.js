import { createStore } from 'redux';
import { reducer } from "./reducer";
// import { configureStore } from "@reduxjs/toolkit";

// const store = configureStore({
//     reducer: reducer,
//   });

const store = createStore(reducer);

export default store