<template>
  <div id="app">
    <h2>按钮组件</h2>
    <ViewButton></ViewButton>

    <h2>轮播组件</h2>
    <ViewCarousel></ViewCarousel>
  </div>
</template>

<script>
import ViewButton from './views/ViewButton';
import ViewCarousel from './views/ViewCarousel';

export default {
  name: 'App',
  components: {
    ViewButton,
    ViewCarousel
  }
}
</script>

<style lang="scss">
</style>
