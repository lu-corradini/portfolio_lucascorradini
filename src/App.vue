<template>
  <div>
    <NavMenu/>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu.vue';

export default {
  name: 'App',
  components: {
    NavMenu
  }
}
</script>

<style>
  @import url("./scss/style.scss");
</style>
