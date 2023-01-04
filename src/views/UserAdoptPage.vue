<template>
  <section class="container d-flex flex-column py-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb py-4 fs-3">
        <li class="breadcrumb-item ">
          <router-link to="/">
            <i class="bi bi-house-door-fill text-warning"></i>
          </router-link>
        </li>
        <li class="breadcrumb-item text-brown fw-bold" aria-current="page">
          領養專區
        </li>
      </ol>
    </nav>
    <img src="https://images.unsplash.com/photo-1605067351740-c67d09a5cab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80" class="d-md-none w-100 rounded-3 mb-5"   alt="..." style="height:300px">
    <div class="text-center mb-1 f-kalam">
      <h2 class="fw-bold">
        Costdo 寵物領養園區
        <i class="bi bi-balloon-heart-fill text-danger"></i>
      </h2>
      <p class="fw-bold"> 他不是你的一生但你卻是他的一生，歡迎來園區幫他們找個家 !</p>
    </div>
    <div id="carouselExampleControls" class="carousel slide container
    my-4 d-none d-md-block" data-bs-ride="carousel"
    ref="adoptCarousel">
      <div class="carousel-inner rounded-3 shadow-lg">
      <div class="carousel-item active">
        <img src="https://images.unsplash.com/photo-1517879288527-682ff596b022?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" class="d-block w-100"   alt="..." style="height:600px">
      </div>
      <div class="carousel-item">
        <img src="https://images.unsplash.com/photo-1466840787022-48e0ec048c8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1725&q=80" class="d-block w-100"   alt="..." style="height:600px">
      </div>
      <div class="carousel-item">
        <img src="https://images.unsplash.com/photo-1605067351740-c67d09a5cab7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80" class="d-block w-100"   alt="..." style="height:600px">
      </div>
    </div>
  <button class="carousel-control-prev" type="button"
  data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button"
  data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>

    <div class="row row-cols-1 row-cols-md-3 g-3 py-5">
      <div class="col">
            <div class="card border-0 card-shadow-h">
              <img class="card-img-top" src="../assets/adopt-img/dog01.png" alt="褐色的狗">
              <img class="card-img-top card-pic-h" src="../assets/adopt-img/dog001.jpg" alt="柯基混狼犬">
              <div class="card-body">
                <div class="container">
                  <h5 class="card-title fs-6 fw-bold">已送養-LaLa</h5>
                  <p class="py-2">
                    看起來很兇但特別怕鞭炮的LaLa，很
                    <span class="d-inline-block text-truncate w-100">
                    愛亂叫但其實很膽小，愛撒嬌有潔癖討厭髒髒的地方要有地毯!
                    </span>
                  </p>
                </div>
                <div class="border-top text-center">
                  <button @click="goAdopt"
                  class="btn f-kalam fw-bold pt-3 w-100 text">
                    MORE
                  </button>
                </div>
              </div>
            </div>
      </div>

      <div class="col">
            <div class="card border-0 card-shadow-h">
              <img class="card-img-top" src="../assets/adopt-img/05.png" alt="黑毛貓">
              <img class="card-img-top card-pic-h img-fluid"
              src="../assets/adopt-img/dog002.jpg" alt="科基犬">
              <div class="card-body">
                <div class="container">
                  <h5 class="card-title fs-6 fw-bold">已送養-波吉</h5>
                  <p class="py-2">
                    波吉有著圓圓的大眼睛，一歲的他來
                    <span class="d-inline-block text-truncate w-100">
                      自台北，原本陪著一位老奶奶生活，上個月奶奶行動不便不能再陪
                    </span>
                  </p>
                </div>
                <div class="border-top text-center">
                  <button @click="goAdopt"
                  class="btn f-kalam fw-bold pt-3 w-100 text">
                    MORE
                  </button>
                </div>
              </div>
            </div>
      </div>

      <div class="col">
            <div class="card border-0 card-shadow-h">
              <img class="card-img-top" src="../assets/adopt-img/08.png" alt="哈士奇圖畫">
              <img class="card-img-top card-pic-h"
              src="../assets/adopt-img/dog01-hover-2.png" alt="哈士奇">
              <div class="card-body">
                <div class="container">
                  <h5 class="card-title fs-6 fw-bold">等家中-Snow</h5>
                  <p class="py-2">
                    看起來很兇但特別怕打雷的Snow，很
                    <span class="d-inline-block text-truncate w-100">
                    額頭會發出吹口哨的聲看起來很和善但特別怕打雷的Snow
                    </span>
                  </p>
                </div>
                <div class="border-top text-center">
                  <button @click="goAdopt"
                  class="btn f-kalam fw-bold pt-3 w-100 text">
                    MORE
                  </button>
                </div>
              </div>
            </div>
      </div>

      <div class="col">
            <div class="card border-0 card-shadow-h">
              <img class="card-img-top" src="../assets/adopt-img/07.png" alt="白色橘點貓繪畫">
              <img class="card-img-top card-pic-h" src="https://images.unsplash.com/photo-1611856950845-c82ee9a80c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1110&q=80" alt="白色橘點貓">
              <div class="card-body">
                <div class="container">
                  <h5 class="card-title fs-6 fw-bold">等家中-小圓</h5>
                  <p class="py-2">
                    看起來很兇但特別怕打雷的Snow，很
                    <span class="d-inline-block text-truncate w-100">
                    額頭會發出吹口哨的聲看起來很和善但特別怕打雷的Snow
                    </span>
                  </p>
                </div>
                <div class="border-top text-center">
                  <button @click="goAdopt"
                  class="btn f-kalam fw-bold pt-3 w-100 text">
                    MORE
                  </button>
                </div>
              </div>
            </div>
      </div>

      <div class="col">
            <div class="card border-0 card-shadow-h">
              <img class="card-img-top" src="../assets/adopt-img/Michael.png" alt="白毛狗繪畫">
              <img class="card-img-top card-pic-h" src="https://images.unsplash.com/photo-1608831540955-35094d48694a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80" alt="白毛狗">
              <div class="card-body">
                <div class="container">
                  <h5 class="card-title fs-6 fw-bold">等家中-老黃</h5>
                  <p class="py-2">
                    看起來很兇但特別怕打雷的Snow，很
                    <span class="d-inline-block text-truncate w-100">
                    額頭會發出吹口哨的聲看起來很和善但特別怕打雷的Snow
                    </span>
                  </p>
                </div>
                <div class="border-top text-center">
                  <button @click="goAdopt"
                  class="btn f-kalam fw-bold pt-3 w-100 text">
                    MORE
                  </button>
                </div>
              </div>
            </div>
      </div>

      <div class="col">
            <div class="card border-0 card-shadow-h">
              <img class="card-img-top" src="../assets/adopt-img/04.png" alt="黑毛貓繪畫">
              <img class="card-img-top card-pic-h" src="https://images.unsplash.com/photo-1559914392-dadc0f05cfb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="黑毛貓">
              <div class="card-body">
                <div class="container">
                  <h5 class="card-title fs-6 fw-bold">等家中-黑皮</h5>
                  <p class="py-2">
                    看起來很兇但特別怕打雷的Snow，很
                    <span class="d-inline-block text-truncate w-100">
                    額頭會發出吹口哨的聲看起來很和善但特別怕打雷的Snow
                    </span>
                  </p>
                </div>
                <div class="border-top text-center">
                  <button @click="goAdopt"
                  class="btn f-kalam fw-bold pt-3 w-100 text">
                    MORE
                  </button>
                </div>
              </div>
            </div>
      </div>
    </div>
  </section>
</template>

<script>
import Carousel from 'bootstrap/js/dist/carousel';

export default {
  data() {
    return {
      carousel: null,
    };
  },
  methods: {
    goAdopt() {
      this.$router.push('/location');
    },
  },
  mounted() {
    this.carousel = new Carousel(this.$refs.adoptCarousel);
  },
};
</script>
