import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "proifle",
  initialState: {
    user: {
      name: "",
      email: "",
    },
    pending: false,
    error: false,
  },
  reducers: {
    updateProfileStart: (state) => {
      state.pending = true;
    },
    updateProfileSuccess: (state, action) => {
      state.pending = false;
      state.user = action.payload;
      state.error = false;
    },
    updateProfileError: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateProfileError, updateProfileStart, updateProfileSuccess } =
  profileSlice.actions;

export default profileSlice.reducer;
