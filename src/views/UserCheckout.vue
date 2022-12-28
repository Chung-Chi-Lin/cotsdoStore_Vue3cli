<template>
  <section class="container py-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb fs-3">
        <li class="breadcrumb-item ">
          <router-link to="/">
            <i class="bi bi-house-door-fill text-warning"></i>
          </router-link>
        </li>
        <li class="breadcrumb-item text-brown fw-bold" aria-current="page">
          訂單結帳
        </li>
      </ol>
    </nav>
  </section>
  <router-view></router-view>
</template>
