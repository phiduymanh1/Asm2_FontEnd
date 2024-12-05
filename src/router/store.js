import { createStore } from 'vuex';

export default createStore({
  state: {
    userData: null  // Lưu trữ dữ liệu người dùng
  },
  mutations: {
    setUserData(state, user) {
      state.userData = user;  // Cập nhật dữ liệu người dùng vào state
    }
  },
  actions: {
    setUserData({ commit }, user) {
      commit('setUserData', user);  // Gọi mutation để cập nhật state
    }
  },
  getters: {
    getUserData(state) {
      return state.userData;  // Getter để lấy dữ liệu người dùng
    }
  }
});
