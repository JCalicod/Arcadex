<template>
    <div class="pokemon-card">
        <div class="square">
            <router-link :to="{ path: 'Pokemon/' + pokemon.id }">
                <img :src="'https://www.pokebip.com/pokedex-images/artworks/' + pokemon.id + '.png'" :alt="pokemon.names[6].name">
            </router-link>
        </div>
        <div class="text-content">
            #{{ pokemon.id }} - {{ pokemon.names[6].name }}<br>
        </div>
    </div>
</template>

<script>

export default {
  name: 'PokemonCard', 
  props: {
      pokemon: Object
  }
}

</script>

<style scoped>
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