<template>
    <div id="pi-first">
        <div>Otel: {{ selectedHotel }}</div>
        <select v-model="selectedHotel">
            <option disabled value="Otel seciminizi yapin"></option>
            <option>The Huxley Hotel, Istanbul</option>
        </select>
        <Spacer/>
        <hr>
        <h2 class="pi-headline2">Oteller</h2>
        <div class="pi-f-top">
            <div class="pi-f-top-left">
                <img :src="HotelImg"/>
            </div>
            <div class="pi-f-top-right">
                <h3>The Huxley Hotel, Istanbul</h3>
                <h4>Sunulan Hizmetler</h4>
                <div class="pi-f-top-right-services">
                    <span class="services-item first">Ucretsiz park</span>
                    <span class="services-item">Ucretsiz Wi-Fi</span>
                    <span class="services-item">Sigara icilmeyen odalar</span>
                    <span class="services-item">Restoran</span>
                    <span class="services-item">Kapali havuz</span>
                </div>
                <div class="pi-f-top-right-services mt">
                    <span class="services-item first">Acik havuz</span>
                    <span class="services-item">Evcil hayvan kabulu</span>
                    <span class="services-item">Is alanlari</span>
                    <span class="services-item">SPA</span>
                </div>
            </div>
        </div>
        <div class="pi-f-bottom">
            <button>Ileri</button>
        </div>
    </div>
</template>

<script>
import './PI-FirstStep.scss';
import HotelImg from '@/assets/hotel-image.png';
import Spacer from '../Spacer/Spacer.vue';
export default {
    data() {
        return {
            selectedHotel: 'The Huxley Hotel, Istanbul'
        }
    },
    name: 'PiFirstStep',
    components: {
        Spacer,
    },
    setup() {
        return {
            HotelImg
        };
    }
}
</script>