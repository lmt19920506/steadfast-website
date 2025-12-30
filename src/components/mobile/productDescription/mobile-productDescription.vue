<template>
    <div class="mobile_product_description_container mobile_container">
       <section class="show-product-box">
        <p class="product-title" id="ics-mobile">ICS</p>
        <div class="company-box">
            <div
                class="show-company-img-box-item"
                v-for="(item, index) in 48"
                :key="index"
            >
                <img :src="showImgUrl(index)" alt="" />
            </div>
        </div>
       </section>
       <section class="show-product-box">
        <p class="product-title" id="radar-mobile">Low Slow Small-Target Surveillance Radar</p>
        <div class="show-content-box">
            <div class="radar-item-box" v-for="(item, index) in radarList" :key="index">
                <p class="title">{{ item.title }}</p>
                <img :src="item.imgUrl" alt="">
                <p class="desc">{{ item.desc }}</p>
            </div>
        </div>
       </section>
       <section class="how-product-box" id="camera"></section>
    </div>
</template>

<script>
export default {
  data() {
    this.radarList = [
      {
        title: "STDR-C1",
        desc:
          "Target surveillance radar has the ability to detect targets such as UAVs and biDRs, and can be widely used in the security of airport low altitude, ports, oil fields, nuclear power plants and other important places.",
        imgUrl: require("../../../assets/images/radar-1.png"),
      },
      {
        title: "STDR-B25",
        desc:
          "Sky Radar can achieve 360° all- round, 90° pitch and all-airspace detection and search for UAVs, biDRs and other targets. It can be widely used in airport low-altitude, ports,oil fields, nuclear power plants and other important place security.",
        imgUrl: require("../../../assets/images/radar-2.png"),
      },
      {
        title: "STDR-B24",
        desc:
          "urban low-altitude radar has the ability to search, track, and locate low, slow, and small targets such as small  UAVs, and can be widely used in urban low-altitude safety supervision,  airport low-altitude security, camp security, eventsecurity, etc.",
        imgUrl: require("../../../assets/images/radar-4.png"),
      },
      {
        title: "STDR-C24",
        desc:
          "four-sided phased array radar can realize the TAS search and tracking function of UAVs, biDRs and other targets, and has high-precision real-time multi-target tracking and synchronous whole airspace search capabilities. It can be widely used in the security of airports, ports, oil fields, nuclear power plantsandotherimportantplaces.",
        imgUrl: require("../../../assets/images/radar-3.png"),
      },
    ];
    return {};
  },
  methods: {
    scrollToAnchor() {
      const urlParams = new URLSearchParams(window.location.search);
      const anchor = urlParams.get("target");
      console.log("anchor===", anchor);
      if (anchor) {
        const element = document.getElementById(anchor + '-mobile');
        console.log('element===', element)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    showImgUrl(index) {
      return require(`../../../assets/images/${index + 1}.png`);
    },
  },
   mounted() {
    // console.log(11);
    // window.scrollTo(0, 0);
    this.$nextTick(() => {
        this.scrollToAnchor();
    })
  },
};
</script>

<style lang="scss" scoped>
.mobile_product_description_container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
//   background: pink;
  .show-product-box {
    width: 100%;
    height: auto;
    .product-title {
      font-size: 90px;
    }
    .company-box {
      width: 1700px;
      // height: 500px;
      background: #ffffff;
      margin: 100px auto;
      border-radius: 40px;
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
      padding-bottom: 50px;
      .show-company-img-box-item {
        width: 700px;
        height: 353px;
        margin-left: 100px;
        margin-top: 50px;
        img {
          width: 700px;
          height: 353px;
          object-fit: contain;
        }
      }
    }
    .show-content-box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .radar-item-box {
      width: 1700px;
      // height: 2300px;
      border-radius: 40px;
      background: linear-gradient(127deg, #1764c6 0%, #0389b0 100%);
      margin-top: 50px;
    //   padding-top: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .title {
        font-size: 90px;
        margin-top: 60px;
      }
      img {
        margin-top: 60px;
      }
      .desc {
        width: 90%;
        // padding: 0 20px;
        font-size: 70px;
        margin-top: 60px;
        margin-bottom: 80px;
      }
    }
  }
}
</style>
