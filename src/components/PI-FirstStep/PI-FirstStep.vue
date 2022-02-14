<template>
    <StatusVue/>
    <PIndicatorVue/>
    <div id="pi-first">
        <div class="pi-first-hotel">Otel: {{ selectedHotel }}</div>
        <select v-model="selectedHotel" class="pi-first-select">
            <option disabled value="Otel seciminizi yapin"></option>
            <option>The Huxley Hotel, Istanbul</option>
        </select>
        <Spacer/>
        <hr class="pi-first-hr">
        <h2 class="pi-headline2">Oteller</h2>
        <HotelCard hotelName="The Huxley Hotel, Istanbul"/>
        <div class="pi-f-bottom">
            <button><a href="#/step2">Ileri</a></button>
        </div>
    </div>
</template>

<script>
import StatusVue from '../Status/Status.vue';
import PIndicatorVue from '../P-Indicator/P-Indicator.vue';
import './PI-FirstStep.scss';
import Spacer from '../Spacer/Spacer.vue';
import HotelCard from '../HotelCard/HotelCard.vue';
export default {
    data() {
        return {
            selectedHotel: 'The Huxley Hotel, Istanbul'
        }
    },
    name: 'PiFirstStep',
    components: {
        Spacer, HotelCard, PIndicatorVue, StatusVue
    },
}
</script>