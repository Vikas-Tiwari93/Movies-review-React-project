import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import APIkey from "../constants/API-keys";
import axios from "axios";
const initialState = {
  SearchList: [],
  Totalpages: 10,
  isLoading: false,
};

export const searchfetch = createAsyncThunk(
  "searchfetch",
  async ({ searchparam, pageno }) => {
    const fetchData = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIkey}&language=en-US&query=${searchparam}&page=${pageno}`
    );
    console.log(fetchData.data);
    return fetchData.data;
  }
);

const SearchSlice = createSlice({
  name: "SearchSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchfetch.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(searchfetch.fulfilled, (state, action) => {
        state.SearchList = [...action.payload.results];
        state.isLoading = false;
      }),
      builder.addCase(searchfetch.rejected, (state) => {
        state.isLoading = false;
        console.log("searchfetch API failed");
      });
  },
});

export default SearchSlice.reducer;
