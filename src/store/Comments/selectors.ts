import {RootState} from '../index';
import {CommentType} from './types';

export const selectComments = (state:RootState): CommentType[] => state.comments.comments
