<template>
  <section class="mobile_product_description_banner">
            <p class="mobile_product_description_banner_title">新手指引</p>
            <p class="mobile_product_description_banner_desc">通过快速入门教程，实践案例，视频教程等各项操作指南，帮助新用户更快的了解产品的使用。</p>
        </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.mobile_product_description_banner {
    width: 100%;
    height: 320px;
    background-image: url('../../../assets/images/mobile_product_description_banner.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 80px;
    padding: 94px 123px 96px 23px;
}

.mobile_product_description_banner_title {
    /* width: 139px; */
    height: 35px;
    font-size: 36px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 24px;
}

.mobile_product_description_banner_desc {
    width: 600px;
    height: 59px;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 36px;
    margin-top: 36px;
}
</style>