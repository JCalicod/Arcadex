<template>
  <div class="home">
    <div class="home-content" v-if="loadedPokemons == 807">
      <div class="search-block">
        Rechercher un Pokémon par <span class="red-text">Nom</span> ou <span class="red-text">numéro</span><br>
        <input type="text" id="search" placeholder="Exemples: 1, Pikachu, .." v-model="filter">
      </div>
      <div class="pokemons-list">
        <div class="pokemons-list-not-empty" v-if="pokemons.length > 0">
          <div class="list-col" v-for="pokemon in pokemons" :key="pokemon.id">
              <PokemonCard :pokemon="pokemon"/>
          </div>
        </div>
        <div class="empty-list" v-else>
          <img :src="'https://www.pokebip.com/pokedex-images/artworks/54.png'" alt="Not found">
          <img :src="'https://www.pokebip.com/pokedex-images/artworks/54.png'" alt="Not found">
          <img :src="'https://www.pokebip.com/pokedex-images/artworks/54.png'" alt="Not found"><br>
          Psayayaaaaye..<br>
          Aucun Pokémon ne correspond à cette recherche.<br>
          Veuillez vérifier l'orthographe du mot ou l'identifiant saisi.
        </div>
      </div>
      <button class="more" v-on:click="counter += 9" v-if="seen">Charger d'autres Pokémon</button>
    </div>
    <div v-else class="loader">
      <img src="favicon.png" alt="loader"><br>
      Chargement des Pokémon
    </div>

    </div>
</template>

<script>
import PokemonCard from './PokemonCard.vue';

export default {
  name: 'Home',
  components: {
    PokemonCard
  },
  data: () => {
    return {
      allPokemons: [],
      counter: 9, 
      taken: [], 
      filter: '', 
      seen: true
    }
  },
  computed: {
    loadedPokemons() {
      var len = this.$store.getters.getPokemons.length;
      if (len == 807) {
        // Si tous les pokémon ont été chargés
        return this.setAllPokemons();
      }
      return len;
    }, 
    pokemons() {
      var list = this.allPokemons;
      var len = list.length;
      if (len == 807) {
        // Si tous les pokémon ont été chargés
        return this.find(list, len);
      }
      return [];
    }
  },

  methods: {
    setAllPokemons: function() {
      this.allPokemons = this.$store.getters.getPokemons;
      return this.allPokemons.length;
    },
    find: function(list, len) {
      var result = [];

      if (this.filter != '') {
        // Si l'utilisateur utilise la recherche
        result = this.findWithFilter(list, len);
      }
      else {
        result = this.findWithoutFilter(list, len);
      }
      return result;
    },
    findWithFilter: function(list, len) {
      var result = [];
      this.seen = false;
      var nb_elem = 0;
      for (var c = 0; c < len; c++) {
        // On compare sans prendre en compte la casse
        if (list[c].names[6].name.toLowerCase().indexOf(this.filter.toLowerCase()) !== -1 || list[c].id.toString().indexOf(this.filter) !== -1) {
          result.push(list[c]);
          nb_elem++;
        }
        if (nb_elem == 9)
          break;
      }
      return result;
    }, 
    findWithoutFilter: function(list, len) {
      var result = [];
      this.seen = true;
      var nb = this.counter - this.taken.length;

      for (var i = 0; i < this.taken.length; i++) {
        result.push(this.taken[i]);
      }
      while (nb--) {
        // On génère un nombre aléatoire tant qu'on ne trouve pas un Pokémon pas déjà affiché
        var x = Math.floor(Math.random() * len);
        while (list[x] in this.taken) {
          x = Math.floor(Math.random() * len);
        }
        result.push(list[x]);
        this.taken.push(list[x]);
          
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
    margin-bottom: 170px;
  }

  .loader img {
    width: 100px;
    margin-bottom: 30px;
    -webkit-animation: rotating 2s linear infinite;
  }

  .pokemons-list > div.pokemons-list-not-empty {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .pokemons-list > div.empty-list img {
    width: 100px;
  }

  .list-col {
    flex: 1 0 calc(30% - 10px);
    padding: 10px;
  }
  
</style>
