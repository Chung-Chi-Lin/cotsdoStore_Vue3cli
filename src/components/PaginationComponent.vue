<template>
  <nav aria-label="Page navigation">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ 'disabled': pages.has_pre === false }">
        <a class="page-link" href="#" aria-label="Previous"
        @click.prevent="prePage">
          <i class="bi bi-chevron-left"></i>
        </a>
      </li>
      <li class="page-item f-kalam " v-for="page in pages.total_pages" :key="page"
      :class="{ 'active': page === pages.current_page }">
        <a class="page-link" href="#" @click.prevent="updatePage(page)">
          {{ page }}
        </a>
      </li>
      <li class="page-item" :class="{ 'disabled': pages.has_next === false }">
        <a class="page-link" href="#" aria-label="Next"
        @click.prevent="nextPage">
          <i class="bi bi-chevron-right"></i>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
// :pages="{ 頁碼資訊 }"
// @emitPages="更新頁面事件"
export default {
  props: ['pages'],
  methods: {
    prePage() {
      this.$emit('emit-pages', this.pages.current_page - 1);
    },
    updatePage(page) {
      this.$emit('emit-pages', page);
    },
    nextPage() {
      this.$emit('emit-pages', this.pages.current_page + 1);
    },
  },
};
</script>
