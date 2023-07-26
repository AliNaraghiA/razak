<template>
  <div class="enPage enPartners">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">Razak Partners</div>
    </div>
    <div class="route">
      <router-link to="/en/"> Main Page . </router-link>
      Razak Partners
    </div>
    <div class="partners d-flex flex-wrap justify-content-center">
      <div class="partner" v-for="image in images" :key="image.id">
        <img :src="image.img" alt="gallery" />
        <div class="text">Lorem Ipsum text</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      images: [
        { id: 1, img: "/images/partners1.jpg" },
        { id: 2, img: "/images/partners2.jpg" },
        { id: 3, img: "/images/partners3.jpg" },
        { id: 4, img: "/images/partners4.jpg" },
        { id: 5, img: "/images/partners5.jpg" },
        { id: 6, img: "/images/partners6.jpg" },
        { id: 7, img: "/images/partners1.jpg" },
        { id: 8, img: "/images/partners2.jpg" },
        { id: 9, img: "/images/partners3.jpg" },
        { id: 10, img: "/images/partners4.jpg" },
        { id: 11, img: "/images/partners5.jpg" },
        { id: 12, img: "/images/partners6.jpg" },
        { id: 13, img: "/images/partners1.jpg" },
        { id: 14, img: "/images/partners2.jpg" },
        { id: 15, img: "/images/partners3.jpg" },
        { id: 16, img: "/images/partners4.jpg" },
        { id: 17, img: "/images/partners5.jpg" },
        { id: 18, img: "/images/partners6.jpg" },
      ],
    };
  },
};
</script>

<style>
</style>