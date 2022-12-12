import { createSlice } from "@reduxjs/toolkit";
import { IUsers } from "../../models/models";

interface IInitialState {
  users: null | IUsers[];
}

const initialState: IInitialState = {
  users: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export default usersSlice;
export const { setUsers } = usersSlice.actions;
