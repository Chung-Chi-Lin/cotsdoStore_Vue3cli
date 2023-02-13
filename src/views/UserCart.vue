<template>
  <VueLoading :active="isLoading" />
  <main class="container pb-5">
    <UserProgress :checkout-type="progressType"></UserProgress>
    <section class="container py-5 row">
      <div class="col-lg-8 col-md-7 mb-3">
        <section class="card mb-5">
          <div class="card-header px-sm-3 px-2">
            <h3 class="card-title fw-bold text-brown pt-2">購物車 ( {{ cartLength }} 件 )
              <i class="bi bi-cart-plus-fill fs-2"></i>
            </h3>
          </div>
          <div class="card-body px-sm-3 px-2" v-if="cartLength">
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
                    <td class="col-6 col-md-3 mb-3 d-flex align-items-center">
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
                      class="cart-img">
                    </td>
                    <td class="col-5 col-md-2 mt-3">
                      <div class="input-group input-group-sm">
                        <input type="number" class="form-control" aria-label="商品數量"
                              min="1"
                              :disabled="item.id === status.loadingItem"
                              @change="updateCart(item)"
                              v-model.number="item.qty">
                        <div class="input-group-text">/ {{ item.product.unit }}</div>
                      </div>
                    </td>
                    <td class="text-md-center text-end col col-md-3 mt-3 fs-5">
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
          <div class="mx-auto text-center p-5 position-relative mt-5" v-else>
            <button type="button" class="btn btn-lg btn-success position-relative
              position-absolute top-0 start-50 f-kalam btn-h" @click="goProducts">
              返回商品頁
              <i class="bi text-success bi-caret-down-fill position-absolute top-100 start-50
              translate-middle mt-1 fs-3"></i>
            </button>
            <img class="img-fluid mt-2" src="@/assets/home-img/picwish.png" alt="黑白毛色狗">
            <h4 class="text-brown fw-bold bg-warning p-2 rounded mt-3">您還沒有加入任何商品哦 !</h4>
          </div>
        </section>
      </div>
      <div class="col-lg-4 col-md-5">
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
                <button class="btn btn-outline-dark" type="button" @click="addCouponCode"
                :class="{ 'disabled': !cartLength }">
                  套用優惠碼
                </button>
              </div>
            </div>
            <p>輸入<span class="bg-light fw-bold"> costdo85 </span> 即可享有 85 折優惠</p>
            <div class="d-flex justify-content-between mt-4">
              <router-link to="/products"
              class="btn btn-outline-secondary btn-block mr-2">
                繼續購物
              </router-link>
              <router-link to="/user/order" class="btn btn-success btn-block mt-0"
              :class="{ 'disabled': !cartLength }">
                前往結帳
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import emitter from '@/methods/emitter';
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
        this.isLoading = false;
      }).catch(() => {
        this.$swal.fire({
          icon: 'error',
          title: '獲取商品失敗，請確認是否保持連線 !',
          showConfirmButton: false,
          timer: 1500,
        });
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
        .then(() => {
          this.status.loadingItem = '';
          this.getCart();
        }).catch(() => {
          this.$swal.fire({
            icon: 'error',
            title: '加入商品失敗，請確認是否有保持連線 !',
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.cart = response.data.data;
        this.cartLength = response.data.data.carts.length;
        this.isLoading = false;
      }).catch(() => {
        this.$swal.fire({
          icon: 'error',
          title: '獲取失敗，請確認是否保持連線 !',
          showConfirmButton: false,
          timer: 1500,
        });
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
      this.$http.put(url, { data: cart }).then(() => {
        this.status.loadingItem = '';
        this.getCart();
      }).catch(() => {
        this.$swal.fire({
          icon: 'error',
          title: '新增失敗，請確認是否有保持連線 !',
          showConfirmButton: false,
          timer: 1500,
        });
      });
    },
    removeCartItem(id) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then(() => {
        this.status.loadingItem = '';
        this.getCart();
        emitter.emit('getCartLength');
        this.isLoading = false;
      }).catch(() => {
        this.$swal.fire({
          icon: 'error',
          title: '移除失敗，請確認是否有保持連線 !',
          showConfirmButton: false,
          timer: 1500,
        });
      });
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code.trim(),
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon }).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.getCart();
        } else {
          this.$swal.fire({
            icon: 'error',
            title: '優惠碼錯誤',
            text: '請確認是否輸入正確優惠碼 !',
            showConfirmButton: false,
            timer: 2000,
          });
        }
      }).catch(() => {
        this.$swal.fire({
          icon: 'error',
          title: '加入優惠卷失敗，請確認是否有保持連線 !',
          showConfirmButton: false,
          timer: 1500,
        });
      });
    },
    goProducts() {
      this.$router.push('/products');
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>
