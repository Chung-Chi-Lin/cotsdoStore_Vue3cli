<template>
  <LoadingPage :active="isLoading"></LoadingPage>
  <div class="container py-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb fs-4 pb-4" aria-label="breadcrumb">
        <li class="breadcrumb-item ">
          <router-link to="/products">
            <i class="bi bi-cart-fill text-warning"></i>
          </router-link>
        </li>
        <li class="breadcrumb-item text-brown fw-bold" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <div class="row">
      <div class="col-md-6">
        <img :src="product.imageUrl" class="img-fluid rounded-4" :alt="product.title">
      </div>
      <div class="col-md-4 offset-md-1">
        <h5 class="mt-2 h2 text-brown fw-bold">{{ product.title }}
          <small class="fs-5 rounded-2 ml-1 mb-2 bg-warning py-1 px-2 ms-2">
            {{ product.category }}
          </small>
        </h5>
        <hr class="mt-3">
        <p class="my-4 text-muted text-decoration-line-through"
          v-if="product.origin_price">
          定價 NT${{ product.origin_price  }}
        </p>
        <div class="row my-3">
          <div class="col">
            <h5 class="price-lg mb-3 text-brown fw-bold">
              <p class="mr-2 fw-bold">優惠價
              <span v-if="product.price">NT${{ product.price  }}</span></p>
            </h5>
          </div>
          <div class="col ">
            <div class="input-group input-group-sm col-6">
              <input type="number" class="form-control" aria-label="商品數量"
                    min="1"
                    v-model.number="qty">
              <span class="input-group-text">/ {{ product.unit }}入</span>
            </div>
          </div>
        </div>
        <button type="button" class="btn btn-brown btn-sm rounded-2 w-100 py-2 fs-5"
          @click="addToCart(product.id)">
          <i class="bi bi-cart-plus-fill me-2"></i>
          <small>加入購物車</small>
        </button>
        <div class="py-3" v-if="product.description">
          <div class="my-3">
            <h6 class="my-2 text-secondary"><i class="bi bi-emoji-smile me-2"></i>產品特色：</h6>
            <span class="ms-4">{{ product.description }}</span>
          </div>
          <div class="my-3">
            <h6 class="my- text-secondary"><i class="bi bi-truck me-2"></i>寄送方式：</h6>
            <div class="mx-4">
              <p v-if="product.category = '寵物用品'">常溫專業貨車配送，及產品防撞確實，讓寵物玩具不再變形!</p>
              <p v-else-if="product.category = '保健用品'">常溫、低溫寵物食品有專業貨車配送，及產品防撞確實，讓商品到手中不再變形!</p>
            </div>
          </div>
          <hr style="border-top: 1px solid rgba(0, 0, 0, 0.5);">
          <div class="mb-1">
            <h6 class="text-secondary"><i class="bi bi-file-text me-2"></i>產品描述：</h6>
          </div>
          <div class="mx-4">
            <p class="lh-lg">{{ product.content }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 相關產品 -->
    <section class="border border-4 text-center pt-4">
        <div class="fw-bold">
          <h5 class="mb-2 fw-bold">相關項目</h5>
          <p>查看了此商品的顧客還查看了</p>
        </div>
        <div class="row p-3">
          <div class="col-md-4 rounded-0 border-0 card"
            v-for="item in products" :key="item.id">
            <img :src="item.imageUrl" :alt="item.title" class="card-img-top img-fluid"
            style="height: 350px;">
            <div class="card-body p-2">
              <h6 class="mt-2 text-brown fw-bold">{{ item.title }}
                <small class="rounded-2 ml-1 mb-2 bg-warning px-1 ms-2">
                  {{ item.category }}
                </small>
              </h6>
              <p class="text-decoration-line-through mb-2 text-muted"
                v-if="item.origin_price">
                定價 NT${{ item.origin_price  }}
              </p>
              <p class="price mb-2">
                <small class="mr-2">優惠價</small>
                <span v-if="item.price">NT${{ item.price  }}</span>
              </p>
              <button type="button" class="btn btn-brown btn-sm rounded-2 w-100 py-1"
                @click="addToCart(item.id)">
                <i class="bi bi-cart-plus-fill me-2"></i>
                <small>加入購物車</small>
              </button>
            </div>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      product: {},
      id: '',
      qty: 1,
      isLoading: false,
    };
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        this.product = response.data.product;
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
        this.$http.get(url).then((res) => {
          const filter = res.data.products.filter(
            (item) => item.category === this.product.category,
          );
          this.products = filter;
          if (this.products.length > 3) {
            this.products.splice(3);
          }
        });
      });
    },
    addToCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: this.qty,
      };
      this.isLoading = true;
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false;
        this.$httpMessageState(response, '加入購物車');
        this.$swal.fire({
          icon: 'success',
          title: '已加入購物車',
          showConfirmButton: false,
          timer: 1500,
        });
      }).catch((err) => {
        console.log(err);
        this.isLoading = false;
        this.$swal.fire({
          icon: 'error',
          title: '新增失敗，請確認是否有保持連線 !',
          showConfirmButton: false,
          timer: 1500,
        });
      });
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  },
};
</script>
