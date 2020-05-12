import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Carousel from '@/packages/carousel/Carousel.vue';
import CarouselItem from '@/packages/carousel/CarouselItem.vue';
import Icon from '@/packages/Icon.vue';

describe('Carousel.vue', () => {
  it('测试 height 传入后是否符合预期', () => {
    const wrapper = shallowMount(Carousel, {
      attachToDocument:true,
      stubs: {
        'xj-icon': Icon,
        'xj-carousel-item': CarouselItem,
      },
      slots: {
        default: `
        <xj-carousel-item>
          <div class='content' style='background:red'>content1</div>
        </xj-carousel-item>
        <xj-carousel-item>
          <div class='content' style='background:red'>content2</div>
        </xj-carousel-item>
        <xj-carousel-item>
          <div class='content' style='background:red'>content3</div>
        </xj-carousel-item>
        `
      },
      propsData: {
        height: '200px',
      }
    });
    let ele = wrapper.vm.$el;
    expect(getComputedStyle(ele).height).to.eq('200px');
  });

  it('测试 slot 传入后是否符合预期', () => {
    const wrapper = shallowMount(Carousel, {
      attachToDocument:true,
      stubs: {
        'xj-icon': Icon,
        'xj-carousel-item': CarouselItem,
      },
      slots: {
        default: `
        <xj-carousel-item>
          <div class='content' style='background:red'>content1</div>
        </xj-carousel-item>
        <xj-carousel-item>
          <div class='content' style='background:red'>content2</div>
        </xj-carousel-item>
        <xj-carousel-item>
          <div class='content' style='background:red'>content3</div>
        </xj-carousel-item>
        `
      }
    });
    let item = wrapper.findAll('.content');
    expect(item.length).to.eq(3);
    expect(item.at(0).text()).to.eq('content1');
  });

  it('测试鼠标移入 handleMouseEnter 事件', () => {
    const wrapper = shallowMount(Carousel, {
      stubs: {
        'xj-icon': Icon,
      },
    });
    wrapper.trigger('mouseenter');
    expect(wrapper.vm.timer).to.eq(null);
  })

  it('测试鼠标移出 handleMouseLeave 事件', () => {
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