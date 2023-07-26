<template>
  <div class="enPage enTeam">
    <div class="effect">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">our team <span></span></div>
      <h3>Our experienced team</h3>
      <p>
        Our highly knowledgeable and experienced team members are creative,
        collaborative and committed in nature
      </p>
      <div class="d-flex justify-content-center category">
        <div :class="{ active: category == 1 }" @click="category = 1">
          Managers of Razak Laboratories
        </div>
        <div :class="{ active: category == 2 }" @click="category = 2">
          The Board of Directors of Razak Laboratories
        </div>
      </div>
      <div class="pictures d-flex flex-wrap">
        <div class="picture" v-for="i in 8" :key="i">
          <div class="informations">
            <div class="name d-flex align-items-center">
              <span></span>Dr. Ahmed Shafii
            </div>
            <div class="position">
              Managing Director and Vice Chairman of the Board of Directors
            </div>
            <div class="d-flex socials">
              <img src="/icons/whiteCall.svg" alt="call" />
              <img src="/icons/whatsapp.svg" alt="whatsapp" />
              <img src="/icons/instagram.svg" alt="instagram" />
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
      category: 1,
    };
  },
};
</script>

<style>
</style>