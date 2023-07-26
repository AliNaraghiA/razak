<template>
  <div class="enPage enNews">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">News</div>
    </div>
    <div class="route">
      <router-link to="/en/"> Main Page . </router-link>
      News
    </div>
    <div class="topNews">
      <div class="title">
        Selected news

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
            <div class="title">News</div>
            <p class="about">
              Appreciation of Razak company in the second nationwide meeting of
              value-creating managers
            </p>
            <p class="text">
              Lorem Epsom fake text with the production of incomprehensible
              simplicity from the printing industry and with The use of graphic
              designers, printers...
            </p>
            <router-link to="news/1" class="littleCircleLinkEn">
              read more
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
<!--         <div class="title">The latest content <span></span></div>
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
        </div> -->
        <div class="title">The latest content  <span></span></div>
        <div class="lastNew d-flex" v-for="post in posts.edges" :key="post.databaseId">
          <div>
            <nuxt-link :to="`/en/news/${post.node.slug}`">
              <div class="newTitle">{{ post.node.title }}</div>
              </nuxt-link>
            <p v-html='post.node.excerpt'></p>
            <div class="d-flex align-items-center">
              <img src="/icons/profile.svg" class="profile" alt="profile" />
              <div class="writer">{{ post.node.author.node.name }}</div>
              <span class="littleLine"></span>
              <img
                src="/icons/blackCalendar.svg"
                class="calendar"
                alt="calendar"
              />
              <div class="date">{{ formatDate(post.node.date) }}</div>
            </div>
          </div>
          <img :src="post.node.featuredImage.node.sourceUrl" :alt="post.node.featuredImage.node.altText" class="newPic" />
        </div>
        <div
          class="pagination d-flex justify-content-center align-items-center"
        >
        <div v-if='hasNextPage=true'>
    <div class="pagination">
      <button @click="previousPage" :disabled="page === 1">Previous</button>
      <span>Page {{ page }}</span>
     <button @click="nextPage" :disabled="!posts || !posts.pageInfo || !posts.pageInfo.hasNextPage">Next</button>
    </div>
      </div> 
<!--           <span
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
          </span> -->
        </div>
      </div>
      <div class="lotsVisit">
        <div class="searchDiv">
          <img src="/icons/darkSearch.svg" alt="search" />
          <input type="search" placeholder="search" />
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
  </div>
</template>

<script>
import newsEnScript from '~/utils/newsEnScript';

export default {
  layout: "main",
  mixins: [newsEnScript],

  data() {
    return {
      mouseDown: false,
      startX: null,
      scrollLeft: null,
      pagination: 1,

/*       lastNews: [
        {
          id: 0,
          title:
            "Razak Laboratories pharmaceutical company is on the path of continuous improvement",
          text: "Audit of quality management system certifications of Razak Laboratories pharmaceutical company on the 3rd and 4th of March....",
          writer: "writer",
          date: "2020/02/02",
          img: "/images/lastNew1.jpg",
        },
        {
          id: 1,
          title:
            "Razak Laboratories pharmaceutical company is on the path of continuous improvement",
          text: "Audit of quality management system certifications of Razak Laboratories pharmaceutical company on the 3rd and 4th of March....",
          writer: "writer",
          date: "2020/02/02",
          img: "/images/lastNew2.jpg",
        },
        {
          id: 2,
          title:
            "Razak Laboratories pharmaceutical company is on the path of continuous improvement",
          text: "Audit of quality management system certifications of Razak Laboratories pharmaceutical company on the 3rd and 4th of March....",
          writer: "writer",
          date: "2020/02/02",
          img: "/images/lastNew3.jpg",
        },
        {
          id: 3,
          title:
            "Razak Laboratories pharmaceutical company is on the path of continuous improvement",
          text: "Audit of quality management system certifications of Razak Laboratories pharmaceutical company on the 3rd and 4th of March....",
          writer: "writer",
          date: "2020/02/02",
          img: "/images/lastNew4.jpg",
        },
      ], */
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