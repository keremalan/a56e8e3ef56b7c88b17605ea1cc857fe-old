<template>
    <StatusVue/>
    <PIndicatorVue/>
    <div class="roomType-Scenic">
        <div class="roomType">
            <h2 class="roomType-headline2">Oda Tipi</h2>
            <div class="room-types">
                <RoomTypeCard
                    roomImage="./src/assets/roomType-1.png"
                    roomTypeTitle="Standart"
                    roomTypePrice="2300$"
                    checkoutDetailDate="5"
                    checkoutDetailAdultPerson="2"
                    checkoutDetailChildPerson="2"
                 />
                <RoomTypeCard
                    roomImage="./src/assets/roomType-2.png"
                    roomTypeTitle="Deluxe"
                    roomTypePrice="3300$"
                    checkoutDetailDate="5"
                    checkoutDetailAdultPerson="2"
                    checkoutDetailChildPerson="2"
                />
                <RoomTypeCard
                    roomImage="./src/assets/roomType-3.png"
                    roomTypeTitle="Suit"
                    roomTypePrice="4300$"
                    checkoutDetailDate="5"
                    checkoutDetailAdultPerson="2"
                    checkoutDetailChildPerson="2"
                 />
            </div>
        </div>
        <div class="roomScenic">
            <h2 class="roomScenic-headline2">Oda Manzarasi</h2>
            <div class="room-scenics">
                <RoomScenicCard
                    roomScenicImage="./src/assets/room-scenic-1.png"
                    roomScenicTitle="Bahce Manzarasi"
                    roomScenicPriceEffect="+%3"
                />
                <RoomScenicCard
                    roomScenicImage="./src/assets/room-scenic-2.png"
                    roomScenicTitle="Havuz Manzarasi"
                    roomScenicPriceEffect="+%5"
                />
                <RoomScenicCard
                    roomScenicImage="./src/assets/room-scenic-3.png"
                    roomScenicTitle="Deniz Manzarasi"
                    roomScenicPriceEffect="+%7"
                />
            </div>
        </div>
        <div class="nav">
            <button class="btn-back"><a href="#/step2">Geri</a></button>
            <button><a href="#/step4">Ileri</a></button>
        </div>
    </div>
</template>
<script>
import StatusVue from '../Status/Status.vue';
import PIndicatorVue from '../P-Indicator/P-Indicator.vue';
import './PiThirdStep.scss';
import RoomTypeCard from './RoomTypeCard/RoomTypeCard.vue';
import RoomScenicCard from './RoomScenicCard/RoomScenicCard.vue';
export default {
    name: 'PiThirdStep',
    components: {
        RoomTypeCard, RoomScenicCard, StatusVue, PIndicatorVue
    },
        setup() {
        return {
        };
    },
}
</script>