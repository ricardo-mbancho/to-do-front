<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    props: {
      title: {
        type: String,
        required: true
      }
    }
  })
</script>

<style scoped>
  header {
    text-align: center;
    margin-bottom: 1rem;
  }
</style>