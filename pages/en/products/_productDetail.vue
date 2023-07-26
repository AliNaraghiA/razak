<template>
  <div class="enPage enProductsDetail">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">Cysteine ​​B6 zinc hops</div>
    </div>
    <div class="route">
      <router-link to="/en/"> Main Page . </router-link>
      <router-link to="/en/products"> Products . </router-link>

      <span>Cysteine ​​B6 zinc Razak</span>
    </div>
    <div class="aboutProduct">
      <img
        src="/images/productBack.png"
        alt="productBack"
        class="productBack"
      />
      <div class="title">
        the product
        <span></span>
      </div>
      <h2>Cysteine ​​B6 zinc hops</h2>
      <div class="d-flex align-items-center">
        <div class="descriptions">
          <h5>Description</h5>
          <p>
            Lorem Ipsum fabricated text by producing incomprehensible simplicity
            from the printing industry, and with It is used by graphic
            designers, printers and texts but also newspapers and magazines
            Column and row as necessary, and for the current conditions of
            technology required, and diverse applications with the aim of
            improving practical tools, books A lot in sixty-three percent of the
            past, present and future, a lot of knowledge of the society and It
            requires specialists, to get more familiarity with software for
            designers a computer Lorem Ipsum fabricated text by producing
            incomprehensible simplicity from the printing industry, and with It
            is used by graphic designers, printers and texts but also newspapers
            and magazines Column and row as necessary, and for the current
            conditions of technology required, and diverse applications with the
            aim of improving practical tools, books A lot in sixty-three percent
            of the past, present and future, a lot of knowledge of the society
            and It requires specialists, to get more familiarity with software
            for designers a computer
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
              <img src="/icons/productBackward.svg" alt="control icon" />
              <img
                class="playControl"
                src="/icons/productPlay.svg"
                alt="control icon"
              />
              <img src="/icons/productForward.svg" alt="control icon" />
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
</style>