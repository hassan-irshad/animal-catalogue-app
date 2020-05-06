import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

// import { authConfig } from './config'
// import { Auth0Plugin } from './auth/index'

// Vue.use(Auth0Plugin, {
//   domain: authConfig.domain,
//   clientId: authConfig.clientId,
//   onRedirectCallback: appState => {
//     router.push(
//       appState && appState.targetUrl
//         ? appState.targetUrl
//         : window.location.pathname
//     )
//   }
// })

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
