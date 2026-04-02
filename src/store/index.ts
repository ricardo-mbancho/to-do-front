import Vue from 'vue';
import Vuex from 'vuex';
import { todoModule, TodoState } from './modules/todo';

export interface RootState {
  todo: TodoState;
}

Vue.use(Vuex);



export default new Vuex.Store({
  modules: {
    todo: todoModule
  }
});