<template>
    <!-- Modal -->
    <div class="modal fade" id="searchModal" tabindex="-1" ref="modal"
    aria-labelledby="searchModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body d-flex justify-content-between">
          <input v-model="productSearch" class="w-100 rounded-3"
          type="text" placeholder="找產品(玩具、保健、飼料...)">
          <button type="button" class="btn border-0"
          @click="$emit('update-search', productSearch)">
            <i class="bi bi-search fs-2"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  data() {
    return {
      productSearch: '',
      modal: {},
    };
  },
  methods: {
    clearData() {
      this.productSearch = '';
    },
  },
  mixins: [modalMixin],
};
</script>
