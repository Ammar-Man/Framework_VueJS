


<template>
  <div class="container">
    <Header />
    <Nav />
    <!-- <Header title="Hello" /> -->
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