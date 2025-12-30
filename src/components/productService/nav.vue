<template>
  <div class="product_service_container">
    <p class="desc-title">Provide global sourcing and supply chain services for electronic manufacturing customers</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.product_service_container {
  width: 1920px;
  height: 960px;
  background-image: url("../../assets/images/product-server-banner.webp");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  /* padding-top: 211px;
  padding-left: 375px; */
  display: flex;
  justify-content: center;
  align-items: center
}
.product_service_container .desc-title {
  width: 60%;
  color: #ffffff;
  font-size: 40px;
  font-weight: bold;
  font-family: SourceHanSansCN-Bold;
  text-align: center;
  visibility: visible;
    animation-duration: 1s;
    animation-delay: 0.3s;
    animation-name: fadeInUp;
}
@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>