<template>
  <div class="enPage enVoc">
    <div class="effect">
      <div class="enLogo">
        <img src="/images/enLogo.svg" alt="enLogo" />
      </div>
      <div class="title">
        customer's voice
        <span></span>
      </div>
      <h2>The voice of customers of Razak laboratories</h2>
      <p>
        Knowing your needs and constructive feedback for continuous improvement
        and service. It has been the light of our way.
      </p>
      <div class="form">
        <p>
          After registering the form, you will be contacted as soon as possible
        </p>
        <div class="inputs d-flex flex-wrap justify-content-between">
          <input type="text" class="col4" placeholder="firstName & lastname" />
          <input type="email" class="col4" placeholder="email" />
          <input type="number" class="col4" placeholder="phone number" />
          <select name="" id="" class="col4">
            <option value="" hidden selected>type of medicine</option>
          </select>
          <select name="" id="" class="col4">
            <option value="" hidden selected>medicine name</option>
          </select>
          <select name="" id="" class="col4">
            <option value="" hidden selected>Drug form</option>
          </select>
          <input
            type="text"
            class="col12"
            placeholder="Construction Series
"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="7"
            placeholder="your message"
          ></textarea>
        </div>
        <router-link to="#" class="littleCircleLinkEn">
          <div class="imgDiv">
            <img
              src="/icons/angleArrow.svg"
              alt="circleArrow"
              class="circleArrow"
            />
          </div>
          <img src="/icons/dots.svg" alt="dots" class="dots" />
          <span>send</span>
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