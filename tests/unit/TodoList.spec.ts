import { shallowMount } from '@vue/test-utils';
import TodoList from '@/components/TodoList.vue';

const tasksMock = [
  { _id: '1', title: 'Task 1' },
  { _id: '2', title: 'Task 2' }
];

describe('TodoList.vue', () => {
  it('should render tasks when tasks array is not empty', () => {
    const wrapper = shallowMount(TodoList, {
      propsData: { tasks: tasksMock }
    });
    const items = wrapper.findAll('li');
    expect(items.length).toBe(tasksMock.length);
    expect(items.at(0)?.text()).toBe('Task 1');
  });

  it('renders "No tasks found" when tasks is empty and no error', () => {
    const wrapper = shallowMount(TodoList, {
      propsData: { tasks: [] }
    });
    expect(wrapper.find('h1').text()).toBe('No tasks found');
  });

  it('renders error message when tasks is empty and errorMessage exists', () => {
    const wrapper = shallowMount(TodoList, {
      propsData: { tasks: [], errorMessage: 'Failed to load tasks' }
    });
    const h1 = wrapper.find('h1');
    expect(h1.text()).toBe('Failed to load tasks');
    expect(h1.classes()).toContain('error');
  });
});