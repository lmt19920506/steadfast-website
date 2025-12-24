<template>
    <div class="mobile_tiyan_van_box">
        <van-popup v-model="isShow" position="bottom">
            <div class="mobile_tiyan_form_box">
                <p>平台使用预约</p>
                <p>信息提交后，客户经理会在24小时之内与你联系协助试用体验</p>
                <section class="form_model_box">
                    <el-form :model="form">
                        <el-form-item>
                            <el-input class="input_item" placeholder="输入姓名" v-model="form.name"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input class="input_item" placeholder="输入手机号" v-model="form.phone"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input v-model="form.captcha" class="input_item" placeholder="输入验证码">
                                <span class="get_code_ma" slot="suffix" @click="getCode">{{
                                    !isShowTime ? "获取验证码" : `${time}s后重新发送`
                                }}</span>
                            </el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-input class="input_item" placeholder="输入公司名称" v-model="form.company"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-checkbox v-model="form.isBook">已有对接销售</el-checkbox>
                        </el-form-item>
                        <el-form-item v-if="form.isBook">
                            <el-input class="input_item" placeholder="销售姓名" v-model="form.saler"></el-input>
                        </el-form-item>
                    </el-form>
                    <div class="mobile_submit_btn" @click="addOrder">提交</div>
                </section>
            </div>
        </van-popup>
        <tryUse v-model="isShowCodeImgDialog" :phone="form.phone" />
    </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
import tryUse from '../tryUse/try-use.vue';
export default {
    name: 'mobile-experience',
    props: {
        value: {
            type: Boolean,
            default: false
        }
    },
    components: {
        tryUse
    },
    data() {
        this.myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        return {
            form: {
                name: "",
                phone: "",
                captcha: "",
                company: "",
                saler: "",
                isBook: false,
            },
            isShowTime: false,
            time: 60,
            timer: null,
            timer2: null,
            time2: 3,
            isShowCodeImgDialog: false
        }
    },
    methods: {
        getCode() {
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
        // 新增预约-确定
        addOrder() {
            if (!this.form.name) {
                Toast({
                    message: '请填写姓名',
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
            if (!this.form.captcha) {
                Toast({
                    message: '请填写验证码',
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
            if (this.form.isBook && !this.form.saler) {
                Toast({
                    message: '请填写销售姓名',
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
            this.$axios.post(`http://www.forcecondtwin.com/prod-api/api/applyInfo/add`, this.form).then(res => {
                console.log('新增预约---res---', res)
                if (res.data.code === 200 && res.data.type === 'success') {
                    // this.$message({
                    //   type: 'success',
                    //   message: '预约成功，稍后会有相关人员联系您'
                    // })
                    this.form = Object.assign({}, this.$options.data().form)
                    // this.isShowModal = false;
                    this.isShow = false
                    Toast.success('申请成功');
                    this.timer2 = setInterval(() => {
                        this.time2--
                        if (this.time2 === 0) {
                            this.time2 = 3
                            this.time = 60
                            this.isShowModal = false
                            this.isShowTime = false;

                            // clearInterval(this.timer)
                            clearInterval(this.timer2)

                        }
                    }, 1000)
                }
            })
        },
    },
    computed: {
        isShow: {
            get() {
                return this.value
            },
            set(newVal) {
                this.$emit('input', newVal)
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.mobile_tiyan_form_box {
    p {
        &:nth-child(1) {
            font-size: 96.12px;
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #FFFFFF;
        }

        &:nth-child(2) {
            font-size: 64.08px;
            font-family: Source Han Sans CN;
            font-weight: 300;
            color: #FFFFFF;
            line-height: 104.13px;
            opacity: 0.7;
            margin-top: 72.09px;
        }
    }

    .get_code_ma {
        font-size: 64.08px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #2070E5;
        display: inline-block;
        height: 216.27px;
        line-height: 216.27px;
        position: relative;
        right: 40.05px;
        /* width: 200px; */
        /* background: pink; */
    }

    .mobile_submit_btn {
        width: 1762.2px;
        height: 213.6px;
        line-height: 213.6px;
        background: #2070E5;
        border-radius: 10.68px;
        font-size: 85.44px;
        font-family: Source Han Sans CN;
        font-weight: 300;
        color: #FFFFFF;
        text-align: center;
    }
}
</style>

<style lang="scss">
.mobile_tiyan_van_box {
    .van-popup {
        background: #32363C;

        .mobile_tiyan_form_box {
            padding: 152.19px 82.77px;

            .form_model_box {
                margin-top: 138.84px;
            }

            .form_model_box .el-form-item .el-form-item__content .input_item .el-input__inner {
                background-color: #32363C;
                border: 1px solid #7a8792;
                width: 100%;
                height: 216.27px;
                line-height: 216.27px;

            }

            color: #ffffff;

            .form_model_box .el-form-item .el-checkbox .el-checkbox__inner {
                background-color: #32363C;
                border: 2.67px solid #7a8792;
                color: #fff !important;
            }

            .form_model_box .el-form-item .el-checkbox .el-checkbox__label {
                font-size: 64.08px;
                font-family: Source Han Sans CN;
                font-weight: 300;
                color: #ffffff;
                line-height: 64.08px;
            }
        }
    }
}
</style>