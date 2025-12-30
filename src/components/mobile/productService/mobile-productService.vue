<template>
    <div class="mobile_product_service_container mobile_container">
        <section class="mobile_product_server_banner">
           <p class="title">Provide global sourcing and supply chain services for electronic manufacturing customers</p>
        </section>
        <section class="show-category-container">
            <p class="product-title-text">Product Category</p>
            <p class="product-desc-text">
                With a global network of more than 10000 electronic component suppliers, Steadfast can source a wide range of components for your business needs.Integrated circuits, discrete semiconductors, circuit protection, sensors, connectors, resistors, capacitors, isolators, relays, memory card modules, power boards, radio frequency
            </p>
            <div class="category-menu-box">
                <div class="category-menu-item" v-for="(item, index) in categoryList" :key="index" @click="goTo(item)">
                  {{item.text}}
                  <img class="more-icon" src="../../../assets/images/mobile/mobile_more.png" alt="">
                </div>
            </div>
        </section>
        <section class="show-application-industry-container">
          <p class="title">Application Industry</p>
          <div class="show-icon-box">
            <div class="icon-item-box" v-for="(item, index) in iconList" :key="index">
              <img :src="item.url" alt="">
              <p>{{ item.name }}</p>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
export default {
  name: "mobileProductService",
  data() {
    this.categoryList = [
      { id: 1, text: "Integrated Circuits (ICS)", anchor: "ics" },
      { id: 5, text: "Connector Interconnect", anchor: "connector" },
      { id: 11, text: "Power Supply/UPS", anchor: "ups" },
      { id: 2, text: "Servo", anchor: "servo" },
      { id: 3, text: "Radar", anchor: "radar" },
      { id: 4, text: "Sensor Sensors & Camera", anchor: "camera" },
      { id: 8, text: "relay", anchor: "relay" },
      { id: 10, text: "Memory Cards, Modules", anchor: "mcm" },
      { id: 12, text: "RF/IF and RFID", anchor: "rfid" },
    ];
    this.iconList = [
      {
        name: "Artificial Intelligence",
        url: require("../../../assets/images/ai.jpg"),
      },
      { name: "new energy", url: require("../../../assets/images/ne.jpg") },
      {
        name: "Industrial Electronics",
        url: require("../../../assets/images/ie.jpg"),
      },
      {
        name: "Automotive Electronics",
        url: require("../../../assets/images/ae.jpg"),
      },
      {
        name: "Communication Electronics",
        url: require("../../../assets/images/ce.jpg"),
      },
      {
        name: "Medical Electronics",
        url: require("../../../assets/images/me.jpg"),
      },
      {
        name: "Consumer Electronics",
        url: require("../../../assets/images/ce2.jpg"),
      },
      {
        name: "Internet of Things",
        url: require("../../../assets/images/it.jpg"),
      },
    ];
    return {
      currentShow: 1,
    };
  },
  methods: {
    goTo(item) {
      console.log("go to ===", item);
      this.$router.push({
        path: "/product-description",
        query: { target: item.anchor },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile_product_server_banner {
  width: 1920px;
  height: 1708.8px;
  background-image: url("../../../assets/images/chanpinfuwu-banner@2x.webp");
  background-repeat: no-repeat;
  background-size: cover;
  //   padding-top: 325.74px;
  //   padding-left: 229.62px;
  display: flex;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 120px;
    width: 100%;
    // background: pink;
    text-align: center;
  }
}

.show-category-container {
  width: 1920px;
  /* height: 839px; */
  background: #212429;
  padding: 0 58.74px 26.7px 58.74px;
  .product-title-text {
    font-size: 85.44px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
    padding-top: 160.2px;
    
  }

  .product-desc-text {
    width: 100%;
    //   height: 160.2px;
    font-size: 80px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #b3b3b3;
    //   line-height: 96.12px;
    text-align: center;
    margin-top: 101.46px;
    //   text-align: justify;
    //   text-justify: inter-word; /* 确保单词间对齐 */
  }
  .category-menu-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .category-menu-item {
      width: 80%;
      height: 220px;
      line-height: 220px;
      text-align: center;
      margin-top: 60px;
      border-radius: 30px;
      position: relative;
      // background: pink;
      &:nth-child(odd) {
        background: #722f8b;
        color: #fff;
      }
      &:nth-child(even) {
        background: #fff;
        color: #722f8b;
      }
      .more-icon {
        position: absolute;
        right: 50px;
        top: calc(50% - 30px);
        width: 100px !important;
        height: 60px !important;
      }
    }
  }
}
.show-application-industry-container {
  width: 1920px;
  .title {
    font-size: 85.44px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #ffffff;
    text-align: center;
    padding-top: 160.2px;
  }
  .show-icon-box {
      // width: 450px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 60px;
      margin-top: 50px;
      .icon-item-box {
        width: 450px;
        // margin-left: 30px;
        // background: pink;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        img {
          width: 360px;
          height: 360px;
        }
        p {
          text-align: center;
          justify-content: center;
          align-items: center;
          height: 180px;
          // line-height: 180px;
          // background: pink;
          font-size: 60px;
          margin-top: 20px;
        }
      }
    }
}

.mobile_product_service_pingtai_operation_process_swiper_img_box {
  width: 100%;
  margin-top: 114.81px;
  /* height: 200px;
    background: pink; */
}

.mobile_product_service_pingtai_operation_process_item_img_box {
  width: 100%;
  text-align: center;
}

.mobile_product_service_pingtai_operation_process_swiper_img {
  width: 1433.79px;
  height: 859.74px;
}

.mobile_product_service_pingtai_operation_process_type_name {
  font-size: 85.44px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  /* line-height: 117px; */
  margin-top: 109.47px;
}

.mobile_product_service_pingtai_operation_process_img_desc_text {
  font-size: 64.08px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #ffffff;
  line-height: 96.12px;
  margin-top: 66.75px;
}

.mobile_auth_detail_box {
  text-align: center;
  padding: 154.86px 53.4px 138.84px 53.4px;
}

.mobile_auth_detail_title {
  font-size: 85.44px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
}

.mobile_authorization_img {
  width: 1820.94px;
  height: auto;
  margin-top: 117.48px;
}
</style>