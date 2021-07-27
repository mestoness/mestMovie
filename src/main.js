import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { VueMasonryPlugin } from "vue-masonry";
import VueMeta from "vue-meta";

Vue.use(VueMasonryPlugin);
Vue.use(VueMeta);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
