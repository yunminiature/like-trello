import {RootState, AppDispatch} from '../index';
import {createSelector} from "reselect";
import {useSelector, TypedUseSelectorHook, useDispatch} from 'react-redux'
//import {useUserNameSelector} from '../UserName/selectors'

export const useCardsSelector: TypedUseSelectorHook<RootState> = useSelector;
// const userNameAndCardsSelector = createSelector(
//   [useUserNameSelector, useCardsSelector],
//   (userName, cards) => [userName, cards]
// )
// export const useUserNameAndCardsSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useCardsDispatch = () => useDispatch<AppDispatch>()
