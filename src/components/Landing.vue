<script setup>
import { ref } from 'vue'
defineProps({
  msg: String,
})
</script>

<template>
  <section class="hero is-large banner-full-v2 pb-4">
    <img src="../assets/images/logo.png" alt="">
    <!-- <p>express your love by protecting your baby's skin <br>100% natural ingredients perfect for sensitive skin</p> -->
  </section>
  <section class="section is-medium px-5 pb-0 is-relative">
    <div class="container">
      <div class="columns is-multiline is-mobile is-vcentered is-centered px-0 is-justify-content-flex-start">
        <div class="column is-3-mobile is-4-tablet pl-0">
          <div class="divider"></div>
        </div>
        <div class="column is-6-mobile is-4-tablet has-text-centered">
          <h2 class="font-poppins-head">Order Via</h2>
        </div>
        <div class="column is-3-mobile is-4-tablet pr-0">
          <div class="divider"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="section is-medium py-6 is-relative px-3">
    <div class="container">
      <div class="columns is-multiline is-mobile is-vcentered is-centered px-0">
        <div class="column is-6-mobile is-3-tablet has-text-centered px-0">
          <a href="/wa" target="_blank">
            <img src="../assets/images/button_whatsapp.png" alt="">
          </a>
        </div>
        <div class="column is-6-mobile is-3-tablet px-0">
          <a href="/out?url=https://shope.ee/9KFILGsQWp" target="_blank">
            <img src="../assets/images/button_shopee.png" alt="">
          </a>
        </div>
        <div class="column is-6-mobile is-3-tablet has-text-centered px-0">
          <a href="/out?url=https://www.tokopedia.link/qv1gD0tjBCb" target="_blank">
            <img src="../assets/images/button_tokped.png" alt="">
          </a>
        </div>
        <div class="column is-6-mobile is-3-tablet has-text-centered px-0">
          <a href="/lazada" target="_blank">
            <img src="../assets/images/button-lazada.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="section is-medium px-5 py-0 is-relative">
    <div class="container">
      <div class="columns is-multiline is-mobile is-vcentered is-centered px-0 is-justify-content-flex-start">
        <div class="column is-2-mobile is-3-tablet pl-0">
          <div class="divider add-height"></div>
        </div>
        <div class="column is-8-mobile is-6-tablet has-text-centered">
          <h2 class="font-poppins-head">Our Natural<br>Organic Product</h2>
        </div>
        <div class="column is-2-mobile is-3-tablet pr-0">
          <div class="divider add-height"></div>
        </div>
      </div>
      <div class="columns is-multiline is-mobile is-vcentered is-centered px-0 is-justify-content-flex-start">
        <div class="column is-12-mobile is-12-tablet pl-0 has-text-centered">
          <p class="subtitle">Perawatan natural terbaik untuk kulit si kecil</p>
        </div>
      </div>
    </div>
  </section>
  <section class="section is-medium px-0 pb-5 is-relative pt-6">
    <div class="container">
      <div class="columns is-multiline is-mobile is-vcentered is-centered px-0">

        <div class="column is-full-mobile is-12-tablet p-0" v-for="item in products" :key="item.id">
          <img :src="item.imgProductUrl" alt="" class="imgProduct">
        </div>
        <div class="column is-12-mobile is-12-tablet add-padding-top is-relative">
          <div class="columns is-multiline is-mobile is-vcentered is-centered px-0 is-justify-content-flex-start">
            <div class="column is-3-mobile is-3-tablet">
              <div class="divider"></div>
            </div>
            <div class="column is-6-mobile is-6-tablet has-text-centered">
              <h2 class="font-poppins-head">Everyone Loves Moell</h2>
            </div>
            <div class="column is-3-mobile is-3-tablet">
              <div class="divider"></div>
            </div>
          </div>
        </div>
        <div class="column is-12-mobile is-12-tablet pt-0 is-relative">
          <img src="../assets/images/bg-10.png" alt="" class="img-testi px-0">
        </div>
      </div>
    </div>
  </section>

  <section class="section is-medium py-6 is-relative px-3">
    <div class="container">
      <div class="columns is-multiline is-mobile is-vcentered is-centered px-0">
        <div class="column is-6-mobile is-3-tablet has-text-centered px-0">
          <a href="/wa" target="_blank">
            <img src="../assets/images/button_whatsapp.png" alt="">
          </a>
        </div>
        <div class="column is-6-mobile is-3-tablet px-0">
          <a href="/out?url=https://shope.ee/9KFILGsQWp" target="_blank">
            <img src="../assets/images/button_shopee.png" alt="">
          </a>
        </div>
        <div class="column is-6-mobile is-3-tablet has-text-centered px-0">
          <a href="/out?url=https://www.tokopedia.link/qv1gD0tjBCb" target="_blank">
            <img src="../assets/images/button_tokped.png" alt="">
          </a>
        </div>
        <div class="column is-6-mobile is-3-tablet has-text-centered px-0">
          <a href="/lazada" target="_blank">
            <img src="../assets/images/button-lazada.png" alt="">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import bg2 from "../assets/images/bg-2.png"
import bg3 from "../assets/images/bg-3.png"
import bg4 from "../assets/images/bg-4.png"
import bg5 from "../assets/images/bg-5.png"
import bg6 from "../assets/images/bg-6.png"
export default {
  name: "app",
  data() {
    return {
      products: [
        { id: 1, pname: "A", imgProductUrl: bg2 },
        { id: 2, pname: "B", imgProductUrl: bg3 },
        { id: 3, pname: "C", imgProductUrl: bg4 },
        { id: 4, pname: "D", imgProductUrl: bg5 },
        { id: 5, pname: "E", imgProductUrl: bg6 },
      ]
    }
  },
}
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
