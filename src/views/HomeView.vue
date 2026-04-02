<template>
  <div>
    <TodoHeader title="To-Do List with Real-Time Updates" />
    <TodoInput @add="handleAdd" />
    <TodoList :tasks="tasks" :errorMessage="errorMessage" />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import TodoHeader from '../components/TodoHeader.vue';
  import TodoInput from '../components/TodoInput.vue';
  import TodoList from '../components/TodoList.vue';

  export default Vue.extend({
    name: 'HomeView',
    components: { TodoHeader, TodoInput, TodoList },
    data() {
      return {
        interval: null as ReturnType<typeof setInterval> | null
      }
    },

    computed: {
      tasks() {
        return this.$store.getters.tasks
      },
      errorMessage() {
        return this.$store.getters.errorMessage;
      }
    },

    methods: {
      handleAdd(title: string) {
        this.$store.dispatch('addTask', title)
      }
    },

    created() {
      this.$store.dispatch('loadTasks');

      // Poll tasks every 5 seconds
      this.interval = setInterval(() => {
        this.$store.dispatch('loadTasks');
      }, 5000)
    },

    beforeDestroy() {
      if (this.interval) {
        clearInterval(this.interval)
      }
    }
  })
</script>