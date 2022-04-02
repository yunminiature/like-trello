import {RootState, AppDispatch} from '../index';
import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux'

export const useColumnsSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useColumnsDispatch = () => useDispatch<AppDispatch>()
