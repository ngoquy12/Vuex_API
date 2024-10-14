import { getAllPost } from "@/api/postApi";
import { SET_DATA, SET_ERROR, SET_LOADING } from "@/constants/mutationTypes";

const postModule = {
  // Khởi tạo các state của post Module
  state: {
    loading: false,
    data: [],
    error: null,
  },

  // Chứa các hàm đồng bộ để cập nhật lại state
  mutations: {
    [SET_LOADING](state, payload) {
      // Cập nhật lại giá trị cho loading
      state.loading = payload;
    },

    [SET_DATA](state, payload) {
      // Cập nhật lại giá trị cho data
      state.data = payload;
    },

    [SET_ERROR](state, payload) {
      // Cập nhật lại giá trị cho error
      state.error = payload;
    },
  },

  // Chứa các hàm bất đồng bộ: gọi API tương tác với dữ liệu
  actions: {
    async fetchData({ commit }) {
      commit(SET_LOADING, true);
      try {
        const response = await getAllPost();

        commit(SET_DATA, response.data);
      } catch (error) {
        commit(SET_ERROR, error);
      } finally {
        commit(SET_LOADING, false);
      }
    },
  },

  //
  getters: {
    // Lấy ra tổng số bài viết
    countPost: (state) => state.data.length,
  },
};

export default postModule;
