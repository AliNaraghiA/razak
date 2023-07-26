sw<template>
  <div class="faPage faLogin">
    <div class="topDiv">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">پورتال سهامداران شرکت داروسازی رازک</div>
    </div>
    <div class="route">
      <router-link to="/fa/"> صفحه اصلی . </router-link>
      پورتال سهامداران شرکت داروسازی رازک
    </div>
    <div class="page">
      <div class="form d-flex flex-column align-items-center">
        <div class="title">ورود به سیستم</div>
        <div class="usernameInput">
          <input type="text" placeholder="نام کاربری" />
          <img src="/icons/loginProfile.svg" alt="profile" />
        </div>
        <div class="passwordInput">
          <input type="text" placeholder="کلمه عبور" />
          <img src="/icons/lock.svg" alt="lock" />
        </div>
        <div class="d-flex code justify-content-between">
          <input type="text" placeholder="کد امنیتی رو وارد کنید" />
          <img src="/images/loginCode.jpg" alt="login code" />
        </div>
        <div class="buttonDiv">
          <router-link to="/" class="littleCircleLink">
            <div class="imgDiv">
              <img
                src="/icons/angleArrow.svg"
                alt="circleArrow"
                class="circleArrow"
              />
            </div>
            <img src="/icons/dots.svg" alt="dots" class="dots" />
            ورود
          </router-link>
        </div>
        <div class="signUpText">
          نام کاربری ندارید؟
          <router-link to="/">ثبت نام</router-link>
          نمایید.
        </div>
        <div class="forgot">
          کلمه‌عبور خود را فراموش کرده‌اید؟ .
          <router-link to="/">ثبت نام مجدد</router-link>
          نمایید
        </div>
      </div>
      <div class="other">
        <div class="chartDiv">
          <div class="title">Razak Pharma</div>
          <div class="d-flex">
            <div class="dropNum">
              <div class="d-flex">
                <div class="number">132.2</div>
                <div class="red">-132.2</div>
              </div>
              <div class="text">Lorem Ipsum</div>
            </div>
            <span class="grayLine"></span>
            <div class="dropNum">
              <div class="d-flex">
                <div class="number">154.2</div>
                <div class="green">+140.2</div>
              </div>
              <div class="text">Lorem Ipsum</div>
            </div>
          </div>
          <div class="years d-flex justify-content-between">
            <div class="d-flex">
              <div>1 سال</div>
              <div>2 سال</div>
              <div>5 سال</div>
              <div>10 سال</div>
              <div>15 سال</div>
              <div>20 سال</div>
              <div>25 سال</div>
              <div>1 سال</div>
              <div>2 سال</div>
              <div>5 سال</div>
              <div>10 سال</div>
              <div>15 سال</div>
              <div>20 سال</div>
              <div>25 سال</div>
              <div>10 سال</div>
              <div>15 سال</div>
              <div>20 سال</div>
              <div>25 سال</div>
            </div>
            <button>همه</button>
          </div>
          <Chart class="chart" />
          <div class="d-flex aboutChart">
            <div>
              <div class="d-flex justify-content-between">
                <div class="title">Open</div>
                <div class="number">135.11</div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="title">High</div>
                <div class="number">135.18</div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="title">Low</div>
                <div class="number">135.18</div>
              </div>
            </div>
            <span></span>
            <div>
              <div class="d-flex justify-content-between">
                <div class="title">Vol</div>
                <div class="number">135.11</div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="title">Vol</div>
                <div class="number">135.11</div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="title">Mkt Cap</div>
                <div class="number">135.11</div>
              </div>
            </div>
            <span></span>
            <div>
              <div class="d-flex justify-content-between">
                <div class="title">52W H</div>
                <div class="number">135.11</div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="title">52W L</div>
                <div class="number">135.11</div>
              </div>
              <div class="d-flex justify-content-between">
                <div class="title">Avg Vol</div>
                <div class="number">135.11</div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="post d-flex justify-content-between align-items-center"
          v-for="i in 3"
          :key="i"
        >
          <div>
            <div class="title">
              شرکت داروسازی لابراتوارهای رازک در مسیر بهبود مستمر
            </div>
            <div class="d-flex align-items-center">
              <img src="/icons/profile.svg" alt="profile" />
              <div class="writer">نویسنده</div>
              <span></span>
              <img src="/icons/blackCalendar.svg" alt="calendar" />
              <div class="date">۱۴۰۱/۹/۱۲</div>
            </div>
          </div>
          <img src="/images/loginPos.jpg" alt="image" />
        </div>
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