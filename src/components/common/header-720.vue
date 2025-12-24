<template>
  <div>
    <section class="header pc_container">
      <div class="left_logo_box">
        <img
          src="@/assets/images/logo.png"
          class="logo_img"
          alt=""
          @click="goHome"
        />
      </div>
      <ul class="center_menu_box navbar-nav">
        <li
          v-for="(item, index) in menuList"
          @click="toggle(item.path)"
          :key="index"
          class="w3ls-hover menu_item_text active"
          :class="currentPath === item.path ? 'currentPathActive' : ''"
        >
          {{ item.name }}
        </li>
        <!-- </ul> -->
      </ul>
      <div class="right_number_box">
        <img class="phone_icon" src="@/assets/images/dianhua@2x.png" alt="" />
        <span class="phone_text">全国服务电话</span>
        <span class="phone_number">400-859-8181</span>
        <div class="header_login_register_box">
          <!-- <span class="login_text" @click="login">登陆</span>
        <span class="register_text" @click="register">注册</span> -->
        </div>
      </div>
      <!-- <div class="modal_container" v-if="isShowModal" @click.self="closeModal"> -->
      <div
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
              src="../../assets/images/denglu@2x.png"
              alt=""
            />
            <div class="left_text-box">
              <p class="left_title">低代码数字孪生可视化平台</p>
              <p class="left_desc">主力企业更智能更高效解决方案</p>
            </div>
          </div>
          <div class="right_form_box">
            <section class="right_title_box">
              <p class="right_title">{{ typeText }}</p>
              <!-- <span v-if="formType === 'register'" @click="formType = 'emial'">邮箱注册</span> -->
              <span v-if="formType === 'email'" @click="formType = 'register'"
                >手机号注册</span
              >
            </section>
            <section class="form_model_box">
              <el-form :model="form" v-if="formType === 'login'">
                <el-form-item>
                  <!-- <input class="input_item" type="text" placeholder="请输入账号/手机号"> -->
                  <el-input
                    class="input_item"
                    placeholder="请输入账号/手机号"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    class="input_item"
                    show-password
                    placeholder="请输入密码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    class="input_item yanzhengma"
                    placeholder="请输入验证码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-checkbox>下次自动登录</el-checkbox>
                </el-form-item>
              </el-form>
              <el-form :model="form" v-if="formType === 'register'">
                <el-form-item>
                  <!-- <input class="input_item" type="text" placeholder="请输入账号/手机号"> -->
                  <el-input
                    class="input_item"
                    placeholder="请输入账号/手机号"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    class="input_item register_get_code"
                    placeholder="请输入验证码"
                  >
                    <span slot="suffix">获取验证码</span>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    class="input_item"
                    show-password
                    placeholder="输入密码 (8-16位,必须有数字、大小写字母)"
                  ></el-input>
                </el-form-item>
              </el-form>
              <el-form :model="form" v-if="formType === 'findPassword'">
                <el-form-item>
                  <!-- <input class="input_item" type="text" placeholder="请输入账号/手机号"> -->
                  <el-input
                    class="input_item"
                    placeholder="请输入手机号"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    class="input_item register_get_code"
                    placeholder="请输入验证码"
                  >
                    <span slot="suffix">获取验证码</span>
                  </el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    class="input_item"
                    show-password
                    placeholder="新密码"
                  ></el-input>
                </el-form-item>
                <el-form-item>
                  <el-input
                    class="input_item"
                    show-password
                    placeholder="确认密码"
                  ></el-input>
                </el-form-item>
              </el-form>
              <div class="login_btn">{{ btnText }}</div>
              <div class="login_bottom_text_box">
                <template v-if="formType === 'login'">
                  <p
                    @click="
                      (formType = 'findPassword'),
                        (typeText = '找回密码'),
                        (btnText = '保存')
                    "
                  >
                    忘记密码
                  </p>
                  <p>
                    没有账号?<span
                      @click="
                        (formType = 'register'),
                          (typeText = '手机号注册'),
                          (btnText = '注册')
                      "
                      >立即注册</span
                    >
                  </p>
                </template>
                <template v-if="['register', 'email'].indexOf(formType) > -1">
                  <span></span>
                  <p>
                    已有账号?<span
                      @click="
                        (formType = 'login'),
                          (typeText = '用户登陆'),
                          (btnText = '登陆')
                      "
                      >去登陆</span
                    >
                  </p>
                </template>
                <template v-if="formType === 'findPassword'">
                  <span></span>
                  <p>
                    想起密码?<span
                      @click="
                        (formType = 'login'),
                          (typeText = '用户登陆'),
                          (btnText = '登陆')
                      "
                      >去登陆</span
                    >
                  </p>
                </template>
              </div>
            </section>
          </div>
        </section>
      </div>
    </section>
    <section class="mobile_header_box">
      <div class="mobile_header">
        <img
          src="@/assets/images/logo.png"
          class="mobile_logo_img"
          alt=""
          @click="goHome"
        />
        <img
          v-if="!isShowMobileMenu"
          src="@/assets/images/mobile/mobile_caidan.png"
          class="mobile_caidan_icon"
          alt=""
          @click="isShowMobileMenu = true"
        />
        <img
          v-if="isShowMobileMenu"
          src="@/assets/images/close_icon.png"
          class="mobile_caidan_icon"
          alt=""
          @click="isShowMobileMenu = false"
        />
      </div>
      <section
        class="mobile_menu_modal"
        v-if="isShowMobileMenu"
      >
        <div
          class="mobile_menu_item"
          v-for="(item, index) in menuList"
          :key="index"
          @click="toggle(item.path)"
          style="height: 80px; line-height: 80px; font-size: 18px"
        >
          {{ item.name }}
        </div>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    this.menuList = [
      { name: "首页", path: "/", value: "" },
      { name: "产品服务", path: "/product-service", value: "" },
      { name: "产品说明", path: "/product-description", value: "" },
      { name: "解决方案", path: "/solution", value: "" },
      { name: "应用案例", path: "/application-case", value: "" },
      { name: "联系我们", path: "/contact", value: "" },
    ];
    this.rules = {
      name: [
        {
          required: true,
          message: "Please input Activity name",
          trigger: "blur",
        },
      ],
    };
    return {
      currentPath: "/",
      isShowModal: false,
      typeText: "用户登录",
      form: {
        phone: "",
        password: "",
        captcha: "",
      },
      btnText: "登陆",
      formType: "login", // 登陆类型
      isShowMobileMenu: false,
    };
  },
  methods: {
    toggle(path) {
      console.log("点击切换菜单---", path);
      this.currentPath = path;
      this.$router.push({
        path,
      });
      this.isShowMobileMenu = false;
    },
    goHome() {
      this.$router.push({
        path: "/",
      });
    },
    closeModal() {
      this.isShowModal = false;
    },
    login() {
      this.isShowModal = true;
      this.typeText = "用户登录";
      this.btnText = "登陆";
      this.formType = "login";
    },
    register() {
      this.isShowModal = true;
      this.typeText = "手机号注册";
      this.btnText = "注册";
      this.formType = "register";
    },
    showMobileMenu() {
      console.log("click");
      this.isShowMobileMenu = true;
    },
  },
  mounted() {
    const route = this.$route.path;
    console.log("当前路由---", route);
  },
  watch: {
    "$route.path": {
      handler(newVal) {
        console.log("watch-url---", newVal);
        // this.currentPath = newVal;
        if (newVal.indexOf("product-description") > -1) {
          this.currentPath = "/product-description";
        }
        if (newVal.indexOf("solution") > -1) {
          this.currentPath = "/solution";
        }
        if (newVal.indexOf("product-service") > -1) {
          this.currentPath = "/product-service";
        }
        if (newVal.indexOf("application-case") > -1) {
          this.currentPath = "/application-case";
        }
        if (newVal.indexOf("contact") > -1) {
          this.currentPath = "/contact";
        }
        if (newVal === "/") {
          this.currentPath = "/";
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 68px;
  border-bottom: 1px solid rgba(239, 249, 253, 0.2);
  display: flex;
  justify-content: space-between;
  background: #1a1b1f;
  position: fixed;
  z-index: 999;
  top: 0;
}

.header .left_logo_box {
  height: 68px;
  width: 406px;
  display: flex;
  align-items: center;
  padding-left: 40px;
  white-space: nowrap;
}

.header .left_logo_box .logo_img {
  width: 406px;
  height: 36px;
}

.header .left_logo_box .logo_img:hover {
  cursor: pointer;
}

.header .center_menu_box {
  height: 68px;
  flex: 1;
  /* background: pink; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #b3b3b3;
  padding: 0 50px;
}

.header .center_menu_box li {
  display: inline-block;
  white-space: nowrap;
  font-family: Source Han Sans CN;
  height: 68px;
  line-height: 68px;
  font-size: 16px;
}

.header .center_menu_box .w3ls-hover:after {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid rgba(255, 255, 255, 0);
  bottom: 4px;
  /* border: 2px; */
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  -webkit-transition: all 280ms ease-in-out;
  -moz-transition: all 280ms ease-in-out;
  -o-transition: all 280ms ease-in-out;
  -ms-transition: all 280ms ease-in-out;
  transition: all 280ms ease-in-out;
  width: 0;
}

.header .center_menu_box .w3ls-hover:hover:after {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 2px solid #196fe5;
  -webkit-transition: width 350ms ease-in-out;
  -moz-transition: width 350ms ease-in-out;
  -o-transition: width 350ms ease-in-out;
  -ms-transition: width 350ms ease-in-out;
  transition: width 350ms ease-in-out;
  width: 100%;
}

.header .center_menu_box .navbar-default .navbar-nav li {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 2px solid #196fe5;
  -webkit-transition: width 350ms ease-in-out;
  -moz-transition: width 350ms ease-in-out;
  -o-transition: width 350ms ease-in-out;
  -ms-transition: width 350ms ease-in-out;
  transition: width 350ms ease-in-out;
  width: 100%;
}

.header .center_menu_box .w3ls-hover:hover {
  color: #fff;
  cursor: pointer;
}

.header .center_menu_box .currentPathActive:after {
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  backface-visibility: hidden;
  border: 1px solid rgba(255, 255, 255, 0);
  bottom: 4px;
  content: " ";
  display: block;
  margin: 0 auto;
  position: relative;
  width: 0;
}

.header .center_menu_box .currentPathActive:after {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-color: #196fe5;
  border: 2px solid #196fe5;
  width: 100%;
  border-radius: 5px;
}

.header .center_menu_box .navbar-default .navbar-nav li {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-color: #196fe5;
  border: 2px solid #196fe5;
  width: 100%;
  border-radius: 5px;
}

.header .center_menu_box .currentPathActive {
  color: #fff;
}

.header .right_number_box {
  width: 445px;
  height: 68px;
  display: flex;
  align-items: center;
}

.header .right_number_box .phone_icon {
  width: 32px;
  height: 32px;
}

.header .right_number_box .phone_text {
  font-size: 14px;
  font-family: SourceHanSansCN-Normal;
  color: #b3b3b3;
  margin-left: 10px;
  white-space: nowrap;
}

.header .right_number_box .phone_number {
  font-size: 24px;
  margin-left: 11px;
  color: #ffffff;
  white-space: nowrap;
}

.header .right_number_box .header_login_register_box {
  font-size: 16px;
  margin-left: 10px;
  white-space: nowrap;
}

.header .right_number_box .header_login_register_box .login_text {
  color: #196fe5;
}

.header .right_number_box .header_login_register_box .register_text {
  color: #ffffff;
  margin-left: 10px;
}

.header .modal_container {
  position: fixed;
  top: 68px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(18, 20, 24, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.header .modal_container .login_register_box {
  width: 1000px;
  height: 560px;
  border: 1px solid #2e394d;
  /* background: pink; */
  border-radius: 16px;
  display: flex;
}

.header .modal_container .login_register_box .left_img_box {
  width: 500px;
  height: 560px;
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

.header .modal_container .login_register_box .left_img_box .logo {
  width: 362px;
  height: 36px;
}

.center_picture {
  width: 416px;
  height: 467px;
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
  padding-top: 81px;
  padding-left: 49px;
  background: rgba(46, 57, 77, 0.8);
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
}

.right_form_box .right_title_box {
  display: flex;
  justify-content: space-between;
  width: 400px;
}

.right_form_box .right_title_box span {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #2070e5;
}

.right_form_box .right_title {
  /* width: 110px; */
  height: 27px;
  font-size: 28px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  line-height: 24px;
}

.form_model_box {
  margin-top: 32px;
}

.form_model_box input[type="text"] {
  outline: none;
  height: 49px;
}

.form_model_box .input_item {
  width: 401px;
  height: 49px;
  line-height: 49px;
}

.el-input__suffix-inner > span {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #2070e5 !important;
  margin-right: 10px;
  cursor: pointer;
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

.right_form_box .login_bottom_text_box {
  width: 400px;
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
}

.right_form_box .login_bottom_text_box p {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #ffffff;
  cursor: pointer;
}

.right_form_box .login_bottom_text_box p > span {
  color: #2070e5;
}

.mobile_header_box {
  display: none;
  width: 720px;
  position: fixed !important;
  top: 0;
  z-index: 1999 !important;
}

.mobile_header_box .mobile_header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background: yellow; */
  /* flex-direction: row; */
  padding: 0 40px;
}

.mobile_header_box .mobile_header .logo_img {
  /* height: 32px;
  width: 406px; */
}

.mobile_header_box .mobile_header .mobile_caidan_icon {
  /* width: 55px;
  height: 55px; */
  /* z-index: 1000; */
  width: 28px;
  height: 28px;
}

.mobile_menu_modal {
  position: fixed;
  top: 80px;
  left: 0;
  bottom: 0;
  right: 0;
  background: #212429;
  z-index: 999;
}

.mobile_menu_item {
  width: 100%;

  color: #fff;
  border-bottom: 1px solid #353941;
  padding-left: 40px;
}
.mobile_menu_item:nth-child(1) {
  border-top: 1px solid #353941;
}
.mobile_logo_img {
  width: 306px;
  height: 38px;
}
</style>

<style>
.header .form_model_box .el-form-item {
  margin-bottom: 10px;
}

.header
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
}

.header
  .form_model_box
  .el-form-item
  .el-form-item__content
  .input_item.yanzhengma
  .el-input__inner {
  width: 226px;
}

.header .form_model_box .el-form-item .el-checkbox .el-checkbox__inner {
  background-color: rgba(46, 57, 77, 0.8);
  border: 1px solid #7a8792;
}

.header .form_model_box .el-form-item .el-checkbox .el-checkbox__label {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #ffffff;
  line-height: 24px;
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
</style>