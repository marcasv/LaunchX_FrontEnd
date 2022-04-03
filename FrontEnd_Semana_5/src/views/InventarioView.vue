<template>
  <div class="home">
    <MenuAdmin/>
    <Inventario/>
    <Footer/>
  </div>
</template>

<script>
import MenuAdmin from "../components/MenuAdmin.vue";
import Inventario from "../components/Inventario.vue";
import Footer from "../components/Footer.vue";
export default {
  name: 'HomeView',
  
  components:{
    MenuAdmin,
    Inventario,
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