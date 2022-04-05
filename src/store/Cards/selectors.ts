import {RootState} from '../index';
import {CardType} from './types';

export const selectCards = (state:RootState): CardType[] => state.cards.cards
