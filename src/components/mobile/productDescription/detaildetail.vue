<template>
    <div class="mobile_product_description_container mobile_container">
        <section class="mobile_product_description_banner">
            <p class="mobile_product_description_banner_title">新手指引</p>
            <p class="mobile_product_description_banner_desc">通过快速入门教程，实践案例，视频教程等各项操作指南，帮助新用户更快的了解产品的使用。</p>
        </section>
        <section class="mobile_product_description_kuangjia_box">
            <p class="mobile_product_description_kuangjia_title">ForceCon-DTwin产品框架介绍</p>
            <div class="mobile_product_description_collapse_box">
                <el-collapse accordion>
                    <el-collapse-item v-for="(item, index) in introductSelectArr" :key="index" :title="item.label">
                        <p v-for="(it, ind) in item.children" :key="it.id + it.label">{{ it.label }}</p>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </section>
        <section class="mobile_product_description_zhongtai_box">
            <div ></div>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        this.introductSelectArr = [
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
        this.zhongtaiArr = [
            
        ]
        return {}
    }
}
</script>

<style scoped>
.mobile_product_description_banner {
    width: 100%;
    height: 320px;
    background-image: url('../../../assets/images/mobile_product_description_banner.png');
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 80px;
    padding: 94px 123px 96px 23px;
}

.mobile_product_description_banner_title {
    /* width: 139px; */
    height: 35px;
    font-size: 36px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 24px;
}

.mobile_product_description_banner_desc {
    width: 600px;
    height: 59px;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 36px;
    margin-top: 36px;
}
.mobile_product_description_kuangjia_box {
    background: #292D33;
    padding-top: 27px;
}
.mobile_product_description_kuangjia_title {
    font-size: 28px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #FFFFFF;
    text-align: center;
}

.mobile_product_description_collapse_box {
    margin-top: 27px;
}
.mobile_product_description_zhongtai_box {

}
</style>

<style>
.mobile_product_description_container .el-collapse {
    border: none;
}

.mobile_product_description_container .el-collapse-item__header {
    height: 78px;
    background: #212429;
    font-size: 28px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #FFFFFF;
    padding-left: 37px;
    border-bottom: 1px solid #353941;
    border-top: 1px solid #353941;

}

.mobile_product_description_container .el-collapse-item__wrap {
    background: #212429;
    border: none;
}

.mobile_product_description_container .el-collapse-item__wrap .el-collapse-item__content {
    /* background: #212429; */
}

.mobile_product_description_container .el-collapse-item__wrap .el-collapse-item__content p {
    height: 50px;
    color: #B2B2B2;
    padding-left: 93px;
    font-size: 24px;
    margin-top: 20px;
}
</style>