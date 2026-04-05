<template>
  <div>
    <h1 v-if="loading">
      Loading...
    </h1>
    <h1 v-else-if="errorMessage" class="error">
      {{ errorMessage }}
    </h1>
    <h1 v-else-if="tasks.length === 0 && !loading">
      No tasks found
    </h1>
    <ul v-else>
      <li v-for="task in tasks" :key="task._id">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue, { PropType } from 'vue';

  export interface Task {
    _id: string
    title: string
  }
  export default Vue.extend({
    props: {
      loading: {
        type: Boolean as PropType<boolean>,
        required: true
      },
      tasks: {
        type: Array as () => Task[], 
        required: true
      }, 
      errorMessage: {
        type: String as PropType<string>,
      }
    }
  })
</script>

<style scoped>
  li {
    background: var(--bg-color);
    margin-bottom: 0.5rem;
    padding: 0.5rem;
  }
  .error {
    color: var(--primary-error);
    font-weight: bold;
    margin-bottom: 1rem;
  }
</style>