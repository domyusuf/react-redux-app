import { describe, expect, it } from 'vitest';
import { legacy_createStore as createStore } from 'redux';
import { increment, decrement, reset } from '../actions/counterActions';
import { counterReducer } from './counterReducer';
import { rootReducer } from './index';

describe('counter reducer', () => {
  it('initializes at zero and preserves state for unrelated actions', () => {
    const initial = counterReducer(undefined, { type: 'INIT' });
    expect(initial).toEqual({ value: 0 });
    expect(counterReducer(initial, { type: 'UNKNOWN' })).toBe(initial);
  });

  it('increments without changing the input state', () => {
    const previous = Object.freeze({ value: 4 });
    expect(counterReducer(previous, increment())).toEqual({ value: 5 });
    expect(previous.value).toBe(4);
  });

  it('decrements below zero', () => {
    expect(counterReducer({ value: 0 }, decrement())).toEqual({ value: -1 });
  });

  it.each([-5, 0, 8])('resets %i to zero', (value) => {
    expect(counterReducer({ value }, reset())).toEqual({ value: 0 });
  });

  it('updates the combined store and notifies subscribers in action order', () => {
    const store = createStore(rootReducer);
    const values: number[] = [];
    const unsubscribe = store.subscribe(() => values.push(store.getState().counter.value));
    store.dispatch(increment());
    store.dispatch(increment());
    store.dispatch(decrement());
    store.dispatch(reset());
    unsubscribe();
    expect(values).toEqual([1, 2, 1, 0]);
    expect(store.getState()).toEqual({ counter: { value: 0 } });
  });
});
