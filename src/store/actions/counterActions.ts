export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const increment = () => ({ type: INCREMENT } as const);
export const decrement = () => ({ type: DECREMENT } as const);
export const reset = () => ({ type: RESET } as const);

export type CounterAction = ReturnType<typeof increment | typeof decrement | typeof reset>;
