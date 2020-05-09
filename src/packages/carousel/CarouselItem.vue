<template>
  <transition>
    <div class="xj-carousel-item" v-show="isShow" :class="{reverse}">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "xj-carousel-item",

  data() {
    let children = this.$parent.$children.filter(
      child => child.$options.name === "xj-carousel-item"
    );
    return {
      index: children.length - 1,
      reverse:false 
    };
  },

  computed: {
    isShow() {
      return this.$parent.currentSelected == this.index;
    }
  }
};
</script>

<style lang="scss">
.xj-carousel-item {
  width: 100%;
  height: 100%;

}
.v-enter-active,.v-leave-active{
    transition: all .5s linear;
}
.v-leave-to{
    transform:translateX(-100%);
}
.v-enter{
    transform:translateX(100%);
}

.v-leave-to.reverse{
    transform:translateX(100%);
}
.v-enter.reverse{
    transform:translateX(-100%);
}
.v-enter-active{
    position: absolute;
    top:0;
    left:0;
    width:100%;
}
</style>