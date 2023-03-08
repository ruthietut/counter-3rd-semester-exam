<template>
  <div class="container">
    <NavBar />
    <div class="counter">
      <h1>Count: {{ value }}</h1>
      <div class="btncontainer">
        <button class="btn" @click="decrement">-</button>
        <button class="btn" @click="increment">+</button>
      </div>
      <form @submit.prevent="submitValue">
        <input
          placeholder="Input a value "
          type="number"
          v-model="inputValue"
        />
        <button class="set" type="submit">Set</button>
      </form>
      <button class="reset" @click="resetValues">Reset</button>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import useCounter from "@/composables/useCounter";
import { computed, ref } from "vue";
export default {
  components: {
    NavBar,
  },

  setup() {
    const { count, increment, decrement, reset, setValue } = useCounter();
    const value = computed(() => count.value);
    const inputValue = ref("");
    const submitValue = () => {
      setValue(inputValue.value);
      inputValue.value = "";
    };
    const resetValues = () => {
      reset();
      inputValue.value = "";
    };
    return {
      count,
      increment,
      decrement,
      reset,
      value,
      inputValue,
      submitValue,
      resetValues,
    };
  },
};
</script>
