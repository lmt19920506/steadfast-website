<template>
  <div class="solution_right_content_container">
    <p class="title">{{ currentData.title }}</p>
    <p class="introduct_title">平台简介</p>
    <div class="introduct_content">
      <div class="introduct_content_left_img">
        <img :src="currentData.introductImgUrl" alt="" />
      </div>
      <div class="introduct_content_right_text">
        <p>
          {{ currentData.introductText }}
        </p>
      </div>
    </div>
    <p class="introduct_title" v-if="currentData.jiagouImgUrl">方案架构图</p>
    <img
      v-if="currentData.jiagouImgUrl"
      class="jiagou_img"
      :src="currentData.jiagouImgUrl"
      alt=""
    />
    <p class="introduct_title">建设内容</p>
    <div class="jianshe_box" v-for="(item, index) in currentData.buildContentArr" :key="index">
      <p class="jianshe_title">{{ item.title }}</p>
      <p class="jianshe_text">
        {{ item.desc }}
      </p>
      
    </div>
  </div>
</template>

<script>

export default {
    name: 'solutionRightContent',
    props: {
        currentData: {
            type: Object,
            default: ''
        }
    },
    methods: {
      
    }
    // mounted() {
    //   window.scrollTo(0, 0)
    // }
};
</script>

<style scoped>
.solution_right_content_container {
  /* padding-left: 130px; */
  padding-top: 61px;
  padding-bottom: 80px;
  background: #111924;
}
.solution_right_content_container .title {
  font-size: 32px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
}
.introduct_title {
  width: 267px;
  height: 36px;
  line-height: 36px;
  background: linear-gradient(
    90deg,
    rgba(32, 112, 229, 0.3) 0%,
    rgba(33, 36, 41, 0) 100%
  );
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  padding-left: 16px;
  margin-top: 46px;
}
.introduct_content {
  display: flex;
  margin-top: 38px;
}
.introduct_content_left_img {
  width: 560px;
  height: 328px;
}
.introduct_content_left_img img {
  width: 560px;
  height: 328px;
}
.introduct_content_right_text {
  width: 560px;
  height: 328px;
  background: #2d3137;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 40px; */
}
.introduct_content_right_text p {
  width: 487px;
  height: 254px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #ffffff;
  line-height: 24px;
  text-indent: 2em;
}
.jiagou_img {
  width: 1120px;
  margin-top: 32px;
}
.jianshe_box {
}
.jianshe_box .jianshe_title {
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #2070e5;
  margin-top: 29px;
}
.jianshe_box .jianshe_text {
  width: 1115px;
  /* height: 62px; */
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #cccccc;
  line-height: 24px;
  margin-top: 17px;
  text-indent: 2em;
}
</style>