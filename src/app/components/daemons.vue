<template>
  <section>
    <b-field v-for="(item, index) in payload" :key="index">
      <b-checkbox-button v-on:click='addDesc' v-model="daemonList" :native-value="item.daemon" >
        <span>{{ item.duration }} &mdash; {{ item.daemon }}: {{ item.description }}</span>
      </b-checkbox-button>
    </b-field>
    <p class="content">
      <b>Selection:</b>
      {{ daemonList }}
    </p>
  </section>
</template>

<script>
export default {
  props: ['payload'],
  data () {
    return { daemonList: [] }
  }
}
</script>

<style scoped>

</style>
