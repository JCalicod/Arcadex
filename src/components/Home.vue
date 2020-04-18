<template>
  <div class="home">
    <div class="home-content" v-if="pokemons.length > 0">
      <div class="search-block">
        Rechercher un Pokémon par <span class="red-text">Nom</span> ou <span class="red-text">numéro</span><br>
        <input type="text" placeholder="Exemples: 1, Pikachu, .." v-model="filter">
      </div>
      <div class="pokemons-list">
        <div class="list-col" v-for="pokemon in pokemons" :key="pokemon.id">
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
      <button class="more" v-on:click="counter += 9">Charger d'autres Pokémon</button>
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

  data: () => {
    return {
      counter: 9, 
      taken: [], 
      filter: ''
    }
  },
  computed: {
    pokemons() {
      var list = this.$store.getters.getPokemons;
      var len = list.length;
      if (len == 807) {
        return this.find(list, len);
      }
      return [];
    }
  },

  methods: {
    find: function(list, len) {
      var result = [];

      if (this.filter != '') {
        var nb_elem = 0;
        for (var c = 0; c < len; c++) {
          if (list[c].names[6].name.indexOf(this.filter) !== -1 || list[c].id.toString().indexOf(this.filter) !== -1) {
            result.push(list[c]);
            nb_elem++;
          }
          if (nb_elem == 9)
            break;
        }
      }
      else {
        var nb = this.counter - this.taken.length;

        for (var i = 0; i < this.taken.length; i++) {
          result.push(this.taken[i]);
        }
        while (nb--) {
          var x = Math.floor(Math.random() * len);
          while (list[x] in this.taken) {
            x = Math.floor(Math.random() * len);
          }
          result.push(list[x]);
          this.taken.push(list[x]);
          
        }
      }
      return result;
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .red-text {
    color: #E85E5B;
  }

  .search-block {
    background-color: #3F4A4F;
    color: #fff;
    margin-bottom: 30px;
    padding: 20px;
  }

  input {
    border: 0;
    border-bottom: 2px solid #A6ABAE;
    padding: 5px;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 250px;
    background: #3F4A4F;
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  .home-content {
    text-align: center;
    font-size: 25px;
    margin-bottom: 30px;
  }

  .home-content button {
    border: 0;
    padding: 10px;
    background: #CF3935;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
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
