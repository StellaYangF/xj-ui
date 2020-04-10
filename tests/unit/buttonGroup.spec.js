import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import ButtonGroup from '@/packages/ButtonGroup.vue';

describe('ButtonGroup.vue', () => {
  // tdd
  it('1.测试组件能否正常显示传入 slot 的内容', () => {
    const wrapper = shallowMount(ButtonGroup, {
      slots: {
        default: 'welcome'
      }
    })
    expect(wrapper.text()).to.eq('welcome');
  });

  it("2.测试组件 slot 传入组件是否为 button 元素", () => {
    const wrapper = shallowMount(ButtonGroup, {
      attachToDocument: true,
      slots: {
        default: "<button>ok</button>",
      },
    });
    [...wrapper.vm.$el.childNodes].forEach(child => {
      expect(child.tagName).to.be
    })
  });
})
