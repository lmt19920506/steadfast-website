<template>
  <div class="authorization_detail_box">
    <p class="title">ForceCon-DTwin授权明细</p>
    <section class="authroization_detail_img_box"></section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.authorization_detail_box {
  width: 100%;
  padding-left: 361px;
  padding-top: 60px;
  margin-bottom: 83px;
}
.authorization_detail_box .title {
  width: 1200px;
  /* height: 30px; */
  text-align: center;
  font-size: 32px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  /* background: red; */
}
.authorization_detail_box .authroization_detail_img_box {
  width: 1200px;
  height: 3359px;
  background-image: url("../../assets/images/authorizationDetail.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 39px;
}
</style>