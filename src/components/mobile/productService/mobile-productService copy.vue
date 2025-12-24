<template>
    <div class="mobile_product_service_container mobile_container">
        <section class="mobile_product_server_banner">
            <p class="mobile_product_server_banner_banner_title1">ForceCon-DTwin</p>
            <p class="mobile_product_server_banner_banner_title2">专注于工业数字孪生PaaS平台</p>
        </section>
        <!-- 平台操作流程 -->
        <section class="mobile_product_service_pingtai_operation_process_box">
            <p class="mobile_product_service_pingtai_operation_process_title">平台操作流程</p>
            <p class="mobile_product_service_pingtai_operation_process_desc_text">
                场景搭建、分析图表配置、数据对接、事件交互、交付展示全流程一站式体验
            </p>
            <div class="mobile_product_service_pingtai_operation_process_swiper_img_box"
                v-for="(item, index) in mobileProductServiceSwiperImgArr" :key="index">
                <template v-if="currentShow === index + 1">
                    <div class="mobile_product_service_pingtai_operation_process_item_img_box">
                        <img class="mobile_product_service_pingtai_operation_process_swiper_img" :src="item.imgUrl" alt="">
                    </div>
                    <div>
                        <p class="mobile_product_service_pingtai_operation_process_type_name">{{ item.chooseTypeName }}</p>
                        <p class="mobile_product_service_pingtai_operation_process_img_desc_text">{{ item.imgDesc }}</p>
                        <p class="mobile_more_img_box">
                            <img class="mobile_more_img" src="../../../assets/images/mobile/mobile_more.png" alt=""
                                @click="viewMoreLightPoint(index)">
                        </p>
                    </div>
                </template>
            </div>
        </section>
        <section class="mobile_auth_detail_box">
            <p class="mobile_auth_detail_title">ForceCon-DTwin授权明细</p>
            <img class="mobile_authorization_img" src="../../../assets/images/authorizationDetail.png" alt="">
        </section>
    </div>
</template>

<script>
export default {
    name: 'mobileProductService',
    data() {
        this.mobileProductServiceSwiperImgArr = [
            { chooseTypeName: '场景搭建', imgUrl: require(`../../../assets/images/cpfw-1.png`), imgDesc: '系统自带各类模型素材，支持模型导入，简单拖拽，自由组合,针对模型设置材质、属性、交互事件、场景漫游等。' },
            { chooseTypeName: 'UI编辑', imgUrl: require(`../../../assets/images/cpfw-2.png`), imgDesc: '用户在左侧选择贴合需求的图表，可以拖拽图表到指定位置，在右侧可以设置图表属性参数、事件交互配置等进行个性化编辑，最后可直接预览编辑最终效果,支持用户自定义图表编辑并保存个人的图表，方便大批量复用，极大提高编辑效率。' },
            { chooseTypeName: '数据配置', imgUrl: require(`../../../assets/images/cpfw-3.png`), imgDesc: '无缝兼容各类数据源，支持业务系统数据、各类力控平台数据融合，支持 GB/T28181 标准视频监控数据集成，充分利用已有信息化建设成果，为工厂运行态势感知提供全面的数据支持。' },
            { chooseTypeName: '事件交互', imgUrl: require(`../../../assets/images/cpfw-4.png`), imgDesc: '过在组上添加交互事件，配合自动匹配目标对象功能，即可实现组内所有物体交互功能，避免大量重复工作。' },
        ]
        return {
            currentShow: 1
        }
    },
    methods: {
        viewMoreLightPoint(index) {
            this.currentShow++
            if (this.currentShow === 4) {
                this.currentShow = 1
            }
        },
    }
}
</script>

<style scoped>
.mobile_product_server_banner {
    width: 720px;
    height: 640px;
    background-image: url('../../../assets/images/mobile_product_service_banner.png');
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 122px;
    padding-left: 86px;
}

.mobile_product_server_banner_banner_title1 {
    /* width: 257px; */
    height: 26px;
    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #FFFFFF;
}

.mobile_product_server_banner_banner_title2 {
    /* width: 535px; */
    height: 39px;
    font-size: 40px;
    font-family: Source Han Sans CN;
    font-weight: bold;
    color: #FFFFFF;
    margin-top: 30px;
}

.mobile_product_service_pingtai_operation_process_box {
    width: 720px;
    /* height: 839px; */
    background: #212429;
    padding: 0 22px 10px 22px;
}

.mobile_product_service_pingtai_operation_process_title {
    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #FFFFFF;
    text-align: center;
    padding-top: 60px;
}

.mobile_product_service_pingtai_operation_process_desc_text {
    width: 647px;
    height: 60px;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #B3B3B3;
    line-height: 36px;
    text-align: center;
    margin-top: 38px;
}

.mobile_product_service_pingtai_operation_process_swiper_img_box {
    width: 100%;
    margin-top: 43px;
    /* height: 200px;
    background: pink; */
}

.mobile_product_service_pingtai_operation_process_item_img_box {
    width: 100%;
    text-align: center;
}

.mobile_product_service_pingtai_operation_process_swiper_img {
    width: 537px;
    height: 322px;
}

.mobile_product_service_pingtai_operation_process_type_name {
    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #FFFFFF;
    /* line-height: 117px; */
    margin-top: 41px;
}

.mobile_product_service_pingtai_operation_process_img_desc_text {
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 36px;
    margin-top: 25px;
}

.mobile_auth_detail_box {
    text-align: center;
    padding: 58px 20px 42px 20px;
}

.mobile_auth_detail_title {
    font-size: 32px;
    font-family: Source Han Sans CN;
    font-weight: 500;
    color: #FFFFFF;
    text-align: center;
}

.mobile_authorization_img {
    width: 682px;
    height: auto;
    margin-top: 44px;
}</style>