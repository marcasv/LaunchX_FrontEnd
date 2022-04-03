<template>
    <div>
        <form @submit.prevent="registrar">
            <h2 style="margin: 3em; width: 80%; ">Detalla tu pedido a continuación y Terrygan se encargara:</h2>
            <p>Nombre: <input v-model="pedidoAux.nombre" type="text" name="nombre" size="20"></p>
            <p>Telefono: <input v-model="pedidoAux.telefono" type="tel" name="telefono" size="20"></p>
            <p>Correo electronico: <input v-model="pedidoAux.email" type="email" name="email" size="20"></p>
            <SaboresForm/>
            <AdornosForm/>
            <p>Detalles del pedido:</p>
            <p><textarea v-model="pedidoAux.descripcion" name="comentario" rows="5" cols="50">Detalla aqui tu pedido</textarea></p>
            <p>
                <input type="submit" value="Enviar">
                <input type="reset" value="Borrar">
            </p>
        </form>
    </div>
</template>

<script>
import SaboresForm from "../components/SaboresForm.vue";
import AdornosForm from "../components/AdornosForm.vue";
    export default {
        name: 'Formulario',
        components:{
            SaboresForm,
            AdornosForm
        },
        computed: {
            pedidoAux(){
                return this.$store.state.pedidoAux
            }
        },
        methods: {
            registrar(){
                this.$store.dispatch("agregarPedido", {nombre: this.$store.state.pedidoAux.nombre,
                telefono: this.$store.state.pedidoAux.telefono,
                email: this.$store.state.pedidoAux.email,
                sabores: this.$store.state.pedidoAux.sabores,
                adornos: this.$store.state.pedidoAux.adornos,
                descripcion: this.$store.state.pedidoAux.descripcion});

                if(this.$store.state.pedidoAux.sabores.indexOf("Chocolate") != -1){
                    this.$store.commit("restarChocolate");
                }
                if(this.$store.state.pedidoAux.sabores.indexOf("Oreo") != -1){
                    this.$store.commit("restarOreo");
                }
                if(this.$store.state.pedidoAux.sabores.indexOf("Chocoflan") != -1){
                    this.$store.commit("restarChocoflan");
                }
                if(this.$store.state.pedidoAux.sabores.indexOf("Moka") != -1){
                    this.$store.commit("restarMoka");
                }

                if(this.$store.state.pedidoAux.adornos.indexOf("Marino") != -1){
                    this.$store.commit("restarMarino");
                }
                if(this.$store.state.pedidoAux.adornos.indexOf("Happy Birthday") != -1){
                    this.$store.commit("restarHB");
                }

                this.$store.state.pedidoAux.nombre = "";
                this.$store.state.pedidoAux.telefono = "";
                this.$store.state.pedidoAux.email = "";
                this.$store.state.pedidoAux.descripcion = "";
                this.$store.state.pedidoAux.sabores = [];
                this.$store.state.pedidoAux.adornos = [];
            }
        }
    }
</script>

<style scoped>
    div{
        position: relative;
        width: 55%;
        display:flex;
        justify-content: center;
        align-items: center;
        bottom: 0%;
        margin: 0 auto;
    }
    form {
        position:relative;
        float:left;
        margin:1em;
        width: 100%;
        height: 650px;
    }

    form:hover{
        box-shadow: 2px 3px 15px -2px rgba(20, 72, 146, 0.5);
        
        border-radius: 10px 10px 10px 10px;
    }
</style>