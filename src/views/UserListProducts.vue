<template>
  <loading-page :active="isLoading"></loading-page>
  <div class="border-bottom">
    <div class="container">
      <div class="d-none d-md-block" style="position:relative;">
        <img class="w-100 my-3 rounded-4 object-cover-center" style="height:550px" src="https://images.unsplash.com/photo-1555341029-f730b0ce4522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="女生與兩隻貓">
        <div class="rounded-1"
        style="position:absolute;background-color: #00000090;z-index:2; left:200px; top:280px;">
        <h2 class="text-white p-4 font-monospace">
          周年慶輸入優惠碼
          <span class="text-decoration-underline">costdo85</span>
          ，即享全館85折優惠
        </h2>
        </div>
      </div>

      <div class="d-md-none" style="position:relative;">
        <img class="w-100 my-3 rounded-4" style="height:250px" src="https://images.unsplash.com/photo-1555341029-f730b0ce4522?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="女生與兩隻貓">
        <div class="rounded-1"
        style="position:absolute;background-color: #00000090;z-index:2; left:50px; top:80px;">
        <h2 class="text-white p-4 font-monospace h3">
          輸入優惠碼
          <span class="text-decoration-underline">costdo85</span><br>
          即可享全館 85 折優惠
        </h2>
        </div>
      </div>

      <nav aria-label="breadcrumb">
        <ol class="breadcrumb py-0 fs-3 position-relative">
          <li class="breadcrumb-item ">
            <router-link to="/">
              <i class="bi bi-house-door-fill text-warning"></i>
            </router-link>
          </li>
          <li class="breadcrumb-item text-brown fw-bold" aria-current="page">
            {{ this.filteredType }}
          </li>
          <ToastMessages></ToastMessages>
        </ol>
      </nav>
      <div class="row mt-4">
      <nav class="col-md-3 d-md-block d-none">
        <h3 class="list-group-item h4 mb-0 fw-bold text-white bg-brown py-3 px-3">商品目錄</h3>
        <section class="list-group list-group-flush"
        v-for="(item, key) in category" :key="'category' + key">
          <button
          class="list-group-item list-group-item-action router-link-active py-3 fw-bold
          border-bottom"
          :class="{ 'active': filteredType === item }"
          aria-current="page" @click="handleChangeCategory(item)">
          <i class="bi bi-caret-right-fill"
          :class="{ 'text-warning': filteredType === item }"></i> {{ item }} </button>
        </section>
        </nav>
        <div class="col-md-8">
          <div class="row row-cols-md-3 g-2">
            <div class="col-10 mx-auto mx-md-0" v-for="item in currentPageData" :key="item.id">
              <ProductCard
                :imageUrl="item.imageUrl"
                :price="item.price"
                :origin_price="item.origin_price"
                :title="item.title"
                @addToCart="addToCart(item.id)"
                @getProduct="getProduct(item.id)"
                ></ProductCard>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Pagination :pages="pagination"
    @emit-pages="page => currentPage = page"></Pagination>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import ProductCard from '../components/ProductCard.vue';
import Pagination from '../components/PaginationComponent.vue';

export default {
  components: {
    ToastMessages,
    ProductCard,
    Pagination,
  },
  data() {
    return {
      products: [],
      searchResult: [],
      product: {},
      status: {
        loadingItem: '',
      },
      filteredType: '所有商品',
      currentPage: 1,
      category: ['所有商品', '寵物保健', '寵物食品', '寵物用品'],
    };
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.products = response.data.products;
        console.log('products:', this.products);
        this.isLoading = false;
        const searchProduct = this.$route.query.product;
        if (!searchProduct) return;
        this.filteredType = '搜尋結果';
        this.searchResult = this.products.filter((item) => item.title.match(searchProduct));
      });
    },
    getProduct(id) {
      this.$router.push(`/product/${id}`);
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
        // this.$router.push('/products');
      });
    },
    handleChangeCategory(type) {
      this.currentPage = 1;
      this.filteredType = type;
    },
  },
  computed: {
    filteredProducts() {
      if (this.filteredType === '搜尋結果') return this.searchResult;
      let filteredData = this.products;
      // 判斷不是所有商品換成其他目錄品項
      if (this.filteredType !== '所有商品') {
        filteredData = this.products.filter((item) => item.category === this.filteredType);
      }
      return filteredData;
    },
    currentPageData() {
      return this.filteredProducts.slice((this.currentPage - 1) * 6, this.currentPage * 6);
    },
    pagination() {
      const totalPages = Math.ceil(this.filteredProducts.length / 6);
      return {
        total_pages: totalPages,
        current_page: this.currentPage,
        has_pre: this.currentPage !== 1,
        has_next: this.currentPage !== totalPages,
      };
    },
  },
  created() {
    this.getProducts();
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
