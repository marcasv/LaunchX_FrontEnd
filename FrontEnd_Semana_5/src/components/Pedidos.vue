<template>
    <div>
        <table class="pedidos">
            <tr>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Email</th>
                <th>Sabores</th>
                <th>Adornos</th>
                <th>Detalles del pedido</th>
            </tr>
            <tr v-for="pedido in this.$store.state.pedidos" v-bind:key="pedido.nombre">
                <td>{{pedido.nombre}}</td>
                <td>{{pedido.telefono}}</td>
                <td>{{pedido.email}}</td>
                <td>
                    <tr v-for="sabor in pedido.sabores" v-bind:key="sabor">
                        <td>{{sabor}}</td>
                    </tr>
                </td>
                <td>
                    <tr v-for="adorno in pedido.adornos" v-bind:key="adorno">
                        <td>{{adorno}}</td>
                    </tr>
                </td>
                <td>{{pedido.descripcion}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Pedidos'
}
</script>

<style scoped>
    table {
        margin: 0 auto;
        width: 50%;
        border: 1px solid #000;
    }
    th, td {
        width: 25%;
        text-align: center;
        vertical-align: top;
        border: 1px solid #000;
        border-collapse: collapse;
        padding: 0.3em;
        caption-side: bottom;
    }
    caption {
        padding: 0.3em;
    }
</style>