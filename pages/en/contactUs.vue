<template>
  <div class="enPage enContactUs">
    <div class="enLogo">
      <img src="/images/enLogo.svg" alt="enLogo" />
    </div>
    <div class="d-flex justify-content-between align-items-center">
      <div class="informations">
        <div class="title">
          contact us
          <span></span>
        </div>
        <h3>Get in touch with us</h3>
        <div class="line"></div>
        <div class="d-flex justify-content-between allInfoes">
          <div>
            <div class="phone">
              <div class="fieldTitle">
                <img src="/icons/grayPhone.svg" alt="grayPhone" />
                Phone
              </div>
              <div class="fieldInfo">021-44537027</div>
            </div>
            <div class="whatsAppNum1">
              <div class="fieldTitle">
                <img src="/icons/grayWhatsapp.svg" alt="grayWhatsapp" />
                Whatsapp
              </div>
              <div class="fieldInfo">09377505412</div>
            </div>
          </div>
          <div>
            <div class="email">
              <div class="fieldTitle">
                <img src="/icons/graySms.svg" alt="graySms" />
                email
              </div>
              <div class="fieldInfo">info@razakpharma.com</div>
            </div>
            <div class="whatsAppNum2">
              <div class="fieldTitle">
                <img src="/icons/grayWhatsapp.svg" alt="grayWhatsapp" />
                Whatsapp
              </div>
              <div class="fieldInfo">021-44537027</div>
            </div>
          </div>
        </div>
        <div class="address">
          Kilometer 10 of Tehran-Karaj special road, Lule Profile Pars
          Street,Razak Laboratories
        </div>
        <div class="postalCode">Postal code :1389736615</div>
      </div>
      <div class="form">
        <p>
          Share your questions, suggestions, recommendations and comments with
          us We would love to be in touch with you.
        </p>
        <input type="email" class="email" placeholder="email" />
        <input type="text" class="message" placeholder="your message" />
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