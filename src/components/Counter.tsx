import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';
import { decrement, increment, reset } from '../store/actions/counterActions';
import styles from './Counter.module.css';

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className={styles.counterContainer} aria-labelledby="counter-heading">
      <h2 id="counter-heading">Counter</h2>
      <output className={styles.value} aria-live="polite" aria-label="Counter value">
        {count}
      </output>
      <div className={styles.controls}>
        <button aria-label="Decrement" onClick={() => dispatch(decrement())}>−</button>
        <button aria-label="Increment" onClick={() => dispatch(increment())}>+</button>
      </div>
      <button className={styles.reset} onClick={() => dispatch(reset())}>Reset</button>
      <p>One shared state. Every action updates the count.</p>
    </section>
  );
}
