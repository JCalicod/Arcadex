<template>
    <div class="footer">
        <p>
            Université Catholique de Lille<br>
            FGES - 2020
        </p>
        <p>
            L3 Sciences du Numérique<br>
            Gaëtan BILLAUT - Gianni GIUDICE
        </p>
    </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer {
        background: #3F4A4F;
        color: #fff;
        margin: 0;
        padding: 20px;
        opacity: 0.8;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .text-right {
        position: absolute;
        right: 20px;
    }
</style>