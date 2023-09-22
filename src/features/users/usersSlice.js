import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Sheldon" },
  { id: "1", name: "Leonard" },
  { id: "2", name: "Penny" },
];

const usersSlice = createSlice({ name: "users", initialState, reducers: {} });

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
