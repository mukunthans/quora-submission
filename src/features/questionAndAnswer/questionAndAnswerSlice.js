import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  loading: false,
  qAa: [],
  error: "",
};

export const fetchQAndAData = createAsyncThunk("qAa/fetchQuestionsAndAnswers", async (search) => {

  console.log(search);
  const response = await axios.get("http://localhost:3500/questions");
  
  return response.data;
});

const qAaSlice = createSlice({
  name: "qAa",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchQAndAData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchQAndAData.fulfilled, (state, action) => {
      state.loading = false;
      state.qAa = action.payload;
      state.error = "";
    });
    builder.addCase(fetchQAndAData.rejected, (state, action) => {
      state.loading = false;
      state.qAa = [];
      state.error = action.error.message;
    });
  },
});

export default qAaSlice.reducer;
