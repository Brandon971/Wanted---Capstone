<template>
<NavBar></NavBar>
  <div class="container-fluid min-vh-100"><router-view /></div>
  <div></div>
  <Footer></Footer>
</template>
<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default{
  components:
  {NavBar, Footer }
}

</script>
<style>
</style>
