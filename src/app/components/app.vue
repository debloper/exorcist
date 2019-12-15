<template>
  <div id="app">
    <app-header />
    <app-daemons :payload="daemons" />
  </div>
</template>

<script>
// The reason for window.require hack:
// https://github.com/electron/electron/issues/7300#issuecomment-274269710
const { ipcRenderer } = window.require('electron')

import AppHeader from './header.vue'
import AppDaemons from './daemons.vue'

export default {
  components: {
    AppHeader,
    AppDaemons
  },
  data () {
    return { daemons: [] }
  },
  created () {
    // HAX(
    document.title = "exorcist"

    let self = this
    ipcRenderer.on('loaded', (event, data) => {
      self.daemons = data
    })
  }
}
</script>

<style scoped>

</style>
