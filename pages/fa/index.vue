<template>
  <div class="faHome faPage">
    <div class="chatWithUs d-flex align-items-center">
      <div class="text">با ما گفتگو کنید</div>
      <div class="circle">
        <img src="/icons/messages.svg" alt="messages" class="messages" />
      </div>
    </div>
    <div class="topDiv d-flex flex-column justify-content-between">
      <div class="logoDiv">
        <img src="/images/enLogo.svg" alt="enLogo" class="enLogo" />
      </div>
      <div class="about">
        <h1>شرکت داروسازی رازک</h1>
        <div class="d-flex align-items-end text">
          <div>شرکـــت لابـــراتـــوار های رازک با نیـــم قـــرن تجـــربه</div>
          <router-link to="#" class="circleLink">
            <div class="imgDiv">
              <img
                src="/icons/angleArrow.svg"
                alt="circle arrow"
                class="circleArrow"
              />
            </div>
          </router-link>
        </div>
        <div class="socials">
          <img src="/icons/whatsapp.svg" alt="whatsapp" />
          <img src="/icons/instagram.svg" alt="instagram" />
          <img src="/icons/linkedin.svg" alt="linkedin" />
        </div>
      </div>
    </div>
    <div class="aboutRazak">
      <div class="title" data-aos="zoom-in" data-aos-duration="1000">
        درباره ی رازک
        <span></span>
      </div>
      <div
        class="d-flex justify-content-between"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div>
          <h2>شرکت لابراتوارهای رازک با بیش از نیم قرن تجربه و بهترین کیفیت</h2>
          <router-link to="/fa/aboutUs" class="more blueCircleLink">
            <span>بیشتر بخوانید</span>
            <div class="imgDiv">
              <img src="/icons/blueAngleArrow.svg" alt="blueCircleArrow" />
            </div>
          </router-link>
        </div>
        <div>
          <p>
            شرکت سهامی داروسازی لابراتوارهای رازک در سال 1343 هجری شمسی (1964
            میلادی) با نام شرکت سهامی لابراتوارهای فایزر تحت مالکیت شرکت فایزر
            آمریکا فعالیت خود را آغاز نمود.
          </p>
          <div class="d-flex links">
            <router-link to="/fa/products"
              >لیست محصولات
              <img src="/icons/leftAngelArrow.svg" alt="leftAngelArrow"
            /></router-link>
            <router-link to="/fa/contactUs"
              >تماس با ما
              <img src="/icons/leftAngelArrow.svg" alt="leftAngelArrow"
            /></router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="homeNews">
      <div class="titles">
        <div class="line lineAnimation"></div>
        <div class="newsTitle" data-aos="fade-up" data-aos-duration="1000">
          اخبار
          <span></span>
        </div>
        <div
          class="d-flex justify-content-between"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3>اخبار و رویداد ها</h3>
          <router-link to="/fa/news" class="littleCircleLink">
            دیدن همه
            <div class="imgDiv">
              <img src="/icons/angleArrow.svg" alt="circleArrow" />
            </div>
          </router-link>
        </div>
      </div>
      <div
        class="images"
        :class="{ activeDrag: mouseDown == true }"
        @mousemove="mousemove"
        @mousedown="startDragging"
        @mouseup="stopDragging"
        @mouseleave="stopDragging"
        ref="parent"
      >
        <div class="image image1">
          <div class="effectedDiv">
            <div class="newsTitle">اخبار</div>
            <h5>لورم ایپسوم</h5>
            <div class="date">
              <img src="/icons/calendar.svg" alt="calendar" />
              ۱۴۰۱/۰۵/۰۲
            </div>
            <router-link to="/">
              بیشتر بخوانید
              <img src="/icons/circleArrow.svg" alt="circleArrow" />
            </router-link>
          </div>
        </div>
        <div class="image image2">
          <div class="effectedDiv">
            <div class="newsTitle">اخبار</div>
            <h5>لورم ایپسوم</h5>
            <div class="date">
              <img src="/icons/calendar.svg" alt="calendar" />
              ۱۴۰۱/۰۵/۰۲
            </div>
            <router-link to="/">
              بیشتر بخوانید
              <img src="/icons/circleArrow.svg" alt="circleArrow" />
            </router-link>
          </div>
        </div>
        <div class="image image3">
          <div class="effectedDiv">
            <div class="newsTitle">اخبار</div>
            <h5>لورم ایپسوم</h5>
            <div class="date">
              <img src="/icons/calendar.svg" alt="calendar" />
              ۱۴۰۱/۰۵/۰۲
            </div>
            <router-link to="/">
              بیشتر بخوانید
              <img src="/icons/circleArrow.svg" alt="circleArrow" />
            </router-link>
          </div>
        </div>
        <div class="image image4">
          <div class="effectedDiv">
            <div class="newsTitle">اخبار</div>
            <h5>لورم ایپسوم</h5>
            <div class="date">
              <img src="/icons/calendar.svg" alt="calendar" />
              ۱۴۰۱/۰۵/۰۲
            </div>
            <router-link to="/">
              بیشتر بخوانید
              <img src="/icons/circleArrow.svg" alt="circleArrow" />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="podcasts d-flex align-items-center">
      <div class="titles" data-aos="fade-left" data-aos-duration="1000">
        <div class="title">
          پایگاه دانش
          <span></span>
        </div>
        <h5>پادکست های رازک</h5>
        <p>
          این روزها گوش دادن به انواع پادکست با موضوعات مختلف طرفداران بسیار
          زیادی دارد، زیرا به راحتی، بدون اتلاف وقت، در مسیر و حتی در حال
          استراحت می‌‌توانید به آن گوش کنید.
        </p>
        <router-link to="/" class="blueCircleLink">
          دیدن همه
          <div class="imgDiv">
            <img src="/icons/blueAngleArrow.svg" alt="blueCircleArrow" />
          </div>
        </router-link>
      </div>
      <div class="phone">
        <img
          :src="`/images/podcastImg${podcastNum}.jpg`"
          class="podcastImg"
          alt="podcastImg"
        />
        <div class="podcastName">پادکست شماره {{ podcastNum }}</div>
        <div class="category">دسته بندی</div>
        <div class="timeline">
          <span class="circle"></span>
          <div class="progress"></div>
        </div>
        <div class="time d-flex justify-content-between">
          <div class="length"></div>
          <div class="current">0:00</div>
        </div>
        <div class="controls d-flex justify-content-between">
          <a href="/audio/podcast.mp3">
            <img src="/icons/arrowDown.svg" alt="control icon" />
          </a>
          <img
            @click="nextPodcast"
            src="/icons/forward.svg"
            alt="control icon"
          />
          <img
            class="playControl"
            v-if="play"
            src="/icons/pause.svg"
            alt="control icon"
          />
          <img
            class="playControl"
            v-else
            src="/icons/play.svg"
            alt="control icon"
          />
          <img
            @click="prevPodcast"
            src="/icons/previous.svg"
            alt="control icon"
          />
          <img src="/icons/repeateOne.svg" alt="control icon" />
        </div>
      </div>
      <div
        class="podcastsList d-flex col"
        ref="parent2"
        :class="{ activeDrag2: mouseDown2 == true }"
        @mousemove="mousemove2"
        @mousedown="startDragging2"
        @mouseup="stopDragging2"
        @mouseleave="stopDragging2"
      >
        <div
          class="podcast"
          data-aos="fade-right"
          data-aos-duration="1000"
          v-for="i in 5"
          :key="i"
          @click="podcastNum = i"
        >
          <div class="title"><span></span>پادکست شماره {{ i }}</div>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان...
          </p>
        </div>
      </div>
    </div>
    <div class="homeBlogs">
      <div class="effect">
        <div class="title" data-aos="zoom-in" data-aos-duration="1000">
          پایگاه دانش<span></span>
        </div>
        <div
          class="d-flex justify-content-between"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h5>مقالات، تحقیقات و نوآوری های رازک</h5>
          <router-link to="/fa/blogs" class="littleCircleLink">
            دیدن همه
            <div class="imgDiv">
              <img src="/icons/angleArrow.svg" alt="circleArrow" />
            </div>
          </router-link>
        </div>
        <div class="blogs">
          <div class="blog" v-for="i in 4" :key="i">
            <div class="blogTitle">دارو سازی</div>
            <p>
              داروسازی حرفه‌ای است که در زمینه دارو درمانی برای مداوای یک بیمار
              به عنوان متداول‌ترین شیوه در دنیا با بیماران و مردم مرتبط می‌گردد.
              داروساز در صورت ناموفق بودن رژیم دارو درمانی باید علل عدم موفقیت
              را بررسی کند. این رشته در ایران و بسیاری از کشورهای جهان در مقطع
              دکترای حرفه ای ارائه می شود...
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
    <div class="follow text-center">
      <div class="d-flex justify-content-center align-items-center">
        <div class="text">YOU</div>
        <div class="image1 followImage" v-show="animeImg == 1"></div>
        <div class="image1 followImage2" v-show="animeImg == 2"></div>
        <div class="image1 followImage3" v-show="animeImg == 3"></div>
        <div class="text">DON’T</div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <div class="text">?US</div>
        <div class="image2 followImage" v-show="animeImg == 1"></div>
        <div class="image2 followImage2" v-show="animeImg == 2"></div>
        <div class="image2 followImage3" v-show="animeImg == 3"></div>
        <div class="text">FOLLOW</div>
      </div>
      <router-link to="/" class="blueCircleLink">
        اینستاگرام ما
        <div class="imgDiv">
          <img src="/icons/blueAngleArrow.svg" alt="blueCircleArrow" />
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SlideTheme from '~/apollo/queries/SlideTheme.gql'
export default {
  layout: "main",
  data() {
    return {
      mouseDown: false,
      startX: null,
      scrollLeft: null,
      mouseDown2: false,
      startX2: null,
      scrollLeft2: null,
      podcastNum: 1,
      animeImg: 0,
      play: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.resizeFunc();
      this.audioPlayer();
      this.imagesGsap();
      this.imagesGsap2();
      this.imagesGsap3();
      this.lineAnimation();
      window.addEventListener("resize", this.resizeFunc);
      document
        .getElementsByClassName("faHome")[0]
        .getElementsByClassName("about")[0].style.transition = "all 2s";
      document
        .getElementsByClassName("faHome")[0]
        .getElementsByClassName("about")[0].style.opacity = "1";
    }, 100);
  },
  methods: {
    resizeFunc() {
      if (window.innerWidth > 1418) {
        this.animeImg = 1;
      } else if (window.innerWidth < 1418 && window.innerWidth > 1057) {
        this.animeImg = 2;
      } else {
        this.animeImg = 3;
      }
    },
    imagesGsap() {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline();
      tl.to(".followImage", {
        scrollTrigger: {
          trigger: ".follow",
          start: "10% center",
          end: "10% center",
          scrub: true,
          // markers: true,
        },
        "min-width": "140px",
        "min-width": "140px",
      });
    },
    imagesGsap2() {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline();
      tl.to(".followImage2", {
        scrollTrigger: {
          trigger: ".follow",
          start: "10% center",
          end: "10% center",
          scrub: true,
          // markers: true,
        },
        "min-width": "90px",
        "min-width": "90px",
      });
    },
    imagesGsap3() {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline();
      tl.to(".followImage3", {
        scrollTrigger: {
          trigger: ".follow",
          start: "10% center",
          end: "10% center",
          scrub: true,
          // markers: true,
        },
        "min-width": "65px",
        "min-width": "65px",
      });
    },
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
    mousemove2(e) {
      e.preventDefault();
      if (!this.mouseDown2) {
        return;
      }
      const x = e.pageX - this.$refs.parent2.offsetLeft;
      const scroll = x - this.startX2;
      this.$refs.parent2.scrollLeft = this.scrollLeft2 - scroll;
    },
    startDragging2(e) {
      this.mouseDown2 = true;
      this.startX2 = e.pageX - this.$refs.parent2.offsetLeft;
      this.scrollLeft2 = this.$refs.parent2.scrollLeft;
    },
    stopDragging2(event) {
      this.mouseDown2 = false;
    },
    nextPodcast() {
      if (this.podcastNum < 5) {
        this.podcastNum += 1;
      }
    },
    prevPodcast() {
      if (this.podcastNum > 1) {
        this.podcastNum -= 1;
      }
    },
    audioPlayer() {
      const audioPlayer = document.querySelector(".phone");
      var audio = new Audio("/audio/podcast.mp3");

      audio.addEventListener(
        "loadeddata",
        () => {
          audioPlayer.querySelector(".time .length").textContent =
            getTimeCodeFromNum(audio.duration);
        },
        false
      );
      const timeline = audioPlayer.querySelector(".timeline");
      timeline.addEventListener(
        "click",
        (e) => {
          const timelineWidth = window.getComputedStyle(timeline).width;
          const timeToSeek =
            (e.offsetX / parseInt(timelineWidth)) * audio.duration;
          audio.currentTime = timeToSeek;
        },
        false
      );
      setInterval(() => {
        const progressBar = audioPlayer.querySelector(".progress");
        const circle = audioPlayer.querySelector(".circle");
        progressBar.style.width =
          (audio.currentTime / audio.duration) * 100 + "%";
        circle.style.left = (audio.currentTime / audio.duration) * 100 + "%";
        audioPlayer.querySelector(".time .current").textContent =
          getTimeCodeFromNum(audio.currentTime);
      }, 500);
      const playBtn = audioPlayer.querySelector(".controls .playControl");
      playBtn.addEventListener(
        "click",
        () => {
          if (audio.paused) {
            audio.play();
            this.play = true;
          } else {
            audio.pause();
            this.play = false;
          }
        },
        false
      );
      function getTimeCodeFromNum(num) {
        let seconds = parseInt(num);
        let minutes = parseInt(seconds / 60);
        seconds -= minutes * 60;
        const hours = parseInt(minutes / 60);
        minutes -= hours * 60;

        if (hours === 0)
          return `${minutes}:${String(seconds % 60).padStart(2, 0)}`;
        return `${String(hours).padStart(2, 0)}:${minutes}:${String(
          seconds % 60
        ).padStart(2, 0)}`;
      }
    },
    lineAnimation() {
      gsap.registerPlugin(ScrollTrigger);
      let tl = gsap.timeline();
      tl.to(".lineAnimation", {
        scrollTrigger: {
          trigger: ".lineAnimation",
          start: "top 80%",
          end: "top 80%",
          scrub: true,
          // markers: true,
        },
        width: "100%",
      });
    },
  },
  //apollo
  apollo: {
    SlideTheme: {
      query: SlideTheme,
      prefetch: true,
    },
  },
};
</script>

<style>
</style>