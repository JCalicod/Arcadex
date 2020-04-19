<template>
  <div id="app">
    <Navbar/>
    <div class="main-content">
      <div class="banner">
        <div class="title">
          Arca<span class="dark-text">dex</span>
          <div class="subtitle">
            Découvre de nouveaux Pokémon
          </div>
        </div>
      </div>
      <div class="content">
        <router-view/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import axios from 'axios';

export default {
  name: 'App', 
  components: {
    Navbar, 
    Footer
  }, 
  created() {
    document.title = 'Arcadex';
    this.getTypes();
    this.getPokemons();
  },
  methods: {
    getTypes: function() {
      for (let id = 1; id <= 18; id++) {
        axios.get('https://pokeapi.co/api/v2/type/' + id + '/')
          .then((response) => {
              var type = response.data;
              type = this.setTypeColor(type);
              this.$store.commit('setTypes', type);
          }).catch(error => {
            console.log(error);
          });
      }
    }, 
    setTypeColor(type) {
        switch (type.names[2].name) {
          case 'Normal':
            type.color = '#A8A878';
            break;
          case 'Vol':
            type.color = '#A890F0';
            break;
          case 'Roche':
            type.color = '#B8A038';
            break;
          case 'Insecte':
            type.color = '#A8B820';
            break;
          case 'Acier':
            type.color = '#B8B8D0';
            break;
          case 'Sol':
            type.color = '#E0C068';
            break;
          case 'Fée':
            type.color = '#FFAAFF';
            break;
          case 'Spectre':
            type.color = '#705898';
            break;
          case 'Feu':
            type.color = '#F08030';
            break;
          case 'Plante':
            type.color = '#78C850';
            break;
          case 'Eau':
            type.color = '#6890F0';
            break;
          case 'Dragon':
            type.color = '#7038F8';
            break;
          case 'Psy':
            type.color = '#F85888';
            break;
          case 'Poison':
            type.color = '#A040A0';
            break;
          case 'Combat':
            type.color = '#C03028';
            break;
          case 'Électrik':
            type.color = '#F8D030';
            break;
          case 'Ténèbres':
            type.color = '#705848';
            break;
          case 'Glace':
            type.color = '#98D8D8';
            break;
          default:
            console.log('Type error');
        }
        return type;
    },
    getPokemons: function() {
      for (let id = 1; id <= 807; id++) {
        axios.get('https://pokeapi.co/api/v2/pokemon-species/' + id + '/')
          .then((response) => {          
              var pokemon = response.data;
              pokemon = this.setPokemonStats(pokemon);
              pokemon = this.setPokemonType(pokemon);
              this.$store.commit('setPokemons', pokemon);
          }).catch(error => {
            console.log(error);
          });
      }
    }, 
    setPokemonStats: function(pokemon) {
      axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemon.id + '/')
          .then((response) => {
              var details = response.data;      
              pokemon.speed = details.stats[0].base_stat;
              pokemon.specialDefense = details.stats[1].base_stat;
              pokemon.specialAttack = details.stats[2].base_stat;
              pokemon.defense = details.stats[3].base_stat;
              pokemon.attack = details.stats[4].base_stat;
              pokemon.hp = details.stats[5].base_stat;
              return pokemon;
          }).catch(error => {
            console.log(error);
            return pokemon;
          });
          return pokemon;
    },
    setPokemonType: function(pokemon) {
      var types = [];
      var list = this.$store.getters.getTypes;
       for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list[i].pokemon.length; j++) {
          if (list[i].pokemon[j].pokemon.name == pokemon.name) {
            types.push(list[i]);
          }
          if (types.length == 2) {
            pokemon.types = types;
            return pokemon;
          }
        }
       }
       pokemon.types = types;
       return pokemon;
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Fjalla+One');

  html {
    height: 100%;
  }

  body {
    min-height: 100%;
    font-family: 'Fjalla One', sans-serif;
    margin: 0;
    padding: 0;
  }
  
  .main-content {
    margin-top: 58px;
  }

  .main-content .banner {
    width: 100%;
    height: 250px;
    background-color: #cfd1d2;
    color: #CF3935;
    display: flex;
  }

  .main-content .banner .title {
    margin: auto;
    font-size: 100px;
  }

  .main-content .banner .title .subtitle {
    font-size: 30px;
    color: #3F4A4F;
  }

  .main-content .banner .icon {
    height: 100px;
  }

  .main-content .banner .dark-text {
    color: #3F4A4F;
  }
</style>
