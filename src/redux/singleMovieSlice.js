import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIkey from "../constants/API-keys";
import axios from "axios";

const initialState = {
  singleMovieDetailList: {},
  castDetails: [],
  isLoadingMovie: false,
  isLoadingCast: false,
};

export const singleMovieFetch = createAsyncThunk(
  "singleMovieFetch",
  async (movie_id) => {
    const fetchData = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${APIkey}&language=en-US`
    );

    return fetchData.data;
  }
);
export const castDetailFetch = createAsyncThunk(
  "castDetailFetch",
  async (movie_id) => {
    const fetchData = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${APIkey}&language=en-US`
    );

    return fetchData.data;
  }
);

const singleMovieSlice = createSlice({
  name: "singleMovieSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(singleMovieFetch.pending, (state) => {
      state.isLoadingMovie = true;
    }),
      builder.addCase(singleMovieFetch.fulfilled, (state, action) => {
        state.isLoadingMovie = false;
        state.singleMovieDetailList = { ...action.payload };
      }),
      builder.addCase(singleMovieFetch.rejected, (state) => {
        state.isLoadingMovie = false;
        console.log("singleMovieFetch API failed");
      }),
      builder.addCase(castDetailFetch.pending, (state) => {
        state.isLoadingCast = true;
      }),
      builder.addCase(castDetailFetch.fulfilled, (state, action) => {
        state.castDetails = [...action.payload.cast];
        state.isLoadingCast = false;
      }),
      builder.addCase(castDetailFetch.rejected, (state) => {
        state.isLoadingCast = false;
        console.log("castDetailFetch API failed");
      });
  },
});

export default singleMovieSlice.reducer;
