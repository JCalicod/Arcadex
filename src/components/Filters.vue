<template>
    <div class="filters">
        <div class="type-filter" v-if="loadedTypes == 18">
            <h1>Filtrer par type</h1>
            <p>
                Clique sur un des types pour trouver les Pokémon associés.
            </p>
            <div class="flex-row">
                <div v-for="type in types" :key="type.id" class="flex-button" :style="'background-color:'+type.color">
                    <div v-on:click="displayPokemonsOfType(type)">
                        {{ type.names[2].name }}
                    </div>
                </div>
            </div>
            <div class="pokemons" v-if="pokemons.length > 0">
                <div class="list-col" v-for="pokemon in pokemons" :key="pokemon.id">
                <PokemonCard :pokemon="pokemon"/>
          </div>
            </div>
        </div>
        <div v-else class="loader">
            <img src="favicon.png" alt="loader"><br>
            Chargement des Types
        </div>
    </div>
</template>

<script>
import PokemonCard from './PokemonCard.vue';

export default {
  name: 'Filters', 
  components: {
    PokemonCard
  },
  data: () => {
      return {
          types: [],
          pokemons: []
      }
  },
  computed: {
      loadedTypes() {
        var len = this.$store.getters.getTypes.length;
        if (len == 18) {
            this.getAllPokemons();
            return this.setTypes();
        }
        return len;
      }
  }, 
  methods: {
      getAllPokemons: function() {
          this.pokemons = this.$store.getters.getPokemons;
      },
      setTypes: function() {
          this.types = this.$store.getters.getTypes;
          return this.types.length;
      }, 
      displayPokemonsOfType: function(type) {
          this.pokemons = [];
          var list = this.$store.getters.getPokemons;
          for (var j = 0; j < type.pokemon.length; j++) {
            var find = false;
            for (var i = 0; i < list.length && !find; i++) {
                // On vérifie si le pokémon apparaît dans la liste des types
                if (list[i].name == type.pokemon[j].pokemon.name) {
                    this.pokemons.push(list[i]);
                    find = true;
                }
            }
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

    .flex-row {
        display: flex;
        flex-direction: row;
    }

    .flex-button {
        margin: 10px;
        border-radius: 5px;
        width: 100px;
        padding: 5px;
        text-align: center;
        cursor: pointer;
    }

    .type-filter {
        padding: 20px;
        margin-bottom: 170px;
    }

    .pokemons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .list-col {
        flex: 1 0 calc(30% - 10px);
        padding: 10px;
    }
</style>