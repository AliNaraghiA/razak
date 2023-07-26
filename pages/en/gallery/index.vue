<template>
  <div class="enPage enGallery">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">Photo Gallery</div>
    </div>
    <div class="route">
      <router-link to="/en/"> Main Page . </router-link>
      Photo Gallery
    </div>
    <div class="images d-flex flex-wrap justify-content-center">
      <router-link
        to="/en/gallery/1"
        class="image"
        v-for="image in images"
        :key="image.id"
      >
        <img :src="image.img" alt="gallery" />
        <div class="text">Lorem Ipsum mock text with production</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      images: [
        { id: 1, img: "/images/galleryImg1.jpg" },
        { id: 2, img: "/images/galleryImg2.jpg" },
        { id: 3, img: "/images/galleryImg3.jpg" },
        { id: 4, img: "/images/galleryImg4.jpg" },
        { id: 5, img: "/images/galleryImg5.jpg" },
        { id: 6, img: "/images/galleryImg6.jpg" },
        { id: 7, img: "/images/galleryImg7.jpg" },
        { id: 8, img: "/images/galleryImg8.jpg" },
        { id: 9, img: "/images/galleryImg9.jpg" },
      ],
    };
  },
};
</script>

<style>
</style>