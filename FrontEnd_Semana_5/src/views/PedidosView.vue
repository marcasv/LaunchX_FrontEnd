<template>
  <div class="home">
    <MenuAdmin/>
    <Pedidos/>
    <Footer/>
  </div>
</template>

<script>
import MenuAdmin from "../components/MenuAdmin.vue";
import Pedidos from "../components/Pedidos.vue";
import Footer from "../components/Footer.vue";
export default {
  name: 'HomeView',
  
  components:{
    MenuAdmin,
    Pedidos,
    Footer
  }
}
</script>

<style>
div{
  margin-bottom: 10px;
}
.counter{
  font-size: 80px;
}
.buttons button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>