import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const get_games_list = createAsyncThunk(
  "get_GameLists/get_games_list",
  async payload => {
    const response = await apiService.get_games_list(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const get_GameListsSlice = createSlice({
  name: "get_GameLists",
  initialState,
  reducers: {},
  extraReducers: {
    [get_games_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [get_games_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [get_games_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default { get_games_list, slice: get_GameListsSlice }
