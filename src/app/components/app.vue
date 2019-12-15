<template>
  <div id="app">
    <h1 id="title">Exorcist</h1>
    <pre id="details">loading...</pre>
  </div>
</template>

<script>
const { ipcRenderer } = window.require('electron')

module.exports = {
  name: 'app',
  mounted: () => {
      ipcRenderer.on('loaded', (event, data) => {
      document.getElementById('details').innerHTML = JSON.stringify(data, '  ', null)
    })
  }
}
</script>

<style scoped>

</style>
