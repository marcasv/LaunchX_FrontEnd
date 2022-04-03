<template>
    <div>
        <p>Sabores: </p>
        <input type="checkbox" id="chocolate" value="Chocolate" v-model="pedidoAux.sabores">
        <label for="chocolate">Chocolate</label>

        <input type="checkbox" id="oreo" value="Oreo" v-model="pedidoAux.sabores">
        <label for="oreo">Oreo</label>

        <input type="checkbox" id="chocoflan" value="Chocoflan" v-model="pedidoAux.sabores">
        <label for="chocoflan">Chocoflan</label>

        <input type="checkbox" id="moka" value="Moka" v-model="pedidoAux.sabores">
        <label for="moka">Moka</label>
        <br>
    </div>
</template>

<script>
export default {
    name: 'SaboresForm',
    computed: {
        pedidoAux(){
            return this.$store.state.pedidoAux
        }
    }
}
</script>