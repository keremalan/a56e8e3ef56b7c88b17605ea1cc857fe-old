<template>
    <div id="progress-indicator">
        <h5 class="">{{ stepCount }}</h5>
        <div class="pi-texts">
            <h3 class="pi-text">Otel <br>Secimi</h3>
            <h3 class="pi-text">Tarih ve Kisi <br> Secimi</h3>
            <h3 class="pi-text">Oda Tipi ve Manzara <br> Secimi</h3>
            <h3 class="pi-text">Onizleme ve Odeme <br> Islemleri</h3>
        </div>
        <div class="pi-bar">
            <div class="pi-bar-inside"></div>
        </div>
    </div>
</template>

<script>
import './P-Indicator.scss';
export default {
    props: ['stepCount'],
    name: 'PIndicator'
}
</script>

<style>
</style>