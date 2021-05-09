// It is a commonly seen pattern to use constants to define the  action/mutation names in various Flux-like implementations.
// this will reduce the nr of bugges becuase of typo
// https://next.vuex.vuejs.org/guide/mutations.html#using-constants-for-mutation-types
const INCREMENT_MUT = 'increment';
const DECREMENT_MUT = 'decrement';
const INCREMENT_BY_MUT = 'incrementBy';
const DECREMENT_BY_MUT = 'decrementBy';
const INCREMENT_ACT = 'increment';
const DECREMENT_ACT = 'decrement';
const INCREMENT_BY_ACT = 'incrementBy';
const DECREMENT_BY_ACT = 'decrementBy';
const INCREMENT_IF_ODD_ACT = 'incrementIfOdd';
const INCREMENT_ASYNC_ACT = 'incrementAsync';
const IS_ODD = 'isOdd';

export {
    INCREMENT_MUT,
    DECREMENT_MUT,
    INCREMENT_BY_MUT,
    DECREMENT_BY_MUT,
    INCREMENT_ACT,
    DECREMENT_ACT,
    INCREMENT_BY_ACT,
    DECREMENT_BY_ACT,
    INCREMENT_IF_ODD_ACT,
    INCREMENT_ASYNC_ACT,
    IS_ODD,
}
