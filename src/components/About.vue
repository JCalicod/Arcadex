<template>
  <div class="about">
      <div v-for="item in paragraphs" :key="item.title" class="paragraph">
        <Paragraph :title="item.title" :text="item.text"/>
      </div>
  </div>
</template>

<script>
import Paragraph from './Paragraph.vue';

export default {
  name: 'About', 
  components: {
      Paragraph
  },
  data: () => {
      return {
          paragraphs: [
              { 
                  title: 'Notre projet', 
                  text: 'Dans le cadre du cours de Web durant notre 3ème année de Licence des Sciences du Numérique à l\'Université Catholique de Lille, nous avons appris à utiliser le framework VueJS.' 
              },
              { 
                  title: 'Notre équipe', 
                  text: 'Second'
              }
          ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .paragraph {
        width: 50vw;
        margin: auto;
        margin-bottom: 80px;
    }
</style>
