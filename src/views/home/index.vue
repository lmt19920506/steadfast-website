<template>
  <div class="home_page_container">
    <section class="pc_container">
      <section class="home_banner">
        <swiper
          :findBannerList="homeBannerArr"
          showType="homePageBanner"
        ></swiper>
      </section>
      <section class="trust-box">
        <p class="trust-title">Your Trusted Partner for Quality Electronic Components</p>
        <p class="trust-desc">With UniBetter, a trusted electronic component supplier, rely on a rigorous CSD quality management system, seamless global sourcing from over 7,000 trusted suppliers, and top-tier after-sales support to meet your needs efficiently and reliably.</p>
        <p class="trust-desc2">We have worked with 3000+ clients globally</p>
      </section>
      
    </section>
    <section class="mobile_container">
      <mobileHome />
    </section>
  </div>
</template>

<script>
import swiper from "@/components/common/swiper.vue";
import mobileHome from "@/components/mobile/home/mobile-home.vue";
export default {
  name: "homePage",
  components: {
    swiper,
    mobileHome,
  },
  data() {
    this.swiperList = [
      { name: "one", img: require("../../assets/images/pingtailiangdian.png") },
      {
        name: "two",
        img: require("../../assets/images/shouye-pingtailiangdian-3.png"),
      },
    ];
    this.homeBannerArr = [
      {
        name: "one",
        imgName: "shouye-banner.png",
        imgUrl: "shouye_banner_1.jpg",
        // imgUrl: "shouye_banner_2.png",
        title: "We Offer FMC Cards",
        title2: "for Various Interfaces",
        titleEn: "Having FMC HPC or LPC connector interfaces",
        // desc: "工艺规划配置 · 漫游巡检 · 虚实联动 · 数字可视化",
      },
      {
        name: "two",
        imgName: "showye-banner2.jpg",
        imgUrl: "shouye_banner_2.jpg",
        title: "We Help You",
        title2: "Accelerate Time To Market",
        titleEn: "Credit card form factor, pin-to-pin compatile design",
        // desc: "支持大规模3D模型进行实时展示和交互，增强部署的灵活性",
      },
    ];

    return {};
  },
  methods: {
    handleCarouselChange() {},
  },
  mounted() {
    window.scrollTo(0, 0);
    console.log("分辨率-宽---", window.screen.width);
    console.log("分辨率-宽---", document.body.clientWidth);
  },
};
</script>

<style scoped>
.home_banner {
  /* height: 791px; */
  height: 36.5vw;
  width: 100%;
  /* background: yellow; */
}

.trust-box {
  width: 100%;
  height: 760px;
  background-image: url("../../assets/images/hero-img.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.trust-title {
  width: 1220px;
  font-family: "Rubik", Sans-serif;
  font-size: 72px;
  font-weight: 500;
  line-height: 76px;
  letter-spacing: -0.6px;
  color: #ffffff;
  text-align: center;
  font-weight: 800;
}
.trust-desc {
  width: 915px;
  height: 93px;
  text-align: center;
  font-family: "Rubik", Sans-serif;
  font-size: 25px;
  font-weight: 400;
  line-height: 31px;
  color: #ffffffcc;
  margin-top: 30px;
}
.trust-desc2 {
  width: 80%;
  text-align: center;
  font-family: "Rubik", Sans-serif;
  font-size: 22px;
  font-weight: 400;
  line-height: 32px;
  color: #ffffffb3;
  position: absolute;
  bottom:80px
}
</style>
<style>
.home_page_container .solution_swiper_box .carousel-indicator {
  position: relative !important;
  top: 25px !important;
}

.home_banner .carousel-indicator {
  position: relative !important;
  top: -50px !important;
  /* left: -550px !important; */
  /* background: red; */
  /* text-align: left; */
  display: flex;
  justify-content: left;
  margin-left: 14.1vw;
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