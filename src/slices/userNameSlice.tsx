import { createSlice } from '@reduxjs/toolkit'

const initialState = {userName:""};

const userNameSlice = createSlice({
  name: "userName",
  initialState,
  reducers: {
    addUserName(state, action) {},
  },
});

const {userNameActions, userNameReducer} = userNameSlice;

export const {
  addUserName
} = userNameActions;

export default userNameReducer;
