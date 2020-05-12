<template>
  <aside class='xj-aside' :style='{width}'>
    <slot></slot>
  </aside>
</template>

<script>
export default {
  name: 'xj-aside',

  props: {
    width: {
      type: String,
      default: '200px'
    }
  }
}
</script>

