import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { createTask, fetchTasks } from '@/services/taskService';

Vue.use(Vuex)

export interface Task {
  _id: string
  title: string
}

interface State {
  tasks: Task[],
  error: string;
}
const customeError = {
  loadedTasks: 'Failed to load Todos, Please try again in few seconds',
  addTask: 'Failed to add Todos, Please try again in few seconds',
}


export default new Vuex.Store<State>({
  state: {
    tasks: [],
    error: ""
  },

  mutations: {
    SET_TASKS(state, tasks: Task[]) {
      state.tasks = tasks
    },
    ADD_TASK(state, task: Task) {
      state.tasks.unshift(task)
    },
    SET_ERROR(state, message) {
      state.error = message
    },
  },

  actions: {
    async loadTasks({ commit }) {
      try {
        const res = await fetchTasks();
        commit('SET_TASKS', res.data);
        commit('SET_ERROR', '');
      } catch(err) {
        commit('SET_ERROR', customeError.loadedTasks);
      }
    },
    async addTask({ commit }, title: string) {
      try {
        const res = await createTask(title);
        commit('ADD_TASK', res.data);
        commit('SET_ERROR', '');
      } catch(err) {
        commit('SET_ERROR', customeError.addTask);
      }
    }
  },

  getters: {
    tasks: (state) => state.tasks,
    errorMessage: (state) => state.error
  }
})