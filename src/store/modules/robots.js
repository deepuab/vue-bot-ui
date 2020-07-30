import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: [],
    parts: null,
  },
  mutations: {
    addRobotToCart(state, robot) {
      state.cart.push(robot);
    },
    updateParts(state, parts) {
      state.parts = parts;
    },
  },
  actions: {
    getParts({ commit }) {
      // Calling API and setting data in Vuex store using mutation function
      axios.get('/api/parts')
        .then((results) => commit('updateParts', results.data))
        .catch(console.error);
    },
    addRobotToCart({ commit, state }, robot) {
      const cart = [...state.cart, robot];
      return axios.post('api/cart', cart)
        .then(() => {
          commit('addRobotToCart', robot);
        });
    },

  },
  getters: {
    cartSaleItems(state) {
      return state.cart.filter((item) => item.head.onSale);
    },
  },
};
