export default {
  namespaced: true,
  state: {
    count: 0,
    inputValue: "",
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    reset(state) {
      state.count = 0;
      state.inputValue = "";
    },
    setValue(state, value) {
      const insertVal = Number(value);
      if (!isNaN(insertVal)) {
        state.count += insertVal;
      }
      state.inputValue = "";
    },
  },
};
