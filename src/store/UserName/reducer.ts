import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {UserNameType} from './types';
import {
  addUserName
} from './actions'


const initialState: UserNameType = {
} as UserNameType;

const userNameReducer = createReducer<UserNameType>(initialState, {
  [addUserName.type]: (state, action: PayloadAction<string>) => {
    state.userName=action.payload
  }
})

export default userNameReducer
