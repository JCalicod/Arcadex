<template>
    <div class="navbar">
        <a href="#"><img src="../../public/favicon.png" alt="Logo"></a>
        <router-link to="/">Accueil</router-link>
        <router-link to="/about">A propos</router-link>
    </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .navbar {
        overflow: hidden;
        background-color: #CF3935;
        position: fixed;
        top: 0;
        width: 100%;
        line-height: 30px;
    }

    .navbar img {
        height: 30px;
    }

    .navbar a, .navbar router-link {
        float: left;
        display: block;
        color: #fff;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        height: 30px;
    }

    .navbar a.router-link-active {
        background: #3F4A4F;
    }

    .navbar a:first-of-type {
        background: #3F4A4F;
    }

    .navbar a:hover, .navbar router-link:hover {
        background: #3F4A4F;
    }
</style>