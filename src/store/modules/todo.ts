import { Module } from 'vuex';
import { createTask, fetchTasks } from '@/services/taskService';
import { RootState } from '../index';

export interface Task {
  _id: string;
  title: string;
}

export interface TodoState {
  tasks: Task[];
  error: string;
  loading: boolean;
}

interface customeError {
  loadedTasks: string;
  addTask: string;
}

const customeError: customeError = {
  loadedTasks: 'Failed to load Todos',
  addTask: 'Failed to add Todos',
};

export const todoModule: Module<TodoState, RootState> = {
  namespaced: true,

  state: {
    tasks: [],
    error: '',
    loading: true,
  },

  mutations: {
    SET_TASKS(state, tasks: Task[]) {
      state.tasks = tasks;
      state.loading = false;
    },
    ADD_TASK(state, task: Task) {
      state.tasks.unshift(task);
    },
    SET_ERROR(state, message: string) {
      state.error = message;
      state.loading = false;
    }
  },

  actions: {
    async loadTasks({ commit }) {
      try {
        const res = await fetchTasks();
        commit('SET_TASKS', res.data);
        commit('SET_ERROR', '');
      } catch {
        commit('SET_ERROR', customeError.loadedTasks);
      }
    },

    async addTask({ commit }, title: string) {
      try {
        const res = await createTask(title);
        commit('ADD_TASK', res.data);
        commit('SET_ERROR', '');
      } catch {
        commit('SET_ERROR', customeError.addTask);
      }
    }
  },

  getters: {
    tasks: (state: TodoState) => state.tasks,
    errorMessage: (state: TodoState) => state.error,
    loading: (state: TodoState) => state.loading
  }
};