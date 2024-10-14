import { createStore } from "vuex";
import countModule from "./modules/count.module";
import postModule from "./modules/post.module";

const store = createStore({
  modules: {
    countModule,
    postModule,
  },
});

export default store;
