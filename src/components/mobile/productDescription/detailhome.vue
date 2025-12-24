<template>
    <div class="mobile_product_description_container mobile_container">
        <banner></banner>
        <section class="mobile_product_description_quick_rumen flex_center">
            <p class="mobile_product_description_quick_rumen_title">5分钟快速入门</p>
            <p class="mobile_product_description_quick_rumen_desc">5分钟解决新手入门等基础问题，可快速完成产品配置操作！</p>
        </section>
        <section class="mobile_product_description_choose_box">
            <div class="mobile_product_description_choose_box_item" v-for="(item, index) in mobileIntroductTextArr"
                :key="index" :style="{ backgroundImage: `url(${bgImgUrl(index)})` }" @click="toDetail(item.path)">
                <p class="mobile_product_description_choose_box_item_title">{{ item.title }}</p>
                <p class="mobile_product_description_choose_box_item_content">{{ item.desc }}</p>
            </div>
        </section>
    </div>
</template>

<script>
import banner from './mobile-product-description-banner.vue'
export default {
    components: {
        banner
    },
    data() {
        this.mobileIntroductTextArr = [
            {
                title: "产品框架介绍",
                desc: "ForceCon-DTwin 平台整体框架介绍，对平台的主要模块和功能快速认识",
                path: "product-frame-introduction",
            },
            {
                title: "核心功能",
                desc: "ForceCon-DTwin 平台的核心功能，包含数据连接、适用行业、工艺规划等方面的核心功能认识",
                path: "core-function",
            },
            {
                title: "3D编辑器操作说明",
                desc: "ForceCon-DTwin场景编辑的操作功能介绍，包含模型、材质等效果应用",
                path: "3d-explain",
            },
            {
                title: "UI编辑器操作说明",
                desc: "UI面板的功能及操作介绍；包含图表的应用、配置以及交互事件添加等",
                path: "ui-explain",
            },
            {
                title: "移动端操作说明",
                desc: "APP的项目新建、及内容搭建、组合、属性配置、模板保存等方面的功能介绍",
                path: "app-explain",
            },
            {
                title: "数据接入标准",
                desc: "包含数据源、不同数据集类型的添加和管理，以及到场景中数据引用介绍",
                path: "data-access-standard",
            },
        ];
        return {}
    },
    methods: {
        toDetail(path) {
            localStorage.setItem('productDescriptionUrl', path)
            // window.open(window.location.origin + "/product-description/" + path, "_blank");
            this.$router.push({
                path: '/product-description/' + path
            })
        },
        bgImgUrl(index) {
            return require(`../../../assets/images/shuoming-${index + 1}@2x.png`)
        },
    }
}
</script>

<style scoped>
.mobile_product_description_quick_rumen {
    height: 201px;
    width: 100%;
}

.mobile_product_description_quick_rumen_title {
    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #FFFFFF;
}

.mobile_product_description_quick_rumen_desc {
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #B3B3B3;
    margin-top: 38px;
}

.mobile_product_description_choose_box {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* margin-bottom: ; */
}

.mobile_product_description_choose_box_item {
    width: calc(100% - 40px);
    height: 322.2px;
    margin-top: 10px;
    padding: 75px 38px 0 31px;
}

.mobile_product_description_choose_box_item_title {
    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #FFFFFF;
}

.mobile_product_description_choose_box_item_content {
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 40px;
    opacity: 0.7;
    margin-top: 38px;
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
    padding-right: 26px;
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