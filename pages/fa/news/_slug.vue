<template>
  <div class="faPage faNewsDetail">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">
        شرکت داروسازی لابراتوارهای رازک در مسیر بهبود مستمر
      </div>
    </div>
    <div class="route">
      <router-link to="/fa/"> صفحه اصلی . </router-link>
      <router-link to="/fa/news"> اخبار . </router-link>
      <span>شرکت داروسازی لابراتوارهای رازک در مسیر بهبود مستمر</span>
    </div>
    <div class="news d-flex">
      <div class="new">
        <p>
          {{ post.title }}
        </p>
        <img
        v-if='post.featuredImage'
          :src="post.featuredImage.node.sourceUrl"
          :alt="post.featuredImage.node.altText"
          class="newImg"
        />
        <p v-html="post.content"></p>
        <div class="writer">
          <img src="/icons/profile.svg" alt="profile" />
          {{ post.author?.node.name }}
        </div>
        <div class="date">
          <img src="/icons/blackCalendar.svg" alt="blackCalendar" />
          {{ formatDate(post.date) }}
        </div>
      </div>
      <div class="lotsVisit">
        <div class="searchDiv">
          <img src="/icons/darkSearch.svg" alt="search" />
          <input type="search" placeholder="جستجو" />
        </div>
        <div class="title d-flex align-items-center">
          پر بازدیدها
          <span></span>
        </div>
        <div class="lotsVisitNew" v-for="i in 3" :key="i">
          <div class="subject">
            تقدیر از شرکت رازک در دومین اجلاس سراسری مدیران ارزش آفرین
          </div>
          <div class="new">
            تقدیر از رازک در دومین اجلاس سراسری مدیران ارزش آفرین ، دومین اجلاس
            سراسری مدیران...
          </div>
          <router-link to="/" class="blueCircleLink">
            بیشتر بخوانید
            <div class="imgDiv">
              <img src="/icons/blueAngleArrow.svg" alt="blueCircleArrow" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="relatedPosts">
      <div class="title">
        پست های مرتبط
        <span></span>
      </div>
      <div
        class="newsList d-flex justify-content-between"
        :class="{ activeDrag: mouseDown == true }"
        @mousemove="mousemove"
        @mousedown="startDragging"
        @mouseup="stopDragging"
        @mouseleave="stopDragging"
        ref="parent"
      >

      <nuxt-link :to="`/posts/${post.slug}`">
      </nuxt-link>
        <div class="new" v-for="post1 in relatedPosts">
          <div class="effect">
            <div class="title">اخبار</div>
            <p class="about">
              {{ post1.title }}
             </p>
            <p class="text" v-html="post1.excerpt">
              
            </p>
            <router-link  :to="`/fa/news/${post1.slug}`"  class="littleCircleLink">
              بیشتر بخوانید
              <div class="imgDiv">
                <img src="/icons/angleArrow.svg" alt="circleArrow" />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import newsSingelScript from "~/utils/newsSingelScript";

export default {
  layout: "main",
  mixins: [newsSingelScript],

  data() {
    return {
      mouseDown: false,
      startX: null,
      scrollLeft: null,
    };
  },
  methods: {
    mousemove(e) {
      e.preventDefault();
      if (!this.mouseDown) {
        return;
      }
      const x = e.pageX - this.$refs.parent.offsetLeft;
      const scroll = x - this.startX;
      this.$refs.parent.scrollLeft = this.scrollLeft - scroll;
    },
    startDragging(e) {
      this.mouseDown = true;
      this.startX = e.pageX - this.$refs.parent.offsetLeft;
      this.scrollLeft = this.$refs.parent.scrollLeft;
    },
    stopDragging(event) {
      this.mouseDown = false;
    },
  },
};
</script>

<style></style>
