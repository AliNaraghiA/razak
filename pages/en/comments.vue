<template>
  <div class="enPage enComments">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">Comments of Razak's regular companions</div>
    </div>
    <div class="route">
      <router-link to="/en/"> Main Page . </router-link>
      Comments of Razak's regular companions
    </div>
    <div class="commentsList d-flex flex-wrap justify-content-center">
      <div class="comment" v-for="i in 9" :key="i">
        <img src="/icons/comma.svg" alt="comma" class="comma" />
        <p>
          Lorem Ipsum is a fictional text with an unintelligible simplicity
          produced by the printing industry and by use It is from graphic
          designers, printers and texts, but also newspapers and magazines in
          column and Line as necessary and for current conditions.
        </p>
        <img src="/icons/whiteProfile.svg" alt="Profile" class="profile" />
        <div class="name">Ali Mohammadi</div>
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