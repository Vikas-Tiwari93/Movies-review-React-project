import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIkey from "../constants/API-keys";
import axios from "axios";
const initialState = {
  PopularList: [],
  Totalpages: 10,
  Searched: false,
  isLoading: false,
};

export const popularfetch = createAsyncThunk("popularfetch", async (page) => {
  const fetchData = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${APIkey}&language=en-US&page=${page}`
  );

  return fetchData.data;
});

const PopularSlice = createSlice({
  name: "PopularSlice",
  initialState,
  reducers: {
    isSearchedReducer: (state, action) => {
      state.Searched = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(popularfetch.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(popularfetch.fulfilled, (state, action) => {
        state.PopularList = [...action.payload.results];
        state.isLoading = false;
      }),
      builder.addCase(popularfetch.rejected, (state) => {
        state.isLoading = false;
        console.log("popularfetch API failed");
      });
  },
});

export default PopularSlice.reducer;
export const { isSearchedReducer } = PopularSlice.actions;
