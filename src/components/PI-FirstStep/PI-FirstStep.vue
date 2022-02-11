<template>
    <div id="pi-first">
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
export default {
    name: 'PiFirstStep',
    setup() {
        return {
            HotelImg
        };
    }
}
</script>