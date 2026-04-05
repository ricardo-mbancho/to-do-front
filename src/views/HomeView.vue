<template>
  <div>
    <TodoHeader title="To-Do List with Real-Time Updates" />
    <TodoInput @add="handleAdd" />
    <TodoList 
      :tasks="tasks" 
      :errorMessage="errorMessage" 
      :loading="loading"
    />
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
        return this.$store.getters['todo/tasks']
      },
      errorMessage() {
        return this.$store.getters['todo/errorMessage'];
      },
      loading() {
        return this.$store.getters['todo/loading'];
      }
    },
    methods: {
      handleAdd(title: string) {
        this.$store.dispatch('todo/addTask', title)
      }
    },

    created() {
      this.$store.dispatch('todo/loadTasks');
    },

    beforeDestroy() {
      if (this.interval) {
        clearInterval(this.interval)
      }
    }
  })
</script>