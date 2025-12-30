<template>
  <div class="mobile_solution_container">
    <section class="mobile_solution_banner_box">
      <p class="banner-title">One-stop Services</p>
      <p class="banner-desc">
        Choose UniBetter and enjoy comprehensive semiconductor solutions. Our
        products cover a wide range of applications, ensuring high quality and
        cost efficiency to help you maintain a competitive advantage in the
        market.
      </p>
    </section>
    <section class="why-choose-box">
      <p class="why-choose-text">Why choose SteadFast for your</p>
      <p class="why-choose-text">electronic component needs?</p>
      <p class="why-choose-desc-text">
        SteadFast not only focuses on the quality of the electronic components,
        but we also provide value-added services that support your business
        operations and increase your business revenue.
      </p>
    </section>
    <section class="show-content-box">
      <div
        class="show-content-item"
        v-for="(item, index) in contentList"
        :key="index"
      >
        <img :src="item.imgUrl" alt="" />
        <p class="title">{{ item.text }}</p>
        <div class="content-item-hidden-box">
          <p class="desc-text">{{ item.desc }}</p>
        </div>
      </div>
    </section>
    <section class="industries-service-box">
      <p class="service-title">Industries We Serve</p>
      <p class="service-desc">
        Our extensive electronic component supply chain channels enable us to
        fulfill the electronic component needs for numerous industries.
      </p>
      <div class="show-service-img-box">
        <div
          class="service-img-item-box"
          v-for="(item, index) in serviceList"
          :key="index"
          :style="{ '--bgImg': `url(${item.imgUrl})` }"
        >
          <div class="bottom-title-text-box">
            <p>{{ item.text }}</p>
          </div>
          <div class="industries-service-hiddle-layer-box">
            <p class="title">{{ item.text }}</p>
            <p class="desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="company-box">
      <div
        class="show-company-img-box-item"
        v-for="(item, index) in 48"
        :key="index"
      >
        <img :src="showImgUrl(index)" alt="" />
      </div>
    </section>
    <section class="active-component-box">
      <img src="../../../assets/images/active-component.jpeg" alt="" />
      <p class="show-title">Active Components</p>
      <p class="show-desc">Our comprehensive suite of active components can be customized to suit the unique challenges faced by your industry.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    contentList: {
      type: Array,
      default: () => [],
    },
    serviceList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      collapseName: "",
    };
  },
  methods: {
    showImgUrl(index) {
      return require(`../../../assets/images/${index + 1}.png`);
    },
  },
  mounted() {
    console.log("mobile contentList===", this.contentList);
    const type = this.$route.query.type;
    console.log("type---", type);
    if (type) {
      this.collapseName = type;
    }
  },
};
</script>

<style lang="scss" scoped>
.mobile_solution_container {
  width: 100%;
  height: 100%;
  padding-top: 140px;
  overflow-y: scroll;

  .mobile_solution_banner_box {
    width: 1920px;
    height: 1240px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: url("../../../assets/images/service_banner.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    .banner-title {
      font-size: 130px;
      width: 80%;
      text-align: center;
    }
    .banner-desc {
      font-size: 70px;
      width: 80%;
      text-align: center;
      margin-top: 50px;
    }
  }
  .why-choose-box {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 70px;
    .why-choose-text {
      width: 100%;
      text-align: center;
      font-size: 110px;
    }
    .why-choose-desc-text {
      width: 80%;
      text-align: center;
      font-size: 70px;
      margin-top: 70px;
    }
  }
  .show-content-box {
    width: 100%;
    height: auto;
    // background: pink;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .show-content-item {
      width: 1400px;
      height: 900px;
      // background: yellow;
      margin-top: 70px;
      border: 10px solid #5757ff;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      position: relative;
      border-radius: 40px;
      .title {
        width: 80%;
        font-size: 80px;
        margin-top: 30px;
        text-align: center;
      }
      img {
        width: 350px;
        height: 350px;
      }
      &:nth-child(2) {
        img {
          width: 497px;
        }
      }
      .content-item-hidden-box {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: #5757ff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        opacity: 0;
        transition: opacity 0.4s ease;
        &:hover {
          opacity: 0.9;
        }
        .desc-text {
          width: 80%;
          font-size: 70px;
          text-align: center;
        }
      }
    }
  }
  .industries-service-box {
    width: 100%;
    display: flex;
    margin-top: 70px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .service-title {
      width: 100%;
      text-align: center;
      font-size: 110px;
    }
    .service-desc {
      width: 80%;
      text-align: center;
      font-size: 70px;
      margin-top: 70px;
    }
    .show-service-img-box {
      width: 1400px;
      // height: 500px;
      // background: red
      .service-img-item-box {
        width: 100%;
        // height: 1814px;
        height: 1600px;

        // background: pink;
        margin-top: 50px;
        border-radius: 40px;
        background-image: var(--bgImg);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        &:hover .industries-service-hiddle-layer-box {
          opacity: 1;
        }
        .bottom-title-text-box {
          width: 100%;
          height: 345px;
          position: absolute;
          bottom: 0;
          background: rgba(87, 87, 255, 0.66);
          border-radius: 0px 0px 30px 30px;
          font-size: 90px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-weight: 700;
          p {
            width: 80%;
            text-align: center;
          }
        }
        .industries-service-hiddle-layer-box {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          border-radius: 30px;
          background: #485cc7;
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          .title {
            width: 80%;
            text-align: center;
            font-size: 90px;
            font-weight: 700;
          }
          .desc {
            width: 80%;
            text-align: center;
            font-size: 70px;
            margin-top: 180px;
          }
        }
      }
    }
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
  .active-component-box {
    width: 1700px;
    height: 2170px;
    background: #1a1d23;
    margin: 100px auto;
    border-radius: 40px;
    background-image: url("../../../assets/images/solution-bg-img.png");
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
      width: 1500px;
      height: 1515px;
      border-radius: 40px;
    }
    .show-title {
      width: 80%;
      text-align: center;
      font-size: 90px;
      font-weight: 700;
      margin-top: 80px;
    }
    .show-desc {
      width: 80%;
      text-align: center;
      font-size: 70px;
      margin-top: 80px;
    }
  }
}
</style>
<!-- <style lang="scss">
.mobile_solution_container .el-collapse {
  border: none;
}

.mobile_solution_container .el-collapse-item__header {
  height: 78px;
  background: #212429;
  font-size: 28px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  padding-left: 37px;
  border-bottom: 1px solid #353941;
  border-top: 1px solid #353941;
}

.mobile_solution_container
  .mobile_parent_collapse_item
  .el-collapse-item__header {
  height: 78px;
  background: #212429;
  font-size: 28px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  padding-left: 57px !important;
  padding-right: 50px;
  border-bottom: 1px solid #353941;
  border-top: 1px solid #353941;
}

.mobile_solution_container .el-collapse-item__wrap {
  background: #212429;
  border: none;
}

.mobile_solution_container .el-collapse-item__wrap .el-collapse-item__content {
  /* background: #212429; */
}

.mobile_solution_container
  .mobile_product_description_collapse_box
  .el-collapse-item__wrap
  .el-collapse-item__content
  p {
  height: 50px;
  color: #b2b2b2;
  padding-left: 93px;
  font-size: 24px;
  margin-top: 20px;
}

.mobile_solution_collapse_box {
  .mobile_solution_collapse_content_box {
    padding: 20px 40px;
    .mobile_solution_introduct_title {
      font-size: 25px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      color: #ffffff;
      margin-top: 10px;
      margin-bottom: 10px;
    }

    img {
      width: 650px;
      height: auto;
      text-align: center;
    }

    .mobile_solution_introduct_desc {
      font-size: 24px;
      font-family: Source Han Sans CN;
      font-weight: 300;
      color: #b2b2b2;
      line-height: 40px;
      margin-top: 25px;
      text-indent: 2em;
    }

    .mobile_solution_build_box {
      .mobile_build_item_title {
        color: #2070e5;
        font-size: 24px;
      }

      .mobile_build_item_desc {
        font-size: 20px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #b2b2b2;
        line-height: 40px;
        margin-top: 15px;
        text-indent: 2em;
      }
    }
  }
}
</style> -->
