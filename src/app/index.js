import Vue from 'vue'
import Buefy from 'buefy'
import './buefy.scss'
import './index.scss'
import App from './components/app.vue'

Vue.use(Buefy)

new Vue({
  render: v => v(App)
}).$mount('#app')
