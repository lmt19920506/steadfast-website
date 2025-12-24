<template>
    <div class="mobile_home_container">
        <section class="mobile_home_banner">
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <div class="mobile_home_banner_img_box">
                        <div class="mobile_home_banner_desc_box">
                            <p>低代码数字孪生可视化平台</p>
                            <p>Low code digital twin visualization platform</p>
                            <div class="mobile_tiyan_btn" @click="tiyan">
                                申请体验
                            </div>
                        </div>
                    </div>
                    <!-- <img class="shouye_banner_mobile_img" src="../../../assets/images/mobile/mobile_shouye-banner.png" alt=""> -->
                </van-swipe-item>
            </van-swipe>
        </section>
        <section class="mobile_home_pingtai">
            <p class="title">ForceCon-DTwin力控数字孪生平台</p>
            <p class="desc">多形式数据图表展示、设备管理、监控可视化、告警可视化、运行可视化、操作可视化、门禁可视化、应用配置</p>
            <div class="mobile_home_pingtai_img"></div>
        </section>
        <section class="mobile_home_pingtai_jiagou flex_center">
            <p class="title">ForceCon-DTwin力控数字孪生平台架构</p>
            <div class="mobile_jiagou_img_scroll_box">
                <img class="mobile_jiagou_img" src="../../../assets/images/ping_tai_jia_gou.png" alt="" />
            </div>
        </section>
        <section class="mobile_home_pingtai_liangdian flex_center">
            <p class="title">ForceCon-DTwin力控数字孪生平台亮点</p>
            <section v-for="(item, index) in lightPointArr" :key="index">
                <template v-if="lightPointIndex === index + 1">
                    <img class="mobile_home_pingtai_liangdian_desc_img" :src="item.imgUrl" alt="">
                    <div class="mobile_home_pingtai_liangdian_desc_box">
                        <div class="mobile_home_pingtai_liangdian_desc_title">{{ item.title }}</div>
                        <p class="mobile_home_pingtai_liangdian_desc_section">
                            <span class="span_icon"></span>
                            <span class="span_desc">{{ item.desc1 }}</span>
                        </p>
                        <p class="mobile_home_pingtai_liangdian_desc_section">
                            <span class="span_icon"></span>
                            <span class="span_desc">{{ item.desc2 }}</span>
                        </p>
                        <p class="mobile_home_pingtai_liangdian_desc_section">
                            <span class="span_icon"></span>
                            <span class="span_desc">{{ item.desc3 }}</span>
                        </p>
                        <p class="mobile_home_pingtai_liangdian_desc_section">
                            <span class="span_icon"></span>
                            <span class="span_desc">{{ item.desc4 }}</span>
                        </p>
                    </div>
                    <p class="mobile_more_img_box">
                        <img class="mobile_more_img" src="../../../assets/images/mobile/mobile_more.png" alt=""
                            @click="viewMoreLightPoint(index)">
                    </p>
                </template>
            </section>
        </section>
        <section class="mobile_solution">
            <p class="mobile_solution_title">解决方案</p>
            <div class="mobile_solution_scroll_box">

                <div class="mobile_solution_item" v-for="(item, index) in mobileSolutionArr" :key="index">
                    <img class="mobile_solution_item_img" :src="item.imgUrl" alt="">
                    <div class="mobile_solution_item_desc_box">
                        <p class="mobile_solution_item_title">{{ item.title }}</p>
                        <p class="mobile_solution_item_desc_text">{{ item.desc1 }}</p>
                        <p class="mobile_solution_item_desc_text">{{ item.desc2 }}</p>
                        <p class="mobile_solution_item_desc_text">{{ item.desc3 }}</p>
                        <p class="mobile_solution_item_desc_text">{{ item.desc4 }}</p>
                        <img src="../../../assets/images/more.png" class="mobile_solution_more_icon" alt="" @click="toSolution(item.path)">
                    </div>
                </div>


            </div>
        </section>
        <mobileExperience v-model="isShow" />
    </div>
</template>

<script>
import mobileExperience from '../experience/mobile-experience.vue'
export default {
    props: {
        lightPointArr: {
            type: Array,
            default: () => []
        }
    },
    components: {
        mobileExperience
    },
    data() {
        this.mobileSolutionArr = [
            {
                name: "one",
                imgUrl: require("../../../assets/images/zhihuishuiwu.png"),
                path: "water",
                title: "智慧水务",
                desc1: "智慧水务数字孪生解决方案是将水 ",
                desc2: "资源管理、水环境保护、供水、排",
                desc3: "水等水务领域的实体系统与数字化",
                desc4: "系统相结合，形成一个虚实结合……"
            },
            {
                name: "two",
                imgUrl: require("../../../assets/images/zhihuijiaotong@2x.png"),
                path: "traffic",
                title: "智慧交通",
                desc1: "智慧交通数字孪生解决方案以结合",
                desc2: "现代数字技术和智能交通系统，利",
                desc3: "用传感器、计算机视觉、无线通信",
                desc4: "等技术，实时收集、处理和分析……"
            },
            {
                name: "three",
                imgUrl: require("../../../assets/images/gangtieyejin@2x.png"),
                path: "metallurgy",
                title: "钢铁冶金",
                desc: "实时比对和更新，用于模拟钢铁冶金生产过程中的各种情况，并提供预测和优化建议；此外，我们还可以与现有的生产管理系统、物流管理系统等进行集成，实现更高效的生产流程。从而帮助冶炼企业提高生产效率、降低生产成本、增强竞争力和减少环境影响。",
                desc1: "利用先进的数字孪生技术将实体世",
                desc2: "界中的物理系统建模为虚拟的数字",
                desc3: "模型，并将实时数据与该模型进行",
                desc4: "实时比对和更新，用于模拟钢铁……",
            },
            {
                name: "four",
                imgUrl: require("../../../assets/images/guangfu@2x.png"),
                path: "energy",
                title: "智慧光伏",
                desc: "成本、提升设备运行安全性和稳定性。方案通过数字孪生技术将现实世界中的光伏电站映射到虚拟世界中，构建了一个全方位的数字化运营平台，实现了对光伏电站的实时监控、预测分析、故障诊断和设备优化等功能，从而使光伏电站的运营更加智能化、高效化和可持续化。",
                desc1: "光伏新能源数字孪生解决方案是基",
                desc2: "于数字孪生技术的集成解决方案，",
                desc3: "旨在帮助光伏新能源行业提高太阳",
                desc4: "能发电效率、降低光伏电站运营……",
            },
        ];
        return {
            isShow: false,
            lightPointIndex: 1
        }
    },
    methods: {
        tiyan() {
            this.isShow = true
        },
        viewMoreLightPoint(index) {
        this.lightPointIndex++
        if (this.lightPointIndex === 4) {
          this.lightPointIndex = 1
        }
      },
      toSolution(path) {
        this.$router.push(`/solution?type=${path}`)
      }
    }
}
</script>

<style lang="scss" scoped>
.mobile_home_banner {
    display: none;
    background: #212429;
    width: 100%;
    height: 780px;
}

.mobile_home_banner .shouye_banner_mobile_img {
    width: 720px;
    height: 760px;
}

/* 手机端 */
.mobile_home_banner {
    display: none;
    width: 100%;
    height: 300px;
}

.mobile_home_banner_img_box {
    width: 720px;
    height: 760px;
    background-image: url('../../../assets/images/mobile/mobile_shouye-banner.png');
    background-repeat: no-repeat;
    background-size: cover;

    .mobile_home_banner_desc_box {
        position: relative;
        top: 155px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        p {
            &:nth-child(1) {
                font-size: 38px;
                font-family: Source Han Sans CN;
                font-weight: bold;
                color: #FFFFFF;
                line-height: 24px;
                /* margin-top: 155px; */
            }

            &:nth-child(2) {
                font-size: 18px;
                font-family: Source Han Sans CN;
                font-weight: 400;
                color: #F2F2F2;
                line-height: 24px;
                opacity: 0.3;
                margin-top: 13px;
            }
        }

        .mobile_tiyan_btn {
            width: 190px;
            height: 54px;
            background: linear-gradient(90deg, #006FFF 0%, #4699FA 100%);
            border-radius: 8px;
            font-size: 24px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
            line-height: 54px;
            text-align: center;
            margin-top: 34px;
        }
    }

}


</style>

<style lang="scss">
.mobile_home_container {
    


}
</style>