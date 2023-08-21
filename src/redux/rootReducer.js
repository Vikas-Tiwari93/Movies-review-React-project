import { combineReducers } from "@reduxjs/toolkit";
import PopularSlice from "./PopularHomeSlice";
import topRatedSlice from "./topRatedSlice.js";
import upcommingSlice from "./upcommingSlice.js";
import singleMovieSlice from "./singleMovieSlice.js";
import SearchSlice from "./SearchSlice";

const rootReducer = combineReducers({
  PopularSlice: PopularSlice,
  topRatedSlice: topRatedSlice,
  upcommingSlice: upcommingSlice,
  singleMovieSlice: singleMovieSlice,
  SearchSlice: SearchSlice,
});

export default rootReducer;
