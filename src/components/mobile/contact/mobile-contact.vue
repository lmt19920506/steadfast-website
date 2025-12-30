<template>
    <div class="mobile_contact_container">
        
    </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
import { getBase64 } from '@/utils/index.js'
export default {
    name: 'mobileContact',
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
        width: 720px;

    }

    .mobile_contact_desc_box {
        width: 720px;
        height: 290px;
        height: #212429;

        p {
            &:nth-child(1) {
                font-size: 30px;
                font-weight: 500;
                text-align: center;
                color: #fff
            }

            &:nth-child(2) {
                font-size: 24px;
                font-family: Source Han Sans CN;
                font-weight: 300;
                color: #B3B3B3;
                line-height: 40px;
                padding: 0 35px;
                text-align: center;
                margin-top: 40px;
            }
        }
    }

    .mobile_contact_form_box {
        padding: 34px;
        background: #32363C;

        .mobile_contact_form_title {
            font-size: 36px;
            font-family: Source Han Sans CN;
            font-weight: 500;
            color: #FFFFFF;
            line-height: 30px;
        }

        .mobile_contact_form_desc {
            font-size: 24px;
            font-family: Source Han Sans CN;
            font-weight: 300;
            color: #FFFFFF;
            line-height: 40px;
            opacity: 0.5;
            margin-top: 38px;
        }

        .form_box {
            .form_item {
                margin-top: 40px;

                .form_item_title {
                    font-size: 28px;
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
                    height: 60px;
                    font-size: 24px;
                }

                .form_item_input::placeholder {
                    font-size: 24px;
                    color: #FFFFFF;
                    line-height: 24px;
                    opacity: 0.5;
                }

            }

            .form_item:last-child {
                .code_btn_box {
                    display: flex;
                    justify-content: space-between;

                    .form_item_input {
                        width: 414px;
                    }

                    .code_btn {
                        width: 200px;
                        height: 60px;
                        line-height: 60px;
                        background: #196FE5;
                        border-radius: 4px;
                        text-align: center;
                        color: #fff;
                        font-size: 24px;
                    }
                    .code_time_text {
                        color: #fff;
                        font-size: 24px;
                        position: relative;
                        top: 25px;
                    }
                }
            }
        }

    }

    

    
}
</style>