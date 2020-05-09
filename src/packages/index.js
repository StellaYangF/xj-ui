import Button from "./button/Button.vue";
<<<<<<< HEAD
import Icon from "./Icon.vue";
import ButtonGroup from "./button/ButtonGroup.vue";
=======
import ButtonGroup from "./button/ButtonGroup.vue";
import Icon from "./Icon.vue";
>>>>>>> develop

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