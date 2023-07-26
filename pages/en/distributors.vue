<template>
  <div class="enPage enDistributors">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">Distribution centers for hop products</div>
    </div>
    <div class="route">
      <router-link to="/en/"> Main Page . </router-link>
      Distribution centers for hop products
    </div>
    <div class="about d-flex justify-content-between align-items-center">
      <div>
        <div class="title">
          Lorem Ipsum is a mock text with an unintelligible simplicity produced
          by the printing industry

          <span></span>
        </div>
        <p>
          Lorem Ipsum fabricated text by producing incomprehensible simplicity
          from the printing industry, and with It is used by graphic designers,
          printers and texts but also newspapers and magazines Column and row as
          necessary, and for the current conditions of technology required, and
          Various applications are aimed at improving practical tools, many
          books In sixty-three percent of the past, present and future, the
          community and experts know a lot a demander
        </p>
      </div>
      <img src="/images/distributorsAbout.jpg" alt="image" />
    </div>
    <div class="slider">
      <splide :options="options" v-show="slideOption == 1">
        <splide-slide v-for="i in 16" :key="i">
          <div class="slide">
            <div class="info">
              <div class="city">
                <img src="/icons/location.svg" alt="location" />
                Tehran
              </div>
              <div class="title">Lorem Ipsum text</div>
              <p>
                Address: Lorem Epsom, fake text with incomprehensible simplicity
                produced by the printing industry
              </p>
            </div>
          </div>
        </splide-slide>
      </splide>
      <splide :options="options2" v-show="slideOption == 2">
        <splide-slide v-for="i in 16" :key="i">
          <div class="slide">
            <div class="info">
              <div class="city">
                <img src="/icons/location.svg" alt="location" />
                Tehran
              </div>
              <div class="title">Lorem Ipsum text</div>
              <p>
                Address: Lorem Epsom, fake text with incomprehensible simplicity
                produced by the printing industry
              </p>
            </div>
          </div>
        </splide-slide>
      </splide>
      <splide :options="options3" v-show="slideOption == 3">
        <splide-slide v-for="i in 16" :key="i">
          <div class="slide">
            <div class="info">
              <div class="city">
                <img src="/icons/location.svg" alt="location" />
                Tehran
              </div>
              <div class="title">Lorem Ipsum text</div>
              <p>
                Address: Lorem Epsom, fake text with incomprehensible simplicity
                produced by the printing industry
              </p>
            </div>
          </div>
        </splide-slide>
      </splide>
    </div>
    <div class="spreaders d-flex">
      <div class="info">
        <div class="title">
          Players
          <span></span>
        </div>
        <p>
          To display broadcast centers, select your desired province on the map
          and click
        </p>
        <router-link to="#" class="blueCircleLinkEn">
          View the list of all centers
          <div class="imgDiv">
            <img src="/icons/blueAngleArrow.svg" alt="arrow" />
          </div>
        </router-link>
      </div>
      <div class="map">
        <div class="circle tehran" @click="myModal = true">Tehran</div>
        <div class="circle mashhad" @click="myModal = true">Mashhad</div>
        <div class="circle isfahan" @click="myModal = true">Isfahan</div>
        <div class="circle shiraz" @click="myModal = true">Shiraz</div>
      </div>
    </div>
    <div class="modalBack" v-show="myModal">
      <div class="myModal">
        <div class="modalHeader d-flex justify-content-between">
          <div>Distribution centers of Tehran province</div>
          <img src="/icons/xIcon.svg" alt="x" @click="myModal = false" />
        </div>
        <div class="filters">
          <div class="searchDiv">
            <img src="/icons/graySearch.svg" alt="search" />
            <input type="search" placeholder="search" />
          </div>
          <div class="sectionDiv">
            <img src="/icons/grayLocation.svg" alt="location" />
            <select name="" id="">
              <option value="" hidden selected>Select the state</option>
            </select>
          </div>
          <div class="cityDiv">
            <img src="/icons/grayLocation.svg" alt="location" />
            <select name="" id="">
              <option value="" hidden selected>Select the city</option>
            </select>
          </div>
        </div>
        <div class="listHeader">
          <div class="city">city</div>
          <div class="address">address</div>
          <div class="phone">phone number</div>
        </div>
        <div class="list">
          <div class="myRow" v-for="i in 5" :key="i">
            <div class="cityValue">Tehran</div>
            <div class="addressValue">10 km of Karaj special road</div>
            <div class="phoneValue">021 44525413-16</div>
          </div>
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
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
  data() {
    return {
      slideOption: 1,
      options: {
        type: "loop",
        padding: "20%",
      },
      options2: {
        type: "loop",
        padding: "10%",
      },
      options3: {
        type: "loop",
        padding: "0%",
      },
      pagination: 1,
      myModal: false,
    };
  },
  mounted() {
    addEventListener("resize", this.onResize);
    if (window.innerWidth > 1057) {
      this.slideOption = 1;
    } else if (window.innerWidth > 719 && window.innerWidth < 1057) {
      this.slideOption = 2;
    } else {
      this.slideOption = 3;
    }
  },
  methods: {
    onResize() {
      if (window.innerWidth > 1057) {
        this.slideOption = 1;
      } else if (window.innerWidth > 719 && window.innerWidth < 1057) {
        this.slideOption = 2;
      } else {
        this.slideOption = 3;
      }
    },
  },
};
</script>

<style>
</style>