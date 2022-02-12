<template>
    <div class="roomType-Scenic">
        <div class="roomType">
            <h2>Oda Tipi</h2>
            <div class="room-types">
                <div class="room-type-1">
                    <img :src="RoomType1"/>
                    <div class="rt-1-summary">
                        <span class="rt-1-summary--roomTypeTitle">Standart</span>
                        <span class="rt-1-summary--roomTypePrice">$2300</span>
                    </div>
                    <span class="roomType-checkoutDetail--date">5 gun</span>
                    <span class="roomType-checkoutDetail--person">1 yetiskin 2 cocuk</span>
                </div>
                <div class="room-type-2">
                    <img :src="RoomType2"/>
                    <div class="rt-2-summary">
                        <span class="rt-2-summary--roomTypeTitle">Deluxe</span>
                        <span class="rt-2-summary--roomTypePrice">$3300</span>
                    </div>
                    <span class="roomType-checkoutDetail--date">5 gun</span>
                    <span class="roomType-checkoutDetail--person">1 yetiskin 2 cocuk</span>
                </div>
                <div class="room-type-3">
                    <img :src="RoomType3"/>
                    <div class="rt-3-summary">
                        <span class="rt-3-summary--roomTypeTitle">Suit</span>
                        <span class="rt-3-summary--roomTypePrice">$4300</span>
                    </div>
                    <span class="roomType-checkoutDetail--date">5 gun</span>
                    <span class="roomType-checkoutDetail--person">1 yetiskin 2 cocuk</span>
                </div>
            </div>
        </div>
        <div class="roomScenic">
            <h2>Oda Manzarasi</h2>
            <div class="room-scenics">
                <div class="room-scenic-1">
                    <img :src="RoomScenic1">
                    <div class="room-scenic-summary">
                        <span class="sc-1-summary--roomScenicTitle">Bahce Manzarasi</span>
                        <span class="sc-1-summary--roomScenicPrice">+2%</span>
                    </div>
                </div>
                <div class="room-scenic-1">
                    <img :src="RoomScenic2">
                    <div class="room-scenic-summary">
                        <span class="sc-1-summary--roomScenicTitle">Bahce Manzarasi</span>
                        <span class="sc-1-summary--roomScenicPrice">+2%</span>
                    </div>
                </div>
                <div class="room-scenic-1">
                    <img :src="RoomScenic3">
                    <div class="room-scenic-summary">
                        <span class="sc-1-summary--roomScenicTitle">Bahce Manzarasi</span>
                        <span class="sc-1-summary--roomScenicPrice">+2%</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav">
            <button class="btn-back">Geri</button>
            <button>Ileri</button>
        </div>
    </div>
</template>
<script>
import RoomType1 from '@/assets/roomType-1.png';
import RoomType2 from '@/assets/roomType-2.png';
import RoomType3 from '@/assets/roomType-3.png';
import RoomScenic1 from '@/assets/room-scenic-1.png';
import RoomScenic2 from '@/assets/room-scenic-2.png';
import RoomScenic3 from '@/assets/room-scenic-3.png';
import './PiThirdStep.scss';
export default {
    name: 'PiThirdStep',
        setup() {
        return {
            RoomType1, RoomType2, RoomType3, RoomScenic1, RoomScenic2, RoomScenic3
        };
    },
}
</script>