<template>
  <div class="faPage faEvents">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">رویداد ها</div>
    </div>
    <div class="route">
      <router-link to="/fa/"> صفحه اصلی . </router-link>
      رویداد ها
    </div>
    <div class="topNews">
      <div class="title">
        رویداد منتخب
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
        <div class="new" v-for="i in 4" :key="i">
          <div class="effect">
            <div class="title">رویداد ها</div>
            <p class="about">
              تقدیر از شرکت رازک در دومین اجلاس سراسری مدیران ارزش آفرین
            </p>
            <p class="text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها ...
            </p>
            <router-link to="/events/1" class="littleCircleLink">
              بیشتر بخوانید
              <div class="imgDiv">
                <img src="/icons/angleArrow.svg" alt="circleArrow" />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex someNews">
      <div class="lastNews">
        <div class="title">آخرین مطالب<span></span></div>
        <div class="lastNew d-flex" v-for="item in lastNews" :key="item.id">
          <div>
            <div class="newTitle">{{ item.title }}</div>
            <p>{{ item.text }}</p>
            <div class="d-flex align-items-center">
              <img src="/icons/profile.svg" class="profile" alt="profile" />
              <div class="writer">{{ item.writer }}</div>
              <span class="littleLine"></span>
              <img
                src="/icons/blackCalendar.svg"
                class="calendar"
                alt="calendar"
              />
              <div class="date">{{ item.date }}</div>
            </div>
          </div>
          <img :src="item.img" alt="newPic" class="newPic" />
        </div>
        <div
          class="pagination d-flex justify-content-center align-items-center"
        >
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
  </div>
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      mouseDown: false,
      startX: null,
      scrollLeft: null,
      pagination: 1,

      lastNews: [
        {
          id: 0,
          title: "شرکت داروسازی لابراتوارهای رازک در مسیر بهبود مستمر",
          text: "ممیزی صدور گواهینامه‌های سيستم مديريت كيفيت شرکت داروسازی لابراتوارهای رازک در روزهاي ۳ و ۴ اسفند ماه....",
          writer: "نویسنده",
          date: "۱۴۰۱/۹/۱۲",
          img: "/images/lastNew1.jpg",
        },
        {
          id: 1,
          title: "شرکت داروسازی لابراتوارهای رازک در مسیر بهبود مستمر",
          text: "ممیزی صدور گواهینامه‌های سيستم مديريت كيفيت شرکت داروسازی لابراتوارهای رازک در روزهاي ۳ و ۴ اسفند ماه....",
          writer: "نویسنده",
          date: "۱۴۰۱/۹/۱۲",
          img: "/images/lastNew2.jpg",
        },
        {
          id: 2,
          title: "شرکت داروسازی لابراتوارهای رازک در مسیر بهبود مستمر",
          text: "ممیزی صدور گواهینامه‌های سيستم مديريت كيفيت شرکت داروسازی لابراتوارهای رازک در روزهاي ۳ و ۴ اسفند ماه....",
          writer: "نویسنده",
          date: "۱۴۰۱/۹/۱۲",
          img: "/images/lastNew3.jpg",
        },
        {
          id: 3,
          title: "شرکت داروسازی لابراتوارهای رازک در مسیر بهبود مستمر",
          text: "ممیزی صدور گواهینامه‌های سيستم مديريت كيفيت شرکت داروسازی لابراتوارهای رازک در روزهاي ۳ و ۴ اسفند ماه....",
          writer: "نویسنده",
          date: "۱۴۰۱/۹/۱۲",
          img: "/images/lastNew4.jpg",
        },
      ],
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

<style>
</style>