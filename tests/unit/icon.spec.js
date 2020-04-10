import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Icon from '@/packages/Icon.vue';

describe('Icon.vue', () => {
  // tdd
  it('1.测试组件能否正常显示传入 icon 的内容', () => {
    const wrapper = shallowMount(Icon, {
      propsData: {
        icon: 'edit'
      }
    })
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-edit');
  })
})
