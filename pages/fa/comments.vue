<template>
  <div class="faPage faComments">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">نظرات همراهان همیشگی رازک</div>
    </div>
    <div class="route">
      <router-link to="/fa/"> صفحه اصلی . </router-link>
      نظرات همراهان همیشگی رازک
    </div>
    <div class="commentsList d-flex flex-wrap justify-content-center">
      <div class="comment" v-for="i in 9" :key="i">
        <img src="/icons/comma.svg" alt="comma" class="comma" />
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی.
        </p>
        <img src="/icons/whiteProfile.svg" alt="Profile" class="profile" />
        <div class="name">علی محمدی</div>
      </div>
    </div>
    <div class="pagination d-flex justify-content-center align-items-center">
      <span
        :class="{ activePage: pagination == 1 }"
        @click="pagination = 1"
        class="num"
      >
        01
      </span>
      <span v-if="pagination == 1" class="linePagination"></span>
      <span
        :class="{ activePage: pagination == 2 }"
        @click="pagination = 2"
        class="num"
      >
        02
      </span>
      <span v-if="pagination == 2" class="linePagination"></span>
      <span
        :class="{ activePage: pagination == 3 }"
        @click="pagination = 3"
        class="num"
      >
        03
      </span>
      <span v-if="pagination == 3" class="linePagination"></span>
      <span
        :class="{ activePage: pagination == 4 }"
        @click="pagination = 4"
        class="num"
      >
        04
      </span>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      pagination: 1,
    };
  },
};
</script>

<style>
</style>