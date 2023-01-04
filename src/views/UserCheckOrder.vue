<template>
  <loading-page :active="isLoading"></loading-page>
  <section class="container">
    <UserProgress :checkout-type="progressType"></UserProgress>
  </section>
  <main class="container py-4">
  <!-- 購物車列表 -->
  <div class="my-5 row justify-content-center">
    <form class="col-md-7" @submit.prevent="payOrder">
      <section class="card align-middle mb-3">
        <div class="accordion" ref="checkCollapse">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button text-brown"
              type="button" data-bs-toggle="collapse"
              data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <p class="fw-bold m-0 fs-5">
                <i class="bi bi-cart-plus-fill me-1"></i>
                訂單明細
              </p>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse"
            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body border-bottom" v-for="item in order.products"
              :key="item.id">
                <div class="d-flex mb-2 text-brown fw-bold">
                  <img :src="item.product.imageUrl" alt="購物車圖片"
                  class="me-2" style="height:100px; width: 100px;">
                  <div class="d-flex flex-column flex-grow-1">
                    <h5 class="fw-bold m-2">品名 : {{ item.product.title }}</h5>
                    <div class="d-flex flex-column mt-auto">
                      <del class="text-muted text-end">
                        NT$ {{ item.product.origin_price }}
                      </del>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-between text-brown fw-bold">
                  <span>包數：{{ item.qty }}包</span>
                  <span>單包數量：{{ item.product.unit }}</span>
                  <span>單價 : NT$ {{ item.final_total }}</span>
                </div>
              </div>
              <div class="d-flex flex-column my-3 pe-4">
                  <h5 class="text-end text-brown fw-bold">總計 : NT$ {{ order.total }}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <div class="card-header px-sm-3 px-2">
          <h3 class="card-title text-brown pt-2">訂單資訊</h3>
        </div>
        <table class="table table-borderless my-3">
          <tbody>
            <tr>
              <th scope="row" width="150" class=" px-sm-3 px-2">成立時間</th>
              <td>{{ $filters.date(order.create_at) }}</td>
            </tr>
            <tr>
              <th scope="row" class=" px-sm-3 px-2">收件人姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th scope="row" class=" px-sm-3 px-2">收件人手機</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th scope="row" class=" px-sm-3 px-2">收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th scope="row" class=" px-sm-3 px-2">付款狀態</th>
              <td>
                <span v-if="!order.is_paid" class="text-danger">尚未付款</span>
                <span v-else class="text-success">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>

        <div class="row justify-content-around px-sm-3 pb-3 "
        v-if="order.is_paid === false">
          <router-link to="/products" class="col-5 py-2 btn btn-outline-info
            btn-block text-dark">
              繼續購物
          </router-link>
          <button
          type="button" class="col-5 btn btn-info btn-block mt-0 ml-3" @click="payOrder"
          >確認付款去</button>
        </div>
      </section>
    </form>
  </div>
  </main>
</template>

<script>
import Collapse from 'bootstrap/js/dist/collapse';
import UserProgress from '@/components/UserProgress.vue';
import Swal from 'sweetalert2';

export default {
  components: {
    UserProgress,
  },
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
      styleObject: {
        width: '0%',
      },
      errorClass: 'btn-secondary',
      successClass: 'btn-info',
      progressType: 'check',
      collapse: null,
    };
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.order = res.data.order;
            console.log(this.order);
            this.isLoading = false;
          }
        });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url)
        .then((res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '您已成功付款 ! 已安排出貨 !',
            showConfirmButton: false,
            timer: 2000,
          });
          console.log(res);
          if (res.data.success) {
            this.getOrder();
          }
        });
    },
  },
  mounted() {
    this.collapse = new Collapse(this.$refs.checkCollapse);
  },
  created() {
    this.orderId = this.$route.params.orderId;
    console.log(this.orderId);
    this.getOrder();
  },
};
</script>
