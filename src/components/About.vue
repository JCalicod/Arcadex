<template>
  <div class="about">
      <div class="paragraph">
      <h1>
          <img src="favicon.png" alt="arcanin" class="before"> Notre projet
      </h1>

      <p>
          Dans le cadre du cours de Web durant notre 3ème année de Licence des Sciences du Numérique <br>
          à l'Université Catholique de Lille, nous avons appris à utiliser le framework <a href="https://fr.vuejs.org/">VueJS.</a><br><br>

          En fin d'année, nous avons eu le projet de créer un site web utilisant une API afin d'afficher du contenu dynamique.<br>
          Parmi les trois sujets proposés, nous avons finalement opté pour celui de reproduire un Pokédex.
      </p>
    </div>
    <div class="paragraph">
      <h1>
          <img src="favicon.png" alt="arcanin" class="before"> Notre équipe
      </h1>

      <div class="equipe">
          <div class="profile">
              <div class="pic">
                <img src="gianni.jpg" alt="gianni"> 
              </div>
              <span class="red-text">Gianni GIUDICE</span>
              <div>23 ans</div>
              <div>L3 SdN</div>
              <div class="profile-pokemon"><img :src="'https://www.pokebip.com/pokedex-images/artworks/151.png'" alt="pokemon"></div>
          </div>
          <div class="profile">
              <div class="pic">
                <img src="gaetan.jpg" alt="gaetan"> 
              </div>
              <span class="red-text">Geatan BILLAUT</span>
              <div>21 ans</div>
              <div>L3 SdN</div>
              <div class="profile-pokemon"><img :src="'https://www.pokebip.com/pokedex-images/artworks/151.png'" alt="pokemon"></div>
          </div> 
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .paragraph {
        width: 50vw;
        margin: auto;
        margin-bottom: 80px;
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

    .equipe {
        background: #3F4A4F;
        color: #fff;
        padding: 20px;
        border-radius: 5px;
        display: flex;
        flex-direction: row;
    }

    .profile {
        width: 50%;
        text-align: center;
    }

    .profile div {
        margin: 10px;
    }
    
    .pic {
        text-align: center;
    }

    .pic img {
        width: 150px;
        border-radius: 5px;
        margin-bottom: 10px;
        border: 1px solid #fff;
    }
    
    .red-text {
        color: #E85E5B;
    }

    a {
        color: #E85E5B;
    }

    .profile-pokemon img {
        width: 50px;
    }
</style>
