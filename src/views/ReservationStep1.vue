<template>
  <Header/>
  <Banner/>
  <Status/>
  <PIndicator/>
  <PiSecondStep2/>
</template>

<script>
import Header from '/src/components/Layout/Header.vue'
import Banner from '/src/components/Banner/Banner.vue'
import Status from '/src/components/Status/Status.vue'
import PIndicator from '/src/components/P-Indicator/P-Indicator.vue'
import PiFirstStep from '/src/components/PI-FirstStep/PI-FirstStep.vue'
import PiSecondStep from '/src/components/PiSecondStep/PiSecondStep.vue'
import PiThirdStep from '/src/components/PiThirdStep/PiThirdStep.vue'
import PiLastStep from '/src/components/PiLastStep/PiLastStep.vue'
import PaymentSuccess from '/src/components/PaymentSuccess/PaymentSuccess.vue'

export default {
  name: 'ReservationStep2',
  components: {
    Header, Banner, Status, PIndicator, PiFirstStep, PiSecondStep, PiThirdStep, PiLastStep, PaymentSuccess
    
  }
}
</script>
