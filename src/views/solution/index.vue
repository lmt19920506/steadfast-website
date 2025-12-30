<template>
    <div>
      <section class="solution_container pc_container" ref="solutionBoxRef">
      <section class="solution_banner_box">
        <p class="title">One-stop Services</p>
        <p class="desc-text">Choose SteadFast and enjoy comprehensive semiconductor solutions. Our products cover a wide range of applications, ensuring high quality and cost efficiency to help you maintain a competitive advantage in the market.</p>
      </section>
      <section class="solution-content-container">
        <div class="solution-show-content">
          <p class="why-title">Why choose SteadFast for your electronic component needs?</p>
          <p class="desc">SteadFast not only focuses on the quality of the electronic components, but we also provide value-added services that support your business operations and increase your business revenue.</p>
          <div class="show-desc-content-box">
            <div class="desc-content-item" v-for="(item, index) in contentList" :key="index">
              <img :src="item.imgUrl" alt="">
             <p class="title-text"> {{ item.text }}</p>
             <div class="desc-text">{{ item.desc }}</div>
            </div>
          </div>
          <p class="industries-service-title">
            Industries We Serve
          </p>
          <p class="industries-service-desc">
            Our extensive electronic component supply chain channels enable us to fulfill the electronic component needs for numerous industries.
          </p>
          <div class="show-industries-service-img-box">
            <div class="industries-service-img-box-item" v-for="(item, index) in serviceList" :key="index" :style="{'--bgImg': `url(${item.imgUrl})`}">
              <p class="industries-service-img-box-item-out-text">{{ item.text }}</p>
              <div class="industries-service-hiddle-layer-box">
                <p class="title-text">{{ item.text }}</p>
                <p class="desc-text">{{ item.desc }}</p>
              </div>
            </div>
          </div>
          <div class="partner-company-box">
            <div class="show-company-img-box-item" v-for="(item, index) in 48" :key="index">
              <img :src="showImgUrl(index)" alt="">
            </div>
          </div>
          <div class="active-component-box">
            <div class="active-left">
              <p class="active-left-title">Active Components</p>
              <p class="active-left-desc">Our comprehensive suite of active components can be customized to suit the unique challenges faced by your industry.</p>
            </div>
            <div class="active-right">
              <img src="../../assets/images/active-component.jpeg" alt="">
            </div>
          </div>
        </div>
      </section>
     
    </section>
    <section class="mobile_container">
      <mobileSolution :contentList="contentList" :serviceList="serviceList" />
    </section>
    </div>
  </template>
    
    <script>
import mobileSolution from "@/components/mobile/solution/mobile_solution.vue";
export default {
  components: {
    mobileSolution,
  },
  data() {
    this.contentList = [
      {
        text: "Shortage",
        imgUrl: require("../../assets/images/shortage.png"),
        desc:
          "We have access to 7000+ suppliers enabling us to fulfill all your electronic component requirements including scarce parts.",
      },
      {
        text: "Turn-key Procurement",
        imgUrl: require("../../assets/images/turnkey.png"),
        desc:
          "Our expert team can provide quotations for your BOM (Bill of Materials) within 2 hours.",
      },
      {
        text: "Cost Savings",
        imgUrl: require("../../assets/images/costsaves.png"),
        desc:
          "Our 30+ global sourcing experts are able to provide the best possible solutions for your requirements efficiently and cost-effectively.",
      },
      {
        text: "Obsolescence",
        imgUrl: require("../../assets/images/obsolescence.png"),
        desc:
          "We leverage our vast sourcing channels and reliable engineering support to proactively address the challenge.",
      },
      {
        text: "Franchised Products & Design Support",
        imgUrl: require("../../assets/images/franchised.png"),
        desc:
          "Our team will look into the franchise supply network and offer alternative solutions.",
      },
      {
        text: "Excess Management",
        imgUrl: require("../../assets/images/excess.png"),
        desc:
          "In case of excess inventory, we can support you resell to our 3000+ customer base.",
      },
    ];
    this.serviceList = [
      {
        text: "IoT Intelligence",
        imgUrl: require("../../assets/images/iot.png"),
        desc:
          "Our expertise in sourcing and distributing components enables us to provide components that support the rapid growth and innovation in IoT.",
      },
      {
        text: "Electric Power",
        imgUrl: require("../../assets/images/electric-power.jpg"),
        desc:
          "Whether you're looking for advanced electronic components for power generation, transmission, or distribution, our expert team will assist you with your procurement.",
      },
      {
        text: "Automotive Electronics",
        imgUrl: require("../../assets/images/automotive.jpg"),
        desc:
          "We provide a comprehensive range of reliable, top-tier automotive electronics components that power and control various systems in a vehicle.",
      },
      {
        text: "Medical Electronics",
        imgUrl: require("../../assets/images/medical-electronics.jpg"),
        desc:
          "We understand the critical nature of the medical industry. All our electronic components for medical devices comply with industry-specific standards including FDA regulations.",
      },
      {
        text: "Computing & Storage",
        imgUrl: require("../../assets/images/computing.jpg"),
        desc:
          "We provide components to support the development and maintenance of servers, data centers, and cloud storage infrastructure.",
      },
      {
        text: "Industrial Control",
        imgUrl: require("../../assets/images/industrial-control.png"),
        desc:
          "We have a wide range of electronic components that help you in automation, process optimization, safety, communication, energy efficiency, and scalability of the ICS.",
      },
      {
        text: "Communication Network/5G",
        imgUrl: require("../../assets/images/communication.png"),
        desc:
          "We provide suitable electronic parts that will enable high-speed data transmission and improved connectivity for your communication network / 5G innovations.",
      },
      {
        text: "New Energy",
        imgUrl: require("../../assets/images/new-energy.jpg"),
        desc:
          "We select and deliver electronic parts that increase the efficiency of energy conversion, management, and distribution for your new energy projects.",
      },
    ];
    return {
      currentIndex: 0,
      type: "",
    };
  },
  methods: {
    showImgUrl(index) {
      return require(`../../assets/images/${index + 1}.png`);
    },
  },
  computed: {
    currentData() {
      return this.componentsData[this.currentIndex];
    },
  },
};
</script>
    
  <style scoped>
.solution_container {
  width: 100%;
  height: 100%;
}
.solution_banner_box {
  width: 100%;
  height: 520px;
  background-image: url("../../assets/images/service_banner.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.solution_banner_box::before {
  /* background-color: transparent;
  --background-overlay: ""; */
  background-image: linear-gradient(
    180deg,
    #000000fc 30%,
    #2020a7 100%
  ) !important;
}
.solution_banner_box .title {
  font-size: 60px;
}
.solution_banner_box .desc-text {
  width: 850px;
  height: 90px;
  text-align: center;
  font-family: "Rubik", Sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: #ffffff;
}
.solution-content-container {
  width: 100%;
  height: auto;
  margin-top: 60px;
}
.solution-content-container .solution-show-content {
  width: 1159px;
  height: 300px;
  /* background: pink; */
  margin: 0 auto;
}
.solution-content-container .solution-show-content .why-title {
  width: 80%;
  font-family: "Rubik", Sans-serif;
  font-size: 48px;
  font-weight: 500;
  text-transform: capitalize;
  color: #ffffff;
}
.solution-content-container .solution-show-content .desc {
  font-family: "Rubik", Sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: #dcdcdc;
  margin-top: 30px;
}
.solution-content-container .solution-show-content .show-desc-content-box {
  width: 100%;
  /* height: 200px; */
  /* background: red */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.solution-content-container .solution-show-content .desc-content-item {
  width: 373px;
  height: 238px;
  border-radius: 8px;
  background: #e8e2d600;
  border: 2px solid #5757ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  position: relative;
  /* padding: 20px 0 */
}
.solution-content-container .solution-show-content .desc-content-item img {
  width: 69px;
  height: 69px;
}
.solution-content-container
  .solution-show-content
  .desc-content-item:nth-child(2)
  img {
  width: 94px;
  height: 66px;
}
.solution-content-container
  .solution-show-content
  .desc-content-item
  .title-text {
  width: 299px;
  /* height: 69px; */
  text-align: center;
  /* background: pink; */
  margin-top: 30px;
  color: #ffffff;
  font-family: "Rubik", Sans-serif;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 0.2px;
}
.solution-content-container
  .solution-show-content
  .desc-content-item
  .desc-text {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #485cc7;
  /* width: 80%; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  opacity: 0;
  transition: opacity 0.4s ease;
  color: #ffffff;
  font-family: "Rubik", Sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
}
.solution-content-container
  .solution-show-content
  .desc-content-item:hover
  .desc-text {
  opacity: 0.9;
}
.solution-content-container .solution-show-content .industries-service-title {
  font-family: "Rubik", Sans-serif;
  font-size: 40px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  margin-top: 60px;
}
.solution-content-container .solution-show-content .industries-service-desc {
  font-family: "Rubik", Sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  color: #dfdfdf;
  width: 70%;
  margin: 0 auto;
  text-align: center;
  margin-top: 30px;
}
.solution-content-container
  .solution-show-content
  .show-industries-service-img-box {
  width: 100%; /* height: 200px; */ /* background: red */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.solution-content-container
  .solution-show-content
  .show-industries-service-img-box
  .industries-service-img-box-item {
  width: 270px;
  height: 350px;
  margin-top: 20px;
  border-radius: 8px;
  background-image: var(--bgImg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.solution-content-container
  .solution-show-content
  .show-industries-service-img-box
  .industries-service-img-box-item
  .industries-service-img-box-item-out-text {
  position: absolute;
  bottom: 0;
  display: flex;
  width: 270px;
  height: 83px;
  justify-content: center;
  align-items: center;
  background: rgba(87, 87, 255, 0.66);
  border-radius: 0px 0px 8px 8px;
  font-family: "Rubik", Sans-serif;
  font-size: 18px;
  font-weight: 700;
}
.solution-content-container
  .solution-show-content
  .show-industries-service-img-box
  .industries-service-img-box-item
  .industries-service-hiddle-layer-box {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #485cc7;
  border-radius: 8px;
  opacity: 0;
  transition: opacity 0.4s ease;
  /* padding: 40px 30px 40px 30px; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 40px 0; */
}
.solution-content-container
  .solution-show-content
  .show-industries-service-img-box
  .industries-service-img-box-item
  .industries-service-hiddle-layer-box
  .title-text {
  width: 100%;
  font-family: "Rubik", Sans-serif;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
}
.solution-content-container
  .solution-show-content
  .show-industries-service-img-box
  .industries-service-img-box-item
  .industries-service-hiddle-layer-box
  .desc-text {
  width: 100%;
  padding: 0 20px;
  text-align: center;
  font-family: "Rubik", Sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  margin-top: 30px;
}
.solution-content-container
  .solution-show-content
  .show-industries-service-img-box
  .industries-service-img-box-item:hover
  .industries-service-hiddle-layer-box {
  opacity: 1;
}
.solution-content-container .solution-show-content .partner-company-box {
  width: 1037px;
  height: 965px; /* background: pink; */
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  background: #ffffff;
}
.solution-content-container
  .solution-show-content
  .partner-company-box
  .show-company-img-box-item {
  /* width: 1037px;
    height: 965px;
    background: pink;
    margin: 60px auto */
  /* display: inline-block; */
  width: 138.66px;
  height: 70px;
  margin-left: 52px;
  /* background: pink; */
  padding-top: 20px;
}
.solution-content-container
  .solution-show-content
  .partner-company-box
  .show-company-img-box-item
  img {
  width: 138.66px;
  height: 70px; /* width: 1037px;
    height: 965px;
    background: pink;
    margin: 60px auto */
  /* width: 138.66px;
    height: 70px; */
  /* background: pink; */
  object-fit: contain;
}
.active-component-box {
  width: 1037px;
  height: 498px;
  margin: 100px auto;
  display: flex;
  background: #1a1d23;
  border-radius: 8px;
  background-image: url("../../assets/images/solution-bg-img.png");
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.active-component-box .active-left {
  width: 511.27px;
  height: 498px;
  /* background: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.active-component-box .active-right {
  width: 511.27px;
  height: 498px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: yellow; */
}
.active-component-box .active-left .active-left-title {
  width: 427px;
  height: 40px;
  font-family: "Rubik", Sans-serif;
  font-size: 40px;
  font-weight: 500;
  letter-spacing: -1.2px;
  color: #ffffff;
}
.active-component-box .active-left .active-left-desc {
  width: 427px;
  height: 90px;
  font-family: "Rubik", Sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  color: #dfdfdf;
  margin-top: 50px;
}
.active-component-box .active-right img {
  width: 477.73px;
  height: 450px;
  border-radius: 8px;
}
</style>