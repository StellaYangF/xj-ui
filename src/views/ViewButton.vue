<template>
  <div>
    <!-- button -->
      <xj-button @click="click">defaul button</xj-button>
      <xj-button type='primary'>primary button</xj-button>
      <xj-button type='warning'>warning button</xj-button>
      <xj-button type='danger'>danger button</xj-button>
      <xj-button type='info'>info button</xj-button>
      <xj-button type='success'>info button</xj-button>

      <hr/>
      <!-- buttion with icon -->
        <xj-button @click="click" icon='search'>defaul button</xj-button>
        <xj-button type='primary' icon='minus'>primary button</xj-button>
        <xj-button type='warning' icon='arrow-left'>warning button</xj-button>
        <xj-button type='danger' icon='location'>danger loading button</xj-button>
        <xj-button type='info' icon='edit'>info button</xj-button>
        <xj-button type='success' icon='success' icon-position='left' >info icon left</xj-button>
        <xj-button @click="click" :loading='true'>default button</xj-button>

        <hr/>
        <!-- button group -->
        <xj-button-group>
          <xj-button icon='arrow-left'  icon-position='left'>上一页</xj-button>
          <xj-button >第一页</xj-button>
          <xj-button icon='arrow-right'>下一页</xj-button>
        </xj-button-group>

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
  name: 'view-button',
  methods: {
   click(event){
     console.log('click', event);
   }
  }
}
</script>