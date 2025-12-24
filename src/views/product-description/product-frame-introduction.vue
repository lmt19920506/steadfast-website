<template>
    <div>
      <section class="production_description_detail_container pc_container">
        <banner></banner>
        <div class="production_description_detail_box">
          <section class="left_tree_menu">
            <el-tree ref="treeRef" :data="treeData" :props="defaultProps" node-key="path" highlight-current
              default-expand-all @node-click="handleNodeClick" />
          </section>
          <section class="right_content">
            <component :is="currentComp"></component>
          </section>
        </div>
      </section>
      <section class="mobile_container">
        <mobileProductDescriptionDetail></mobileProductDescriptionDetail>
      </section>
  
    </div>
  </template>
      
  <script>
  import banner from "@/components/productDescription/banner.vue";
  import productFrameIntroduction from "@/components/productDescription/productFrameIntroduction.vue";
  import coreFunction from "@/components/productDescription/coreFunction.vue";
  import threeDExplain from "@/components/productDescription/3dExplain.vue";
  import uiExplain from "@/components/productDescription/uiExplain.vue";
  import appExplain from "@/components/productDescription/appExplain.vue";
  import dataAccessStandard from "@/components/productDescription/dataAccessStandard.vue";
  import inDevelopment from "@/components/productDescription/inDevelopment.vue";
  import mobileProductDescriptionDetail from '@/components/mobile/productDescription/mobile-productDescriptionDetail'
  export default {
    name: "productDescriptionDetail",
    components: {
      banner,
      productFrameIntroduction,
      coreFunction,
      threeDExplain,
      uiExplain,
      appExplain,
      dataAccessStandard,
      inDevelopment,
      mobileProductDescriptionDetail
    },
    computed: {
      showComponent() {
        let findObj = this.componentList.find((item) => item.id == this.routeId);
        console.log("findobj---", findObj);
        console.log("routeId---", this.routeId);
        return findObj && find.comp ? findObj.comp : "inDevelopment";
      },
    },
    data() {
      this.treeData = [
        {
          label: "产品简介",
          id: "1",
          children: [
            {
              label: "产品概要介绍",
              id: "1.1",
            },
            {
              label: "产品技术架构",
              id: "1.2",
              path: "/product-description/product-frame-introduction",
              component: "productFrameIntroduction",
            },
            {
              label: "核心功能",
              id: "1.3",
              path: "/product-description/core-function",
              component: "coreFunction",
            },
            {
              label: "产品组件及功能清单",
              id: "1.4",
            },
            {
              label: "产品优势",
              id: "1.5",
            },
            {
              label: "应用场景",
              id: "1.6",
            },
            {
              label: "开通平台服务说明",
              id: "1.7",
            },
          ],
        },
        {
          label: "组件介绍",
          id: 2,
          children: [
            {
              label: "组件概述及分类",
              id: 2.1,
            },
            {
              label: "后台数据库介绍",
              id: "2.2",
            },
            {
              label: "UI编辑器组件介绍",
              id: "2.3",
            },
            {
              label: "3D编辑器组件介绍",
              id: "2.4",
            },
            {
              label: "移动端操作说明",
              id: "2.5",
            },
          ],
        },
        {
          label: "操作手册",
          id: 3,
          children: [
            { label: "快速搭建数字孪生体", id: "3.1" },
            {
              label: "UI编辑器操作说明",
              id: "3.2",
              path: "/product-description/ui-explain",
              component: "uiExplain",
            },
            {
              label: "3D编辑器操作说明",
              id: "3.3",
              path: "/product-description/3d-explain",
              component: "threeDExplain",
            },
            {
              label: "移动端操作说明",
              id: "3.4",
              path: "/product-description/app-explain",
              component: "appExplain",
            },
            { label: "项目工程创建及管理", id: "3.5" },
            { label: "用户及资源管理", id: "3.6" },
            { label: "发布及安装说明", id: "3.7" },
          ],
        },
        {
          label: "产品开放性及标准",
          id: 4,
          children: [
            { label: "力控体系产品集成", id: "4.1" },
            { label: "整合第三方应用", id: "4.2" },
            { label: "模型导入及3D模型要求规范", id: "4.3" },
            {
              label: "数据接入标准",
              id: "4.4",
              path: "/product-description/data-access-standard",
              component: "dataAccessStandard",
            },
            { label: "PC端部署硬件配置推荐", id: "4.5" },
          ],
        },
        {
          label: "版本说明",
          id: "5",
          children: [{ label: "1.0版本发布说明", id: "5.1" }],
        },
      ];
      this.defaultProps = {
        children: "children",
        label: "label",
      };
      return {
        routeId: "",
        currentComp: "",
        routeList: [
          "product-frame-introduction",
          "core-function",
          "3d-explain",
          "ui-explain",
          "app-explain",
          "inDevelopment",
        ],
        componentList: [
          { comp: "productFrameIntroduction", id: "/product-description/product-frame-introduction" },
          { comp: "coreFunction", id: "/product-description/core-function" },
          { comp: "threeDExplain", id: "/product-description/3d-explain" },
          { comp: "uiExplain", id: "/product-description/ui-explain" },
          { comp: "appExplain", id: "/product-description/app-explain" },
          { comp: "inDevelopment", id: "/product-description/inDevelopment" },
        ],
      };
    },
    watch: {
      routeId(newVal) {
        console.log("watch---", newVal);
        const obj = this.componentList.find((item) => item.id === newVal);
        console.log('find-obj---', obj)
        this.currentComp = obj ? obj.comp : "inDevelopment";
      },
    },
    methods: {
      handleNodeClick(node) {
        console.log("click---", node.path);
        this.routeId = node.path;
        if (node.hasOwnProperty("children")) return;
        this.currentComp = node.component;
        !node.hasOwnProperty("component")
          ? (this.currentComp = "inDevelopment")
          : "";
        this.$router.push({
          path: node.hasOwnProperty("path")
            ? `${node.path}`
            : "/product-description/indevelop",
        });
      },
    },
    mounted() {
      console.log('route id---', this.$route)
      this.routeId = this.$route.path;
      this.$nextTick(() => {
        this.$refs.treeRef?.setCurrentKey(this.routeId);
      });
    },
  };
  </script>
  <style>
  .production_description_detail_container .el-tree {
    background: inherit;
  }
  
  .production_description_detail_container .el-tree .el-tree-node__label {
    color: rgba(255, 255, 255, 0.69);
  }
  
  .production_description_detail_container .el-tree .el-tree-node .el-tree-node__content .el-tree-node__label {
    font-size: 18px;
    color: #ffffff;
  }
  
  /* 一级节点选择器 */
  .production_description_detail_container .el-tree>.el-tree-node>.el-tree-node__content {
    font-weight: 500;
    color: #ffffff !important;
    font-family: Source Han Sans CN;
    margin-top: 38px;
    height: 30px;
    line-height: 30px;
  }
  
  /* 二级节点选择器 */
  /* .production_description_detail_container .el-tree > .el-tree-node > .el-tree-node__children > .el-tree-node {} */
  
  .production_description_detail_container .el-tree>.el-tree-node>.el-tree-node__children>.el-tree-node>.el-tree-node__content {
    height: 40px;
  }
  
  .production_description_detail_container .el-tree>.el-tree-node>.el-tree-node__children>.el-tree-node>.el-tree-node__content>.el-tree-node__label {
    font-size: 14px;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.69);
    font-family: Source Han Sans CN;
  }
  
  .production_description_detail_container .el-tree-node:focus>.el-tree-node__content {
    background-color: #196fe5 !important;
    height: 30px;
  }
  
  .production_description_detail_container .el-tree-node__content:hover {
    background-color: #196fe5;
    opacity: 0.5;
    color: #ffffff !important;
    /* background: pink; */
    height: 30px;
  }
  
  .production_description_detail_container .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
    background-color: #196fe5;
  }
  </style>
  
  
  <style scoped>
  .production_description_detail_container {
    width: 100%;
    height: 100%;
  }
  
  .production_description_detail_container .production_description_detail_box {
    display: flex;
    background: #212429;
    padding-top: 73px;
  }
  
  .production_description_detail_container .production_description_detail_box .left_tree_menu {
    width: 350px;
    height: 100%;
    /* background: pink; */
    background: inherit;
    /* padding: 73px 117px 73px 94px; */
    padding-left: 73px;
    padding-right: 73px;
    border-right: 1px solid rgba(140, 156, 208, 0.2);
  }
  
  .production_description_detail_container .production_description_detail_box .right_content {
    flex: 1;
    height: 100%;
    /* background: yellow; */
  }
  </style>