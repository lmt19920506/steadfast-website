<template>
  <div class="core_function_container">
    <p class="title1">核心功能</p>
    <p class="title2">基于ForceCon-DTwin数字孪生的工艺规划</p>
    <p class="content_one">
      工艺规程是产品制造工艺过程和操作方法的技术文件，是一切有关生产人员都应严格执行、认真贯彻的纪律性文件，是进行产品生产准备、生产调度、工人操作和质量检验的依据。数字孪生驱动的工艺规划指通过建立超高拟实度的产品、资源和工艺流程等虚拟仿真模型，以及全要素、全流程的虚实映射，真正实现面向生产现场的工艺设计与持续优化。在ForceCon-DTwin数字孪生平台驱动的工艺设计模式下，虚拟空间的仿真模型与物理空间的实体相互映射，形成虚实共生的迭代协同优化机制。
    </p>
    <section class="desc_area_box">
      <p class="desc_area_title">
        ForceCon-DTwin数字孪生平台驱动的工艺设计模式使工艺设计与优化呈现出以下新的转变：
      </p>
      <p class="deac_area_content">
        <i class="right_arrow"></i
        ><span
          >在基于仿真的工艺设计方面，借助自研的DTwin-IDE开发平台，真正意义上实现了面向生产现场的工艺过程建模与仿真，以及可预测的工艺设计</span
        ><br />
        <i class="right_arrow"></i
        ><span
          >在基于知识的工艺设计方面，实现了基于大数据分析的工艺知识建模、决策与优化</span
        ><br />
        <i class="right_arrow"></i
        ><span
          >在工艺问题主动响应方面，由原先的被动工艺问题响应向主动应对转变，实现了工艺问题的自主决策</span
        >
      </p>
    </section>
    <section class="desc_area_box">
      <p class="desc_area_title">
        ForceCon-DTwin数字孪生平台如何在自有的工艺设计模式上取得了以下突破:
      </p>
      <p class="deac_area_content">
        <i class="right_arrow"></i
        ><span
          >数字孪生工艺模型构建研究基于几何量和多物理量等融合的物理实体数字孪生模型构建理论与方法，以及基于数字孪生模型的工艺过程建模与仿真技术</span
        ><br />
        <i class="right_arrow"></i
        ><span
          >基于数字孪生的工艺创新设计方法
          研究基于大数据分析的知识建模、知识提炼和知识优化方法，以及基于增强学习、深度学习、自主学习等的自主工艺设计、工艺优化和工艺决策方法</span
        ><br />
        <i class="right_arrow"></i
        ><span
          >基于数字孪生的工艺持续优化方法
          研究基于海量数据的工艺持续改进方法和工艺更改响应机制，以及基于现场实时数据的工艺问题预测、参数动态调整、过程迭代优化和决策制定、评估与评测的理论与方法</span
        >
      </p>
    </section>
    <p class="title2">基于ForceCon-DTwin数字孪生的数据标准</p>
    <p class="content_two">
      数据是驱动数字孪生系统运行的根本。ForceCon-DTwin孪生数据标准主要是对数字孪生系统涉及的孪生数据表示、分类、存储、预处理、使用与维护、测试进行规范。
    </p>
    <div class="standard_img_box"></div>
    <p class="title3">
      ForceCon-DTwin数字孪生平台秉承标准化原则，自定义的数据标准包括以下几个方面:
    </p>
    <div class="stardard_one_box"></div>
    <p class="title2">基于ForceCon-DTwin数字孪生的连接与集成标准</p>
    <div class="stardard_two_box"></div>
    <p class="title3">自研的数据连接与集成模块标准包括以下4个方面：</p>
    <div class="stardard_three_box"></div>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.core_function_container {
  padding: 0 84px;
}
 
  .arrow {
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-color: #ccc;
  }
  .title1 {
    width: 100%;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }
  .title2 {
    width: 540px;
    height: 36px;
    line-height: 36px;
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    background-image: url("../../assets/images/biaoti@2x@2x.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: 59px;
    padding-left: 18px;
  }
  .content_one {
    font-size: 14px;
    color: #ffffff;
    font-weight: 400;
    height: 62px;
    line-height: 24px;
    opacity: 0.7;
    margin-top: 50px;
  }
  .desc_area_box {
    margin-top: 38px;
    .desc_area_title {
      font-size: 16px;
      font-family: Source Han Sans CN;
      font-weight: 500;
      color: #196fe5;
      line-height: 24px;
    }
    .deac_area_content {
      margin-top: 2px;
      padding-left: 20px;
      span {
        font-size: 14px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #ffffff;
        line-height: 24px;
        margin-top: 16px;
        margin-left: 5px;
      }
    }
  }
  .content_two {
    height: 14px;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    line-height: 24px;
    opacity: 0.7;
    margin-top: 41px;
    padding-left: 22px;
  }
  .standard_img_box {
    width: 1102px;
    height: 158px;
    background-image: url("../../assets/images/hexingongneng1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: 34px;
    position: relative;
    left: 27px;
    /* background-position: 20px 0; */
  }
  .title3 {
    /* width: 609px; */
    /* height: 16px; */
    font-size: 16px;
    font-weight: 500;
    color: #196fe5;
    line-height: 24px;
    margin-top: 36px;
  }
  .stardard_one_box {
    width: 1100px;
    height: 689px;
    margin-left: 49px;
    margin-top: 36px;
    background-image: url('../../assets/images/hexingongneng2.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .stardard_two_box {
    width: 1100px;
    height: 442px;
    margin-top: 52px;
    margin-left: 51px;
    background-image: url('../../assets/images/hexingongneng3.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .stardard_three_box {
    width: 1100px;
    height: 627px;
    background-image: url('../../assets/images/hexingongneng4.png');
    background-repeat: no-repeat;
    background-size: 100%;
    margin-left: 47px;
    margin-top: 35px;
  }

</style>