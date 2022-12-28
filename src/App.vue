<template>
  <UserNavbar></UserNavbar>
  <main style="background-image: url('https://images.unsplash.com/photo-1601662528567-526cd06f6582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80');">
    <router-view :key="$route.fullPath" />
  </main>
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
