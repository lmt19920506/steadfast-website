<template>
  <div class="experience_container">
    <!-- <div class="experience_btn" @click="experience">申请体验</div> -->
    <!-- <div class="modal_bg" v-if="isShowModal"></div> -->
    <el-dialog
      custom-class="modal_container"
      :visible.sync="isShowModal"
      :modal-append-to-body="false"
      :show-close="false"
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
          <template v-if="!isSend">
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
                    !isShowTime ? "获取验证码" : `${time}s后重新发送`
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
            <div class="login_btn" @click="addOrder">提交</div>
          </section>
        </template>
        <div class="submit_success_box" v-else>
          <div class="submit_success_img_box">
            <img src="../../assets/images/tijiao chengg_@2x.png" alt="">
            <p class="success_title_1">提交成功</p>
            <p class="success_title_2">客户经理会在24小时内电话联系您</p>
            <p class="success_title_2">{{ time2 }}秒后自动关闭窗口</p>
          </div>
        </div>
        </div>
      </section>
    </el-dialog>
    <vefifyCodeDialog
      v-model="isShowCodeImgDialog"
      :phone="form.phone"
    ></vefifyCodeDialog>
  </div>
</template>

<script>
import vefifyCodeDialog from "@/components/common/verifyCodeDialog.vue";
export default {
  name: "experience",
  components: {
    vefifyCodeDialog,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    this.myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
    return {
      // isShowModal: false,
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
      timer: null,
      timer2: null,
      isSend: false,
      time2: 3
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
        this.$message({
          message: "请填写姓名",
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
      if (!this.form.captcha) {
        this.$message({
          message: "请填写验证码",
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
      if (this.form.isBook && !this.form.saler) {
        this.$message({
          message: "请填写销售姓名",
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
      this.$axios.post(`http://www.forcecondtwin.com/prod-api/api/applyInfo/add`, this.form).then(res => {
        console.log('新增预约---res---', res)
        if (res.data.code === 200 && res.data.type === 'success') {
          // this.$message({
          //   type: 'success',
          //   message: '预约成功，稍后会有相关人员联系您'
          // })
          this.form = Object.assign({}, this.$options.data().form)
          // this.isShowModal = false;
          this.isSend = true
          this.timer2 = setInterval(() => {
            this.time2--
            if (this.time2 === 0) {
            this.time2 = 3
            this.time = 60
              this.isShowModal = false
              this.isSend = false
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
    isShowModal: {
      get() {
        return this.value;
      },
      set(newVal) {
        this.$emit("input", newVal);
      },
    },
  },
  beforeDestroy() {
    clearInterval(this.timer)
    clearInterval(this.timer2)
  }
};
</script>

<style scoped>
.modal_bg {
  position: absolute;
  top: 68px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #121418;
  opacity: .8;
  z-index: 2000;
}
.experience_container .login_register_box {
  width: 1000px;
  height: 640px;
  border: 1px solid #2e394d;
  /* background: pink; */
  border-radius: 16px;
  display: flex;
}
.experience_container .login_register_box .left_img_box {
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
.experience_container .login_register_box .left_img_box .logo {
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
  /* background: rgba(46, 57, 77, 0.8); */
  background: #2E394D;
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
.right_form_box .submit_success_box {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
.right_form_box .submit_success_box .submit_success_img_box {
  width: 100%;
  text-align: center;
}
.right_form_box .submit_success_box .submit_success_img_box img {
  width: 56px;
  height: 56px;
}
.right_form_box .submit_success_box .submit_success_img_box p {
  text-align: center;
}
.success_title_1 {
  font-size: 18px;
font-family: Source Han Sans CN;
font-weight: 400;
color: #FFFFFF;
margin-top: 10px;
}
.success_title_2 {
  font-size: 14px;
font-family: Source Han Sans CN;
font-weight: 300;
color: #7A8792;
margin-top: 8px;
}
.success_title_3 {}
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
.experience_container {
  z-index: 2100!important;
}
.experience_container .modal_container {
  /* position: fixed;
  top: 68px;
  left: 0;
  right: 0;
  bottom: 0; */
  background: rgba(18, 20, 24, 0);
  /* display: flex;
  justify-content: center;
  align-items: center; */
}
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
  cursor: pointer;
}
</style>