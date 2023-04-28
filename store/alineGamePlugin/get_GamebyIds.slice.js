import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const get_games_read = createAsyncThunk("get_GamebyIds/get_games_read", async payload => {
  const response = await apiService.get_games_read(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const get_GamebyIdsSlice = createSlice({
  name: "get_GamebyIds",
  initialState,
  reducers: {},
  extraReducers: {
    [get_games_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [get_games_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [get_games_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  get_games_read,
  slice: get_GamebyIdsSlice
};