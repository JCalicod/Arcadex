<template>
  <div id="app">
    <Navbar/>
    <div class="main-content">
      <div class="banner">
        <div class="title">
          Arca<span class="dark-text">dex</span>
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
    this.getAll();
  },
  computed: {
    pokemons() {
      return this.$store.getters.getPokemons;
    },
  },
  methods: {
    getAll() {
      for (let id = 1; id <= 807; id++) {
        axios.get('https://pokeapi.co/api/v2/pokemon-species/' + id + '/')
          .then((response) => {          
              this.$store.commit('setPokemons', response.data);
          }).catch(error => {
            console.log(error);
          });
      }
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
    font-size: 100px;
    color: #CF3935;
    display: flex;
  }

  .main-content .banner .title {
    margin: auto;
  }

  .main-content .banner .icon {
    height: 100px;
  }

  .main-content .banner .dark-text {
    color: #3F4A4F;
  }

  .main-content .content {
    padding: 20px;
  }
</style>
