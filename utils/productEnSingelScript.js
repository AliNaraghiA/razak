import gql from "graphql-tag";

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
      if (!this.audioLink) {
        // Handle the case when there is no audio link available
        console.log("No audio available");
        return;
      }
      
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

  //dynamic product
  async asyncData({ params, app }) {
    const { data } = await app.apolloProvider.defaultClient.query({
      query: gql`
        query product($slug: ID!) {
          enproduct(id: $slug, idType: SLUG) {
            content
            seo {
              title
              metaDesc
              metaKeywords
              focuskw
            }
            acfproducts {
              productnames
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
        slug: params.slug,
      },
    });
    const audio = data.enproduct.acfproducts.audio

    return {
      product: data.enproduct,
      audioLink: audio ? audio.mediaItemUrl : null 
    };
  },
  //dynamic

  computed: {
    metaTags() {
      return [
        {
          hid: "description",
          name: "description",
          content: this.product.seo?.metaDesc,
        },
        {
          hid: "keywords",
          name: "keywords",
          content: this.product.seo?.focuskw,
        },
      ];
    },
  },
  head() {
    return {
      title: this.product.seo?.title,
      meta: this.metaTags,
    };
  },
};
 