<template>
  <nav class="navbar navbar-expand-xxl navbar-light bg-warning
    sticky-top fw-bold border-bottom border-dark border-3">
    <div class="container-fluid px-lg-5">
      <div class="col-example d-none d-lg-block text-center">
        <h1 class="f-kalam fs-3 fw-bold">Costdo 寵物生活館</h1>
      </div>
      <div class="d-lg-none text-center shadow-sm rounded-pill">
        <h1 class="f-kalam fs-3 mt-3 px-2 fw-bold">Costdo 寵物生活館</h1>
      </div>
      <button class="navbar-toggler border-0" type="button"
      data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
          <li class="nav-item pe-5">
            <router-link class="fs-4 nav-link" aria-current="page" to="/">首頁</router-link>
          </li>
          <li class="nav-item pe-5">
            <router-link class="fs-4 nav-link" aria-current="page" to="/products">商品介紹</router-link>
          </li>
          <li class="nav-item pe-5">
            <router-link class="fs-4 nav-link" aria-current="page" to="/location">門市資訊</router-link>
          </li>
          <li class="nav-item pe-5">
            <router-link class="fs-4 nav-link" aria-current="page" to="/adopt">
              領養專區
            </router-link>
          </li>
          <li class="nav-item pe-2 btn-h">
            <button type="button" class="btn border-0 p-0 pe-2"
            @click="$refs.searchModal.showModal()">
            <span class="fs-4 me-2 d-md-none">搜尋商品</span><i class="bi bi-search fs-2"></i>
            </button>
          </li>
          <li class="nav-item pe-2 btn-h">
            <router-link to="/user/cart" class="nav-link link-dark">
              <span class="fs-4 me-2 d-md-none">購物車</span><i class="bi bi-cart-plus-fill fs-2"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    <!-- Modal -->
    <UserSearchModal ref="searchModal"  @update-search="searchProduct"></UserSearchModal>
</template>

<script>
import UserSearchModal from './UserSearchModal.vue';

export default {
  components: {
    UserSearchModal,
  },
  data() {
    return {
      modal: null,
    };
  },
  methods: {
    searchProduct(item) {
      this.$router.push({ path: '/products', query: { product: item } });
      this.$refs.searchModal.clearData();
      this.$refs.searchModal.hideModal();
    },
  },
};
</script>

<style lang="scss" scoped>
.col-example {
  background-position: center;
  transition-property: opacity;
  color: black;
  position: relative;
  justify-content: center;
  display: flex;
  width: 400px;
  height: 70px;
  &::after {
    content: "";
    position: absoulte;
    background: url("../assets/dog&cat2.png");
    background-size: cover;
    background-position: center;
    width: 400px;
    height: 120px;
    top: 0px;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
}
</style>
