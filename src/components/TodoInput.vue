<template>
  <div>
    <input
      v-model="task"
      placeholder="Add a task"
    />
    <button :disabled="!trimmedTask" @click="submit">Add</button>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  interface TodoInputData {
    task: string
  }

  export default Vue.extend({
    name: 'TodoInput',
    data(): TodoInputData {
      return {
        task: ''
      }
    },
    computed: {
      trimmedTask(): string {
        return this.task.trim()
      }
    },
    methods: {
      submit() {
        const value = this.task.trim();
        if (!value) return;

        this.$emit('add', value);
        this.task = '';
      }
    }
  })
</script>

<style scoped>
  input {
    padding: 0.5rem;
    width: 90%;
  }
  button {
    padding: 0.5rem 1rem;
    margin-left: 0.5rem;
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>