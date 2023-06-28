<template>
    <NavMenu/>
    <HomePageMain/>
</template>

<script>
import NavMenu from './components/NavMenu.vue';
import HomePageMain from './components/HomePageMain.vue';

export default {
  name: 'App',
  components: {
    NavMenu,
    HomePageMain
  }
}
</script>

<style>
  @import url("./scss/style.scss");
</style>
