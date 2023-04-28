import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_wolf_list = createAsyncThunk("wolves/api_v1_wolf_list", async payload => {
  const response = await apiService.api_v1_wolf_list(payload);
  return response.data;
});
export const api_v1_wolf_create = createAsyncThunk("wolves/api_v1_wolf_create", async payload => {
  const response = await apiService.api_v1_wolf_create(payload);
  return response.data;
});
export const api_v1_wolf_retrieve = createAsyncThunk("wolves/api_v1_wolf_retrieve", async payload => {
  const response = await apiService.api_v1_wolf_retrieve(payload);
  return response.data;
});
export const api_v1_wolf_update = createAsyncThunk("wolves/api_v1_wolf_update", async payload => {
  const response = await apiService.api_v1_wolf_update(payload);
  return response.data;
});
export const api_v1_wolf_partial_update = createAsyncThunk("wolves/api_v1_wolf_partial_update", async payload => {
  const response = await apiService.api_v1_wolf_partial_update(payload);
  return response.data;
});
export const api_v1_wolf_destroy = createAsyncThunk("wolves/api_v1_wolf_destroy", async payload => {
  const response = await apiService.api_v1_wolf_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const wolvesSlice = createSlice({
  name: "wolves",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_wolf_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_wolf_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [api_v1_wolf_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_wolf_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_wolf_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [api_v1_wolf_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_wolf_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_wolf_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [api_v1_wolf_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_wolf_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_wolf_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_wolf_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_wolf_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_wolf_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_wolf_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_wolf_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_wolf_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    },
    [api_v1_wolf_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  api_v1_wolf_list,
  api_v1_wolf_create,
  api_v1_wolf_retrieve,
  api_v1_wolf_update,
  api_v1_wolf_partial_update,
  api_v1_wolf_destroy,
  slice: wolvesSlice
};