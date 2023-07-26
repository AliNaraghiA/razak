<template>
  <div class="enHome enPage">
    <div class="chatWithUs d-flex align-items-center">
      <div class="text">Chat with us</div>
      <div class="circle">
        <img src="/icons/messages.svg" alt="messages" class="messages" />
      </div>
    </div>
    <div class="topDiv d-flex flex-column justify-content-between">
      <div class="logoDiv">
        <img src="/images/enLogo.svg" alt="enLogo" class="enLogo" />
      </div>
      <div class="about">
        <h1>Razak Pharmaceutical Company</h1>
        <div class="d-flex align-items-end text">
          <div>
            Razak laboratories company with half a century of experience
          </div>
          <router-link to="#" class="circleLinkEn">
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
        About Razak
        <span></span>
      </div>
      <div
        class="d-flex justify-content-between"
        data-aos="zoom-in"
        data-aos-duration="1000"
      >
        <div>
          <h2>
            Razak Laboratories Company with more than half a century of
            experience and the best quality
          </h2>
          <router-link to="/en/aboutUs" class="more blueCircleLinkEn">
            <span>read more</span>
            <div class="imgDiv">
              <img src="/icons/blueAngleArrow.svg" alt="blueCircleArrow" />
            </div>
          </router-link>
        </div>
        <div>
          <p>
            Razak Laboratories pharmaceutical company in 1343 AH (1964 AD) with
            the name of Pfizer Laboratories under the ownership of Fizer America
            started its activity.
          </p>
          <div class="d-flex links">
            <router-link to="/en/products">
              products List
              <img src="/icons/leftAngelArrow.svg" alt="leftAngelArrow"
            /></router-link>
            <router-link to="/en/contactUs">
              contact us
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
          News
          <span></span>
        </div>
        <div
          class="d-flex justify-content-between"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h3>News & Events</h3>
          <router-link to="/en/news" class="littleCircleLinkEn">
            see all
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
            <div class="newsTitle">News</div>
            <h5>Lorem Episom</h5>
            <div class="date">
              <img src="/icons/calendar.svg" alt="calendar" />
              2020/02/02
            </div>
            <router-link to="/" class="littleCircleLinkEn">
              read more
              <div class="imgDiv">
                <img src="/icons/angleArrow.svg" alt="circleArrow" />
              </div>
            </router-link>
          </div>
        </div>
        <div class="image image2">
          <div class="effectedDiv">
            <div class="newsTitle">News</div>
            <h5>Lorem Episom</h5>
            <div class="date">
              <img src="/icons/calendar.svg" alt="calendar" />
              2020/02/02
            </div>
            <router-link to="/" class="littleCircleLinkEn">
              read more
              <div class="imgDiv">
                <img src="/icons/angleArrow.svg" alt="circleArrow" />
              </div>
            </router-link>
          </div>
        </div>
        <div class="image image3">
          <div class="effectedDiv">
            <div class="newsTitle">News</div>
            <h5>Lorem Episom</h5>
            <div class="date">
              <img src="/icons/calendar.svg" alt="calendar" />
              2020/02/02
            </div>
            <router-link to="/" class="littleCircleLinkEn">
              read more
              <div class="imgDiv">
                <img src="/icons/angleArrow.svg" alt="circleArrow" />
              </div>
            </router-link>
          </div>
        </div>
        <div class="image image4">
          <div class="effectedDiv">
            <div class="newsTitle">News</div>
            <h5>Lorem Episom</h5>
            <div class="date">
              <img src="/icons/calendar.svg" alt="calendar" />
              2020/02/02
            </div>
            <router-link to="/" class="littleCircleLinkEn">
              read more
              <div class="imgDiv">
                <img src="/icons/angleArrow.svg" alt="circleArrow" />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="podcasts d-flex align-items-center">
      <div class="titles" data-aos="fade-left" data-aos-duration="1000">
        <div class="title">
          knowledge base
          <span></span>
        </div>
        <h5>Razak podcasts</h5>
        <p>
          These days, many fans listen to a variety of podcasts with different
          topics It has a lot, because easily, without wasting time, on the way
          and even now Relax you can listen to it.
        </p>
        <router-link to="/" class="blueCircleLinkEn">
          see all
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
        <div class="podcastName">Podcast number {{ podcastNum }}</div>
        <div class="category">Grouping</div>
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
          <div class="title"><span></span>Podcast number {{ i }}</div>
          <p>
            Lorem Epsom fake text with the production of incomprehensible
            simplicity from the printing industry and withUsing designers...
          </p>
        </div>
      </div>
    </div>
    <div class="homeBlogs">
      <div class="effect">
        <div class="title" data-aos="zoom-in" data-aos-duration="1000">
          knowledge base<span></span>
        </div>
        <div
          class="d-flex justify-content-between"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <h5>Articles, research and Razak innovations</h5>
          <router-link to="/en/blogs" class="littleCircleLinkEn">
            see all
            <div class="imgDiv">
              <img src="/icons/angleArrow.svg" alt="circleArrow" />
            </div>
          </router-link>
        </div>
        <div class="blogs">
          <div class="blog" v-for="i in 4" :key="i">
            <div class="blogTitle">Pharmacology</div>
            <p>
              Pharmacy is a profession in the field of drug therapy for the
              treatment of a patient As the most common method in the world, it
              is related to patients and people. Pharmacist in the case of
              failure of the drug treatment regimen, the reasons for the failure
              to check This field is in Iran and many countries of the world A
              professional doctorate is offered...
            </p>
            <router-link to="/" class="littleCircleLinkEn">
              read more
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
        <div class="text">DON’T</div>
        <div class="image1 followImage" v-show="animeImg == 1"></div>
        <div class="image1 followImage2" v-show="animeImg == 2"></div>
        <div class="image1 followImage3" v-show="animeImg == 3"></div>
        <div class="text">YOU</div>
      </div>
      <div class="d-flex justify-content-center align-items-center">
        <div class="text">FOLLOW</div>
        <div class="image2 followImage" v-show="animeImg == 1"></div>
        <div class="image2 followImage2" v-show="animeImg == 2"></div>
        <div class="image2 followImage3" v-show="animeImg == 3"></div>
        <div class="text">US?</div>
      </div>
      <router-link to="/" class="blueCircleLinkEn">
        Our Instagram
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
        .getElementsByClassName("enHome")[0]
        .getElementsByClassName("about")[0].style.transition = "all 2s";
      document
        .getElementsByClassName("enHome")[0]
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
        "min-width": "70px",
        "min-width": "70px",
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
        "min-width": "45px",
        "min-width": "45px",
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
};
</script>

<style>
</style>