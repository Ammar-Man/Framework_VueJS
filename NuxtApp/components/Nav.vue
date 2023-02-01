<script>

export default {
    name:"Nav"
}
</script>

<template>
    <div >
    <ul :class="$style.nav_ul_css">
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>
    </div>

</template>

<style module>
.nav_ul_css{
    list-style-type: none;
    margin: 0;
    padding: 0;
}
</style>