<template>
  <div class="faPage faDistributors">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">مراکز پخش محصولات رازک</div>
    </div>
    <div class="route">
      <router-link to="/fa/"> صفحه اصلی . </router-link>
      مراکز پخش محصولات رازک
    </div>

    <div>
    <h1>{{ maindistribution.title }}</h1>
    <img :src="maindistribution.featuredImage.node.sourceUrl" :alt="maindistribution.featuredImage.node.altText">
    <div v-for="item in maindistribution.acfmaindistribution.repeater" :key="item.id">
      <h2>{{ item.title }}</h2>
      <img :src="item.image.sourceUrl" :alt="item.image.altText">
      <p>{{ item.city }}</p>
      <p>{{ item.address }}</p>
    </div>
  </div>

    <div class="about d-flex justify-content-between align-items-center" >
      <div>
        <div class="title">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          <span></span>
        </div>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد.
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
                تهران
              </div>
              <div class="title">لورم ایپسوم متن</div>
              <p>
                آدرس:لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
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
                تهران
              </div>
              <div class="title">لورم ایپسوم متن</div>
              <p>
                آدرس:لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
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
                تهران
              </div>
              <div class="title">لورم ایپسوم متن</div>
              <p>
                آدرس:لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
          </div>
        </splide-slide>
      </splide>
    </div>
    <div class="spreaders d-flex">
      <div class="info">
        <div class="title">
          پخش کننده ها
          <span></span>
        </div>
        <p>
          برای نمایش مراکز پخش، استان مورد نظر خود را در نقشه انتخاب کرده و بر
          روی آن کلیک کنید .
        </p>
        <router-link to="#" class="blueCircleLink">
          مشاهده لیست تمامی مراکز
          <div class="imgDiv">
            <img src="/icons/blueAngleArrow.svg" alt="arrow" />
          </div>
        </router-link>
      </div>
      <div class="map">
        <div class="circle tehran" @click="myModal = true">تهران</div>
        <div class="circle mashhad" @click="myModal = true">مشهد</div>
        <div class="circle isfahan" @click="myModal = true">اصفهان</div>
        <div class="circle shiraz" @click="myModal = true">شیراز</div>
      </div>
    </div>
    <div class="modalBack" v-show="myModal">
      <div class="myModal">
        <div class="modalHeader d-flex justify-content-between">
          <div>مراکز توزیع استان تهران</div>
          <img src="/icons/xIcon.svg" alt="x" @click="myModal = false" />
        </div>
        <div class="filters">
          <div class="searchDiv">
            <img src="/icons/graySearch.svg" alt="search" />
            <input type="search" placeholder="جستجو" />
          </div>
          <div class="sectionDiv">
            <img src="/icons/grayLocation.svg" alt="location" />
            <select name="" id="">
              <option value="" hidden selected>انتخاب استان</option>
            </select>
          </div>
          <div class="cityDiv">
            <img src="/icons/grayLocation.svg" alt="location" />
            <select name="" id="">
              <option value="" hidden selected>انتخاب شهر</option>
            </select>
          </div>
        </div>
        <div class="listHeader">
          <div class="city">شهر</div>
          <div class="address">آدرس</div>
          <div class="phone">شماره تماس</div>
        </div>
        <div class="list">
          <div class="myRow" v-for="i in 5" :key="i">
            <div class="cityValue">تهران</div>
            <div class="addressValue">کیلومتر 10 جاده مخصوص کرج</div>
            <div class="phoneValue">۰۲۱ ۴۴۵۲۵۴۱۳-۱۶</div>
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
import maindistribution from '~/apollo/queries/maindistribution.gql'
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
  //dynamic
  apollo: {
    maindistribution: {
      query:maindistribution,
    },
  },
};
</script>

<style>
</style>