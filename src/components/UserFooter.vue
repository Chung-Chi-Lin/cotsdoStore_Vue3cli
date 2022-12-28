<template>
  <div class="border-top border-warning border-5">
    <section class="container">
      <div class="row row-cols-1 row-cols-lg-2 g-0">
        <div class="col d-flex justify-content-center pt-5">
          <div class="row row-cols-1 row-cols-lg-2">
          <div class="col mb-4 text-center text-md-end">
            <img class="img-fluid" src="../assets/adopt-img/link01.png" alt="握手晃動樣">
          </div>
          <div class="col">
            <div class="text-center text-md-start">
              <h4>各機關合作廣告</h4>
              <p class="text-nowrap">私人企業、各機構，毛小孩演出廣告!</p>
              <button @click="goAdopt"
                class="btn btn-outline-dark btn-h rounded-pill px-5">
                聯絡我們
              </button>
            </div>
          </div>
          </div>
        </div>

        <div class="col d-flex justify-content-center py-5">
        <div class="row row-cols-1 row-cols-lg-2">
          <div class="col mb-4 text-center text-md-end">
            <img class="img-fluid" src="../assets/adopt-img/link02.png" alt="伸出手搔癢咖啡色小狗">
          </div>
          <div class="col">
            <div class="text-center text-md-start">
              <h4>贊助毛小孩溫飽</h4>
              <p class="text-nowrap">我想幫助毛小孩，希望能盡一份心力 !</p>
              <button @click="goAdopt"
                class="btn btn-outline-dark btn-h rounded-pill px-5">
                聯絡我們
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  </div>
  <footer class="text-center bg-dark py-3 px-3">
    <small class="text-white">圖片為作品使用不做商業用途 Copyright © 2022 Vue3 by ChungChi.</small>
  </footer>
</template>

<script>
export default {
  methods: {
    goAdopt() {
      this.$router.push('/');
    },
  },
};
</script>
