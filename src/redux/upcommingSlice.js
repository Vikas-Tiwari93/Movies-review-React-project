import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIkey from "../constants/API-keys";
import axios from "axios";
const initialState = {
  upCommingList: [],
  isLoading: false,
};

export const upCommingFetch = createAsyncThunk(
  "todos/fetchTodos",
  async (page) => {
    const fetchData = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIkey}&language=en-US&page=${page}`
    );
    return fetchData.data;
  }
);

const upcommingSlice = createSlice({
  name: "upcommingSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(upCommingFetch.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(upCommingFetch.fulfilled, (state, action) => {
        state.upCommingList = [...action.payload.results];
        state.isLoading = false;
      }),
      builder.addCase(upCommingFetch.rejected, (state) => {
        state.isLoading = false;
        console.log("upCommingFetch API failed");
      });
  },
});

export default upcommingSlice.reducer;
