import {RootState} from '../index';
import {ColumnType} from './types';

export const selectColumns = (state:RootState): ColumnType[] => state.columns.columns
