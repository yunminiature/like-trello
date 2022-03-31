import {createReducer, PayloadAction} from '@reduxjs/toolkit';
import {Local} from '../../services/LocalStorage'
import {UserNameType} from './types';
import {
  addUserName
} from './actions'


const initialState: UserNameType = {
  userName:""
};

const userNameReducer = createReducer<UserNameType>(initialState, {
  [addUserName.type]: (state, action: PayloadAction<UserNameType>) => {
    state.userName=action.payload.userName
  }
})

export default userNameReducer
