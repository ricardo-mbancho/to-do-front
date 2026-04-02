<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <TodoInput />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TodoInput from "@/components/TodoInput.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    TodoInput,
  },
});
</script>
