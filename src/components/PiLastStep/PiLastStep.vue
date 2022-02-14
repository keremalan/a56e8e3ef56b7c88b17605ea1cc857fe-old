<template>
    <StatusVue/>
    <PIndicatorVue/>
    <div class="pi-last">
        <h2 class="pi-last-headline2">Onizleme ve Odeme Islemleri</h2>
        <div class="pi-last--checkout">
            <div class="pi-last--checkout--cardInfo">
                <div class="checkout--cardInfo">
                    <div class="cardInfo-top">
                        <span class="cardInfo-top--cardName">Huxley Card</span>
                        <span class="cardInfo-top--cardType">Bank</span>
                    </div>
                    <div class="cardInfo-icon">
                        <img :src="CardChip" class="cardInfo-icon--img">
                    </div>
                    <div class="cardInfo-cardNumber">
                        <span>Kart Numarasi</span>
                        <span class="cardInfo--cardNumber--numbers">{{ cardNumber }}</span>
                    </div>
                    <div class="cardInfo-bottom">
                        <div class="cardInfoBottom--nameAndDate">
                            <span>Isim</span>
                            <span class="cardInfoBottom--name">{{ cardHolderName }}</span>
                            <div class="cardInfoBottom-date"><span>CVV</span><span class="cardInfoBottom--date">{{ dateMonth }} / {{ dateYear }}</span></div>
                        </div>
                        <div class="cardInfoBottom--logo">
                            <img :src="MasterCardLogo" class="cardInfoBottom--logoImg">
                        </div>
                    </div>
                </div>
                <div class="checkout--cardInput">
                    <h2>Kredi Karti Bilgileri</h2>
                    <h4 class="checkout--cardInput-headline4">Kartin Uzerindeki Isim</h4>
                    <input class="checkout-input ci-person" v-model="cardHolderName" placeholder="Kart uzerindeki ismi girin">
                    <h4 class="checkout--cardInput-headline4">Kartin Numarasi</h4>
                    <input class="checkout-input ci-person" v-model="cardNumber" placeholder="Kartin numarasini girin">
                    <div class="checkout-cardInput--lastDateAndCVV">
                        <div class="checkout-cardInput--lastDate">
                            <h4 class="checkout--cardInput-headline4">Kart Son Kullanma Tarihi</h4>
                            <div class="checkout-cardInput-bottom">
                                <select class="checkout-cardInput-bottom--select" v-model="dateMonth">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                    <option>11</option>
                                    <option>12</option>
                                </select>
                                <select v-model="dateYear">
                                    <option>22</option>
                                    <option>23</option>
                                    <option>24</option>
                                    <option>25</option>
                                    <option>26</option>
                                    <option>27</option>
                                    <option>28</option>
                                    <option>29</option>
                                </select>
                            </div>
                        </div>
                        <div class="checkout-cardInput-CVV">
                            <h4 class="checkout--cardInput-headline4">CVV</h4>
                            <input v-model="cardCVV" placeholder="CVV Giriniz">
                        </div>
                    </div>
                </div>
            </div>
            <hr class="display-none-desktop--hr">
            <h2 class="display-none-desktop">Odeme Bilgileri</h2>
            <div class="pi-last--checkout--reservationOverview">
                <h3 class="pi-last--heckout--reservationOverview-h3">The Huxley Hotel, Istanbul</h3>
                <div class="reservationOverview">
                    <div class="reservationOverview-left">
                        <div class="reservationOverview-left--startDate">
                            <strong>Giris Tarihi:</strong>
                            <span>25.12.2022</span>
                        </div>
                        <div class="reservationOverview-left--adultPerson">
                            <strong>Yetiskin:</strong>
                            <span>1</span>
                        </div>
                        <div class="reservationOverview-left--roomType">
                            <strong>Oda Tipi:</strong>
                            <span>Standart</span>
                        </div>
                    </div>
                    <div class="reservationOverview-right">
                        <div class="reservationOverview-right--endDate">
                            <strong>Cikis Tarihi:</strong>
                            <span>30.12.2022</span>
                        </div>
                        <div class="reservationOverview-right--childPerson">
                            <strong>Cocuk:</strong>
                            <span>0</span>
                        </div>
                        <div class="reservationOverview-right--roomScenic">
                            <strong>Manzara:</strong>
                            <span>Deniz Manzarali</span>
                        </div>
                    </div>
                </div>
                <div class="coupon">
                    <input v-model="couponCode" placeholder="{{ couponCode }}"><button class="btn-coupon">Kodu Kullan</button>
                </div>
                <div class="reservationOverview-bottom">
                    <div class="reservationOverview-bottom--roomPrice"><strong>Oda Fiyati</strong>1.127 TL</div>
                    <div class="reservationOverview-bottom--priceEffect"><strong>Fiyat Etki orani</strong><span>%38</span></div>
                    <div class="reservationOverview-bottom--dates"><div><strong>Konaklama </strong>(5 Gun) </div><span>5.635 TL</span></div>
                    <div class="reservationOverview-bottom--discount"><div><strong>Indirim </strong>(CODE100)</div><span>-100 TL</span></div>
                </div>
                <hr class="reservationOverview-hr">
                <div class="reservationOverview-price">
                    <h4>Toplam Tutar</h4>
                    <span class="reservationOvewview-">7.232 TL</span>
                </div>                
            </div>
        </div>
        <div class="reservation-buttons">
            <button><a href="#/step3">Geri</a></button><button class="reservation-button-right"><a href="#/reservationsuccess">Odeme Yap</a></button>
        </div>
    </div>
</template>
<script>
import StatusVue from '../Status/Status.vue';
import PIndicatorVue from '../P-Indicator/P-Indicator.vue';
import MasterCardLogo from '@/assets/mc_symbol.svg';
import CardChip from '@/assets/chip.png';
import './PiLastStep.scss';
export default {
        data() {
        return {
            couponCode: ' CODE100',
            cardHolderName: 'Isim Soyisim',
            cardNumber: '0000 0000 0000 00000',
            cardCVV: '',
            dateMonth: '1',
            dateYear: '22',
        }
    },
    name: 'PiLastStep',
        setup() {
        return {
            MasterCardLogo, CardChip
        };
    },
    components: {
        StatusVue, PIndicatorVue
    }
}
</script>