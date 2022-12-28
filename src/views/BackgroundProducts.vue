<template>
  <loading-page :active="isLoading"></loading-page>
  <div class="text-end mt-3">
    <button class="btn btn-primary" type="button"
    @click="openModal(true)">
      增加產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category}}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
            @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            @click="openDelModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination :pages="pagination"
    @emit-pages="getProducts"></Pagination>
  <!-- props、emit -->
  <ProductModal ref="productModal"
  :product="tempProduct"
  @update-product="updateProduct"></ProductModal>
  <DelModal ref="delProductModal"
  :item="tempProduct"
  @del-item="delProduct"></DelModal>
</template>

<script>
import DelModal from '@/components/DelModal.vue';
import Pagination from '@/components/PaginationComponent.vue';
import ProductModal from '@/components/ProductModal.vue';

export default {
  components: {
    ProductModal,
    DelModal,
    Pagination,
  },
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  inject: ['emitter'],
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.$http.get(api).then((res) => {
        this.isLoading = false;
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    // 開啟 modal 元件(不含更新資料)
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    // modal 視窗，編輯、新增
    updateProduct(item) {
      // 新增
      this.tempProduct = item;
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.isLoading = true;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        console.log(response);
        productComponent.hideModal();
        if (response.data.success) {
          this.getProducts();
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新成功',
          });
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '更新失敗',
            content: response.data.message.join('、'),
          });
          this.isLoading = false;
        }
      });
    },
    // 開啟刪除 delModal 元件(不含刪除資料)
    openDelModal(item) {
      this.tempProduct = { ...item };
      const delProductComponent = this.$refs.delProductModal;
      delProductComponent.showModal();
    },
    delProduct() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      const delProductComponent = this.$refs.delProductModal;
      this.$http.delete(api).then((response) => {
        console.log(response);
        delProductComponent.hideModal();
        if (response.data.success) {
          this.getProducts();
          this.emitter.emit('push-message', {
            style: 'success',
            title: '刪除成功',
          });
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '刪除失敗',
            content: response.data.message.join('、'),
          });
          this.isLoading = false;
        }
      });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
