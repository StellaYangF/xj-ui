<template>
  <div id="app">
    <xj-button @click="click">defaul button</xj-button>
    <xj-button type='primary'>primary button</xj-button>
    <xj-button type='warning'>warning button</xj-button>
    <xj-button type='danger'>danger button</xj-button>
    <xj-button type='info'>info button</xj-button>
    <xj-button type='success'>success button</xj-button>
  </div>
</template>

<script>

export default {
  name: 'App',
 methods: {
   click(){
     console.log('click');
   }
 }
}
</script>

<style lang="scss">

</style>
