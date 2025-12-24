<template>
  <div>
    <section class="application_case_container pc_container">
      <banner></banner>
      <section class="application_case_swiper">
        <p class="title">应用案例</p>
        <p class="desc">
          涵盖各行业的生产监控与管理、数字化车间、智能工厂、集团决策等多层次的智能管控，在工业、市政、冶化重工、轻工制造、智能建筑、农业养殖、水务环保、交通管廊、热网燃气等诸多行业领域进行了大量的实践和应用，协助企业推动从智能生产到运营管理的创新。
        </p>
        <!-- <p class="desc">
        管廊、热网燃气等诸多行业领域进行了大量的实践和应用，协助企业推动从智能生产到运营管理的创新。
      </p> -->
        <div class="application_case_swiper_box">
          <swiper :findBannerList="swiperList" isShowDescBox alwaysShow :isShowIndicator="false" :isShowArrow="true">
          </swiper>
        </div>
      </section>
    </section>
    <section class="mobile_container">
      <mobileApplicationCase :list="swiperList" />
    </section>
  </div>
</template>

<script>
import banner from "@/components/applicationCase/banner.vue";
import swiper from "@/components/common/swiper.vue";
import mobileApplicationCase from '@/components/mobile/applicationCase/mobile-appliaction-case.vue'
export default {
  name: "applicationCase",
  components: {
    banner,
    swiper,
    mobileApplicationCase
  },
  data() {
    this.swiperList = [
      {
        name: "one",
        imgUrl: require("../../assets/images/anli_1.png"),
        imgDescTitle: "智慧仓储可视化系统",
        imgDescContent:
          "利用 WMS（仓储管理系统）对生产工厂立体仓储区成品的入库、出库、存储等方面进行管理，使 WCS（仓储控制系统）对仓储区域的设备例如RGV、输送带、堆垛机等进行控制和监控保证设备的高效运行。利用数据化分析平台、视频管理系统、数字孪生系统等系统进行对整个立体仓储区进行业务、数据、实时运行、实时画面进行监管。",
      },
      {
        name: "two",
        imgUrl: require("../../assets/images/anli_2.png"),
        imgDescTitle: "智慧发电厂可视化平台",
        imgDescContent:
          "通过采用先进的信息技术，实现生产信息与管理信息的智慧；实现人、技术、经营目标和管理方法的集成，是企业管理思想的一个新突破。智慧电厂信息系统管理是将信息技术贯穿于电厂的整体管理流程，可为管理者及时提供过去和现在的数据，并能够预测未来和引导企业人员的工作，使信息技术与电力工业技术、现代管理技术有机融合，全面提升电厂的生产技术和经营管理水平提高企业经济效益，增强电厂的核心竞争能力。",
      },
      {
        name: "three",
        imgUrl: require("../../assets/images/anli_3.png"),
        imgDescTitle: "智慧电子综合可视化平台",
        imgDescContent:
          "以高效的数据采集为基础、集中式实时监控管理为目标，数字孪生可视化平台为呈现，打造国内一流的孪生监控信息系统。本数字孪生平台不仅整合了高低压配电、空压系统、空调系统、水系统、消防系统、门禁系统、视频系统、灯光系统、电梯系统等基础设置，还实时跟踪设备产线生产到封装打包等一体化过程，以完善的工业安全基础网络环境保障系统建设应用，以健全的数字化基础建设消除信息孤岛，以全面覆盖的孪生监控管理打开工厂运营的黑匣。",
      },
      {
        name: "four",
        imgUrl: require("../../assets/images/anli_4.png"),
        imgDescTitle: "智慧浇筑综合可视化平台",
        imgDescContent:
          "基于PBR物理渲染的材质开发，使渲染的结果颇具真实感。直观、高效、精准地展示厂区的空间数据、实时的监控与管理等信息。通过建设“绿色交通构件工业化”智能工厂的信息化系统项目，达到 “提高效率、保证质量、降低成本、优化管理”的建设目标，实现工厂运营管理数字化、智能化，包括设备的互联互通及实时调度、计划驱动数字化工作协同、实时可视的生产流程管控、精益可靠的物料管控、工厂环境实现智能监控、能源消耗实现智能监控、产品全生命周期追溯及智能制造工厂虚拟漫游。",
      },
    ];
    return {};
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.application_case_container .application_case_swiper {
  width: 100%;
  height: 967px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #212429;
  padding-bottom: 40px;
}

.application_case_container .application_case_swiper .title {
  height: 31px;
  font-size: 32px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  margin-top: 40px;
}

.application_case_container .application_case_swiper .desc {
  width: 1021px;
  height: 45px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #b3b3b3;
  line-height: 30px;
  margin-top: 20px;
  text-align: center;
}

.application_case_container .application_case_swiper .application_case_swiper_box {
  width: 1074px;
  height: 604px;
  text-align: center;
  margin-bottom: 170px;
  margin-top: 40px;
  padding-bottom: 30px;
  margin-left: 110px;
}
</style>
<style>
.application_case_container .carousel-btn {
  top: 707px !important;
  border-radius: 0px !important;
  width: 32px !important;
  height: 32px !important;
}

.application_case_container .carousel-btn.prev {
  left: 980px !important;
}
</style>