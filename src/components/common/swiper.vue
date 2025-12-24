<template>
  <div class="my-carousel" @mouseenter="stop" @mouseleave="start">
    <!-- <div class="my-carousel"> -->
    <ul class="carousel-body">
      <li
        v-for="(item, i) in findBannerList"
        :key="item.id"
        class="carousel-item"
        :class="{ fade: index === i }"
      >
        <!-- <div> -->
        <img v-if="showType === 'default'" :src="item.imgUrl" alt="图片" />
        <div
          v-if="showType === 'homePageBanner'"
          class="home_page_banner_swiper_box"
          :style="{
            'background-image': `url(${require(`../../assets/images/${item.imgUrl}`)}`,
          }"
        >
          <!-- < img :src="item.imgUrl" alt="" class="home_page_banner_img" /> -->
          <div class="home_page_banner_img_box"></div>
          <div class="home_page_banner_text_box">
            <p class="title-1">{{ item.title }}</p >
            <p class="title-2">{{ item.title2 }}</p >
            <p class="title-3">{{ item.titleEn }}</p >
            <p>{{ item.desc }}</p >
            <!-- <div class="tiyan_btn" @click="tiyan">申请体验</div> -->
            <experience v-model="isShowExperienceDialog"></experience>
          </div>
        </div>
        <div v-if="showType === 'lightPoint'" class="lightPointArea">
          <div class="left_light_point_box">
            < img :src="item.imgUrl" alt="" />
          </div>
          <div class="right_desc">
            <div class="light-right">
              <p>{{ item.title }}</p >
              <ul>
                <div class="right_desc_item">
                  < img :src="item.iconUrl1" alt="" />
                  <span>{{ item.desc1 }}</span>
                </div>
                <div class="right_desc_item">
                  < img :src="item.iconUrl2" alt="" />
                  <span>{{ item.desc2 }}</span>
                </div>
                <div class="right_desc_item">
                  < img :src="item.iconUrl3" alt="" />
                  <span>{{ item.desc3 }}</span>
                </div>
                <div class="right_desc_item">
                  < img :src="item.iconUrl4" alt="" />
                  <span>{{ item.desc4 }}</span>
                </div>
                <div class="circle_yuan"></div>
              </ul>
            </div>
          </div>
          <!-- <div class="circle_yuan"></div> -->
        </div>
        <div v-if="showType === 'isSolution'" class="solutionArea">
          <div class="left_desc_box">
            <p class="left_text_title">{{ item.title }}</p >
            <p class="left_text_content">
              {{ item.desc }}
            </p >
            <div class="more_box" @click="goTo(item.path)">
              < img src="../../assets/images/more.png" alt="" />
              <span class="more_text">more</span>
            </div>
          </div>
          <div class="right_img_box">
            < img :src="item.imgUrl" alt="" />
          </div>
        </div>
        <!-- </div> -->
        <div v-if="isShowDescBox" class="img_desc">
          <p class="img_desc_title">{{ item.imgDescTitle }}</p >
          <p class="img_desc_content">{{ item.imgDescContent }}</p >
        </div>
        <div
          v-if="showType === 'isOperationProcessBox'"
          class="operation_process_box"
        >
          <section class="choose_type_box">
            <div
              class="choose_item"
              v-for="(choooseItem, ind) in findBannerList"
              :key="ind"
              @click="active(ind)"
            >
              <span class="out_circle">
                <span
                  class="in_circle"
                  :class="index === ind ? 'circle_active' : ''"
                  >{{ ind + 1 }}</span
                >
              </span>
              <p :class="index === ind ? 'text_active' : ''">
                {{ choooseItem.chooseTypeName }}
              </p >
              <span class="line" v-show="findBannerList.length - ind > 1"
                >--------------</span
              >
            </div>
          </section>
          <div class="pingtai_caozuo_liucheng_img_container">
            <section class="img_container">
              < img :src="item.imgUrl" alt="" />
              <div class="product_service_img_desc">
                <div class="img_text_desc">
                  <span>
                    <p class="title">{{ item.chooseTypeName }}</p >
                    <p class="text">
                      {{ item.imgDesc }}
                    </p >
                  </span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </li>
      <!-- <slot></slot> -->
    </ul>
    <a
      @click="clickFn(-1)"
      href=" "
      class="carousel-btn prev"
      :class="alwaysShow ? 'alwaysShow' : ''"
      v-show="isShowArrow"
      ><i class="iconfont icon-angle-left"></i
    ></a >
    <a
      @click="clickFn(1)"
      href="javascript:;"
      class="carousel-btn next"
      :class="alwaysShow ? 'alwaysShow' : ''"
      v-show="isShowArrow"
      ><i class="iconfont icon-angle-right"></i
    ></a >
    <div class="carousel-indicator" v-if="isShowIndicator">
      <span
        @click="active(i)"
        v-for="(item, i) in findBannerList"
        :key="i"
        :class="{ active: index === i }"
      ></span>
    </div>
  </div>
</template>
    
<script>
import experience from "@/components/experience/index.vue";
export default {
  name: "Carousel",
  components: {
    experience,
  },
  props: {
    findBannerList: {
      type: Array,
      default: () => [],
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    duration: {
      type: Number,
      default: 3,
    },
    isShowDescBox: {
      type: Boolean,
      default: false,
    },
    // 是否展示导航点
    isShowIndicator: {
      type: Boolean,
      default: true,
    },
    // 左右箭头是否一直显示
    alwaysShow: {
      type: Boolean,
      default: false,
    },
    showType: {
      type: String,
      default: "default",
    },
    isShowArrow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentType: 1,
      index: 0,
      timer: null, // 定义一个常量存储定时器
      isShowExperienceDialog: false,
    };
  },
  watch: {
    findBannerList(newVal) {
      if (newVal.length > 1 && this.autoplay) {
        this.autoplayFn();
      }
    },
  },
  methods: {
    // 定时器方法，实现自动轮播效果
    autoplayFn() {
      // 防抖，防止多次触发定时器
      console.log("jinru");
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.index += 1;
        if (this.index >= this.findBannerList.length) {
          this.index = 0;
        }
      }, this.duration * 1000);
    },
    // 鼠标移入轮播图，停止自动播放
    stop() {
      if (this.timer) clearInterval(this.timer);
    },
    // 鼠标移出轮播图，开启定时器
    start() {
      if (this.findBannerList.length > 1 && this.autoplay) {
        this.autoplayFn();
      }
    },
    // 点击轮播图上的左右按钮，切换轮播图，通过传递进来的参数，决定轮播图往左往右
    clickFn(e) {
      this.index += e;
      if (this.index >= this.findBannerList.length) {
        this.index = 0;
      }
      if (this.index < 0) {
        this.index = this.findBannerList.length - 1;
      }
    },
    active(e) {
      console.log("chose---", e);
      this.index = e;
    },

    showTextType(type) {
      return type === this.currentType;
    },
    // 返回图片路径
    imagePath(data) {
      return require(`../../assets/images/${data}`);
    },
    // 解决方案点击跳转详情
    goTo(path) {
      window.open(window.location.origin + "/solution/?type=" + path, "_blank");
    },
    tiyan() {
      // this.$router.push({
      //   path: "/contact",
      // });
      this.isShowExperienceDialog = true;
    },
  },
  mounted() {
    this.autoplayFn();
    // if (this.timer) clearInterval(this.timer);
  },
};
</script>
<style scoped>
.my-carousel {
  width: 100%;
  height: 100%;
  /* min-width: 300px; */
  /* min-height: 150px; */
  position: relative;
  z-index: 15;
}
.my-carousel .carousel-body {
  width: 100%;
  height: 100%;
}
.my-carousel .carousel-body .carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  transition: opacity 0.5s linear;
}
.my-carousel .carousel-body .carousel-item.fade {
  opacity: 1;
  z-index: 1;
}
.my-carousel .carousel-body .carousel-item img {
  width: 100%;
  height: 100%;
}
.my-carousel .carousel-body .carousel-item .img_desc {
  width: 480px;
  height: 340px;
  background: linear-gradient(127deg, #1764c6 0%, #0389b0 100%);
  opacity: 0.9;
  border-radius: 16px;
  position: relative;
  bottom: 210px;
  left: -126px;
  padding-top: 54px;
  padding-left: 41px;
  /* top: 0px; */
}
.my-carousel .carousel-body .carousel-item .img_desc .img_desc_title {
  /* width: 262px; */
  height: 24px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
}
.my-carousel .carousel-body .carousel-item .img_desc .img_desc_content {
  width: 397px;
  height: 182px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
  margin-top: 29px;
  text-indent: 2em;
}
.my-carousel .carousel-indicator {
  /* position: absolute; */
  /* background: pink; */
  left: 0;
  bottom: 20px;
  z-index: 2;
  width: 100%;
  text-align: center;
}
.my-carousel .carousel-indicator > span {
  display: inline-block;
  width: 12px;
  height: 12px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  cursor: pointer;
  margin-left: 12px;
}
.my-carousel .carousel-indicator > span:nth-child(1) {
  margin-left: 0;
}
.my-carousel .carousel-indicator > span.active {
  /* background: #fff; */
  width: 60px;
  height: 12px;
  background: #2070e5;
  border-radius: 6px;
}
.my-carousel .carousel-btn {
  width: 44px;
  height: 44px;
  background: rgba(0, 0, 0, 0.2);
  color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 228px;
  z-index: 2;
  text-align: center;
  line-height: 44px;
  opacity: 0;
  transition: all 0.5s;
  background-repeat: no-repeat;
  background-size: cover;
}
.my-carousel .carousel-btn.prev {
  left: 20px;
  background-image: url("../../assets/images/left_arrow.png");
  /* background: red; */
}
.my-carousel .carousel-btn.next {
  right: 20px;
  background-image: url("../../assets/images/right_arrow.png");
  /* background: red; */
}
.my-carousel .carousel-btn.alwaysShow {
  opacity: 1;
}
/* .my-carousel:hover {
  .carousel-btn {
    opacity: 1;
  }
} */
.my-carousel:hover .carousel-btn {
  opacity: 1;
}

.home_page_banner_swiper_box {
  width: 100%;
  height: 100%;
  /* height: 791px; */
  position: relative;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  /* background-color: pink!important; */
}
.home_page_banner_img {
  width: 100%;
  height: 100% !important;
  /* height: 700px; */
}
.home_page_banner_swiper_box .home_page_banner_text_box {
  position: absolute;
  top: 14.1vw;
  left: 14.1vw;
}
.home_page_banner_swiper_box .home_page_banner_text_box p:nth-child(1) {
  font-size: 38px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  line-height: 24px;
  /* visibility: visible; */
  animation-duration: 1s;
  animation-delay: 0.2s;
  animation-name: fadeInUp;
}
.home_page_banner_swiper_box .home_page_banner_text_box p:nth-child(2) {
  font-size: 38px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  line-height: 24px;
  margin-top: 30px;
  /* visibility: visible; */
  animation-duration: 1s;
  animation-delay: 0.2s;
  animation-name: fadeInUp;
}
.home_page_banner_swiper_box .home_page_banner_text_box p:nth-child(3) {
  font-size: 28px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #f2f2f2;
  line-height: 24px;
  opacity: 0.7;
  margin-top: 30px;
  /* visibility: visible; */
  animation-duration: 1s;
  animation-delay: 0.2s;
  animation-name: fadeInUp;
}
.home_page_banner_swiper_box .home_page_banner_text_box p:nth-child(4) {
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #f2f2f2;
  line-height: 24px;
  margin-top: 38px;
  /* visibility: visible; */
  animation-duration: 1s;
  animation-delay: 0.2s;
  animation-name: fadeInUp;
}
.home_page_banner_swiper_box .home_page_banner_text_box .tiyan_btn {
  width: 190px;
  height: 54px;
  line-height: 54px;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(90deg, #006fff 0%, #4699fa 100%);
  border-radius: 8px;
  margin-top: 61px;
  cursor: pointer;
}
.lightPointArea {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 577px;
  position: relative;
  /* background: pink; */
}
.lightPointArea .left_light_point_box {
  width: 850px;
  height: 522px;
  /* background: yellow; */
  /* border: 1px solid red; */
}
/* .lightPointArea .left_light_point_box img {} */

.lightPointArea .right_desc {
  /* z-index: 5; */
  height: 100px;
  height: 522px;
  padding-top: 80px;
  padding-left: 10px;
  /* background: pink; */
  position: relative;
}
.lightPointArea .right_desc p {
  color: #fefeff;
  font-size: 24px;
  font-family: SourceHanSansCN-Medium;
}
.lightPointArea .right_desc .right_desc_item {
  display: flex;
  margin-top: 30px;
}
.lightPointArea .right_desc .right_desc_item img {
  width: 42px;
  height: 42px;
}
.lightPointArea .right_desc .right_desc_item span {
  margin-left: 16px;
  width: 300px;
  height: 42px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #b2b2b2;
  line-height: 21px;
}
.lightPointArea .circle_yuan {
  background-image: url("../../assets/images/liangdian-yuan.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 201px;
  height: 201px;
  border-radius: 50%;
  position: absolute;
  right: 0;
  bottom: 50px;
  /* right: 340px;
  bottom: 100px; */
}
.solutionArea {
  width: 100%;
  height: 538px;
  display: flex;
}
.solutionArea .left_desc_box {
  width: 421px;
  height: 538px;
  background-image: url("../../assets/images/jiejuefangan-text-bj.png");
  background-repeat: no-repeat;
  background-size: cover;
  padding: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 56px;
  position: relative;
}
.solutionArea .left_desc_box .left_text_title {
  /* width: 287px; */
  text-align: left;
  height: 24px;
  font-size: 24px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
  /* opacity: 0.7; */
}
.solutionArea .left_desc_box .left_text_content {
  /* width: 314px; */
  height: 302px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #fefeff;
  line-height: 24px;
  opacity: 0.7;
  margin-top: 30px;
}
.solutionArea .left_desc_box .title {
  font-size: 24px;
  font-family: SourceHanSansCN-Regular;
  color: #fefeff;
  opacity: 0.7;
}
.solutionArea .left_desc_box .content_text {
  width: 314px;
  line-height: 24px;
  font-family: SourceHanSansCN-Regular;
  color: #fefeff;
  font-size: 14px;
  opacity: 0.7;
}
.solutionArea .left_desc_box .more_box {
  display: flex;
  align-items: center;
  height: 40px;
  position: absolute;
  bottom: 50px;
  left: 60px;
  cursor: pointer;
}
.solutionArea .left_desc_box .more_box img {
  width: 40px;
  height: 40px;
}
.solutionArea .left_desc_box .more_box .more_text {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #196fe5;
  margin-left: 9px;
}
.solutionArea .right_img_box {
  width: 776px;
  height: 538px;
}
.solutionArea .right_img_box img {
  width: 776px;
  height: 538px;
}
/* 产品服务-平台操作流程 */
.operation_process_box {
  margin-top: 30px;
  height: 970px;
  /* background: yellow; */
}
.operation_process_box .choose_type_box {
  display: flex;
  width: 100%;
  justify-content: center;
}
.operation_process_box .choose_item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.operation_process_box .choose_item p {
  color: #f2f2f2;
  font-size: 18px;
  font-family: SourceHanSansCN-Normal;
  margin-left: 9px;
  font-weight: 500;
  cursor: pointer;
}
.operation_process_box .choose_item .text_active {
  color: #2070e5;
}
.operation_process_box .choose_item span {
  display: inline-block;
}
.operation_process_box .choose_item i {
  display: inline-block;
}
.operation_process_box .choose_item .out_circle {
  width: 41px;
  height: 41px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  /* background: red; */
  border-radius: 50%;
  padding: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.operation_process_box .choose_item .in_circle {
  width: 29.7px;
  height: 29.7px;
  line-height: 29.7px;
  text-align: center;
  background: #616f84;
  border-radius: 50%;
  color: #f2f2f2;
  font-size: 20px;
}
.operation_process_box .choose_item .circle_active {
  background: #2070e5;
}
.operation_process_box .choose_item .line {
  margin-left: 11px;
  margin-right: 11px;
  /* margin-top: 8px; */
  color: #434c5a;
}
.operation_process_box .choose_item .line:nth-child(4) {
  visibility: hidden;
}
.pingtai_caozuo_liucheng_img_container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.img_container {
  width: 100%;
  position: relative;
  /* background: pink; */
  bottom: 10px;
  height: 660px;
  width: 1200px;
  /* margin-left: 360px; */
  /* padding-left: ; */
}
.img_container img {
  width: 600px;
  height: 605px;
}
.img_container .product_service_img_desc {
  width: 410px;
  height: 240px;
  background: linear-gradient(116deg, #1655a8 0%, #068ade 100%);
  border-radius: 4px;
  opacity: 0.8;
  position: absolute;
  right: 0;
  bottom: 20px;
}
.img_container .product_service_img_desc .img_text_desc {
  padding-top: 31px;
  padding-left: 30px;
  padding-right: 30px;
}
.img_container .product_service_img_desc .img_text_desc p {
  color: #ffffff;
  font-family: SourceHanSansCN-Normal;
}
.img_container .product_service_img_desc .img_text_desc .title {
  font-size: 18px;
  font-weight: bolder;
}
.img_container .product_service_img_desc .img_text_desc .text {
  font-size: 14px;
  margin-top: 27px;
  line-height: 24px;
  color: #ffffff;
  font-family: Source Han Sans CN;
  font-weight: 400;
}
.home_page_banner_img_box {
  width: 100%;
  height: 700px;
  /* background: red; */
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
    