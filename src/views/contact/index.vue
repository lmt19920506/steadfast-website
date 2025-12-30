<template>
  <div>
    <section class="contact_container pc_container">
    </section>
    <section class="mobile_container">
      <mobileContact />
    </section>
  </div>
</template>

<script>
import mobileContact from '@/components/mobile/contact/mobile-contact.vue'
// import { addContactUs, getCode } from "@/apis/contact.js";
import { getBase64 } from "@/utils/index.js";
export default {
  components: {
    mobileContact
  },
  head() {
    return {
      meta: [
        {
          'http-equiv': 'Content-Security-Policy',
          content: 'upgrade-insecure-requests'
        }
      ],
    }
  },
  data() {
    this.rules = {
      name: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
    };
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
    };
  },
  methods: {
    send() {
      console.log("form---", this.form.name);
      if (!this.form.name) {
        this.$message({
          message: "请填写姓名",
          type: "warning",
        });
        return;
      }
      if (!this.form.company) {
        this.$message({
          message: "请填写企业名称",
          type: "warning",
        });
        return;
      }
      if (!this.form.phone) {
        this.$message({
          message: "请填写手机号",
          type: "warning",
        });
        return;
      }
      if (!this.myreg.test(this.form.phone)) {
        this.$message({
          message: "请输入正确的手机号",
          type: "warning",
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
    // 获取验证码
    getCodeBtn() {
      if (this.isShowTime) return;
      if (!this.form.phone) {
        this.$message({
          message: "请填写手机号",
          type: "warning",
        });
        return;
      }
      if (!this.myreg.test(this.form.phone)) {
        this.$message({
          message: "请输入正确的手机号",
          type: "warning",
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
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.contact_container {
  width: 100%;
  /* height: 1408px; */
  background: #212429;
  /* background: pink; */
  box-sizing: border-box;
  padding-bottom: 66px;
}

.contact_container .contact_content_show {
  margin-top: 42px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.contact_container .contact_content_show .contact_title {
  height: 30px;
  font-size: 32px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}

.contact_container .contact_content_show .contact_desc {
  width: 746px;
  height: 44px;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #b3b3b3;
  line-height: 30px;
  text-align: center;
  margin-top: 24px;
}

.contact_container .message_box {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 60px;
}

.contact_container .message_box .left {
  width: 740px;
  /* height: 460px; */
  background: #32363c;
  /* background: pink; */
  padding-top: 42px;
  padding-left: 26px;
  padding-right: 32px;
  padding-bottom: 30px;
}

.contact_container .message_box .left .title1 {
  /* width: 177px; */
  height: 21px;
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #196fe5;
  line-height: 30px;
}

.contact_container .message_box .left .title2 {
  /* width: 361px; */
  /* height: 38px; */
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #ffffff;
  line-height: 24px;
  opacity: 0.5;
  margin-top: 20px;
}

.contact_container .message_box .left .title3 {
  /* width: 361px; */
  /* height: 38px; */
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #ffffff;
  line-height: 24px;
  opacity: 0.5;
  margin-top: 5px;
}

.contact_container .message_box .left .form_box {
  /* margin-top: 10px; */
}

.contact_container .message_box .left .form_box .row {
  display: flex;
  justify-content: left;
  /* background: yellow; */
  margin-bottom: -15px;
}

.contact_container .message_box .left .form_box .row .el-form-item .el-form-item__label {
  color: #ffffff !important;
}

.contact_container .message_box .left .form_box .row .el-form-item:nth-child(2) {
  margin-left: 35px;
}

.contact_container .message_box .left .form_box .row input {
  border: none;
  background: #32363c;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  width: 304px;
  height: 45px;
  /* margin-top: 10px; */
}

.contact_container .message_box .left .form_box .row input[type="text"]:focus {
  outline: none;
  height: 45px !important;
}

.contact_container .message_box .left .form_box .row2 {
  display: flex;
  justify-content: left;
  /* background: pink; */
  /* border: 1px solid red; */
  /* height: 86px; */
  /* margin-bottom: ; */
  margin-bottom: -15px;
}

.contact_container .message_box .left .form_box .row2 input {
  border: none;
  background: #32363c;
  color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  width: 304px;
  /* margin-top: 10px; */
  height: 45px;
  /* background: pink; */
}

.contact_container .message_box .left .form_box .row2 input[type="text"]:focus {
  outline: none;
  height: 45px !important;
}

.contact_container .message_box .left .form_box .row2 .el-form-item {
  margin-top: 10px;
}

.contact_container .message_box .left .form_box .row2 .el-form-item:nth-child(2) {
  margin-left: 35px;
}

.contact_container .message_box .left .form_box .row2 .el-form-item:nth-child(2) input {
  width: 153px !important;
}

.contact_container .message_box .left .form_box .row2 .el-form-item:nth-child(3) {
  display: flex;
  /* background: red; */
  align-items: flex-end;
  /* position: relative; */
}

.contact_container .message_box .left .form_box .row2 .el-form-item:nth-child(3) .el-form-item__content .code_btn {
  width: 120px;
  height: 36px;
  line-height: 36px;
  background: #196fe5;
  border-radius: 4px;
  color: #ffffff;
  text-align: center;
  position: absolute;
  /* bottom: 20px; */
  align-self: end;
  cursor: pointer;
  position: relative;
  left: 10px;
  margin-bottom: 5px;
  white-space: nowrap;
}

.code_time_text {
  background: rgba(255, 255, 255, 0.2);
  width: 120px;
  height: 36px;
  line-height: 36px;
  border-radius: 4px;
  color: #ffffff;
  text-align: center;
  position: absolute;
  align-self: end;
  /* cursor: pointer; */
  position: relative;
  left: 10px;
  margin-bottom: 5px;
  white-space: nowrap;
}

.contact_container .message_box .left .form_box .row2 .el-form-item:nth-child(3) .el-form-item__content .code_img {
  width: 120px;
  height: 36px;
  position: absolute;
  /* bottom: 20px; */
  align-self: end;
  cursor: pointer;
  position: relative;
  left: 10px;
  margin-bottom: 5px;
}

.contact_container .message_box .left .form_box .row2 .code_input_box input {
  width: 200px;
}

.contact_container .message_box .left .form_box .row2 .phone_input {
  width: 153px;
}

.contact_container .message_box .left .agree_text {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #ffffff;
  line-height: 24px;
}

.contact_container .message_box .left .normal_text {
  opacity: 0.5;
}

.contact_container .message_box .left .click_text {
  cursor: pointer;
}

.contact_container .message_box .left .send_btn {
  width: 306px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  background: linear-gradient(90deg, #196fe5 0%, #09ace1 100%);
  border-radius: 4px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
}

.contact_container .message_box .right {
  width: 460px;
  /* height: 460px; */
  background: linear-gradient(258deg, #0371ff 0%, #09ace1 100%);
  /* opacity: 0.7; */
  padding: 42px 33px;
}

.contact_container .message_box .right .company_name {
  font-size: 20px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  line-height: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 20px;
}

.contact_container .message_box .right .content_box {
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 400;
}

.contact_container .message_box .right .content_box .text_item {
  margin-top: 20px;
}

.contact_container .message_box .right .content_box .text_item img {
  width: 16px;
  height: 16px;
  position: relative;
  top: 2px;
  margin-right: 12px;
}

.contact_container .message_box .right .content_box .text_item .phone2 {
  margin-left: 20px;
}

.contact_container .message_box .right .content_box .text_item .no_icon_text {
  margin-left: 24px;
}

.contact_container .project_box {
  margin-top: 83px;
}

.show_captcha_code_text {
  /* color */
}

.technical_service_box {
  width: 100%;
  /* height: 320px; */
  display: flex;
  justify-content: center;
  /* margin-bottom: 66px; */
}

.technical_service_content {
  width: 1200px;
  height: 320px;
  background: #292d33;
  /* background: pink; */
  display: flex;
  justify-content: space-between;
  padding: 49px 36px;
}

.technical_service_content_left {}

.technical_service_content_left p:nth-child(1) {
  font-size: 28px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
  /* margin-top: 50px; */
}

.technical_service_content_left p:nth-child(2) {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
  opacity: 0.5;
  margin-top: 16px;
}

.technical_service_content_left p:nth-child(3) {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #b3b3b3;
  line-height: 24px;
  opacity: 0.5;
  margin-top: 31px;
}

.technical_service_content_left p:nth-child(4) {
  font-size: 14px;
  font-family: Source Han Sans CN;
  color: #ffffff;
  margin-top: 10px;
}

.technical_service_content_left p:nth-child(5) {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #b3b3b3;
  line-height: 24px;
  opacity: 0.5;
  margin-top: 31px;
}

.technical_service_content_left p:nth-child(6) {
  font-size: 14px;
  font-family: Source Han Sans CN;
  color: #ffffff;
  margin-top: 10px;
}

.technical_service_content_right {
  width: 350px;
  height: 100%;
  /* background: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-wrap: nowrap; */
  flex-direction: row;
}

.qcode_box {
  width: 48%;
  height: 100%;
  /* border: 1px solid red; */
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.qcode_box img {
  width: 140px;
  height: 140px;
}

.qcode_box p {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #FFFFFF;
  margin-top: 10px;
}
</style>
<style>
.contact_container .message_box .el-form-item__label {
  color: #ffffff !important;
}


.paperview_input_text .el-input__inner {
  -webkit-appearance: none;
  /* background: red !important; */
  background-image: none !important;
  border: 0 !important;
}

.row2 .el-form-item:nth-child(3) {
  display: flex;
  position: relative;
  /* background: red; */
}

.row2 .el-form-item:nth-child(3) .code_btn {
  color: #ffffff;
  text-align: center;
  /* position: absolute; */
  /* bottom: 0; */
  align-self: end !important;
  cursor: pointer;
  /* position: relative; */
  /* left: 10px; */
}


.contact_container .el-dialog__header {
  /* background: rgba(46, 57, 77, 0.8); */
  background: #46546F;
}

.contact_container .el-dialog__body {
  /* background: rgba(46, 57, 77, 0.8) */
  background: #46546F;
  padding-top: 10px;
}
</style>