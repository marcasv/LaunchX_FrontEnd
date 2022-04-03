<template>
    <div>
        <table class="inventario">
            <tr>
                <th>Sabor</th>
                <th>Cantidad restante</th>
            </tr>
          
            <tr>
                <td>Chocolate</td>
                <td>{{this.$store.state.chocolate}}</td>
            </tr>
            
            <tr>
                <td>Oreo</td>
                <td>{{this.$store.state.oreo}}</td>
            </tr>

            <tr>
                <td>Chocoflan</td>
                <td>{{this.$store.state.chocoflan}}</td>
            </tr>

            <tr>
                <td>Moka</td>
                <td>{{this.$store.state.moka}}</td>
            </tr>
        </table>

        <br><br><br>

        <table class="inventario">
            <tr>
                <th>Adorno</th>
                <th>Cantidad restante</th>
            </tr>
            
            <tr>
                <td>Marino</td>
                <td>{{this.$store.state.marino}}</td>
            </tr>
            
            <tr>
                <td>Happy Birthday</td>
                <td>{{this.$store.state.hb}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
  name: 'Inventario'
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