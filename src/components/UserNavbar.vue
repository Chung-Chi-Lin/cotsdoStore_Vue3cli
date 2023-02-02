<template>
  <nav class="navbar navbar-expand-md navbar-light bg-warning
    sticky-top fw-bold border-bottom border-dark border-3">
    <div class="container-fluid px-lg-5">
      <div class="navbar-img d-none d-lg-block text-center">
        <h1 class="f-kalam h4 fw-bold">Costdo 寵物生活館</h1>
      </div>
      <div class="d-lg-none text-center shadow-sm rounded-pill">
        <h1 class="f-kalam h3 mt-3 px-2 fw-bold">Costdo 寵物生活館</h1>
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
            <router-link class="fs-5 nav-link" aria-current="page" to="/">首頁</router-link>
          </li>
          <li class="nav-item pe-5">
            <router-link class="fs-5 nav-link" aria-current="page" to="/products">商品介紹</router-link>
          </li>
          <li class="nav-item pe-5">
            <router-link class="fs-5 nav-link" aria-current="page" to="/location">門市資訊</router-link>
          </li>
          <li class="nav-item pe-5">
            <router-link class="fs-5 nav-link" aria-current="page" to="/adopt">
              領養專區
            </router-link>
          </li>
          <li class="nav-item pe-2 btn-h">
            <button type="button" class="btn border-0 p-0 pe-2"
            @click="$refs.searchModal.showModal()">
            <span class="fs-3 me-2 d-md-none">搜尋商品</span><i class="bi bi-search fs-3"></i>
            </button>
          </li>
          <li class="nav-item pe-2 btn-h">
            <button type="button" class="btn btn-sm position-relative" @click="goCart">
              <i class="bi bi-cart-plus-fill fs-3"></i>
              <span class="position-absolute top-0 end-0
              badge rounded-pill bg-danger">{{cartLength}}</span>
            </button>
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
      cartLength: '0',
    };
  },
  methods: {
    searchProduct(item) {
      this.$router.push({ path: '/products', query: { product: item } });
      this.$refs.searchModal.clearData();
      this.$refs.searchModal.hideModal();
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.cartLength = response.data.data.carts.length;
      }).catch(() => {
        this.$swal.fire({
          icon: 'error',
          title: '獲取失敗，請確認是否保持連線 !',
          showConfirmButton: false,
          timer: 1500,
        });
      });
    },
    goCart() {
      this.$router.push('/user/cart');
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
.navbar-img {
  background-position: center;
  transition-property: opacity;
  color: black;
  position: relative;
  justify-content: center;
  display: flex;
  width: 400px;
  height: 60px;
  &::after {
    content: "";
    position: absolute;
    background: url("../assets/home-img/dog&cat3.png");
    background-size: cover;
    background-position: center;
    width: 313px;
    height: 120px;
    top: -6px;
    left: 45px;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
}
</style>
