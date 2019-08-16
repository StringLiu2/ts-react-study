import { ACTION_TYPE, INCREMENT_COUNTER, DECREMENT_COUNTER } from "./types";

interface CountState {
    count: number
}
export const initialState: CountState = {
    count: 0
}
export function countReducer(state = initialState, action: ACTION_TYPE):CountState {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return { ...state, count: state.count + action.number };
        case DECREMENT_COUNTER:
            return { ...state, count: state.count - action.number };
        default:
            return state;
    }
}