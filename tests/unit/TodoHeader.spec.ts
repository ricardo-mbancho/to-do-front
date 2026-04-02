import { shallowMount } from '@vue/test-utils';
import TodoHeader from '@/components/TodoHeader.vue';

describe('TodoHeader.vue', () => {
  it('should render the title prop', () => {
    const title = 'My Tasks';
    const wrapper = shallowMount(TodoHeader, {
      propsData: { title }
    });
    expect(wrapper.find('h1').text()).toBe(title);
  });
});