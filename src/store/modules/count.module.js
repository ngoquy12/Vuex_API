const countModule = {
  state: {
    count: 10,
  },

  mutations: {
    increment(state) {
      return (state.count += 100);
    },
  },
};

export default countModule;
