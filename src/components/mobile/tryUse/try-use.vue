<template>
    <div class="mobile_try_use_dialog">
        <van-dialog v-model="isShow" :show-confirm-button="false" class="mobile_try_use_van_dialog">
            <div class="mobile_yzm_code_img_box">
                <img class="code_img" :src="codeImgUrl" @click="clickCodeImg" />
                <p @click="clickCodeImg" class="change_img_text">看不清楚?换一张</p>
            </div>
            <div class="yzm_input_box">
                <el-input v-model="code" placeholder="输入上方数字的运算结果"></el-input>
            </div>
            <div class="mobile_btn_box">
                <span @click="cancel">取消</span>
                <span @click="confirm">确认</span>
            </div>
        </van-dialog>
    </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
import { getBase64 } from '@/utils/index.js'
export default {
    name: 'mobile-try-use',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        phone: {
            type: Number | String
        }
    },
    data() {
        return {
            codeImgUrl: '',
            codeId: '',
            code: ''
        }
    },
    methods: {
        // 获取图片验证码
        getImgCode() {
            this.$axios.get(`http://www.forcecondtwin.com/prod-api/api/sysAuth/captcha`).then(res => {
                this.isShowCodeImgDialog = true
                // console.log('img--code---', res)
                if (res.data.code === 200) {
                    this.codeImgUrl = getBase64(res.data.result.img)
                    this.codeId = res.data.result.id
                }
            })
        },
        clickCodeImg() {
            this.getImgCode()
        },
        // 确认发送验证码
        confirm() {
            const obj = {
                phone: this.phone,
                codeId: this.codeId,
                code: this.code
            }
            this.$axios.post(`http://www.forcecondtwin.com/prod-api/api/contactUs/getCaptcha`, obj).then(res => {
                console.log('confirm---', res)
                if (res.data.code === 200 && res.data.type === 'success') {
                    this.isShowCodeImgDialog = false;
                    this.code = ''
                    //   this.$emit('update:captcha', res.data.result.captcha)
                    this.isShow = false
                    this.$parent.countTime()
                } else {
                    this.getImgCode()
                    this.$message({
                        type: 'error',
                        message: res.data.message
                    })
                    Toast({
                        message: res.data.message,
                        position: 'top',
                        type: 'fail',
                    });
                    this.code = ''
                }
            })
        },
        cancel() {
            this.isShow = false;
            this.code = ''
        },
    },
    computed: {
        isShow: {
            get() {
                return this.value;
            },
            set(newVal) {
                this.$emit("input", newVal);
            },
        },
    },
    watch: {
        value(newVal) {
            if (newVal) {
                this.getImgCode()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.mobile_try_use_dialog {
    .mobile_yzm_code_img_box {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 30px;

        .change_img_text {
            font-size: 20px;
            margin-top: 10px;
            color: #70A4F0;
        }
    }

    .yzm_input_box {
        padding: 0 20px;
    }

    .mobile_btn_box {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        /* border-top: 1px solid #ebedf0; */
        margin-top: 15px;

        span {
            font-size: 24px;
            color: #fff;

            &:nth-child(2) {
                /* color: #ee0a24; */
            }
        }
    }
}
</style>

<style lang="scss">
.mobile_try_use_van_dialog {
    background-color: #46546F !important;

    .yzm_input_box {
        .el-input__inner {
            background: #46546F !important;
            border: 1px solid #A0AEBA
        }
    }
}
</style>