<template>
    <header>
        <div class="header-brand">
            <img :src="Logo"/>
        </div>
        <div class="header-nav">
            <a href="#">bilgi</a>
            <a href="#rezervasyon">rezervasyon</a>
            <a href="#turkce">turkce</a>
        </div>
    </header>
</template>

<script>
import './Header.scss';
import Logo from '@/assets/icons/logo.svg';
export default {
    name: 'Header',
    setup() {
        return {
            Logo
        };
    }
}

</script>