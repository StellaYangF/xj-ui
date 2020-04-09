import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Button from '@/packages/Button.vue';
import Icon from '@/packages/Icon.vue';

describe('Button.vue', () => {
  // tdd
  it('1.测试组件能否正常显示 slot 的内容', () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: 'welcome'
      }
    })
    expect(wrapper.text()).to.eq('welcome');
  })
  it('2.测试 icon 组件能否正常显示传入', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'xj-icon': Icon // 替换 xj-icon 为 Icon, 不渲染，只加一个标签
      },
      propsData: { 
        icon: 'success'
       }
    })
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-success');
  })
  it('3.测试 type 为 loading 时，是否禁用状态', () => {
    const wrapper = shallowMount(Button, {
      stubs: {
        'xj-icon': Icon,
      },
      propsData: { 
        loading: true
       }
    })
    expect(wrapper.find('use').attributes('href')).to.eq('#icon-loading');
    expect(wrapper.find('button').attributes('disabled')).to.eq('disabled');
  })
  it('4.测试按钮能否正常点击', () => {
    const wrapper = shallowMount(Button)
    wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click').length).to.eq(1);
  })
  it('4.按钮传入 iconPosition 是否正常显示', () => {
    const wrapper = shallowMount(Button, {
      attachToDocument:true, // 测试元素的计算属性，将组件挂在到浏览器上
      stubs: {
        'xj-icon': Icon,
      },
      propsData: { 
        iconPosition: 'left',
        icon: 'edit',
       },
      slots: {
        default: 'xj-ui',
      }
    })
    let ele = wrapper.vm.$el.querySelector('span');
    expect(getComputedStyle(ele).order).to.eq('2');
    wrapper.setProps({ 
      iconPosition: 'right',
    });
    return wrapper.vm.$nextTick().then(() => {
      // 设置 props 必须要在下一事件环去取值
      expect(getComputedStyle(ele).order).to.eq('1');
    })
  })
})
