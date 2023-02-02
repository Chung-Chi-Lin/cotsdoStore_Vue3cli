<template>
  <div class="card mb-4 shadow-sm text-center">

    <a href="#" @click.prevent="$emit('getProduct')" class="d-block item-hover">
      <div class="mask">
        <div class="caption">查看更多</div>
      </div>
      <div class="overflowHidden">
        <div class="rounded-0 item-img img-fluid"
          style="height: 253px"
          :style="`background-image: url(${imageUrl})`"></div>
      </div>
    </a>
    <div class="card-body" style="
      background-image: url(https://images.unsplash.com/photo-1615800098779-1be32e60cca3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80);
    ">
      <h5 class="card-title text-brown fw-bold fs-4 f-kalam">{{ title }}</h5>
      <p class="card-text" v-if="!price">{{ origin_price }} 元</p>
      <p class="card-text text-decoration-line-through my-0 f-kalam"
      v-if="price">原價 {{ origin_price }} 元</p>
      <p class="card-text fs-5 f-kalam fw-bold" v-if="price">現在只要
        <span class="f-kalam fs-3 text-danger">${{ price }}</span> 元</p>
      <div class="row d-flex justify-content-between g-0">
        <button type="button" class="col-3 btn btn-outline-brown"
          @click="$emit('getProduct')">
          <i class="bi bi-list"></i>
        </button>
        <button type="button" class="col-8 btn btn-outline-brown fw-bold"
          @click="$emit('addToCart')">
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-card',
  props: {
    title: {
      type: String,
      default: '',
    },
    origin_price: {
      type: Number,
      default: null,
    },
    price: {
      type: Number,
      default: null,
    },
    imageUrl: {
      type: String,
      default: '',
    },
  },
};
</script>
