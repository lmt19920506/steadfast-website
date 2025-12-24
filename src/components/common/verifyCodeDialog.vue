<template>
  <section class="vefify_code_dialog">
    <el-dialog
      :visible.sync="isShow"
      width="320px"
      :close-on-click-modal="false"
      :modal="false"
      title="图形验证"
    >
      <div class="yzm_code_img_box">
        <img class="code_img" :src="codeImgUrl" @click="clickCodeImg" />
        <p @click="clickCodeImg" class="change_img_text">看不清楚?换一张</p>
      </div>
      <div class="yzm_input_box">
        <el-input v-model="code" placeholder="输入上方数字的运算结果"></el-input>
      </div>
      <div class="code_submit_btn" @click="confirmSendCode">确认</div>
    </el-dialog>
  </section>
</template>

<script>
import {getBase64} from '@/utils/index.js'
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
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
          this.codeId =res.data.result.id
        }
      })
    },
    clickCodeImg() {
        this.getImgCode()
    },
    // 确认发送验证码
    confirmSendCode() {
      const obj = {
        phone: this.phone,
        codeId: this.codeId,
        code: this.code
      }
      this.$axios.post(`http://www.forcecondtwin.com/prod-api/api/contactUs/getCaptcha`, obj).then(res => {
        if (res.data.code === 200 && res.data.type === 'success') {
          this.isShowCodeImgDialog = false;
          this.code = ''
          this.$emit('update:captcha', res.data.result.captcha)
        this.isShow = false
        this.$parent.countTime()
        } else {
          this.getImgCode()
          this.$message({
            type: 'error',
            message: res.data.message
          })
          this.code = ''
        }
      })
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
};
</script>

<style>
.vefify_code_dialog .el-dialog__header,
.vefify_code_dialog .el-dialog__body {
  /* background: rgba(46, 57, 77, 0.8); */
  background: #46546F;
}
.vefify_code_dialog .code_submit_btn {
  width: 96px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 4px;
  background: linear-gradient(90deg, #196fe5 0%, #09ace1 100%);
  border-radius: 4px;
  color: rgb(255, 255, 255);
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}
.vefify_code_dialog .yzm_code_img_box {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.change_img_text {
  font-size: 14px;
  cursor: pointer;
  color: #70A4F0;
}
.vefify_code_dialog .yzm_input_box {
  margin-top: 18px;
}
.vefify_code_dialog .yzm_input_box .el-input__inner {
  background: #46546F;
  border: 1px solid #A0AEBA;
  color: #ffffff
}
.el-dialog__title {
  color: #ffffff;
  font-size: 20px;
}
</style>