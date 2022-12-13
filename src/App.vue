

<template>
  <section class="hero is-fullheight banner-full">
  </section>
  <section class="section is-medium">
    <div class="container">
      <div class="columns is-multiline is-mobile is-vcentered is-centered">
        <div class="column is-full-mobile is-12-tablet mb-6">
          <div class="wrap-button">
            <a href="" class="btn">Tiktok</a>
            <a href="" class="btn">Shopee</a>
          </div>

        </div>
        <div class="column is-full-mobile is-12-tablet mt-6">
          <div class="wrapper-box mb-6" v-for="item in products" :key="item.id">
            <div class="wrap-image">
              <div class="img-left"><img :src="item.imgLeft" alt=""></div>
              <img :src="item.imgProductUrl" alt="" class="imgProduct">
              <div class="img-right"><img v-bind:src="item.imgRight" alt=""></div>
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>

<script>
import imageAbs from "./assets/images/crop.png"

export default {
  name: "app",
  data() {
    return {
      products: [
        { id: 1, pname: "A", imgProductUrl: "https://images.ctfassets.net/pza7rf722fz4/iOcbJ7S5lwsdVoRTv9D5s/4c83244cec5cc266e8784b7925daa803/cokiee.png?w=720&fm=webp&q=100", imgLeft: imageAbs, imgRight: imageAbs },
        { id: 2, pname: "B", imgProductUrl: "https://images.ctfassets.net/pza7rf722fz4/iOcbJ7S5lwsdVoRTv9D5s/4c83244cec5cc266e8784b7925daa803/cokiee.png?w=720&fm=webp&q=100", imgLeft: imageAbs, imgRight: imageAbs },
        { id: 3, pname: "C", imgProductUrl: "https://images.ctfassets.net/pza7rf722fz4/iOcbJ7S5lwsdVoRTv9D5s/4c83244cec5cc266e8784b7925daa803/cokiee.png?w=720&fm=webp&q=100", imgLeft: imageAbs, imgRight:imageAbs },
        { id: 4, pname: "D", imgProductUrl: "https://images.ctfassets.net/pza7rf722fz4/iOcbJ7S5lwsdVoRTv9D5s/4c83244cec5cc266e8784b7925daa803/cokiee.png?w=720&fm=webp&q=100", imgLeft: imageAbs, imgRight: imageAbs },
        { id: 5, pname: "E", imgProductUrl: "https://images.ctfassets.net/pza7rf722fz4/iOcbJ7S5lwsdVoRTv9D5s/4c83244cec5cc266e8784b7925daa803/cokiee.png?w=720&fm=webp&q=100", imgLeft: imageAbs, imgRight: imageAbs },

      ]
    }
  }
}</script>