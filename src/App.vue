<template>
    <NavMenu/>
    <router-view/>
    <FooterComponent/>
</template>

<script>
import NavMenu from './components/NavMenu.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    NavMenu,
    FooterComponent
  }
}
</script>

<style>
  @import url("./scss/style.scss");
</style>
