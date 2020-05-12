<template>
  <div id="app">
    <h2>按钮组件</h2>
    <ViewButton></ViewButton>

    <h2>轮播组件</h2>
    <ViewCarousel></ViewCarousel>

    <h2>容器组件</h2>
    <ViewContainer></ViewContainer>
  </div>
</template>

<script>
import ViewButton from './views/ViewButton';
import ViewCarousel from './views/ViewCarousel';
import ViewContainer from './views/ViewContainer';

export default {
  name: 'App',
  components: {
    ViewButton,
    ViewCarousel,
    ViewContainer,
  }
}
</script>

<style lang="scss">
</style>
