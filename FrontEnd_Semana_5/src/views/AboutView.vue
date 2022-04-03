<template>
  <div class="about">
    <MenuUser/>
    <Info/>
    <Footer/>
  </div>
</template>

<script>
import MenuUser from "../components/MenuUser.vue";
import Info from "../components/Info.vue";
import Footer from "../components/Footer.vue";
export default {
  name: 'HomeView',
  
  components:{
    MenuUser,
    Info,
    Footer
  }
}
</script>

<style>

</style>