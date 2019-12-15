<template>
  <section>
    <b-field v-for="(item, index) in payload" :key="index">
      <b-checkbox-button v-model="daemonList" :native-value="item.daemon" >
        <span>{{ item.daemon }}: {{ item.duration }}</span>
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
