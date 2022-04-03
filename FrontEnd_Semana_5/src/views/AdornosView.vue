<template>
  <div class="home">
    <MenuUser/>
    <Adornos/>
    <Footer/>
  </div>
</template>

<script>
import MenuUser from "../components/MenuUser.vue";
import Adornos from "../components/Adornos.vue";
import Footer from "../components/Footer.vue";
export default {
  name: 'HomeView',
  
  components:{
    MenuUser,
    Adornos,
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