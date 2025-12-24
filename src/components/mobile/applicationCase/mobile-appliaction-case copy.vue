<template>
    <div class="mobile_appliaction_case_container">
        <section class="mobile_appliaction_case_banner">
            <img src="../../../assets/images/mobile_application_case_banner.png" alt="">
        </section>
        <nav class="mobile_application_case_swiper_box">
            <p class="mobile_application_case_swiper_title">应用案例</p>
            <p class="mobile_application_case_swiper_desc">
                涵盖各行业的生产监控与管理、数字化车间、智能工厂、集团决策等多层次的智能管控，在工业、市政、冶化重工、轻工制造、智能建筑、农业养殖、水务环保、交通管廊、热网燃气等诸多行业领域进行了大量的实践和应用，协助企业推动从智能生产到运营管理的创新。
            </p>
            <div class="mobile_application_case_swiper_item" v-for="(item, index) in list" :key="index">
                <template v-if="currentShow === index + 1">
                    <img :src="item.imgUrl" alt="">
                    <div class="mobile_application_case_swiper_item_desc_box">
                        <p class="mobile_application_case_swiper_item_title">{{ item.imgDescTitle }}</p>
                        <p class="mobile_application_case_swiper_item_desc">{{ item.imgDescContent }}</p>
                        <p class="mobile_more_img_box">
                            <img class="mobile_more_img" src="../../../assets/images/mobile/mobile_more.png" alt=""
                                @click="viewMoreLightPoint(index)">
                        </p>
                    </div>
                </template>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'mobileAppliactionCase',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    data() {
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

<style lang="scss" scoped>
.mobile_appliaction_case_container {
    .mobile_appliaction_case_banner {
        img {
            width: 720px;
        }
    }

    .mobile_application_case_swiper_box {
        background: #212429;
        padding-top: 59px;

        .mobile_application_case_swiper_title {
            font-size: 32px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #FFFFFF;
            text-align: center;
        }

        .mobile_application_case_swiper_desc {
            font-size: 24px;
            font-family: Source Han Sans CN;
            font-weight: 300;
            color: #B3B3B3;
            line-height: 40px;
            text-align: center;
            padding: 0 48px;
            margin-top: 40px;
        }

        .mobile_application_case_swiper_item {
            text-align: center;
            margin-top: 47px;
            img {
                width: 678px;
            }

            .mobile_application_case_swiper_item_desc_box {
                padding: 46px 47px;

                .mobile_application_case_swiper_item_title {
                    font-size: 32px;
                    font-family: Source Han Sans CN;
                    font-weight: bold;
                    color: #FFFFFF;
                    margin-top: 46px;
                }

                .mobile_application_case_swiper_item_desc {
                    font-size: 24px;
                    line-height: 40px;
                    font-family: Source Han Sans CN;
                    font-weight: 400;
                    color: #FFFFFF;
                    margin-top: 27px;
                    text-indent: 2em;
                }
            }

        }
    }
}
</style>