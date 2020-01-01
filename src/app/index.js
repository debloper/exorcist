import Vue from 'vue'
import Buefy from 'buefy'
import './buefy.scss'
import './index.scss'
import App from './components/app.vue'

// Have to explicitly set hardcoded document title x(
document.title = 'exorcist'

// Implement custom titlebar with inline-style override
const { Titlebar, Color } = window.require('custom-electron-titlebar')

new Titlebar({
  menu: false,
  icon: "./img/icon.svg",
  backgroundColor: Color.fromHex('#222')
})

document.querySelector(".window-title").style = "margin-left: 0; font-size: 1rem;"

// Now, let's initialize the Vue app
Vue.use(Buefy)

new Vue({
  render: v => v(App)
}).$mount('#app')
