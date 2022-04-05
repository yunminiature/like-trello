import {RootState} from '../index';

export const selectUserName = (state:RootState): string => state.userName.userName
