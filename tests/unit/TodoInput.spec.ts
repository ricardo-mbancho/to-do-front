import { shallowMount, Wrapper } from '@vue/test-utils';
import Vue from 'vue';
import TodoInput from '@/components/TodoInput.vue';

interface TodoInputInstance extends Vue {
  task: string;
  trimmedTask: string;
  submit(): void;
}

describe('TodoInput.vue', () => {
  let wrapper: Wrapper<TodoInputInstance>;

  beforeEach(() => {
    wrapper = shallowMount<TodoInputInstance>(TodoInput);
  });

  it('should bind input to task data', async () => {
    const input = wrapper.find('input');
    await input.setValue('New Task');
    expect(wrapper.vm.task).toBe('New Task');
  });

  it('should disable button if task is empty or whitespace', async () => {
    const button = wrapper.find('button');

    expect(button.attributes('disabled')).toBe('disabled');

    wrapper.vm.task = '   ';
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.trimmedTask).toBe('');
    expect(button.attributes('disabled')).toBe('disabled');

    wrapper.vm.task = 'Task 1';
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.trimmedTask).toBe('Task 1');
    expect(button.attributes('disabled')).toBeUndefined();
  });
});