import { expect, it, vi } from 'vitest';
import { store } from './store';
import { increment, reset } from './actions/counterActions';

it('dispatches through the configured logger middleware', () => {
  const log = vi.spyOn(console, 'log').mockImplementation(() => {});
  const group = vi.spyOn(console, 'group').mockImplementation(() => {});
  const groupEnd = vi.spyOn(console, 'groupEnd').mockImplementation(() => {});
  try {
    store.dispatch(increment());
    expect(store.getState().counter.value).toBe(1);
    expect(log).toHaveBeenCalled();
    store.dispatch(reset());
    expect(store.getState().counter.value).toBe(0);
  } finally {
    log.mockRestore();
    group.mockRestore();
    groupEnd.mockRestore();
  }
});
