import Button from "./button/Button.vue";
import Icon from "./Icon.vue";
import ButtonGroup from "./button/ButtonGroup.vue";

function install(Vue) {
    Vue.component(Button.name, Button);
    Vue.component(Icon.name, Icon);
    Vue.component(ButtonGroup.name, ButtonGroup);
}

// script 标签引入时，不会 调用 install 方法
if (window.Vue !== undefined) install(Vue);

export default {
    install,
}