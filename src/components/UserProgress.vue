<template>
    <div class="position-relative m-5">
      <div class="progress" style="height: 3px;">
        <div class="progress-bar bg-info" role="progressbar" :style="styleObject"
        aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
      <button type="button" ref="cart" :class="successClass" class="position-absolute top-0 start-0
      translate-middle btn btn-sm text-white rounded-pill" @click="goCart"
      style="width: 2rem; height:2rem;">1
      <span class="text-dark fw-bold position-absolute top-100 start-50
      translate-middle-x text-nowrap text-brown">購物車</span>
      </button>
      <button type="button" ref="order" :class="errorClass" class="position-absolute top-0 start-50
      translate-middle btn btn-sm rounded-pill text-white" @click="goOrder"
      style="width: 2rem; height:2rem;">2
      <span class="text-dark fw-bold position-absolute top-100 start-50
      translate-middle-x text-nowrap text-brown">填寫資料</span>
      </button>
      <button type="button" ref="check" :class="errorClass" class="position-absolute top-0 start-100
      translate-middle btn btn-sm text-white btn-secondary rounded-pill" @click="goCheck"
      style="width: 2rem; height:2rem;">3
      <span class="text-dark fw-bold position-absolute top-100 start-50
      translate-middle-x text-nowrap text-brown">訂單確認</span>
      </button>
    </div>
</template>

<script>
export default {
  props: ['checkoutType'],
  data() {
    return {
      styleObject: {
        width: '0%',
      },
      errorClass: 'btn-secondary',
      successClass: 'btn-info',
    };
  },
  methods: {
    goCart() {
      this.$router.push('/user/cart');
    },
    goOrder() {
      this.$router.push('/user/order');
    },
    goCheck() {
      this.$router.push('/user/checkout');
    },
    checkProgress() {
      if (this.checkoutType === 'order') {
        this.styleObject.width = '50%';
        this.$refs.order.classList.add(this.successClass);
      } else if (this.checkoutType === 'check') {
        this.styleObject.width = '100%';
        this.$refs.order.classList.add(this.successClass);
        this.$refs.check.classList.add(this.successClass);
      }
    },
  },
  mounted() {
    this.checkProgress();
  },
};
</script>
