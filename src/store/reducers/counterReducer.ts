import type { UnknownAction } from 'redux';
import { INCREMENT, DECREMENT, RESET } from '../actions/counterActions';

export interface CounterState {
  value: number;
}

export const initialState: CounterState = { value: 0 };

export function counterReducer(
  state: CounterState = initialState,
  action: UnknownAction,
): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    case RESET:
      return { ...state, value: 0 };
    default:
      return state;
  }
}
