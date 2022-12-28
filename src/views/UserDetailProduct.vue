<template>
  <loading-page :active="isLoading"></loading-page>
  <div class="container py-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb fs-4 pb-5" aria-label="breadcrumb">
        <li class="breadcrumb-item ">
          <router-link to="/">
            <i class="bi bi-cart-fill text-warning"></i>
          </router-link>
        </li>
        <li class="breadcrumb-item text-brown fw-bold" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>

    <div class="row justify-content-center align-items-center g-5">
      <article class="col-7">
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3 rounded-5 shadow-lg">
      </article>
      <div class="col-5">
        <h2 class="mb-3 fw-bold">產品資訊 :</h2>
        <p class="fs-1 text-brown fw-bold">{{ product.title }}
          <i class="bi bi-chat-heart text-danger"></i>
        </p>
        <p class="fs-4 fw-bold">產品特色: {{ product.description }}</p>
        <p class="f-kalam fs-5">{{ product.content }}</p>
        <p class="h5" v-if="!product.price">{{ product.origin_price }} 元</p>
        <div class="row align-items-center">
          <p class="col h6 d-inline fs-3 text-decoration-line-through"
          v-if="product.price">原價 {{ product.origin_price }} 元</p>
          <p class="col-6 h5 d-inline" v-if="product.price">現在只要
            <span class="f-kalam text-danger fs-1">{{ product.price }}</span>元</p>
        </div>
        <hr>
        <button type="button" class="btn btn-outline-danger fs-4 mt-3"
          @click="addToCart(product.id)">
          <i class="bi bi-cart-plus-fill fs-4"></i>
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      id: '',
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data);
        this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
        }
      });
    },
    addToCart(id, qty = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      this.isLoading = true;
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false;
        this.$httpMessageState(response, '加入購物車');
        this.$router.push('/products');
      });
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
