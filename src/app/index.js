import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './components/app.vue'

Vue.use(Buefy)

new Vue({
  render: v => v(App)
}).$mount('#app')
