import Button from "./button/Button.vue";
import ButtonGroup from "./button/ButtonGroup.vue";
import Icon from "./Icon.vue";
import Carousel from "./carousel/Carousel.vue";
import CarouselItem from "./carousel/CarouselItem.vue";
import Aside from './container/Aside';
import Container from './container/Container';
import Header from './container/Header';
import Footer from './container/Footer';
// directives
import infiniteScroll from './infiniteScroll';


function install(Vue) {
    Vue.component(Button.name, Button);
    Vue.component(ButtonGroup.name, ButtonGroup);
    Vue.component(Icon.name, Icon);
    Vue.component(Carousel.name, Carousel);
    Vue.component(CarouselItem.name, CarouselItem);
    Vue.component(Aside.name, Aside);
    Vue.component(Container.name, Container);
    Vue.component(Header.name, Header);
    Vue.component(Footer.name, Footer);

    Vue.directive(infiniteScroll.name, infiniteScroll);
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
    install,
}