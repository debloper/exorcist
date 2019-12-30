<template>
  <div>
    <b-table :data="daemons" :columns="columns">
      <template slot-scope="props">
        <b-table-column field="duration" label="Duration" numeric>
          {{ props.row.duration }}
        </b-table-column>
        <b-table-column field="daemon" label="Daemon">
          {{ props.row.daemon }}
        </b-table-column>
        <b-table-column field="description" label="Description">
          {{ props.row.description }}
        </b-table-column>
        <b-table-column field="action" label="Dispel">
          <button class="button is-light is-small">disable</button>
        </b-table-column>
      </template>
    </b-table>
  </div>
</template>

<script>
// The reason for window.require hack:
// https://github.com/electron/electron/issues/7300#issuecomment-274269710
const { ipcRenderer } = window.require('electron')

export default {
  data () {
    return { daemons: [] }
  },
  created () {
    let self = this
    ipcRenderer.on('loaded', (event, data) => {
      self.daemons = data
    })
  }
}
</script>

<style scoped>

</style>
