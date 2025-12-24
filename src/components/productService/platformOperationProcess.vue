<template>
  <div class="operation_process_container">
    <h1 class="operation_process_container_title">平台操作流程</h1>
    <span class="operation_process_container_desc"
      >场景搭建、分析图表配置、数据对接、事件交互、交付展示全流程一站式体验</span
    >
    <swiper :findBannerList="operationArr" showType="isOperationProcessBox" :isShowIndicator="false"></swiper>
  </div>
</template>

<script>
import swiper from '@/components/common/swiper.vue'
export default {
  components: {
    swiper
  },
  data() {
    this.operationArr = [
      {chooseTypeName: '场景搭建', imgUrl: require(`../../assets/images/cpfw-1.png`), imgDesc: '系统自带各类模型素材，支持模型导入，简单拖拽，自由组合,针对模型设置材质、属性、交互事件、场景漫游等。'},
      {chooseTypeName: 'UI编辑', imgUrl: require(`../../assets/images/cpfw-2.png`), imgDesc: '用户在左侧选择贴合需求的图表，可以拖拽图表到指定位置，在右侧可以设置图表属性参数、事件交互配置等进行个性化编辑，最后可直接预览编辑最终效果,支持用户自定义图表编辑并保存个人的图表，方便大批量复用，极大提高编辑效率。'},
      {chooseTypeName: '数据配置', imgUrl: require(`../../assets/images/cpfw-3.png`), imgDesc: '无缝兼容各类数据源，支持业务系统数据、各类力控平台数据融合，支持 GB/T28181 标准视频监控数据集成，充分利用已有信息化建设成果，为工厂运行态势感知提供全面的数据支持。'},
      {chooseTypeName: '事件交互', imgUrl: require(`../../assets/images/cpfw-4.png`), imgDesc: '过在组上添加交互事件，配合自动匹配目标对象功能，即可实现组内所有物体交互功能，避免大量重复工作。'},
    ]
    return {
      currentType: 1
    }
  },
  methods: {
    chooseType(type) {
      this.currentType = type;
    },
    showTextType(type) {
        return type === this.currentType
    }
  },
  computed: {
    pictureUrl() {
      return require(`../../assets/images/cpfw-${this.currentType}.png`);
    }
  },
};
</script>

<style scoped>
.operation_process_container {
  width: 100%;
  height: 900px;
  background: #212429;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10px;
}
.operation_process_container_title {
  color: #ffffff;
    font-size: 32px;
    font-family: SourceHanSansCN-Medium;
    margin-top: 60px;
}
.operation_process_container_desc {
    color: #b3b3b3;
    font-size: 14px;
    margin-top: 24px;
  }

</style>