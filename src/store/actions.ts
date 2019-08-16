import { INCREMENT_COUNTER, DECREMENT_COUNTER, INCREMENT_ACTION_TYPE, DECREMENT_ACTION_TYPE } from './types';
import { Dispatch } from 'redux';

const incrementCount = (number: number): INCREMENT_ACTION_TYPE => ({ type: INCREMENT_COUNTER, number });
export const asyncIncrementCount = (number: number) => (dispatch: Dispatch<INCREMENT_ACTION_TYPE>) => {
    setTimeout(() => dispatch(incrementCount(number)), 1000);
}
export const decrementCount = (number: number): DECREMENT_ACTION_TYPE => ({ type: DECREMENT_COUNTER, number });