<template>
  <div class="container py-5 bg-h">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb py-4 fs-3">
        <li class="breadcrumb-item ">
          <router-link to="/">
            <i class="bi bi-house-door-fill text-warning"></i>
          </router-link>
        </li>
        <li class="breadcrumb-item text-brown fw-bold" aria-current="page">
          後台系統
        </li>
      </ol>
    </nav>

    <div class="row g-5 position-relative">
        <ToastMessages></ToastMessages>
      <div class="col-md-3">
        <Navbar></Navbar>
      </div>
      <div class="col-md-9">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import Navbar from '../components/BackgroundNavbar.vue';

export default {
  components: {
    Navbar,
    ToastMessages,
  },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((res) => {
      if (!res.data.success) {
        this.$router.push('/login');
      }
    });
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
