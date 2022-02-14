<template>
    <StatusVue/>
    <PIndicatorVue/>
    <div class="pi-second">
        <h2 class="pi-second-headline2">Tarih ve Kisi Secimi</h2>
        <span class="pi-second-span">Otele giris ve cikis tarihlerinizle birlikte, ziyaretinize kac kisinin katilacagini seciniz.</span>
        <div class="pi-second-inputs">
            <div class="dates">
            <div class="dates-startDate">
                <h3>Giris Tarihi</h3>
                <span class="startDate-span">
                    {{ startDate }}
                </span>
                <input class="inpt-date" type="date" v-model="startDate">
                <!-- <button class="btn-pi-second">Duzenle</button> -->
            </div>
            <div class="dates-endDate">
                <h3>Cikis Tarihi</h3>
                <span class="startDate-span">
                    {{ endDate }}
                </span>
                <input class="inpt-date" type="date" v-model="endDate">
                <!-- <button class="btn-pi-second">Duzenle</button> -->
            </div>
        </div>
        <div class="person">
            <div class="person-adult">
                <h3>Yetiskin Sayisi</h3>
                <div>{{ personAdult }} Yetiskin</div>
                <select v-model="personAdult">
                    <option disabled value="Yetkin seciminizi yapin"></option>
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
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17+</option>
                </select>
            </div>
            <div class="person-child">
                <h3>Cocuk Sayisi</h3>
                 <div>{{ personChild }} Cocuk</div>
                <select v-model="personChild">
                    <option disabled value="Yetkin seciminizi yapin"></option>
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
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17+</option>
                </select>
            </div>
        </div>
        </div>
        <button><a href="#/">Geri</a></button><button><a href="#/step3">Ileri</a></button>
    </div>
</template>
<script>
import StatusVue from '../Status/Status.vue';
import PIndicatorVue from '../P-Indicator/P-Indicator.vue';
import './PiSecondStep.scss';
export default {
    data() {
        return {
            startDate: '2022-02-13',
            endDate: '2022-02-14',
            personAdult: '0',
            personChild: '0',
        }
    },
    name: 'PiSecondStep',
    components: {
        StatusVue, PIndicatorVue
    },
}
</script>