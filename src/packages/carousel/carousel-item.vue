<template>
  <transition>
  <div 
      class='xj-carousel-item' 
      :class='{reverse}'
      v-show='isShow'
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'xj-carousel-item',

  data() {
    const children = this.$parent.$children.filter(child => {
      return child.$options.name === 'xj-carousel-item'
    });
    return {
      index: children.length - 1,
      reverse: false,
    }
  },

  computed: {
    isShow() {
      return this.$parent.currentSelected === this.index;
    }
  }
}
</script>

<style lang="scss">
  .xj-carousel-item {
    height: 100%;
    width: 100%;
  }
  .v-enter-active, .v-leave-active {
    transform: .5s linear;
  }
  // positive direction <-
  .v-enter {
    transform: translateX(100%);
  }
  .v-leave-to {
    transform: translateX(-100%);
  }
  // negative direction ->
  .v-enter.reverse {
    
  }
</style>