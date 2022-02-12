<template>
  <Header/>
  <Banner/>
  <Status/>
  <P-Indicator/>
  <PiThirdStep/>
</template>

<script>
import Header from './components/Layout/Header.vue'
import Banner from './components/Banner/Banner.vue'
import Status from './components/Status/Status.vue'
import PIndicator from './components/P-Indicator/P-Indicator.vue'
import PiFirstStep from './components/PI-FirstStep/PI-FirstStep.vue'
import PiSecondStep from './components/PiSecondStep/PiSecondStep.vue'
import PiThirdStep from './components/PiThirdStep/PiThirdStep.vue'
export default {
  name: 'App',
  components: {
    Header, Banner, Status, PIndicator, PiFirstStep, PiSecondStep, PiThirdStep
    
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