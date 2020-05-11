<template>
  <div 
    class='xj-carousel'
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
    :style="{height}"
  >
    <div class='viewport'>
      <slot></slot>
    </div>

    <div class='dots'>
      <span
        v-for="dot in len"
        :key='dot'
        :class='{ active: dot - 1 === currentSelected }'
        @click='select(dot - 1)'
      ></span>
    </div>

    <div class='arrow-box'>
      <xj-icon icon='arrow-left' @click="select(currentSelected - 1, true)"></xj-icon>
      <xj-icon icon='arrow-right' @click="select(currentSelected + 1, true)"></xj-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: 'xj-carousel',

  props: {
    initialIndex: {
      type: Number,
      default: 0,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    height: {
      type: String,
      default: '200px',
    },
    interval: {
      type: Number,
      default: 3000,
    },
    loop: {
      type: Boolean,
      default: true,
    }
  },

  data() {
    return {
      currentSelected: this.initialIndex,
      len: 0,
      reverse: false,
    }
  },

  mounted() {
    this.children = this.$children.filter(child => child.$options.name === 'xj-carousel-item');
    this.len = this.children.length;
    this.run();
  },

  beforeDestroy() {
    this.removeTimer();
  },
  
  methods: {
    handleMouseEnter() {
      this.removeTimer();
    },

    handleMouseLeave() {
      this.run();
    },

    handleTouchStart(e) {
      this.handleMouseEnter();
      this.startTouch = e.touches[0];
    },

    handleTouchEnd(e) {
      let endTouch = e.changedTouches[0];
      let { clientX: x1, clientY: y1 } = this.startTouch;
      let { clientX: x2, clientY: y2 } = endTouch;

      let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      let disY = Math.abs(y2 - y1);
      let x = Math.sqrt(2)/2 * distance;
      if (disY < x) {
        if (x2 > x1) this.select(this.currentSelected - 1, true);
        else this.select(this.currentSelected + 1, true);
      }
    },

    select(newIndex, flag) {
      if (newIndex === this.len) newIndex = 0;
      if (newIndex === -1) newIndex = this.len - 1;
      let currentSelected = this.currentSelected;
      this.reverse = currentSelected > newIndex ? true : false;
      if ((this.timer || flag) && this.loop) {
        if (currentSelected == 0 && newIndex == this.len - 1)  this.reverse = true;
        if (currentSelected == this.len - 1 && newIndex == 0) this.reverse = false;
      }
      this.children.forEach(vm => {
        vm.reverse = this.reverse;
      })
      this.$nextTick(() => this.currentSelected = newIndex);
    },

    run() {
      if (this.autoplay) {
        this.timer = setInterval(() => {
          let newIndex = this.currentSelected + 1;
          this.select(newIndex);
        }, this.interval);
      }
    },

    removeTimer() {
      clearInterval(this.timer);
      this.timer = null;
    },
  }
}
</script>

<style lang="scss">
.xj-carousel {
  position: relative;
  .viewport {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
  }
  .dots {
    position: absolute;
    bottom: 20px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .dots span {
    display: inline-block;
    width: 20px;
    height: 6px;
    background: #ccc;
    margin: 5px;
    text-indent: -9999px;
    opacity: 0.5;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      opacity: 1;
      background: #fff;
    }
    &.active {
      opacity: 1;
      background: #fff;
    }
  }
  .arrow-box {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: space-between;
    svg {
      fill: rgba(255,255,255,.5);
      &:hover {
        fill: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>