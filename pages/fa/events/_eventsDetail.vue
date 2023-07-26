<template>
  <div class="faPage faEventsDetail">
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
      <router-link to="/fa/events"> رویداد ها. </router-link>
      <span>شرکت داروسازی لابراتوارهای رازک در مسیر بهبود مستمر</span>
    </div>
    <div class="news d-flex">
      <div class="new">
        <p>
          ممیزی صدور گواهینامه‌های سيستم مديريت كيفيت شرکت داروسازی لابراتوارهای
          رازک در روزهاي ۳ و ۴ اسفند ماه، با حضور ممیزان شرکت IMQ ايتاليا انجام
          شد.
        </p>
        <img src="/images/new.jpg" alt="new" class="newImg" />
        <splide :options="options" class="slider">
          <splide-slide>
            <img src="/images/event1.jpg" alt="certificate" />
          </splide-slide>
          <splide-slide>
            <img src="/images/event2.jpg" alt="certificate" />
          </splide-slide>
          <splide-slide>
            <img src="/images/event3.jpg" alt="certificate" />
          </splide-slide>
          <splide-slide>
            <img src="/images/event4.jpg" alt="certificate" />
          </splide-slide>
          <splide-slide>
            <img src="/images/event5.jpg" alt="certificate" />
          </splide-slide>
        </splide>
        <p>
          در این ممیزی دو روزه، شرکت داروسازی لابراتوارهای رازک موفق به اخذ
          تأييديه گواهینامه استقرار نظام مدیریت کیفیت مبتنی بر استاندارد بین
          المللی ISO 9001:2015 و استانداردهاي ISO 10002:2018 (مديريت رسيدگي به
          شكايات) و ISO 10004:2018 (سنجش و اندازه‌گیری رضایت مشتریان) گرديد. این
          شرکت در سال‌جاری، با توجه به اجرای طرح نظام مندی فرایندها، انطباق با
          استانداردهای بین المللی و استقرار عملیاتی و کاربردی ابزارهای مدیریتی
          مرتبط را در دستور کار داشته است.
        </p>
        <div class="writer">
          <img src="/icons/profile.svg" alt="profile" />
          نویسنده
        </div>
        <div class="date">
          <img src="/icons/blackCalendar.svg" alt="blackCalendar" />
          ۱۴۰۱/۹/۱۲
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
        <div class="new" v-for="i in 4" :key="i">
          <div class="effect">
            <div class="title">اخبار</div>
            <p class="about">
              تقدیر از شرکت رازک در دومین اجلاس سراسری مدیران ارزش آفرین
            </p>
            <p class="text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها ...
            </p>
            <router-link to="/" class="littleCircleLink">
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
export default {
  layout: "main",
  data() {
    return {
      mouseDown: false,
      startX: null,
      scrollLeft: null,
      options: {
        type: "loop",
        perPage: 5,
        perMove: 1,
      },
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