<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

</script>

<template>
  <section class="hero is-large banner-full pb-4">
    <img src="../assets/images/logo.png" alt="">
    <p>express your love by protecting your baby's skin <br>100% natural ingredients perfect for sensitive skin</p>
  </section>
  <section class="section is-medium px-0 is-relative pt-0">
    <div class="container">
      <div class="columns is-multiline is-mobile is-vcentered is-centered px-0">
        <div class="column is-full-mobile is-12-tablet px-0 add-padding">
          <div class="columns is-multiline is-mobile is-vcentered is-centered px-0 ">
            <div class="column is-3-mobile is-3-tablet mr-4">
              <a href="/out?url=https://vt.tiktok.com/ZS8FAHmHs/"
                target="_blank">
                <div class="wrap-button grow-scale">
                  <div class="wrap-img">
                    <img src="../assets/images/icon-tiktok-1.png" alt="">
                  </div>

                  <div class="wrap-text">
                    Order via Tiktok
                  </div>
                </div>
              </a>
            </div>
            <div class="column is-3-mobile is-3-tablet">
              <a href="/wa" target="_blank">
                <div class="wrap-button">
                  <div class="wrap-img"><img src="../assets/images/icon-wa-1.png" alt=""></div>

                  <div class="wrap-text">
                    Order via Whatsapp
                  </div>
                </div>
              </a>
            </div>

            <!-- <div class="column is-9-mobile is-12-tablet">
              <img src="../assets/images/bg-8.png" alt="" class="img-2">
            </div> -->
            <div class="column is-9-mobile is-12-tablet">
              <p class="add-text-natural">our natural organic product:</p>
            </div>
          </div>


        </div>
        <div class="column is-full-mobile is-12-tablet p-0" v-for="item in products" :key="item.id">
          <img :src="item.imgProductUrl" alt="" class="imgProduct">
        </div>
        <div class="column is-12-mobile is-12-tablet pt-0 is-relative">
          <p class="text-intro">Everyone Loves Moell</p>
          <!-- <p class="text-intro">What they say about Moell Natural Care for Babies</p> -->
          <img src="../assets/images/bg-7.png" alt="" class="img-testi">
        </div>
        <div class="column is-12-mobile is-12-tablet">
          <!-- <div class="divider"></div> -->
          <div class="columns is-multiline is-mobile is-vcentered is-centered mt-5">
             <div class="column is-3-mobile is-3-tablet mr-4">
              <a href="/out?url=https://vt.tiktok.com/ZS8FAHmHs/"
                target="_blank">
                <div class="wrap-button grow-scale">
                  <div class="wrap-img">
                    <img src="../assets/images/icon-tiktok-1.png" alt="">
                  </div>

                  <div class="wrap-text">
                    Order via Tiktok
                  </div>
                </div>
              </a>
            </div>
            <div class="column is-3-mobile is-3-tablet">
              <a href="/wa" target="_blank">
                <div class="wrap-button">
                  <div class="wrap-img"><img src="../assets/images/icon-wa-1.png" alt=""></div>

                  <div class="wrap-text">
                    Order via Whatsapp
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- <div class="wrapper-icon">
            <a href="/out" class="link" target="_blank"><img src="../assets/images/icon-tiktok-2.png" alt=""></a>
            <a href="/wa" class="link" target="_blank"><img src="../assets/images/icon-wa-2.png" alt=""></a>
          </div> -->
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

}</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
