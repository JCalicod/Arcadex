<template>
  <div class="paragraph">
      <h1>
          <img src="favicon.png" alt="arcanin" class="before"> {{ title }}
      </h1>

      <p>
          {{ text }}
      </p>
  </div>
</template>

<script>

export default {
  name: 'Paragraph', 
  props: {
      title: String, 
      text: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .paragraph {
        color: #3F4A4F;
    }

    h1 {
        font-size: 60px;
    }

    .before {
        width: 60px;
        margin-right: 20px;
    }

    p {
        background: #3F4A4F;
        color: #fff;
        padding: 20px;
        border-radius: 5px;
    }
</style>
