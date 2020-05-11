import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Carousel from '@/packages/carousel/Carousel.vue';
import Icon from '@/packages/Icon.vue';

describe('Carousel.vue', () => {
  it('测试组件是否正常传入 height 属性', () => {
    const wrapper = shallowMount(Carousel, {
      attachToDocument:true,
      stubs: {
        'xj-icon': Icon,
      },
      propsData: {
        height: '200px',
      }
    });
    let ele = wrapper.vm.$el;
    expect(getComputedStyle(ele).height).to.eq('200px');
  });

  it('测试组件鼠标移入 handleMouseEnter 事件', () => {
    const wrapper = shallowMount(Carousel, {
      stubs: {
        'xj-icon': Icon,
      },
    });
    wrapper.trigger('mouseenter');
    expect(wrapper.vm.timer).to.eq(null);
  })

  it('测试组件鼠标移出 handleMouseLeave 事件', () => {
    const wrapper = shallowMount(Carousel, {
      stubs: {
        'xj-icon': Icon,
      },
    });
    wrapper.trigger('mouseenter');
    expect(wrapper.vm.timer).to.eq(null);
    wrapper.trigger('mouseleave');
    expect(wrapper.vm.timer).to.not.eq(null);
  })
})