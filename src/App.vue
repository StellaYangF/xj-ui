<template>
  <div id="app">
    <!-- button -->
    <xj-button @click="click">defaul button</xj-button>
    <xj-button type='primary'>primary button</xj-button>
    <xj-button type='warning'>warning button</xj-button>
    <xj-button type='danger'>danger button</xj-button>
    <xj-button type='info'>info button</xj-button>
    <xj-button type='success' icon='success'>info button</xj-button>

    <hr/>
    <!-- buttion with icon -->
      <xj-button @click="click" icon='search'>defaul button</xj-button>
      <xj-button type='primary' icon='minus'>primary button</xj-button>
      <xj-button type='warning' icon='arrow-left'>warning button</xj-button>
      <xj-button type='danger' icon='location'>danger loading button</xj-button>
      <xj-button type='info' icon='edit'>info button</xj-button>
      <xj-button type='success' icon='success' icon-position='left' >info icon left</xj-button>
      <xj-button @click="click" :loading='true'>defaul button</xj-button>

    <hr/>
    <!-- xj-icon -->
    <xj-icon icon='minus'></xj-icon>
    <xj-icon icon='search'></xj-icon>
    <xj-icon icon='edit'></xj-icon>
    <xj-icon icon='arrow-left'></xj-icon>
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
