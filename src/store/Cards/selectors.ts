import {RootState, AppDispatch} from '../index';
import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux'

export const useCardsSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useCardsDispatch = () => useDispatch<AppDispatch>()
