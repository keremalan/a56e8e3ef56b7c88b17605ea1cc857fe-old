<template>
  <Header/>
  <Banner/>
  <component :is="currentView" />
</template>
<script>
import Header from './components/Layout/Header.vue'
import Banner from './components/Banner/Banner.vue'
import Status from './components/Status/Status.vue'
import PIndicator from './components/P-Indicator/P-Indicator.vue'
import PiFirstStep from './components/PI-FirstStep/PI-FirstStep.vue'
import PiSecondStep from './components/PiSecondStep/PiSecondStep.vue'
import PiThirdStep from './components/PiThirdStep/PiThirdStep.vue'
import PiLastStep from './components/PiLastStep/PiLastStep.vue'
import PaymentSuccess from './components/PaymentSuccess/PaymentSuccess.vue'
import PiSecondStepVue from './components/PiSecondStep/PiSecondStep.vue'
import PiThirdStepVue from './components/PiThirdStep/PiThirdStep.vue'
import PiLastStepVue from './components/PiLastStep/PiLastStep.vue'
import PaymentSuccessVue from './components/PaymentSuccess/PaymentSuccess.vue'

const routes = {
  '/': PiFirstStep,
  '/step2': PiSecondStepVue,
  '/step3': PiThirdStepVue,
  '/step4': PiLastStepVue,
  '/reservationsuccess': PaymentSuccessVue,
}

export default {
    data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  },
  name: 'App',
  components: {
    Header, Banner, Status, PIndicator, PiFirstStep, PiSecondStep, PiThirdStep, PiLastStep, PaymentSuccess, PiSecondStepVue, PiThirdStepVue, PiLastStepVue, PaymentSuccessVue
    
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