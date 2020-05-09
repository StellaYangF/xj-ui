<template>
  <div>
    <xj-carousel :height='height'>
      <xj-carousel-item 
        v-for='img in imgs'
        :key='img'
      >
        <img :src="img" :alt="img" class='xj-carousel-img'>
      </xj-carousel-item>
    </xj-carousel>
  </div>
</template>

<script>
export default {
  name: 'view-carousel',
  data() {
    return {
      height: '400px',
      imgs: [
      'https://www.yourtrainingedge.com/wp-content/uploads/2019/05/background-calm-clouds-747964.jpg',
      'https://www.pandotrip.com/wp-content/uploads/2016/07/li-Photo-by-Santo-980x572.jpg',
      'https://miro.medium.com/max/10200/1*zyId2yFpltrC1uiEm176IA.jpeg',
    ]
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.xj-carousel-img {
  width: 100%;
  height: 100%;
}
</style>