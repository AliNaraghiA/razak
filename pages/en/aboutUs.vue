<template>
  <div class="enPage enAboutUs">
    <div class="topDiv">
      <div class="effect">
        <div class="enLogo">
          <img src="/images/enLogo.svg" alt="enLogo" />
        </div>
        <div>
          <div class="title">
            about us
            <span></span>
          </div>
          <h2>About Razak Laboratories Company</h2>
        </div>
        <div class="d-flex flex-column">
          <a class="story" href="#ourStory">
            <span>01</span>
            Our story
          </a>
          <a class="responsibility" href="#ourResponsibility">
            <span>02</span>
            our responsibility
          </a>
          <a class="ourTeamTitle" href="#ourTeam">
            <span>03</span>
            our team
          </a>
        </div>
      </div>
    </div>
    <div id="ourStory" class="ourStory">
      <div class="title">
        Our story

        <span></span>
      </div>
      <div class="about">
        Razak Laboratories pharmaceutical company in 1343 AH (1964 AD) with the
        name of Pfizer Laboratories under the ownership of Pfizer America
        started its activity.
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <img src="/images/ourStory.svg" alt="ourStory" />
        <p>
          After the Islamic revolution, the shares of this company were
          transferred to the National Industries Organization of Iran It was
          found and its name was changed to Razak Laboratories Pharmaceutical
          Company and now Currently, Razak continues to operate as a public
          company, and its shares are listed on the stock exchange Tehran
          securities are offered. Razak with the use of expert forces One of the
          pioneers in the production of various types of human medicines and
          veterinary medicines The pharmaceutical industry in Iran is considered
          Human medicines of hops in different forms medicinal and in different
          therapeutic groups in the fields of chemical and natural medicines It
          is available in the pharmaceutical market of Iran...
        </p>
      </div>
      <div class="link">
        <router-link to="/">read more</router-link>
      </div>
    </div>
    <div
      id="ourResponsibility"
      class="ourResponsibility d-flex justify-content-between"
    >
      <div class="titles">
        <h4>
          Responsibility

          <span></span>
        </h4>
        <h3>our responsibility</h3>
      </div>
      <p>
        We believe that a healthy and quality life is not only the right of
        family members Razak, but it is our duty and commitment towards each and
        every member of the society. We are in the company Razak Labs Pharmacy
        is committed to meeting the pharmaceutical needs of society We are
        supporting the country's health system and in addition to responding to
        expectations Our beneficiaries, in fulfilling their social
        responsibilities, from no efforts in production High quality products,
        we will not hesitate.
      </p>
    </div>
    <div class="units">
      <div class="title">
        units
        <span></span>
      </div>
      <h3>Razak laboratories units</h3>
      <div class="d-flex align-items-center justify-content-between">
        <div class="image d-flex">
          <div>
            <div :class="{ activeItem: unitItem == 2 }" class="item item2">
              Production
            </div>
            <div :class="{ activeItem: unitItem == 4 }" class="item item4">
              Research and Development
            </div>
            <div :class="{ activeItem: unitItem == 6 }" class="item item6">
              human resources
            </div>
          </div>
          <div class="lineAndCircles">
            <div class="line"></div>
            <div
              @click="scrollTo(0)"
              :class="{ activeCircle: unitItem == 1 }"
              class="circle"
            ></div>
            <div
              @click="scrollTo(1)"
              :class="{ activeCircle: unitItem == 2 }"
              class="circle"
            ></div>
            <div
              @click="scrollTo(2)"
              :class="{ activeCircle: unitItem == 3 }"
              class="circle"
            ></div>
            <div
              @click="scrollTo(3)"
              :class="{ activeCircle: unitItem == 4 }"
              class="circle"
            ></div>
            <div
              @click="scrollTo(4)"
              :class="{ activeCircle: unitItem == 5 }"
              class="circle"
            ></div>
            <div
              @click="scrollTo(5)"
              :class="{ activeCircle: unitItem == 6 }"
              class="circle"
            ></div>
          </div>
          <div>
            <div :class="{ activeItem: unitItem == 1 }" class="item item1">
              sale
            </div>
            <div :class="{ activeItem: unitItem == 3 }" class="item item3">
              Marketing
            </div>
            <div :class="{ activeItem: unitItem == 5 }" class="item item5">
              Engineering
            </div>
          </div>
        </div>
        <div class="texts">
          <section v-for="item in units" :key="item.id" class="unit">
            <div class="d-flex justify-content-between">
              <div>
                <div class="num">{{ item.id }}</div>
                <div class="title">{{ item.title }}</div>
                <span></span>
              </div>
              <div class="unitImg">
                <img src="/icons/cart.svg" alt="cart" class="cart" />
              </div>
            </div>
            <p class="text">{{ item.text }}</p>
            <router-link to="/">
              read more
              <img
                src="/icons/leftArrow.svg"
                alt="leftArrow"
                class="leftArrow"
              />
            </router-link>
          </section>
        </div>
      </div>
    </div>
    <div class="certificates">
      <div class="title">
        certificates
        <span></span>
      </div>
      <h3>Obtained certificates</h3>
      <splide :options="options" class="slider" v-show="firstOption == 1">
        <splide-slide v-for="i in 16" :key="i">
          <img src="/images/certificate.jpg" alt="certificate" />
        </splide-slide>
      </splide>
      <splide :options="options2" class="slider" v-show="firstOption == 2">
        <splide-slide v-for="i in 16" :key="i">
          <img src="/images/certificate.jpg" alt="certificate" />
        </splide-slide>
      </splide>
      <splide :options="options3" class="slider" v-show="firstOption == 3">
        <splide-slide v-for="i in 16" :key="i">
          <img src="/images/certificate.jpg" alt="certificate" />
        </splide-slide>
      </splide>
    </div>
    <div id="ourTeam" class="ourTeam">
      <img src="/images/teamBaner.svg" alt="teamBaner" class="teamBaner" />
      <img
        src="/images/reverseTeamBaner.svg"
        alt="reverseTeamBaner"
        class="reverseTeamBaner"
      />
      <div class="d-flex align-items-end justify-content-between aboutTeam">
        <div class="d-flex">
          <div class="titles">
            <div>
              our team
              <span></span>
            </div>
            <h3>Our experienced team</h3>
          </div>
          <p>
            Our highly knowledgeable and experienced team members have a
            creative, collaborative nature are committed to enabling Hops to be
            a highly effective company.
          </p>
        </div>
        <router-link to="/" class="littleCircleLinkEn">
          see all
          <div class="imgDiv">
            <img src="/icons/angleArrow.svg" alt="circleArrow" />
          </div>
        </router-link>
      </div>
      <div class="images d-flex">
        <div class="firstImg">
          <img src="/images/firstTeam.jpg" alt="firstTeam" />
          <div class="name">Dr. Ahmad Shafii</div>
          <div class="position">
            Managing Director and Vice Chairman of the Board of Directors
          </div>
        </div>
        <div class="secImg">
          <img src="/images/secTeam.jpg" alt="secTeam" />
          <div class="name">Shokofe Lotfi</div>
          <div class="position">Marketing and sales manager</div>
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
      unitItem: 1,
      firstOption: 1,
      units: [
        {
          id: 1,
          title: "Sales",
          text: "One of the most important goals of the company's sales unit is to use short-term and long-term strategies, determine sales territories, determine sales goals and provide improvement solutions, in line with the organization's macro strategies.",
          image: "/icons/cart.svg",
        },
        {
          id: 2,
          title: "production unit",
          text: "The production unit of Razak Pharmaceutical Company, with more than 183 capable and experienced personnel, tries to produce high-quality human and animal medicines in accordance with the latest internal standards and is taking steps to achieve the high goals of the company.",
          image: "/icons/cart.svg",
        },
        {
          id: 3,
          title: "Marketing unit",
          text: "The most important goal of the marketing unit of Razak Company is to introduce the brand of this company as a company with history and experience in the field of producing all kinds of pharmaceutical products with the quality required by the country.",
          image: "/icons/cart.svg",
        },
        {
          id: 4,
          title: "Research and development unit",
          text: "The R&D unit of Razak company is operating by employing experienced personnel, advanced devices and equipment and providing new formulations and analysis methods, in sync with the grand strategy of Razak company in order to achieve quality, diverse and market-required products.",
          image: "/icons/cart.svg",
        },
        {
          id: 5,
          title: "technical and engineering unit",
          text: "The R&D unit of Razak company is operating by employing experienced personnel, advanced devices and equipment and providing new formulations and analysis methods, in sync with the grand strategy of Razak company in order to achieve quality, diverse and market-required products.",
          image: "/icons/cart.svg",
        },
        {
          id: 6,
          title: "Human resources unit",
          text: "Considering the special role of human resources in providing accessible and quality products and services, the human resources unit has a special place in the strategies of Razak Pharmaceutical Company. According to the mission statement of the company, Razak Pharmaceutical tries to prioritize the use of knowledge and development of employees. operationalize",
          image: "/icons/cart.svg",
        },
      ],
      options: {
        type: "loop",
        perPage: 4,
        perMove: 1,
      },
      options2: {
        type: "loop",
        perPage: 3,
        perMove: 1,
      },
      options3: {
        type: "loop",
        perPage: 2,
        perMove: 1,
      },
    };
  },
  mounted() {
    addEventListener("resize", this.onResize);
    if (window.innerWidth > 1570) {
      this.firstOption = 1;
    } else if (window.innerWidth > 719 && window.innerWidth < 1570) {
      this.firstOption = 2;
    } else {
      this.firstOption = 3;
    }
  },
  methods: {
    scrollTo(num) {
      const texts = document.getElementsByClassName("texts")[0];
      const height = 418;
      this.unitItem = num + 1;
      texts.scrollTop = num * height;
    },
    onResize() {
      if (window.innerWidth > 1570) {
        this.firstOption = 1;
      } else if (window.innerWidth > 719 && window.innerWidth < 1570) {
        this.firstOption = 2;
      } else {
        this.firstOption = 3;
      }
    },
  },
};
</script>

<style>
</style>