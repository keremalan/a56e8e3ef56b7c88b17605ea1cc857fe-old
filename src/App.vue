<template>
  <Header/>
  <Banner/>
  <Status/>
</template>

<script>
import Header from './components/Layout/Header.vue'
import Banner from './components/Banner/Banner.vue'
import Status from './components/Status/Status.vue'
export default {
  name: 'App',
  components: {
    Header, Banner, Status,
    
  }
}
</script>

<style>
:root {
  --primaryColor: #000000;
  --backgroundColor: #F7F7F7;
}
* {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  margin: 0;
  padding: 0;
}

body {
  background-color: var(--backgroundColor);
}

a {
  text-decoration: none;
  color: var(--primaryColor);
}
</style>