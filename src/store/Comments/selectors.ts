import {RootState, AppDispatch} from '../index';
import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux'

export const useCommentsSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useCommentsDispatch = () => useDispatch<AppDispatch>()
