import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "john",
    email: "john@gmail.com",
  },
  reducers: {
    updateUser: (state, action) => {
      (state.name = action.payload.name), (state.email = action.payload.email);
    },
    removeUser: (state) => {
      state.name = "";
      state.email = "";
    },
  },
});

export const { updateUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
