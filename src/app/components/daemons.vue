<template>
  <section>
    <b-table :data="payload" :columns="columns">
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
        <b-table-column field="action" label="Action">
          <button class="button is-small">disable</button>
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
export default {
  props: ['payload'],
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
