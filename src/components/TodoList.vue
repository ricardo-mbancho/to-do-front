<template>
  <div>
    <h1 v-if="!tasks.length && !errorMessage">
      No tasks found
    </h1>
    <h1 v-if="!tasks.length && errorMessage" class="error">
      {{ errorMessage }}
    </h1>
    <ul>
      <li v-for="task in tasks" :key="task._id">
        {{ task.title }}
      </li>
    </ul>
</div>

</template>

<script lang="ts">
  import Vue, { PropType } from 'vue';

  interface Task {
    _id: string
    title: string
  }

  export default Vue.extend({
    name: 'TaskList',
    props: {
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