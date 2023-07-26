<template>
  <div class="loading">
    <div class="logo">
      <div class="text">Razak</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      this.$router.push("/fa");
    }, 2000);
  },
};
</script>

<style>
</style>