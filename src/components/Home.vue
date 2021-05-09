<template>
  <div id="app">
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementBy">+3</button>
    <button @click="decrementBy">-3</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import {
  // INCREMENT_MUT,
  // DECREMENT_MUT,
  // INCREMENT_BY_MUT,
  // DECREMENT_BY_MUT,
  INCREMENT_ACT,
  DECREMENT_ACT,
  INCREMENT_BY_ACT,
  DECREMENT_BY_ACT,
  INCREMENT_IF_ODD_ACT,
  INCREMENT_ASYNC_ACT,
  IS_ODD,
} from "../store/def.js";

export default {
  setup() {
    const store = useStore();

    return {
      count: computed(() => store.state.count),
      evenOrOdd: computed(() => (store.getters[IS_ODD] ? "Odd" : "Even")),
      increment: () => store.dispatch(INCREMENT_ACT),
      decrement: () => store.dispatch(DECREMENT_ACT),

      incrementBy: () => store.dispatch(INCREMENT_BY_ACT, 3),
      decrementBy: () => store.dispatch(DECREMENT_BY_ACT, { amount: 3 }),

      incrementIfOdd: () => store.dispatch(INCREMENT_IF_ODD_ACT),
      incrementAsync: () => store.dispatch(INCREMENT_ASYNC_ACT),
    };
  },
};
</script>