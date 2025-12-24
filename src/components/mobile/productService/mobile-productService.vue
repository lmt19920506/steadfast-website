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
                <div class="category-menu-item" v-for="(item, index) in categoryList" :key="index">{{ item.text }}</div>
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
    return {
      currentShow: 1,
    };
  },
  methods: {
    viewMoreLightPoint(index) {
      this.currentShow++;
      if (this.currentShow === 4) {
        this.currentShow = 1;
      }
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
    font-size: 90px;
    width: 100%;
    // background: pink;
    text-align: center;
  }
}

.mobile_product_server_banner_banner_title1 {
  /* width: 257px; */
  height: 69.42px;
  font-size: 85.44px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
}

.mobile_product_server_banner_banner_title2 {
  /* width: 535px; */
  height: 104.13px;
  font-size: 106.8px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  margin-top: 80.1px;
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
      // background: pink;
      &:nth-child(odd) {
        background: #722f8b;
        color: #fff;
      }
      &:nth-child(even) {
        background: #fff;
        color: #722f8b;
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