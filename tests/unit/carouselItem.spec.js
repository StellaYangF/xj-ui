import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CarouselItem from '@/packages/carousel/CarouselItem.vue';

describe('CarouselItem.vue', () => {
  it('测试组件是否正常传入 reverse 属性', () => {
    const wrapper = shallowMount(CarouselItem, {
      attachToDocument:true,
      stubs: {
        'reverse': false,
      }
    });
    expect(wrapper.vm.reverse).to.eq(false);
  });

  it ('测试计算属性 isShow 是否正常', () => {
    const wrapper = shallowMount(CarouselItem, {
      attachToDocument: true,
    });
    expect(wrapper.vm.isShow).to.eq(false);
  })

})