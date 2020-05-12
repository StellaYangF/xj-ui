export default {
  name: 'infinite-scroll',

  inserted(el, binding, vnode) {
    console.log(el);
    console.log(binding);
    console.log(vnode);
  },
  unbind() {},
}