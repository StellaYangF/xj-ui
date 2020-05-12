import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Aside from '@/packages/container/Aside.vue';

describe('Aside.vue', () => {
  it('测试 width 传入属性是否符合预期', () => {
    const wrapper = shallowMount(Aside, {
      attachToDocument: true,
      propsData: {
        width: '300px',
      }
    });
    const el = wrapper.vm.$el;
    console.log(el);
    expect(getComputedStyle(el).width).to.eq('300px');
  })
})

