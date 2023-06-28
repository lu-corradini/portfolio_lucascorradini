<template>
    <NavMenu/>
    <HomePageMain/>
    <FooterComponent/>
</template>

<script>
import NavMenu from './components/NavMenu.vue';
import HomePageMain from './components/HomePageMain.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    NavMenu,
    HomePageMain,
    FooterComponent
  }
}
</script>

<style>
  @import url("./scss/style.scss");
</style>
