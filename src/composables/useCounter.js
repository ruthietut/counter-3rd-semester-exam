import { computed } from "vue";
import { useStore } from "vuex";

export default function useCounter() {
  const store = useStore();

  const count = computed(() => store.state.counter.count);

  function increment() {
    store.commit("counter/increment");
  }

  function decrement() {
    store.commit("counter/decrement");
  }

  function reset() {
    store.commit("counter/reset");
  }

  function setValue(value) {
    store.commit("counter/setValue", value);
  }

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
}
