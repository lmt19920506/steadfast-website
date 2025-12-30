<template>
    <div class="production-description-container">
      <section class="pc_container">
        <!-- <div class="show-box" id="ics" style="yellow">ics</div> -->
        <!-- <div class="show-box" id="dsp" style="pink">dsp</div> -->
         <div class="show-product-item-box" id="ics">
          <p class="main-item-title">ICS</p>
          <div class="partner-company-box">
             
            <div class="show-company-img-box-item" v-for="(item, index) in 48" :key="index">
              <img :src="showImgUrl(index)" alt="">
            </div>
            </div>
         </div>
        <div class="show-product-item-box" id="radar">
          <p class="main-item-title">Low Slow Small-Target Surveillance Radar</p>
          <div class="show-content-box" v-for="(item, index) in radarList" :key="index">
            <div class="show-product-img-desc-box">
              
              <div class="desc-box">
                <p class="desc-title">{{ item.title }}</p>
                <p class="desc-desc">{{ item.desc }}</p>
              </div>
             <div class="img-box"> <img :src="item.imgUrl" alt=""></img></div>
            </div>
          </div>
        </div>
       <div class="show-product-item-box" id="camera">
          <p class="main-item-title">Camera</p>
          <div class="show-content-box" v-for="(item, index) in cameraList" :key="index">
            <div class="show-product-img-desc-box">
              <div class="img-box"> <img :src="item.imgUrl" alt="" /></div>
              <div class="desc-box">
                <p class="desc-title">{{ item.title }}</p>
                <p class="desc-desc">{{ item.desc }}</p>
              </div>
             
            </div>
          </div>
        </div>
        <!-- <div class="show-box" id="connector" style="yellow">connector</div> -->
        <!-- <div class="show-box" id="relay" style="pink">relay</div> -->
        <!-- <div class="show-box" id="mcm" style="red">mcm</div> -->
        <div class="show-box" id="ups" style="orange">ups</div>
        <!-- <div class="show-box" id="rfid" style="yellow">rfid</div> -->
      </section>
      <section class="mobile_container">
        <mobile-product-description></mobile-product-description>
      </section>
    </div>
  </template>
  
  <script>
import mobileProductDescription from "@/components/mobile/productDescription/mobile-productDescription.vue";
export default {
  components: {
    mobileProductDescription,
  },
  data() {
    this.radarList = [
      {
        title: "STDR-C1",
        desc:
          "Target surveillance radar has the ability to detect targets such as UAVs and biDRs, and can be widely used in the security of airport low altitude, ports, oil fields, nuclear power plants and other important places.",
        imgUrl: require("../../assets/images/product/radar-1.png"),
      },
      {
        title: "STDR-B25",
        desc:
          "Sky Radar can achieve 360° all- round, 90° pitch and all-airspace detection and search for UAVs, biDRs and other targets. It can be widely used in airport low-altitude, ports,oil fields, nuclear power plants and other important place security.",
        imgUrl: require("../../assets/images/product/radar-2.png"),
      },
      {
        title: "STDR-B24",
        desc:
          "urban low-altitude radar has the ability to search, track, and locate low, slow, and small targets such as small  UAVs, and can be widely used in urban low-altitude safety supervision,  airport low-altitude security, camp security, eventsecurity, etc.",
        imgUrl: require("../../assets/images/product/radar-4.png"),
      },
      {
        title: "STDR-C24",
        desc:
          "four-sided phased array radar can realize the TAS search and tracking function of UAVs, biDRs and other targets, and has high-precision real-time multi-target tracking and synchronous whole airspace search capabilities. It can be widely used in the security of airports, ports, oil fields, nuclear power plantsandotherimportantplaces.",
        imgUrl: require("../../assets/images/product/radar-3.png"),
      },
    ];
    this.cameraList = [
      {
        title: "ST-KHP20S78",
        desc:
          "ST-KHP20S78 IP/HDMI output, 20x optical zoom + three-axis stabilized starlight night vision gimbal.",
        imgUrl: require("../../assets/images/product/camera-1.png"),
      },
      {
        title: "ST-KHP4KS585",
        desc:
          "ST-KHP4KS585 is a drone gimbal camera that integrates a 4x optical zoom visible light camera and a high-precision three-axis stabilized gimbal. Adopt network IP and HDMI dual output.",
        imgUrl: require("../../assets/images/product/camera-2.png"),
      },
      {
        title: "ST-KIY10S4K",
        desc:
          "ST-KIY10S4K is an integrated 4K resolution 90x hybrid zoom camera and a high-precision 3-axis stabilized gimbal camera. Support Network IP output.",
        imgUrl: require("../../assets/images/product/camera-3.png"),
      },
      {
        title: "ST-KIP30S90",
        desc:
          "ST-KIP30S90 is an integrated 30x optical zoom, 3-axis stabilized gimbal, IP output, and RTSP stream of ground receiver.",
        imgUrl: require("../../assets/images/product/camera-4.png"),
      },
      {
        title: "ST-KHY10S90",
        desc:
          "ST-KHY10S90 10x optical zoom , IRCUT 3-axis gimbal camera with IP/HDMI output. Weight: 396 grams",
        imgUrl: require("../../assets/images/product/camera-5.png"),
      },
      {
        title: "ST-KIY10S35",
        desc:
          "ST-KIY10S35 is a drone gimbal that integrates a 90x hybrid zoom camera and a high-precision three-axis stabilized gimbal. Support Network IP output. Weight: 360 grams",
        imgUrl: require("../../assets/images/product/camera-6.png"),
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
        const element = document.getElementById(anchor);
        console.log('element===pc', element)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    showImgUrl(index) {
      return require(`../../assets/images/company/${index + 1}.png`);
    },
  },
  mounted() {
    console.log(11);
    // window.scrollTo(0, 0);
    this.scrollToAnchor();
  },
};
</script>
  
  <style lang="scss" scoped>
.production-description-container {
  width: 100%;
  height: 100%;
  // padding-top: 168px;
  // margin-top: 68px;
  overflow-y: scroll;
  // background: pink;
  .pc_container {
    // padding-top: 68px;
  }
  .main-item-title {
    margin: 0 auto;
    width: 1159px;
    font-size: 30px;
    font-weight: 800;
  }
  .partner-company-box {
    width: 1037px;
    height: 965px; /* background: pink; */
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    background: #ffffff;

    .show-company-img-box-item {
      width: 138.66px;
      height: 70px;
      margin-left: 52px;
      /* background: pink; */
      // padding-top: 20px;
      img {
        width: 138.66px;
        height: 70px;
        object-fit: contain;
      }
    }
  }
  .show-product-item-box {
    width: 100%;
    margin-top: 20px;
    // height: 1800px;
    background-image: url("../../assets/images/solution-bg-img.png");
    .main-item-title {
      margin: 0 auto;
      width: 1159px;
      font-size: 30px;
      font-weight: 800;
      // background: #196fe5;
    }
    .show-content-box {
      margin: 0 auto;
      padding: 10px;
      width: 1159px;
      margin-top: 20px;
      background: #1a1d23;
      // background-image: url("../../assets/images/solution-bg-img.png");
      .show-product-img-desc-box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        .img-box {
          width: 300px;
          height: 300px;
          margin-left: 50px;
          img {
            width: 300px;
            height: 300px;
            object-fit: contain;
          }
        }

        .desc-box {
          width: 400px;
          height: 400px;
          border-radius: 8px;
          background: linear-gradient(127deg, #1764c6 0%, #0389b0 100%);
          opacity: 0.9;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .desc-title {
            font-size: 32px;
            font-weight: 800;
          }
          .desc-desc {
            width: 90%;
            font-size: 18px;
            font-weight: 400;
            margin-top: 15px;
            word-wrap: break-word;
            /* 或者 */
            overflow-wrap: break-word;
          }
        }
      }
    }
  }
}
</style>