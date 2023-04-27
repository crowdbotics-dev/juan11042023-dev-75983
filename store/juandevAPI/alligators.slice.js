import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_alligator_list = createAsyncThunk(
  "alligators/api_v1_alligator_list",
  async payload => {
    const response = await apiService.api_v1_alligator_list(payload)
    return response.data
  }
)
export const api_v1_alligator_create = createAsyncThunk(
  "alligators/api_v1_alligator_create",
  async payload => {
    const response = await apiService.api_v1_alligator_create(payload)
    return response.data
  }
)
export const api_v1_alligator_retrieve = createAsyncThunk(
  "alligators/api_v1_alligator_retrieve",
  async payload => {
    const response = await apiService.api_v1_alligator_retrieve(payload)
    return response.data
  }
)
export const api_v1_alligator_update = createAsyncThunk(
  "alligators/api_v1_alligator_update",
  async payload => {
    const response = await apiService.api_v1_alligator_update(payload)
    return response.data
  }
)
export const api_v1_alligator_partial_update = createAsyncThunk(
  "alligators/api_v1_alligator_partial_update",
  async payload => {
    const response = await apiService.api_v1_alligator_partial_update(payload)
    return response.data
  }
)
export const api_v1_alligator_destroy = createAsyncThunk(
  "alligators/api_v1_alligator_destroy",
  async payload => {
    const response = await apiService.api_v1_alligator_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const alligatorsSlice = createSlice({
  name: "alligators",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_alligator_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_alligator_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_alligator_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_alligator_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_alligator_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_alligator_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_alligator_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_alligator_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_alligator_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_alligator_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_alligator_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_alligator_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_alligator_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_alligator_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_alligator_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_alligator_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_alligator_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_alligator_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_alligator_list,
  api_v1_alligator_create,
  api_v1_alligator_retrieve,
  api_v1_alligator_update,
  api_v1_alligator_partial_update,
  api_v1_alligator_destroy,
  slice: alligatorsSlice
}
