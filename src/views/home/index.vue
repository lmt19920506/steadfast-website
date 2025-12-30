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
        <p class="trust-desc">With SteadFast, a trusted electronic component supplier, rely on a rigorous CSD quality management system, seamless global sourcing from over 7,000 trusted suppliers, and top-tier after-sales support to meet your needs efficiently and reliably.</p>
        <p class="trust-desc2">We have worked with 3000+ clients globally</p>
      </section>
      <section class="quality-box">
        <p class="quality-title">Reliable Quality , Every Time CSD Quality Management Process</p>
        <p class="quality-desc">With our proprietary CSD Quality Management System, SteadFast is trusted to help you source consistent and high-quality electronic components. Our rigorous framework also ensures standardized processes, precise quality inspections, and continuous service improvement. Choose SteadFast — your reliable electronic component supplier.</p>
        <div class="quality-list-box">
          <div class="quality-item" v-for="(item, index) in qualityArr" :key="index">
            {{ item.text }}
          </div>
        </div>
      </section>
      <section class="wide-range-box">
        <p class="wide-range-title">
        Our Wide Range of Active Components
      </p>
      <p class="wide-range-desc">
        SteadFast, your trusted electronic component supplier, offers a wide range of active components — including hard-to-find, obsolete, and high-demand parts. Explore our inventory for fast, reliable sourcing and seamless procurement.
      </p>
      <div class="show-icon-box">
       <div class="icon-item-img-box">
         <img class="icon-img" v-for="(item, index) in iconList" :key="index" :src="item.imgUrl" alt="">
       </div>
      </div>
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
        imgName: "shouye_banner_1.jpg",
        imgUrl: "shouye_banner_1.jpg",
        // imgUrl: "shouye_banner_2.png",
        title: "We Offer FMC Cards",
        title2: "for Various Interfaces",
        titleEn: "Having FMC HPC or LPC connector interfaces",
      },
      {
        name: "two",
        imgName: "shouye_banner_2.jpg",
        imgUrl: "shouye_banner_2.jpg",
        title: "We Help You",
        title2: "Accelerate Time To Market",
        titleEn: "Credit card form factor, pin-to-pin compatile design",
      },
    ];
    this.qualityArr = [
      {
        text: "Comprehensive",
      },
      {
        text: "Standardized",
      },
      {
        text: "Developing",
      },
    ];
    this.iconList = [
      {
        id: 1,
        imgUrl: require("../../assets/images/home/ics-1.png"),
      },
      {
        id: 2,
        imgUrl: require("../../assets/images/home/ics-2.png"),
      },
      {
        id: 3,
        imgUrl: require("../../assets/images/home/ics-3.png"),
      },
      {
        id: 4,
        imgUrl: require("../../assets/images/home/ics-4.png"),
      },
      {
        id: 5,
        imgUrl: require("../../assets/images/home/ics-5.png"),
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

<style lang="scss" scoped>
.home_page_container {
  background-image: url("../../assets/images/solution-bg-img.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.home_banner {
  /* height: 791px; */
  height: 36.5vw;
  width: 100%;
  /* background: yellow; */
}

.trust-box {
  width: 100%;
  height: 760px;
  background-image: url("../../assets/images/home/hero-img.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
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
    bottom: 80px;
  }
}
.quality-box {
  width: 100%;
  // display: flex;
  // justify-content: center;
  // flex-direction: column;

  margin-top: 60px;
  text-align: center;
  .quality-title {
    width: 60%;
    text-align: center;
    font-family: "Rubik", Sans-serif;
    font-size: 40px;
    font-weight: 600;
    line-height: 60px;
    color: #ffffff;
    margin: 30px auto;
  }
  .quality-desc {
    width: 80%;
    text-align: center;
    font-family: "Rubik", Sans-serif;
    font-weight: 400;
    color: #ffffff;
    margin: 30px auto;
  }
  .quality-list-box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 30px 150px;

    .quality-item {
      width: 28%;
      height: 100px;
      line-height: 100px;
      text-align: center;
      background-color: #101828;
      border-radius: 5px;
      border: 1px solid #ffffff;
      color: #ffffff;
      font-size: 35px;
      font-weight: 500px;
    }
  }
}
.wide-range-box {
  margin: 30px auto;
  width: 1220px;
  height: 725px;
  background-image: linear-gradient(360deg, #a787ff 0%, #2942f2 130%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 50px 0;
  border-radius: 16px;
  .wide-range-title {
    font-size: 35px;
    color: #ffffff;
    font-weight: 800;
    // width: 80%;
    margin-top: 30px;
  }
  .wide-range-desc {
    font-size: 20px;
    width: 730px;
    text-align: center;
  }
  .show-icon-box {
    width: 736px;
    height: 300px;
    // border: 1px solid red;
    background-image: url("../../assets/images/circle-bg.png");
    background-position: bottom center;
    background-repeat: no-repeat;
    background-size: contain;
    .icon-item-img-box {
      display: flex;
      justify-content: space-between;
      padding: 0 50px;
      // margin-top: 50px;
      // position: relative;
      .icon-img {
        width: 50px;
        height: 50px;
        position: relative;
        &:nth-child(1),
        &:nth-child(5) {
          top: 200px;
        }
        &:nth-child(2),
        &:nth-child(4) {
          top: 100px;
        }
        &:nth-child(3) {
          top: 60px;
        }
      }
    }
  }
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