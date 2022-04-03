<template>
    <div>
        <p>Adornos: </p>
        <input type="checkbox" id="marino" value="Marino" v-model="pedidoAux.adornos">
        <label for="marino">Marino</label>

        <input type="checkbox" id="hb" value="Happy Birthday" v-model="pedidoAux.adornos">
        <label for="hb">Happy Birthday</label>
        <br>
    </div>
</template>

<script>
export default {
    name: 'AdornosForm',
    computed: {
        pedidoAux(){
            return this.$store.state.pedidoAux
        }
    }
}
</script>