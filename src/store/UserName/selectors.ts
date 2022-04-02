import {RootState, AppDispatch} from '../index';
import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux'

export const useUserNameSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useUserNameDispatch = () => useDispatch<AppDispatch>()
