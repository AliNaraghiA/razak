<template>
  <div class="enPage enStockNews">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">Stock news</div>
    </div>
    <div class="route">
      <router-link to="/en/"> Main Page . </router-link>
      Stock news
    </div>
    <div class="page">
      <div class="chartDiv">
        <div class="title">Razak Pharma</div>
        <div class="d-flex">
          <div class="dropNum">
            <div class="d-flex">
              <div class="number">132.2</div>
              <div class="red">-132.2</div>
            </div>
            <div class="text">Lorem Ipsum</div>
          </div>
          <span class="grayLine"></span>
          <div class="dropNum">
            <div class="d-flex">
              <div class="number">154.2</div>
              <div class="green">+140.2</div>
            </div>
            <div class="text">Lorem Ipsum</div>
          </div>
        </div>
        <div class="years d-flex justify-content-between">
          <div class="d-flex">
            <div>1 year</div>
            <div>2 year</div>
            <div>5 year</div>
            <div>10 year</div>
            <div>15 year</div>
            <div>20 year</div>
            <div>25 year</div>
            <div>1 year</div>
            <div>2 year</div>
            <div>5 year</div>
            <div>10 year</div>
            <div>15 year</div>
            <div>20 year</div>
            <div>25 year</div>
            <div>10 year</div>
            <div>15 year</div>
            <div>20 year</div>
            <div>25 year</div>
          </div>
          <button>all</button>
        </div>
        <Chart class="chart" />
        <div class="d-flex aboutChart">
          <div>
            <div class="d-flex justify-content-between">
              <div class="title">Open</div>
              <div class="number">135.11</div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="title">High</div>
              <div class="number">135.18</div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="title">Low</div>
              <div class="number">135.18</div>
            </div>
          </div>
          <span></span>
          <div>
            <div class="d-flex justify-content-between">
              <div class="title">Vol</div>
              <div class="number">135.11</div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="title">Vol</div>
              <div class="number">135.11</div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="title">Mkt Cap</div>
              <div class="number">135.11</div>
            </div>
          </div>
          <span></span>
          <div>
            <div class="d-flex justify-content-between">
              <div class="title">52W H</div>
              <div class="number">135.11</div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="title">52W L</div>
              <div class="number">135.11</div>
            </div>
            <div class="d-flex justify-content-between">
              <div class="title">Avg Vol</div>
              <div class="number">135.11</div>
            </div>
          </div>
        </div>
      </div>
      <div class="banner">
        <div class="d-flex align-items-center">
          <img src="/icons/diagram.svg" alt="diagram" />
          <div class="title">
            Portal of shareholders of Razak Pharmaceutical Company
          </div>
        </div>
        <router-link to="/login">
          <button>Shareholder portal</button>
        </router-link>
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
                Appreciation of Razak company in the second nationwide meeting
                of value-creating managers
              </p>
              <p class="text">
                Lorem Epsom fake text with the production of incomprehensible
                simplicity from the printing industry and with The use of
                graphic designers, printers...
              </p>
              <router-link to="/news/1" class="littleCircleLinkEn">
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
          <div class="title">The latest content <span></span></div>
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
              value-creating managers, the second National meeting of
              managers...
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
  </div>
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      pagination: 1,
      mouseDown: false,
      startX: null,
      scrollLeft: null,
      lastNews: [
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