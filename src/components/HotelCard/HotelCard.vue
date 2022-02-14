<template>
    <div class="hotel-card">
            <div class="hotel-card-top-left">
                <img :src="HotelImg"/>
            </div>
            <div class="hotel-card-top-right">
                <h3>{{ hotelName }}</h3>
                <h4>Sunulan Hizmetler</h4>
                <div class="hotel-card-top-right-services">
                    <HotelServices serviceName="Ucretsiz park" class="first" />
                    <HotelServices serviceName="Ucretsiz Wi-Fi"/>
                    <HotelServices serviceName="Sigara icilmeyen odalar"/>
                    <HotelServices serviceName="Restoran"/>
                    <HotelServices serviceName="Kapali havuz"/>
                </div>
                <div class="hotel-card-top-right-services mt">
                    <HotelServices serviceName="Acik havuz" class="first"/>
                    <HotelServices serviceName="Evcil hayvan kabulu"/>
                    <HotelServices serviceName="Is alanlari"/>
                    <HotelServices serviceName="SPA"/>
                </div>
            </div>
        </div>
</template>

<script>
import './HotelCard.scss';
import HotelImg from '@/assets/hotel-image.png';
import HotelServices from './HotelCardComponents/HotelServices.vue';
export default {
    props: ['hotelName'],
    name: 'HotelCard',
        setup() {
        return {
            HotelImg
        };
    },
        components: {
        HotelServices,
    },
}
</script>