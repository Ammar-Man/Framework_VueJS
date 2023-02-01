


<template>
  <div class="container">
    <Header title="Bank App" />
    <!-- <Header /> -->
    <Nav />
   
    <!-- <NuxtWelcome /> -->
    <Footer />
  </div>
</template>


<script>
import Header from './components/Header.vue';
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';

export default{
  name:"App",
  components:{
    Header,
    Nav,
    Footer
  }
}

// bootstrap - vue components

</script>

<style>
 body{

  font-family: sans-serif;
 }
</style>