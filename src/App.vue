<template>
  <UserNavbar></UserNavbar>
    <router-view :key="$route.fullPath" />
  <UserFooter></UserFooter>
</template>

<style lang="scss">
@import "./assets/all"
</style>

<script>
import UserNavbar from '@/components/UserNavbar.vue';
import UserFooter from '@/components/UserFooter.vue';

export default {
  components: {
    UserNavbar,
    UserFooter,
  },
};
</script>
