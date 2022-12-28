<template>
  <nav class="mt-5">
    <h3 class="list-group-item h4 mb-0 fw-bold text-white bg-brown py-3 px-3">後台管理</h3>
    <section class="list-group list-group-flush">
      <router-link to="/dashboard/products" class="nav-link list-group-item list-group-item-action
      router-link-active py-3 fw-bold" aria-current="page">
      <i class="bi bi-caret-right-fill"></i>產品
      </router-link>
      <router-link to="/dashboard/orders" class="nav-link list-group-item list-group-item-action
      router-link-active py-3 fw-bold" aria-current="page">
      <i class="bi bi-caret-right-fill"></i>訂單
      </router-link>
      <router-link to="/dashboard/coupons" class="nav-link list-group-item list-group-item-action
      router-link-active py-3 fw-bold" aria-current="page">
      <i class="bi bi-caret-right-fill"></i>優惠券
      </router-link>
      <button class="list-group-item list-group-item-action router-link-active py-3 fw-bold
      text-danger"
              aria-current="page" @click.prevent="logout">
        <i class="bi bi-box-arrow-right text-danger"></i> 登出
      </button>
    </section>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/login');
        }
      });
    },
  },
};
</script>
