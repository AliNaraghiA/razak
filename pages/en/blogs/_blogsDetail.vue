<template>
  <div class="enPage enBlogsDetail">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">
        Razak Laboratories pharmaceutical company is on the path of continuous
        improvement
      </div>
    </div>
    <div class="route">
      <router-link to="/en/"> Main Page . </router-link>
      <router-link to="/en/blogs/"> articles . </router-link>
      <span
        >Razak Laboratories pharmaceutical company is on the path of continuous
        improvement</span
      >
    </div>
    <div class="news d-flex">
      <div class="new">
        <p>
          Audit of issuing certificates of quality management system of Darusazi
          Laboratories Razak was conducted on the 3rd and 4th of March, in the
          presence of the auditors of IMQ Italy became.
        </p>
        <img src="/images/new.jpg" alt="new" class="newImg" />
        <p>
          In this two-day audit, Razak Laboratories pharmaceutical company
          succeeded in obtaining Approval of the certificate of establishment of
          the quality management system based on the international standard
          international ISO 9001:2015 and ISO 10002:2018 standards (management
          of complaints) and ISO 10004:2018 (customer satisfaction measurement).
          this The company in the current year, according to the implementation
          of the process systematization plan, compliance with International
          standards and the establishment of operational and practical
          management tools has related issues on the agenda.
        </p>
        <div class="writer">
          <img src="/icons/profile.svg" alt="profile" />
          the writer
        </div>
        <div class="date">
          <img src="/icons/blackCalendar.svg" alt="blackCalendar" />
          2020/02/02
        </div>
      </div>
      <div class="lotsVisit">
        <div class="searchDiv">
          <input type="search" placeholder="search" />
          <img src="/icons/darkSearch.svg" alt="search" />
        </div>
        <div class="title d-flex align-items-center">
          Lots of visits
          <span></span>
        </div>
        <div class="lotsVisitNew" v-for="i in 3" :key="i">
          <div class="subject">
            Appreciation of Razak company in the second nationwide meeting of
            value-creating managers
          </div>
          <div class="new">
            Appreciation of Razak at the second national meeting of
            value-creating managers, the second meeting All managers...
          </div>
          <router-link to="/" class="blueCircleLinkEn">
            read more
            <div class="imgDiv">
              <img src="/icons/blueAngleArrow.svg" alt="blueCircleArrow" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="relatedPosts">
      <div class="title">
        Related posts
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
            <div class="title">articles</div>
            <p class="about">
              Appreciation of Razak company in the second nationwide meeting of
              value-creating managers
            </p>
            <p class="text">
              Lorem Epsom fake text with the production of incomprehensible
              simplicity from the printing industry and with The use of graphic
              designers, printers...
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