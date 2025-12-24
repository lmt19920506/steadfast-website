<template>
    <div class="mobile_contact_container">
        <img class="mobile_contact_banner" src="../../../assets/images/mobile_contact.png" alt="">
        <section class="mobile_contact_desc_box flex_center">
            <p>联系我们</p>
            <p>广州力控元海信息科技有限公司 成立于2014年3月，元海以广州为核心，下设武汉、长沙、厦门、三个办事处，全面负责华南、华中地区市场开拓与维护。</p>
        </section>
        <section class="mobile_contact_form_box">
            <p class="mobile_contact_form_title">预约产品DEMO演示</p>
            <p class="mobile_contact_form_desc">工作人员将于1个工作日内与您联系为您现场/远程演示产品基于您的需求提供数字孪生解决方案</p>
            <div class="form_box">
                <div class="form_item">
                    <p class="form_item_title">姓名</p>
                    <input class="form_item_input" type="text" placeholder="请输入姓名" v-model="form.name">
                </div>
                <div class="form_item">
                    <p class="form_item_title">企业名称</p>
                    <input class="form_item_input" type="text" placeholder="请输入企业名称" v-model="form.company">
                </div>
                <div class="form_item">
                    <p class="form_item_title">手机号</p>
                    <input class="form_item_input" type="text" placeholder="请输入手机号" v-model="form.phone">
                </div>
                <div class="form_item">
                    <p class="form_item_title">验证码</p>
                    <div class="code_btn_box">
                        <input class="form_item_input" type="text" placeholder="请输入验证码" v-model="form.captcha">
                        <div :class="!isShowTime ? 'code_btn' : 'code_time_text'" @click="getCodeBtn">{{ !isShowTime ?
                            "获取验证码" : `${time}s后重新发送` }}</div>
                    </div>
                </div>
            </div>
        </section>
        <van-dialog v-model="isShowDialog" title="图形验证"></van-dialog>
        <mobileVerifyCodeDialog v-model="isShowCodeImgDialog" :phone="form.phone" />
        
    </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
import { getBase64 } from '@/utils/index.js'
import mobileVerifyCodeDialog from '@/components/mobile/tryUse/try-use.vue'
export default {
    name: 'mobileContact',
    components: {
        mobileVerifyCodeDialog
    },
    data() {
        this.myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        return {
            form: {
                name: "",
                company: "",
                phone: "",
                captcha: "",
            },
            codeId: "",
            code: "",
            codeImgUrl: "",
            isShowCodeImgDialog: false,
            isShowTime: false,
            time: 60,
            timer: null,
            isShowDialog: false
        }
    },
    methods: {
        // 获取验证码
        getCodeBtn() {
            if (this.isShowTime) return;
            if (!this.form.phone) {
                Toast({
                    message: '请填写手机号',
                    position: 'top',
                    // type: 'fail',
                });
                return;
            }
            if (!this.myreg.test(this.form.phone)) {
                Toast({
                    message: '请输入正确的手机号',
                    position: 'top',
                    // type: 'fail',
                });
                return;
            }
            this.isShowCodeImgDialog = true;
        },
        // 获取图片验证码
        getImgCode() {
            this.$axios
                .get(`http://www.forcecondtwin.com/prod-api/api/sysAuth/captcha`)
                .then((res) => {
                    this.isShowCodeImgDialog = true;
                    if (res.data.code === 200) {
                        this.codeImgUrl = getBase64(res.data.result.img);
                        this.codeId = res.data.result.id;
                    }
                });
        },
        send() {
            console.log("form---", this.form.name);
            if (!this.form.name) {
                Toast({
                    message: '请填写姓名',
                    position: 'top',
                    // type: 'fail',
                });
                return;
            }
            if (!this.form.company) {
                Toast({
                    message: '请填写企业名称',
                    position: 'top',
                    // type: 'fail',
                });
                return;
            }
            if (!this.form.phone) {
                Toast({
                    message: '请填写手机号',
                    position: 'top',
                    // type: 'fail',
                });
                return;
            }
            if (!this.myreg.test(this.form.phone)) {
                Toast({
                    message: '请输入正确的手机号',
                    position: 'top',
                    // type: 'fail',
                });
                return;
            }
            this.$axios
                .post("http://www.forcecondtwin.com/prod-api/api/contactUs/add", this.form)
                .then((res) => {
                    console.log("add contact res---", res);
                    if (res.data.code === 200 && res.data.type === "success") {
                        this.$message({
                            message: "发送成功",
                            type: "success",
                        });
                        for (let key in this.form) {
                            this.form[key] = "";
                        }
                    } else {
                        this.$message({
                            message: res.data.message,
                            type: "warning",
                        });
                    }
                });
        },
        countTime() {
            this.isShowTime = true;
            this.timer = setInterval(() => {
                this.time--;
                // isClick.value = num.value === 0
                if (this.time === 0) {
                    this.isShowTime = false;
                    this.time = 60;
                    clearInterval(this.timer);
                }
            }, 1000);
        },
        clickCodeImg() {
            this.getImgCode()
        },
        cancel() { this.isShowCodeImgDialog = false },
        confirm() {
            const obj = {
                phone: this.form.phone,
                codeId: this.codeId,
                code: this.code
            }
            this.$axios.post(`http://www.forcecondtwin.com/prod-api/api/contactUs/getCaptcha`, obj).then(res => {
                if (res.data.code === 200 && res.data.type === 'success') {
                    this.isShowCodeImgDialog = false;
                    this.code = ''
                    this.countTime()
                } else {
                    this.getImgCode()
                    Toast({
                    message: res.data.message,
                    position: 'top',
                    type: 'fail',
                });
                    this.code = ''
                }
            })
        }
    },
    watch: {
        isShowCodeImgDialog(newVal) {
            if (newVal) {
                this.getImgCode()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.mobile_contact_container {
    .mobile_contact_banner {
        width: 1920px;

    }

    .mobile_contact_desc_box {
        width: 1920px;
        height: 774.3px;
        height: #212429;

        p {
            &:nth-child(1) {
                font-size: 80.1px;
                font-weight: 500;
                text-align: center;
                color: #fff
            }

            &:nth-child(2) {
                font-size: 64.08px;
                font-family: Source Han Sans CN;
                font-weight: 300;
                color: #B3B3B3;
                line-height: 105.6px;
                padding: 0 93.45px;
                text-align: center;
                margin-top: 106.8px;
            }
        }
    }

    .mobile_contact_form_box {
        padding: 90.78px;
        background: #32363C;

        .mobile_contact_form_title {
            font-size: 96.12px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #FFFFFF;
            line-height: 80.1px;
        }

        .mobile_contact_form_desc {
            font-size: 64.08px;
            font-family: Source Han Sans CN;
            font-weight: 300;
            color: #FFFFFF;
            line-height: 106.8px;
            opacity: 0.5;
            margin-top: 101.46px;
        }

        .form_box {
            .form_item {
                margin-top: 106.8px;

                .form_item_title {
                    font-size: 74.76px;
                    font-family: Source Han Sans CN;
                    font-weight: 300;
                    color: #FFFFFF;
                }

                .form_item_input {
                    border: none;
                    background: #32363c;
                    color: rgba(255, 255, 255, 0.5);
                    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
                    width: 100%;
                    height: 106.2px;
                    font-size: 64.08px;
                }

                .form_item_input::placeholder {
                    font-size: 64.08px;
                    color: #FFFFFF;
                    line-height: 64.08px;
                    opacity: 0.5;
                }

            }

            .form_item:last-child {
                .code_btn_box {
                    display: flex;
                    justify-content: space-between;

                    .form_item_input {
                        width: 1105.38px;
                    }

                    .code_btn {
                        width: 534px;
                        height: 160.2px;
                        line-height: 160.2px;
                        background: #196FE5;
                        border-radius: 10.68px;
                        text-align: center;
                        color: #fff;
                        font-size: 64.08px;
                    }
                    .code_time_text {
                        color: #fff;
                        font-size: 64.08px;
                        position: relative;
                        top: 66.75px;
                    }
                }
            }
        }

    }

    

    
}
</style>