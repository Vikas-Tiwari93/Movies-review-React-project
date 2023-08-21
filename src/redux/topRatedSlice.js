import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import APIkey from "../constants/API-keys";
const initialState = {
  topRatedList: [],
  isLoading: false,
};

export const topRatedFetch = createAsyncThunk(
  "todos/fetchTodos",
  async (page) => {
    const fetchData = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIkey}&language=en-US&page=${page}`
    );
    return fetchData.data;
  }
);

const topRatedSlice = createSlice({
  name: "topRatedSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(topRatedFetch.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(topRatedFetch.fulfilled, (state, action) => {
        state.topRatedList = [...action.payload.results];
        state.isLoading = false;
      }),
      builder.addCase(topRatedFetch.rejected, (state) => {
        state.isLoading = false;
        console.log("topRatedFetch API failed");
      });
  },
});

export default topRatedSlice.reducer;
