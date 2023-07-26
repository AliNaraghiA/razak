<template>
  <div class="faPage faProductsDetail">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">سیستین B6 زینک رازک</div>
    </div>
    <div class="route">
      <router-link to="/fa/"> صفحه اصلی . </router-link>
      <router-link to="/fa/products"> محصولات . </router-link>
      <span>سیستین B6 زینک رازک</span>
    </div>
    <div class="aboutProduct">
      <img
        src="/images/productBack.png"
        alt="productBack"
        class="productBack"
      />
      <div class="title">
        محصول
        <span></span>
      </div>
      <h2 v-if='product'>{{ product.acfproducts.productnames }}</h2>
      <div class="d-flex align-items-center">
        <div class="descriptions">
          <h5>توضیحات</h5>
          <p>
            {{ product.acfproducts.description }}
          </p>
        </div>
        <div class="imgAndPlayer">
          <img
            :src="product.acfproducts.image.sourceUrl"
            :alt="product.acfproducts.image.altText"
            class="productImg"
          />
          <div class="player">
            <div class="time d-flex justify-content-between">
              <img src="/icons/mute.svg" v-if="!mute" alt="mute" class="mute" />
              <img src="/icons/unmute.svg" v-else alt="mute" class="mute" />
              <div class="timeline">
                <span class="circle"></span>
                <div class="progress"></div>
              </div>
              <div class="current">0:00</div>
            </div>
            <div class="controls d-flex justify-content-center">
              <img src="/icons/productForward.svg" alt="control icon" />
              <img
                class="playControl"
                src="/icons/productPlay.svg"
                alt="control icon"
              />
              <img src="/icons/productBackward.svg" alt="control icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  layout: "main",
  data() {
    return {
      mute: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.audioPlayer();
    }, 100);
  },
  methods: {
    audioPlayer() {
      const audioPlayer = document.querySelector(".player");
      var audio = new Audio(this.audioLink);

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
          } else {
            audio.pause();
          }
        },
        false
      );
      const muteBtn = audioPlayer.querySelector(".mute");
      muteBtn.addEventListener("click", () => {
        console.log("oh");
        audio.muted = !audio.muted;
        this.mute = !this.mute;
      });
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
  },

  //dynamic
  async asyncData({ params, app }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: gql`
query product($slug: ID!) {
  product(id: $slug, idType: SLUG) {
    acfproducts {
      productnames
      description
      audio {
        mediaItemUrl
      }
      image {
        altText
        sourceUrl
      }
    }
  }
}
      `,
      variables: {
        slug: params.slug
      }
    });

    return {
      product: data.product,
      audioLink: data.product.acfproducts.audio.mediaItemUrl
    };
  }
  //dynamic
};
</script>

<style>
</style>


<!-- <template>
  <div class="faPage faProductsDetail">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">سیستین B6 زینک رازک</div>
    </div>
    <div class="route">
      <router-link to="/fa/"> صفحه اصلی . </router-link>
      <router-link to="/fa/products"> محصولات . </router-link>
      <span>سیستین B6 زینک رازک</span>
    </div>
    <div class="aboutProduct">
      <img
        src="/images/productBack.png"
        alt="productBack"
        class="productBack"
      />
      <div class="title">
        محصول
        <span></span>
      </div>
      <h2>سیستین B6 زینک رازک</h2>
      <div class="d-flex align-items-center">
        <div class="descriptions">
          <h5>توضیحات</h5>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <div class="imgAndPlayer">
          <img
            src="/images/productImg.png"
            alt="productImg"
            class="productImg"
          />
          <div class="player">
            <div class="time d-flex justify-content-between">
              <img src="/icons/mute.svg" v-if="!mute" alt="mute" class="mute" />
              <img src="/icons/unmute.svg" v-else alt="mute" class="mute" />
              <div class="timeline">
                <span class="circle"></span>
                <div class="progress"></div>
              </div>
              <div class="current">0:00</div>
            </div>
            <div class="controls d-flex justify-content-center">
              <img src="/icons/productForward.svg" alt="control icon" />
              <img
                class="playControl"
                src="/icons/productPlay.svg"
                alt="control icon"
              />
              <img src="/icons/productBackward.svg" alt="control icon" />
            </div>
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
      mute: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.audioPlayer();
    }, 100);
  },
  methods: {
    audioPlayer() {
      const audioPlayer = document.querySelector(".player");
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
          } else {
            audio.pause();
          }
        },
        false
      );
      const muteBtn = audioPlayer.querySelector(".mute");
      muteBtn.addEventListener("click", () => {
        console.log("oh");
        audio.muted = !audio.muted;
        this.mute = !this.mute;
      });
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
  },
};
</script>

<style>
</style> -->