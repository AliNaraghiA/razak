<template>
  <div class="faPage faTeam">
    <div class="effect">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">تیم ما<span></span></div>
      <h3>تیم با تجربه ما</h3>
      <p>
        اعضای تیم بسیار آگاه و با تجربه ی ما دارای ماهیت خلاق، مشارکتی و متعهد
        هستند که رازک را قادر می سازد تا یک شرکت بسیار مؤثر باشد.
      </p>
      <div class="d-flex justify-content-center category">
        <div :class="{ active: category == 1 }" @click="category = 1">
          مدیران شرکت لابراتوارهای رازک
        </div>
        <div :class="{ active: category == 2 }" @click="category = 2">
          هیئت مدیره شرکت لابراتوارهای رازک
        </div>
      </div>
      <div class="pictures d-flex flex-wrap">
        <div class="picture" v-for="i in 8" :key="i">
          <div class="informations">
            <div class="name d-flex align-items-center">
              <span></span>دکتر احمد شفیعی
            </div>
            <div class="position">مدیر عامل و نایب رییس هیئت مدیره</div>
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