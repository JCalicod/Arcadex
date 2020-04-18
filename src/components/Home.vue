<template>
  <div class="home">
      <div class="pokemons-list" v-if="pokemons.length > 0">
        <div class="list-col" v-for="pokemon in pokemons.slice(0, 9)" :key="pokemon.id">
            <div class="pokemon-card">
              <div class="square">
                <router-link :to="{ path: 'Pokemon/' + pokemon.id }">
                  <img :src="'https://www.pokebip.com/pokedex-images/artworks/' + pokemon.id + '.png'" alt="">
                </router-link>
              </div>
              <div class="text-content">
                #{{ pokemon.id }} - {{ pokemon.names[6].name }}
              </div>
            </div>
        </div>
      </div>
      <div v-else class="loader">
        <img src="favicon.png" alt="loader"><br>
        Chargement des Pokémon
      </div>
    </div>
</template>

<script>

export default {
  name: 'Home',

  computed: {
    pokemons() {
      var pokemons = this.$store.getters.getPokemons;
      var nb = 9;
      var result = new Array(nb);
      var len = pokemons.length;
      if (len == 807) {
        var taken = new Array(len);

        while (nb--) {
          var x = Math.floor(Math.random() * len);
          result[nb] = pokemons[x in taken ? taken[x] : x];
          taken[x] = --len in taken ? taken[len] : len;
        }
        console.log(result.length);
        return result;
      }
      return [];
    },
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  a {
    text-decoration: none;
  }

  @-webkit-keyframes rotating {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  .loader {
    margin-top: 50px;
    text-align: center;
    font-size: 20px;
    margin-bottom: 500px;
  }

  .loader img {
    width: 100px;
    margin-bottom: 30px;
    -webkit-animation: rotating 2s linear infinite;
  }

  .pokemons-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .list-col {
    flex: 1 0 calc(30% - 10px);
    padding: 10px;
  }

  .pokemon-card {
    height: 200px;
    margin-bottom: 20px;
  }

  .pokemon-card .square {
    background-color: #3F4A4F;
    width: 150px;
    height: 150px;
    padding: 10px;
    border-radius: 5px;
    margin: auto;
  }

  .pokemon-card .square:hover {
    cursor: pointer;
    background-color: #CF3935;
  }

  .pokemon-card .text-content {
    text-align: center;
    margin-top: 5px;
    color: #3F4A4F;
  }

  .pokemon-card .square img {
    width: 100%;
  }
  
</style>
