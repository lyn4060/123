import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import httpRequest from "./utils/httpRequest"
Vue.prototype.$http = httpRequest
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
