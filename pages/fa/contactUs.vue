<template>
  <div class="faPage faContactUs">
    <div class="enLogo">
      <img src="/images/enLogo.svg" alt="enLogo" />
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <div class="informations">
        <div class="title">
          تماس با ما
          <span></span>
        </div>
        <h3>با ما در تماس باشید</h3>
        <div class="line"></div>
        <div class="d-flex justify-content-between allInfoes">
          <div>
            <div class="phone">
              <div class="fieldTitle">
                <img src="/icons/grayPhone.svg" alt="grayPhone" />
                تلفن
              </div>
              <div class="fieldInfo">۰۲۱-۴۴۵۳۷۰۲۷</div>
            </div>
            <div class="whatsAppNum1">
              <div class="fieldTitle">
                <img src="/icons/grayWhatsapp.svg" alt="grayWhatsapp" />
                واتس اپ
              </div>
              <div class="fieldInfo">۰۹۳۷۷۵۰۵۴۱۲</div>
            </div>
          </div>
          <div>
            <div class="email">
              <div class="fieldTitle">
                <img src="/icons/graySms.svg" alt="graySms" />
                ایمیل
              </div>
              <div class="fieldInfo">info@razakpharma.com</div>
            </div>
            <div class="whatsAppNum2">
              <div class="fieldTitle">
                <img src="/icons/grayWhatsapp.svg" alt="grayWhatsapp" />
                واتس اپ
              </div>
              <div class="fieldInfo">۰۲۱-۹۱۰۱۰۲۱۲</div>
            </div>
          </div>
        </div>
        <div class="address">
          کیلومتر 10 جاده مخصوص تهران-کرج خیابان لوله پروفیل پارس- لابراتوارهای
          رازک
        </div>
        <div class="postalCode">کدپستی:1389736615</div>
      </div>
      <div class="form">
        <p>
          سوالات، پیشنهادات، توصیه هاو نظرات خود را با ما در میان بگذارید، ما
          دوست داریم با شما در ارتباط باشیم.
        </p>
        <input type="email" class="email" placeholder="ایمیل" />
        <input type="text" class="message" placeholder="پیام شما" />
        <router-link to="#" class="littleCircleLink">
          <div class="imgDiv">
            <img
              src="/icons/angleArrow.svg"
              alt="circleArrow"
              class="circleArrow"
            />
          </div>
          <img src="/icons/dots.svg" alt="dots" class="dots" />
          <span>ارسال</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "main",
};
</script>

<style>
</style>