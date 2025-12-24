<template>
  <div class="mobile_home_container">
    <section class="mobile_home_banner">
      <van-swipe class="my-swipe" indicator-color="white">
        <van-swipe-item>
          <div class="mobile_home_banner_img_box">
            <img
              src="../../../assets/images/mobile/mobile-home-banner-1.jpg"
              alt=""
            />
            <div class="text-box">
              <p class="title">We Help You</p>
              <p class="title">Accelerate Time to Market</p>
              <p class="desc">
                Credit card form factor, pin-to-pin compatible design.
              </p>
            </div>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="mobile_home_banner_img_box">
            <img
              src="../../../assets/images/mobile/mobile-home-banner-2.jpg"
              alt=""
            />
            <div class="text-box">
              <p class="title">We Offer FMC Cards</p>
              <p class="title">for Various Interfaces</p>
              <p class="desc">Having FMC HPC or LPC connector interfaces.</p>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </section>
    <section class="trust-box">
        <!-- <img src="../../../assets/images/hero-img.jpg" alt=""> -->
         <p class="title">Your Trusted Partner for Quality Electronic Components</p>
         <p class="title2">With SteadFast, a trusted electronic component supplier, rely on a rigorous CSD quality management system, seamless global sourcing from over 7,000 trusted suppliers, and top-tier after-sales support to meet your needs efficiently and reliably.</p>
         <p class="desc">We have worked with 3000+ clients globally</p>
    </section>
    <!-- <mobileExperience v-model="isShow" /> -->
  </div>
</template>

<script>
import mobileExperience from "../experience/mobile-experience.vue";
export default {
  props: {
    lightPointArr: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    mobileExperience,
  },
  data() {
    return {
      isShow: false,
      lightPointIndex: 1,
    };
  },
  methods: {
    tiyan() {
      this.isShow = true;
    },
    viewMoreLightPoint(index) {
      this.lightPointIndex++;
      if (this.lightPointIndex === 4) {
        this.lightPointIndex = 1;
      }
    },
    toSolution(path) {
      this.$router.push(`/solution?type=${path}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile_home_container {
  width: 1920px;
  height: 100%;
  .mobile_home_banner {
    width: 100%;
  }
  .mobile_home_banner_img_box {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 1920px;
      height: 1700px;
    }
    .text-box {
      //   background: pink;
      width: 100%;
      text-align: left;
      animation-name: fadeInDown;
      animation-duration: 1s;
      animation-fill-mode: both;
      padding: 60px;
      .title {
        font-size: 110px;
        text-align: left;
      }
      .desc {
        width: 90%;
        font-size: 70px;
        text-align: left;
        margin-top: 50px;
      }
    }
  }
}
fadeInDown animation {
  opacity: 1;
  transform: translateY(0px);
}
@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.trust-box {
  width: 1920px;
  height: 3732px;
  background-image: url("../../../assets/images/hero-img.jpg");
  background-size: cover;
  background-position: cener center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  .title {
    width: 80%;
    text-align: center;
    font-size: 130px;
    font-weight: 800;
  }
  .title2 {
    width: 90%;
    text-align: center;
    font-size: 70px;
    font-weight: 400;
    color: #ffffffcc;
    margin-top: 330px;
  }
  .desc {
    position: absolute;
    font-size: 60px;
    bottom: 200px;
    color: #FFFFFFB3;

    // bottom: 180px;
    // left: 50%
  }
  // filter: blur(10px)
  // img {
  //     width: 1920px;
  //     height: 3732px;
  // }
}
</style>
<style lang="scss">
.mobile_home_container {
  position: relative;
  .van-swipe-item {
    width: 1920px !important;
    height: 2500px;
  }
  .van-swipe__indicators {
    position: absolute;
    bottom: 50px;
    .van-swipe__indicator {
      display: inline-block;
      width: 100px;
      height: 20px;
      border-radius: 10px;
    }
  }
}
</style>
