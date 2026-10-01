# Running the Redux activity

## Setup

Use Node.js 22.12 or later (Node 24 is recommended).

```sh
npm ci
npm run dev
```

Open the localhost URL printed by Vite. The counter starts at zero. Increment
adds one, Decrement subtracts one (including negative values), and Reset returns
to zero. Open the browser console to see Redux Logger's actions and state changes.

## Checks

```sh
npm test
npm run lint
npm run build
```

The original instructor-provided instructions are preserved in README.md.

## State flow

The Provider makes the store available to the counter. useSelector reads
state.counter.value and useDispatch sends actions. The combined reducer delegates
them to counterReducer, which returns a new state. React Redux then renders the
updated count. The legacy_createStore export is Redux's createStore implementation
without its deprecation annotation; no Redux Toolkit is used.

The state intentionally resets after a page reload. Persistence is an optional
extension in the activity and is not enabled here.
