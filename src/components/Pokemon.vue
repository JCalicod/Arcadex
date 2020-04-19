<template>
  <div class="container">
    <div class="pokemon">
        <div class="pokemon-img">
            <img :src="'https://www.pokebip.com/pokedex-images/artworks/' + pokemon.id + '.png'" alt="">
        </div>
        <div class="pokemon-summary">
            #{{ pokemon.id }} - {{ pokemon.names[6].name }} | {{ pokemon.generation.name }}
            <span class="types" v-for="type in pokemon.types" :key="type.id">
                    <span :style="'background-color:'+type.color">{{ type.names[2].name }}</span>
            </span>
            <div class="data">
                <p>
                    <span class="desc-item">Bonheur :</span> {{ pokemon.base_happiness }}<br>
                    <span class="desc-item">Taux de capture :</span> {{ pokemon.capture_rate }}
                </p>
                <p class="stats">
                    <span class="desc-item">Vitesse :</span> {{ pokemon.speed }}<br>
                    <span class="desc-item">Défense spéciale :</span> {{ pokemon.specialDefense }}<br>
                    <span class="desc-item">Attaque spéciale :</span> {{ pokemon.specialAttack }}<br>
                    <span class="desc-item">Défense :</span> {{ pokemon.defense }}<br>
                    <span class="desc-item">Attaque :</span> {{ pokemon.attack }}<br>
                    <span class="desc-item">PV :</span> {{ pokemon.hp }}
                </p>
            </div>
            <p>
                {{ pokemon.description }}
            </p>
        </div>
    </div>
    <p class="text-center">
        <router-link to="/">>> Découvrir d'autres Pokémon</router-link>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Pokemon',
  computed: {
        pokemon() {
            var pokemons = this.$store.getters.getPokemons;
            var pokemon_id = this.$route.params.id;
            for (var i = 0; i < pokemons.length; i++) {
                if (pokemons[i].id == pokemon_id) {
                    var pokemon = pokemons[i];
                    for (var j = 0; j < pokemon.flavor_text_entries.length; j++) {
                        if (pokemon.flavor_text_entries[j].language.name == 'fr') {
                            pokemon.description = pokemon.flavor_text_entries[j].flavor_text;
                        }
                    }

                    pokemon = this.getGeneration(pokemon);
                    
                    return pokemon;
                }
            }
            return 1;
        }
    }, 
    methods: {
        getGeneration: function(pokemon) {
            switch (pokemon.generation.name) {
                        case 'generation-i':
                            pokemon.generation.name = '1ère Génération';
                            break;
                        case 'generation-ii':
                            pokemon.generation.name = '2ème Génération';
                            break;
                        case 'generation-iii':
                            pokemon.generation.name = '3ème Génération';
                            break;
                        case 'generation-iv':
                            pokemon.generation.name = '4ème Génération';
                            break;
                        case 'generation-v':
                            pokemon.generation.name = '5ème Génération';
                            break;
                        case 'generation-vi':
                            pokemon.generation.name = '6ème Génération';
                            break;
                        case 'generation-vii':
                            pokemon.generation.name = '7ème Génération';
                            break;
                        default:
                            console.log('Generation error');
            }
            return pokemon;
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container {
        margin-bottom: 150px;
        margin-top: 50px;
    }

    .types {
        font-size: 16px;
        margin-left: 10px;
    }

    .types > span {
        border-radius: 5px;
        padding: 5px;
        text-align: center;
    }

    .pokemon {
        width: 800px;
        height: 300px;
        margin: auto;
        display: flex;
        flex-direction: row;
        border-radius: 5px;
        background-color: #cfd1d2;
        margin-bottom: 20px;
    }

    .pokemon-img {
        background-color: #3F4A4F;
        padding: 10px;
        width: 300px;
        display: flex;
        border-radius: 5px 0 0 5px;
    }

    .pokemon-img img {
        height: 250px;
        margin: auto;
    }

    .pokemon-summary {
        font-size: 25px;
        padding: 20px;
        height: 300px;
    }

    .pokemon-summary p {
        font-size: 16px;
    }

    .data {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .data .stats {
        text-align: right;
    }

    .desc-item {
        color: #CF3935;
    }

    a {
        color: #CF3935;
        text-decoration: none;
    }

    .text-center {
        text-align: center;
        font-size: 20px;
    }
</style>
