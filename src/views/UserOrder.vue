<template>
  <loading-page :active="isLoading"></loading-page>
  <main class="container pb-5">
    <UserProgress :checkout-type="progressType"></UserProgress>
    <section class="container py-5">
      <v-form class="row" v-slot="{ errors }" @submit="createOrder">
        <div class="col-lg-8 col-md-7 mb-3">
          <section class="card mb-5">
            <div class="card-header px-sm-3 px-2">
              <h3 class="card-title fw-bold text-brown pt-2">顧客資料
                <i class="bi bi-person-fill"></i>
              </h3>
            </div>
            <div class="card-body px-sm-3 px-2">
              <div class="form-group">
                <label for="name">顧客名稱*</label>
                <v-field id="name" name="顧客姓名" type="text" class="form-control"
                :class="{ 'is-invalid': errors['顧客姓名'] }"
                placeholder="請輸入姓名" rules="required"
                v-model="info.name"></v-field>
                <ErrorMessage name="顧客姓名" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="form-group py-3">
                <label for="email">電子信箱*</label>
                <v-field id="email" name="email" type="email" class="form-control"
                :class="{ 'is-invalid': errors['email'] }"
                placeholder="請輸入 Email" rules="email|required"
                v-model="user.email"></v-field>
                <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="form-group pb-3">
                <label for="tel">手機號碼*</label>
                <v-field id="tel" name="電話" type="number" class="form-control"
                :class="{ 'is-invalid': errors['電話'] }"
                placeholder="請輸入電話" :rules="isPhone"
                v-model="info.tel"
                oninput="if(value.length>10)value=value.slice(0,10)"></v-field>
                <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
              </div>
              <label for="message pb-3">訂單備註</label>
              <textarea rows="3" placeholder="有什麼想告訴賣家的嗎？"
              class="form-control" v-model="message"></textarea>
            </div>
          </section>
          <section class="card">
            <div class="card-header px-sm-3 px-2 d-flex align-items-center justify-content-between">
              <h3 class="card-title fw-bold text-brown pt-2">送貨資料
                <i class="bi bi-car-front"></i>
              </h3>
            </div>
            <div class="card-body px-sm-3 px-2">
              <div class="custom-control custom-checkbox mb-3">
                <input type="checkbox" class="custom-control-input" id="same" v-model="same">
                <label class="custom-control-label" for="same">收件人資料與顧客資料相同</label>
              </div>
              <div class="form-group pb-3">
                <label for="addressee">收件人姓名*</label>
                <span class="ms-3 text-muted">請填入收件人真實姓名，以確保順利收件</span>
                <v-field id="addressee" name="收件人姓名" type="text" class="form-control"
                :class="{ 'is-invalid': errors['收件人姓名'] }"
                placeholder="請輸入姓名" rules="required"
                v-model="user.name"></v-field>
                <ErrorMessage name="收件人姓名" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="form-group pb-3">
                <label for="addressee-tel">收件人手機號碼*</label>
                <v-field id="addressee-tel" name="收件人電話" type="number" class="form-control"
                :class="{ 'is-invalid': errors['收件人電話'] }"
                placeholder="請輸入電話" :rules="isPhone"
                v-model="user.tel"
                oninput="if(value.length>10)value=value.slice(0,10)"></v-field>
                <ErrorMessage name="收件人電話" class="invalid-feedback"></ErrorMessage>
              </div>
              <div class="form-group">
                <label for="address" class="form-label">收件人地址*</label>
                <div class="row">
                  <div class="col-6">
                    <v-field
                      id="address"
                      name="縣市"
                      class="form-control"
                      :class="{ 'is-invalid': errors['縣市'] }"
                      rules="required"
                      v-model="info.county"
                      as="select"
                      >
                      <option value="" disabled>請選擇縣市</option>
                      <option :value="key"
                      v-for="(value, key, i) in countyData" :key="i">{{ key }}</option>
                    </v-field>
                    <ErrorMessage name="縣市" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="col-6">
                    <v-field
                      id="address"
                      name="鄉鎮市區"
                      class="form-control"
                      :class="{ 'is-invalid': errors['鄉鎮市區'] }"
                      placeholder="請輸入地區"
                      rules="required"
                      v-model="info.dist"
                      as="select"
                      @change="info.dist = ''"
                      >
                      <option value="" disabled>請先選擇縣市</option>
                      <option :value="item"
                      v-for="item in countyData[info.county]" :key="item">{{ item }}</option>
                    </v-field>
                    <ErrorMessage name="鄉鎮市區" class="invalid-feedback"></ErrorMessage>
                  </div>
                  <div class="col-12 my-2">
                    <v-field id="address" name="地址" type="text" class="form-control col-12"
                      :class="{ 'is-invalid': errors['地址'] }"
                      placeholder="請輸入地址" rules="required"
                      v-model="info.road">
                    </v-field>
                  </div>
                  <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="col-lg-4 col-md-5">
          <section class="card mb-3">
            <div class="accordion" ref="orderCollapse">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button text-brown"
                  type="button" data-bs-toggle="collapse"
                  data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <p class="fw-bold m-0 fs-5">
                    <i class="bi bi-cart-plus-fill me-1"></i>
                    購物車 ( {{ cartLength }} 件 )
                  </p>
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse"
                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body border-bottom" v-for="item in this.cart.carts"
                  :key="item.product.id">
                    <div class="d-flex mb-2 text-brown fw-bold">
                      <img :src="item.product.imageUrl" alt="購物車圖片"
                      class="me-2" style="height:70px; width: 70px;">
                      <div class="d-flex flex-column flex-grow-1">
                        <h5 class="h6 fw-bold">{{ item.product.title }}</h5>
                        <div class="d-flex flex-column mt-auto text-right">
                          <span class="mt-auto text-end">NT$ {{ item.product.price }}</span>
                          <del class="text-muted text-end">
                            NT$ {{ item.product.origin_price }}
                          </del>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-between text-brown fw-bold">
                      <span>數量：{{ item.qty }}</span>
                      <span>NT$ {{ item.product.price * item.qty}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="card">
            <div class="card-header px-sm-3 px-2 d-flex align-items-center">
              <h3 class="card-title h5 pt-2 fw-bold text-brown"> 訂單資訊 </h3>
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
            <div class="d-flex justify-content-between mt-4">
              <router-link to="/user/cart" class="btn btn-outline-info
              btn-block mr-2 text-dark">
                返回購物車
              </router-link>
              <div class="text-end">
                <button class="btn btn-info btn-block mt-0">送出訂單</button>
              </div>
            </div>
          </div>
          </section>
        </div>
      </v-form>
    </section>
  </main>
</template>

<script>
import UserProgress from '@/components/UserProgress.vue';
import Collapse from 'bootstrap/js/dist/collapse';
import countyJson from '@/assets/JSON/county.json';

export default {
  components: {
    UserProgress,
  },
  data() {
    return {
      isLoading: false,
      countyData: countyJson,
      same: false,
      user: {
        name: '',
        tel: '',
        address: '',
      },
      message: '',
      info: {
        county: '',
        dist: '',
        road: '',
      },
      cart: {},
      cartLength: '0',
      progressType: 'order',
      collapse: null,
    };
  },
  methods: {
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
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = {
        user: this.user,
        message: this.message,
      };
      console.log(order);
      this.$http.post(url, { data: order })
        .then((res) => {
          console.log('a', res.data.orderId);
          if (res.data.success) {
            this.$router.push(`/user/checkout/${res.data.orderId}`);
          } else {
            this.$router.push('/user/checkout');
          }
        });
    },
    // validate
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '需要正確的電話號碼';
    },
  },
  watch: {
    same() {
      if (this.same) {
        this.user.name = this.info.name;
        this.user.tel = this.info.tel;
      }
    },
    info: {
      handler() {
        if (this.same) {
          this.user.name = this.info.name;
          this.user.tel = this.info.tel;
        }
        this.user.address = this.info.county + this.info.dist + this.info.road;
      },
      deep: true,
    },
  },
  mounted() {
    this.collapse = new Collapse(this.$refs.orderCollapse);
  },
  created() {
    this.getCart();
  },
};
</script>
