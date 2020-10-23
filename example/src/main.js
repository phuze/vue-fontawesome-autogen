import Vue from 'vue'
import App from './App.vue'

// Import autogenerated fontawesome imports
import "@/plugins/fontawesome-autogen.js"

// Import fontawesome shim component
import Fa from "@adambh/vue-fontawesome-autogen/Fa.vue";
Vue.component("fa", Fa);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app");