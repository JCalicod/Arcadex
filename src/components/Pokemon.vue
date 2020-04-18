<template>
  <div class="container">
    <div class="pokemon">
        <div class="pokemon-img">
            <img :src="'https://www.pokebip.com/pokedex-images/artworks/' + pokemon.id + '.png'" alt="">
        </div>
        <div class="pokemon-summary">
            #{{ pokemon.id }} - {{ pokemon.names[6].name }}
            <p>
                <span class="desc-item">Bonheur :</span> {{ pokemon.base_happiness }}<br>
                <span class="desc-item">Taux de capture :</span> {{ pokemon.capture_rate }}
            </p>
            <p class="description">
                <u>Description</u><br><br>
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
                    return pokemon;
                }
            }
            return 1;
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
        font-size: 20px;
    }

    .pokemon-summary p.description {
        margin-top: 50px;
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
