<template>
    <div class="experience_container">
      <div class="experience_btn" @click="experience">申请体验</div>
      <!-- <div
        class="modal_container"
        v-if="isShowModal"
        :class="isShowModal ? 'show_modal_class' : 'close_modal_class'"
        @click.self="closeModal"
      >
        <section class="login_register_box">
          <div class="left_img_box">
            <img class="logo" src="../../assets/images/logo.png" alt="" />
            <img
              class="center_picture"
              src="../../assets/images/pingtaiyuyue@2x.png"
              alt=""
            />
            <div class="left_text-box">
              <p class="left_title">低代码数字孪生可视化平台</p>
              <p class="left_desc">助力企业更智能更高效解决方案</p>
            </div>
          </div>
          <div class="right_form_box">
            <section class="right_title_box">
              <p class="right_title">平台使用预约</p>
              <p class="right_title2">
                信息提交后，客户经理会在24小时之内与你联系协助试用体验
              </p>
            </section>
            <section class="form_model_box">
              <el-form :model="form">
                <el-form-item>
                  <el-input
                    class="input_item"
                    placeholder="输入姓名"
                    v-model="form.name"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    class="input_item"
                    placeholder="输入手机号"
                    v-model="form.phone"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    v-model="form.captcha"
                    class="input_item"
                    placeholder="输入验证码"
                  >
                    <span class="get_code_ma" slot="suffix" @click="getCode">{{
                      !isShowTime ? '获取验证码' : `${time}s后重新发送`
                    }}</span>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    class="input_item"
                    placeholder="输入公司名称"
                    v-model="form.company"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-checkbox v-model="form.isBook">已有对接销售</el-checkbox>
                </el-form-item>
                <el-form-item v-if="form.isBook">
                  <el-input
                    class="input_item"
                    placeholder="销售姓名"
                    v-model="form.saler"
                  ></el-input>
                </el-form-item>
              </el-form>
              <div class="login_btn">提交</div>
            </section>
          </div>
        </section>
      </div>
      <vefifyCodeDialog
        v-model="isShowCodeImgDialog"
        :phone="form.phone"
        :captcha.sync="form.captcha"
      ></vefifyCodeDialog> -->
    </div>
  </template>
  
  <script>
  import vefifyCodeDialog from "@/components/common/verifyCodeDialog.vue";
  export default {
    name: "experience",
    components: {
      vefifyCodeDialog,
    },
    data() {
      return {
        isShowModal: false,
        isShowCodeImgDialog: false,
        isShowTime: false,
        time: 60,
        form: {
          name: "",
          phone: "",
          captcha: "",
          company: "",
          saler: "",
          isBook: false,
        },
        timer: null
      };
    },
    methods: {
      experience() {
        console.log("hah");
        this.isShowModal = true;
      },
      closeModal() {
        this.isShowModal = false;
      },
      getCode() {
        if (this.isShowTime) return
        if (!this.form.phone) {
          this.$message({
            message: "请填写手机号",
            type: "warning",
          });
          return;
        }
        this.isShowCodeImgDialog = true
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
  };
  </script>
  
  <style scoped>
  .experience_btn {
    width: 190px;
    height: 54px;
    background: linear-gradient(90deg, #006fff 0%, #4699fa 100%);
    border-radius: 8px;
    color: #ffffff;
    font-size: 24px;
    letter-spacing: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 28px;
    cursor: pointer;
    z-index: 9;
  }
  .show_modal_class {
    /* opacity: 1; */
    display: block;
    transition: 0.5s;
  }
  .close_modal_class {
    display: none;
    opacity: 0;
    transition: 0.5s;
  }
  .modal_container {
    position: fixed;
    top: 68px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(18, 20, 24, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
  }
  .modal_container .login_register_box {
    width: 1000px;
    height: 640px;
    border: 1px solid #2e394d;
    /* background: pink; */
    border-radius: 16px;
    display: flex;
  }
  .modal_container .login_register_box .left_img_box {
    width: 500px;
    height: 640px;
    background: #1c222e;
    /* background: pink; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 42px;
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  .modal_container .login_register_box .left_img_box .logo {
    width: 362px;
    height: 36px;
  }
  .center_picture {
    width: 416px;
    height: 507px;
  }
  .left_img_box .left_text-box {
    text-align: center;
    position: relative;
    bottom: 60px;
  }
  .left_img_box .left_text-box .left_title {
    width: 100%;
    height: 24px;
    font-size: 24px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
  }
  .left_img_box .left_text-box .left_desc {
    /* width: 196px; */
    width: 100%;
    height: 15px;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #7a8792;
    margin-top: 14px;
    text-align: center;
  }
  .right_form_box {
    width: 500px;
    height: 100%;
    padding-top: 60px;
    padding-left: 49px;
    background: rgba(46, 57, 77, 0.8);
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
  }
  .right_form_box .right_title {
    font-size: 28px;
    font-family: Source Han Sans CN;
    font-weight: 400;
    color: #ffffff;
  }
  .right_form_box .right_title2 {
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #ffffff;
    line-height: 24px;
    opacity: 0.7;
    margin-top: 15px;
  }
  .right_form_box .form_model_box {
    margin-top: 26px;
  }
  .login_btn {
    width: 400px;
    height: 48px;
    line-height: 48px;
    background: #2070e5;
    border-radius: 4px;
    font-size: 16px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #ffffff;
    text-align: center;
    margin-top: 34px;
    cursor: pointer;
  }
  </style>
  <style>
  .experience_container .form_model_box .el-form-item {
    margin-bottom: 10px;
  }
  .experience_container
    .form_model_box
    .el-form-item
    .el-form-item__content
    .input_item
    .el-input__inner {
    background-color: rgba(46, 57, 77, 0.8);
    border: 1px solid #7a8792;
    width: 401px;
    height: 49px;
    line-height: 49px;
    color: #ffffff;
  }
  .experience_container
    .form_model_box
    .el-form-item
    .el-checkbox
    .el-checkbox__inner {
    background-color: rgba(46, 57, 77, 0.8);
    border: 1px solid #7a8792;
  }
  .experience_container
    .form_model_box
    .el-form-item
    .el-checkbox
    .el-checkbox__label {
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #ffffff;
    line-height: 24px;
  }
  .experience_container .input_item .get_code_ma {
    position: relative;
    right: 60px;
    font-size: 14px;
    font-family: Source Han Sans CN;
    font-weight: 300;
    color: #2070e5;
  }
  /* .show_modal_class {
    opacity: 1;
    display: block;
    transition: .5s;
  }
  .close_modal_class {
    display: none;
    opacity: 0;
    transition: .5s;
  } */
  </style>