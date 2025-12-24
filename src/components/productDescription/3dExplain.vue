<template>
  <div class="three_d_explain_container">
    <section
      class="3d_introduct_item"
      v-for="(item, index) in itemArr"
      :key="index"
    >
      <p class="title">{{ item.title }}</p>
      <div class="content" v-for="(it, ind) in item.children" :key="ind">
        <p class="title1">{{ it.title1 }}</p>
        <p class="desc_content">{{ it.descText }}</p>
        <section class="img_box">
          <img :src="it.img" alt="" />
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    this.itemArr = [
      {
        title: "基础操作",
        children: [
          {
            title1: "新增场景",
            descText: "拖拽新场景至渲染窗口新增场景",
            img: require("../../assets/images/3D/1_场景加载.gif"),
          },
          {
            title1: "基础场景替换",
            descText: "拖拽基础场景至渲染窗口替换基础场景",
            img: require("../../assets/images/3D/1_场景加载.gif"),
          },
          {
            title1: "天气环境预设配置",
            descText:
              "根据日期及时间调整光照强度和效果，选择不同的预设天气效果",
            img: require("../../assets/images/3D/3_天气配置.gif"),
          },
          {
            title1: "后处理及比特率",
            descText:
              "修改渲染风格调整场景整体效果，调整视频亮度、对比度、饱和度及清晰度；",
            img: require("../../assets/images/3D/4_后处理.gif"),
          },
        ],
      },
      {
        title: "模型",
        children: [
          {
            title1: "模型上传",
            descText: "",
            img: require("../../assets/images/3D/5_模型上传.gif"),
          },
          {
            title1: "模型替换",
            descText: "替换上传的模型并同步到场景中，不需要再重新调整位置；",
            img: require("../../assets/images/3D/6_模型替换.gif"),
          },
          {
            title1: "模型复制",
            descText:
              "复制模型的基础属性（大小、位置、旋转、材质及默认动画）以及交互事件；",
            img: require("../../assets/images/3D/7_模型复制.gif"),
          },
        ],
      },
      {
        title: "漫游",
        children: [
          {
            title1: "新增漫游点位",
            descText: "新增视角-时间对应点位",
            img: require("../../assets/images/3D/8_新增漫游.gif"),
          },
          {
            title1: "漫游点位更新",
            descText: "选中时间点后，更新当前时间点位的镜头",
            img: require("../../assets/images/3D/9_漫游点位调整.gif"),
          },
          {
            title1: "漫游预览",
            descText:
              "播放预览当前漫游效果",
            img: require("../../assets/images/3D/10_漫游预览.gif"),
          },
          {
            title1: "漫游点位调整",
            descText:
              "移动漫游点位，调整当前点和上一个点位之间的时间长度，从而调整区间漫游速度；",
            img: require("../../assets/images/3D/11_漫游点位调整.gif"),
          },
          {
            title1: "漫游速度",
            descText:
              "调整漫游的整体速度；",
            img: require("../../assets/images/3D/12_漫游速度调整.gif"),
          },
        ],
      },
      {
        title: "交互",
        children: [
          {
            title1: "显示隐藏",
            descText: "显示（隐藏、切换显隐）目标UI、模型或标识；",
            img: require("../../assets/images/3D/13_切换显隐.gif"),
          },
          // {
          //   title1: "",
          //   descText: "",
          //   img: require("../../assets/images/3D/9_漫游点位调整.gif"),
          // },
        ],
      },
    ];
    return {}
  },
};
</script>

<style scoped>
.three_d_explain_container {
  padding: 0 131px;
}
.three_d_explain_container .title {
  width: 100%;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    margin-top: 40px;
}
.three_d_explain_container .title:nth-child(1) {
  margin-top: 10px;
}
.three_d_explain_container .title1 {
    width: 242px;
    height: 36px;
    line-height: 36px;
    color: #ffffff;
    font-size: 20px;
    padding-left: 18px;
    font-weight: 500;
    background-image: url("../../assets/images/biaoti@2x@2x.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: 20px;
  }
  .three_d_explain_container .desc_content {
    color: #196fe5;
    font-size: 16px;
    font-weight: 400;
    margin-top: 15px;
  }
  .three_d_explain_container .img_box {
    width: 1110px;
    height: 625px;
    margin-top: 15px;
  }
  .three_d_explain_container .img_box img {
    width: 100%;
    height: 100%;
  }
</style>