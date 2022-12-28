<template>
  <loading-page :active="isLoading"></loading-page>
  <main class="container pb-5">
    <UserProgress :checkout-type="progressType"></UserProgress>
  <!-- 購物車列表 -->
    <section class="container py-5">
      <div class="row px-5">
        <div class="col-12 col-md-8 mb-5">
          <div class="card">
            <div class="card-header text-brown fw-bold fs-5 py-3">
            購物車 ( {{ cartLength }} 件 )
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item py-3 d-none d-md-block">
                  <tr class="d-flex justify-content-between text-brown">
                    <th class="ms-1">品名</th>
                    <th>照片</th>
                    <th>數量</th>
                    <th>單價</th>
                    <th></th>
                  </tr>
              </li>
              <li class="list-group-item" v-for="item in cart.carts" :key="item.id">
                <template v-if="cart.carts">
                  <tr class="d-flex justify-content-between row g-0">
                    <td class="col-6 col-md-3 mb-3">
                      {{ item.product.title }}
                      <div class="text-success" v-if="item.coupon">
                        已套用優惠券
                      </div>
                    </td>
                    <td class="col-6 mb-3 text-end d-block d-md-none">
                      <button type="button" class="btn btn-outline-danger
                      btn-sm"
                              :disabled="status.loadingItem === item.id"
                              @click="removeCartItem(item.id)">
                        <i class="bi bi-x"></i>
                      </button>
                    </td>
                    <td class="col-12 col-md-3">
                      <img :src="item.product.imageUrl" alt="購物車圖片"
                      class="img-fluid" style="height:100px; width: 110px;">
                    </td>
                    <td class="col-5 col-md-2 mt-3">
                      <div class="input-group input-group-sm">
                        <input type="number" class="form-control" aria-label="商品數量"
                              min="1"
                              :disabled="item.id === status.loadingItem"
                              @change="updateCart(item)"
                              v-model.number="item.qty" style="width:50px">
                        <div class="input-group-text">/ {{ item.product.unit }}</div>
                      </div>
                    </td>
                    <td class="text-center col col-md-3 mt-3">
                      <small v-if="cart.final_total !== cart.total"
                      class="text-success">折扣價:</small>
                      $ {{ $filters.currency(item.final_total) }}
                    </td>
                    <td class="text-center col col-md-1 mt-3">
                      <button type="button" class="btn btn-outline-danger
                      btn-sm ms-2 d-none d-md-inline"
                              :disabled="status.loadingItem === item.id"
                              @click="removeCartItem(item.id)">
                        <i class="bi bi-x"></i>
                      </button>
                    </td>
                  </tr>
                </template>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-4">
        <div class="card text-brown">
          <div class="card-header fw-bold fs-5 py-3">
            訂單資訊
          </div>
          <div class="card-body">
            <div class="d-flex justify-content-between mb-2"
            v-if="cart.final_total === cart.total">
              <span>原價：</span>
              <span>NT$ {{ $filters.currency(cart.total) }}</span>
            </div>
            <div v-else class="d-flex justify-content-between mb-2 text-success" >
              <span>折扣價：</span>
              <span>NT$ {{ $filters.currency(cart.final_total) }}</span>
            </div>
            <div class="d-flex justify-content-between mb-2">
              <span>運費：</span>
              <span>NT$ 60</span>
            </div>
            <hr>
            <div class="d-flex justify-content-between mb-3 fw-bold"
            v-if="cart.final_total === cart.total">
              <span>合計：</span>
              <span>NT$ {{ $filters.currency(cart.total + 60) }}</span>
            </div>
            <div v-else-if="cart.final_total !== cart.total"
            class="d-flex justify-content-between mb-3 text-success fw-bold">
              <span>折扣價：</span>
              <span>NT$ {{ $filters.currency(cart.final_total + 60) }}</span>
            </div>
            <div class="input-group mb-3 input-group-sm">
              <input type="text" class="form-control" v-model="coupon_code"
              aria-label="請輸入優惠碼"
              placeholder="請輸入優惠碼">
              <div class="input-group-append input-group-sm">
                <button class="btn btn-outline-dark" type="button" @click="addCouponCode">
                  套用優惠碼
                </button>
              </div>
            </div>
            <p>輸入<span class="bg-light fw-bold"> costdo85 </span> 即可享有 85 折優惠</p>
            <div class="d-flex justify-content-between mt-4">
              <router-link to="/products" class="btn btn-outline-info btn-block mr-2 text-dark">
                繼續購物
              </router-link>
              <router-link to="/user/order" class="btn btn-info btn-block mt-0">
                前往結帳
              </router-link>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import UserProgress from '@/components/UserProgress.vue';

export default {
  components: {
    UserProgress,
  },
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: '', // 對應品項 id
      },
      cart: {},
      cartLength: '0',
      coupon_code: '',
      isLoading: false,
      progressType: 'cart',
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        console.log('products:', response);
        this.isLoading = false;
      });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(url, { data: cart })
        .then((res) => {
          this.status.loadingItem = '';
          console.log(res);
          this.getCart();
        });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        console.log(response);
        this.cart = response.data.data;
        this.cartLength = response.data.data.carts.length;
        this.isLoading = false;
      });
    },
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.status.loadingItem = item.id;
      const cart = {
        product_id: item.product_id,
        qty: item.qty,
      };
      this.$http.put(url, { data: cart }).then((res) => {
        console.log(res);
        this.status.loadingItem = '';
        this.getCart();
      });
    },
    removeCartItem(id) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.$httpMessageState(response, '移除購物車品項');
        this.status.loadingItem = '';
        this.getCart();
        this.isLoading = false;
      });
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        this.$httpMessageState(response, '加入優惠券');
        this.getCart();
        this.isLoading = false;
      });
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
