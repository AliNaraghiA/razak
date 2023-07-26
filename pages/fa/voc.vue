<template>
  <div class="faPage faVoc">
    <div class="effect">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">
        صدای مشتری
        <span></span>
      </div>
      <h2>صدای مشتریان لابـراتــوارهای رازک</h2>
      <p>
        داﻧﺴﺘﻦ ﻧﯿﺎزﻫﺎ و ﺑﺎزﺧﻮردﻫﺎی ﺳﺎزﻧﺪه ﺷﻤﺎ ﺑﺮای ﭘﯿﺸﺮﻓﺖ و ﺧﺪﻣﺖ ﺑﯿﺸﺘﺮ ﻫﻤﻮاره
        ﭼﺮاغ راه ﻣﺎ ﺑﻮده اﺳﺖ.
      </p>
      <div class="form">
        <p>پس از ثبت فرم در اسرع وقت با شما تماس گرفته می شود</p>
        <div class="inputs d-flex flex-wrap justify-content-between">
          <input type="text" class="col4" placeholder="نام و نام خانوادگی" />
          <input type="email" class="col4" placeholder="ایمیل" />
          <input type="number" class="col4" placeholder="موبایل" />
          <select name="" id="" class="col4">
            <option value="" hidden selected>نوع دارو</option>
          </select>
          <select name="" id="" class="col4">
            <option value="" hidden selected>نام دارو</option>
          </select>
          <select name="" id="" class="col4">
            <option value="" hidden selected>شکل دارو</option>
          </select>
          <input type="text" class="col12" placeholder="سری ساخت" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            placeholder="پیام شما"
          ></textarea>
        </div>
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