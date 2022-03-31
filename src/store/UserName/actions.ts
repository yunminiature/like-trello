import { createAction } from '@reduxjs/toolkit';
import {ActionTypes} from './types';

export const addUserName = createAction<string>(ActionTypes.ADD_USERNAME)
