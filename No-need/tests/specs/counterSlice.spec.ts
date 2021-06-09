import { expect } from 'chai';
import counterReducer, {
  CounterState,
  increment,
  incrementAsync,
  decrement,
  incrementByAmount
} from '../../src/components/counter/counterSlice';

describe('counter reducer', () => {
  const initialState: CounterState = {
    value: 3,
    status: 'idle'
  };
  describe('value', () => {
    it('Should handle initial state', () => {
      expect(counterReducer(undefined, { type: 'unknown' })).to.eql({
        value: 0,
        status: 'idle'
      });
    });

    it('Should handle increment', () => {
      const actual = counterReducer(initialState, increment);
      expect(actual.value).to.equal(4);
    });

    it('Should handle decrement', () => {
      const actual = counterReducer(initialState, decrement);
      expect(actual.value).to.equal(2);
    });

    it('Should handle incrementByAmount', () => {
      const actual = counterReducer(initialState, incrementByAmount(2));
      expect(actual.value).to.equal(5);
    });
  });
});
