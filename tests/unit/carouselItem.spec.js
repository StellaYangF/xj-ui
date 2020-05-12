import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import CarouselItem from '@/packages/carousel/CarouselItem.vue';

describe('CarouselItem.vue', () => {
  it('测试是否正常传入 reverse 属性', () => {
    const wrapper = shallowMount(CarouselItem, {
      attachToDocument:true,
      propsData: {
        'reverse': false,
      }
    });
    expect(wrapper.vm.reverse).to.eq(false);
  });

  it('测试 slot 传入后是否符合预期', () => {
    const wrapper = shallowMount(CarouselItem, {
      attachToDocument:true,
      slots: {
        default: `
          <div class='content' style='background:red'>content1</div>
        `
      }
    });
    const slot = wrapper.findAll('.content');
    expect(slot.length).to.eq(1);
    expect(slot.at(0).text()).to.eq('content1');
  });

  it ('测试计算属性 isShow 是否正常', () => {
    const wrapper = shallowMount(CarouselItem, {
      attachToDocument: true,
    });
    expect(wrapper.vm.isShow).to.eq(false);
  })

})