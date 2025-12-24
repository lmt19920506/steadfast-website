<template>
  <div>
    <div class="footer_container pc_container">
      <div class="top">
        <img src="@/assets/images/logo.png" class="logo_img" alt="" />
        <div class="phone_num">
          <p>全国服务电话:</p>
          <h1>400-859-8181</h1>
        </div>
      </div>
      <section class="desc_box">
        <div class="left">
          <p>
            <span class="title">应用案例</span>
            <span
              class="content">自动化传统应用&nbsp;&nbsp;&nbsp;&nbsp;信息化高级应用&nbsp;&nbsp;&nbsp;&nbsp;可视化综合应用&nbsp;&nbsp;&nbsp;&nbsp;网络化安全应用</span>
          </p>
          <p>
            <span class="title">解决方案</span>
            <span
              class="content">未来工厂设计专家&nbsp;&nbsp;&nbsp;&nbsp;信息化规划专家&nbsp;&nbsp;&nbsp;&nbsp;信息安全防护专家&nbsp;&nbsp;&nbsp;&nbsp;工业物联网应用专家&nbsp;&nbsp;&nbsp;&nbsp;个性需求定制专家</span>
          </p>
        </div>
        <div class="right_img_box">
          <div class="img_box" style="position: relative; right: 20px">
            <img src="../../assets/images/code1.png" alt="" />
            <p>客服微信</p>
          </div>
          <div class="img_box">
            <img src="../../assets/images/weixin.png" alt="" />
            <p>行业交流群</p>
          </div>
        </div>
      </section>
      <p class="company_text">
        © {{ showYear }} 广州力控元海信息科技有限公司. All Rights Reserved.
        <a class="beian_link" href="https://beian.miit.gov.cn/" target="_blank">粤ICP备18049300号-4</a> Designed by Wanhu
      </p>
    </div>
    <div class="mobile_container">
      <div class="mobile_footer">
        <div class="mobile_qr_code_box">
          <div class="mobile_code_item flex_center">
            <img src="../../assets/images/code1.png" alt="">
            <p class="mobile_code_text">客服微信</p>
          </div>
          <div class="mobile_code_item flex_center">
            <img src="../../assets/images/weixin.png" alt="">
            <p class="mobile_code_text">行业交流群</p>
          </div>
        </div>
        <div class="mobile_phone_box flex_center">
          <p>
            <span class="mobile_phone_text">全国服务电话:&nbsp;</span>
            <span class="mobile_phone_number">400-859-8181</span>
          </p>
          <p class="mobile_link_box">
            <span class="mobile_link_text">链接入口</span>
            <span>&nbsp;<img class="mobile_link_sanjiao" src="../../assets/images/mobile/mobile_sanjiao.png" alt="">&nbsp;</span>
            <span class="mobile_phone_text">力控元海</span>
          </p>
        </div>
        <div class="mobile_address_box">
          <p>© {{ showYear }} 广州力控元海信息科技有限公司. All Rights Reserved.</p>
          <p>粤ICP备18049300号-4 Designed by Wanhu</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showYear() {
      return new Date().getFullYear()
    }
  }
};
</script>

<style scoped>
.footer_container {
  width: 100%;
  height: 316px;
  background: #191b1e;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.footer_container .top {
  min-width: 1200px;
  height: 89px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #474e58;
  /* background: pink; */
}

.footer_container .top>img {
  width: 406px;
  height: 36px;
}

.footer_container .top>.phone_num {
  color: #ffffff;
  font-family: SourceHanSansCN-Normal;
  font-weight: 400;
  display: flex;
  align-items: center;
}

.footer_container .top>.phone_num>p {
  opacity: 0.6;
  margin-right: 13px;
}

.footer_container .top>.phone_num>h1 {
  font-size: 24px;
}

.footer_container>.desc_box {
  width: 1200px;
  height: 172px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 30px 0;
}

.footer_container>.desc_box>.left {
  font-family: SourceHanSansCN-Normal;
  font-size: 14px;
}

.footer_container>.desc_box>.left>p:nth-child(2) {
  margin-top: 28px;
}

.footer_container>.desc_box>.left>p>.title {
  color: #ffffff;
}

.footer_container>.desc_box>.left>p>.content {
  margin-left: 24px;
  color: #b3b3b3;
}

.footer_container>.desc_box>.right_img_box {
  width: 200px;
  height: 100px;
  /* background: pink; */
  display: flex;
}

.footer_container>.desc_box>.right_img_box>.img_box {
  width: 99px;
  height: 100px;
  /* background: pink; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.footer_container>.desc_box>.right_img_box>.img_box>img {
  width: 99px;
  height: 100px;
}

.footer_container>.desc_box>.right_img_box>.img_box>p {
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #ffffff;
  margin-top: 10px;
  white-space: nowrap;
}

.footer_container .company_text {
  width: 100%;
  height: 53px;
  line-height: 53px;
  border-top: 1px solid #474e58;
  width: 100%;
  text-align: center;
  color: #808080;
  font-family: SourceHanSansCN-Normal;
  font-size: 14px;
}

.beian_link {
  color: #808080;
  text-decoration: none;
}

.beian_link:hover {
  color: #1890ff
}
.mobile_footer {
}
.mobile_footer .mobile_qr_code_box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 149.52px 200.25px;
  border-bottom: 1px solid rgba(255, 255, 255, .1);
}
.mobile_footer .mobile_qr_code_box .mobile_code_item {
}
.mobile_footer .mobile_qr_code_box img {
  width: 555.36px;
  height: 555.36px;
}
.mobile_footer .mobile_qr_code_box .mobile_code_text {
  font-size: 61.41px;
  margin-top: 29.37px;
}
.mobile_phone_box {
  border-bottom: 2.67px solid rgba(255, 255, 255, .1);
  display: flex;
  padding: 98.05px 149.52px;
}
.mobile_phone_text {
  color: #fff;
  opacity: .6;
  font-size: 53.4px;
}
.mobile_phone_number {
  color: #fff;
  font-size: 74.76px;
}
.mobile_link_box {
  margin-top: 48.06px;
}
.mobile_link_sanjiao {
  width: 29.904px;
  height: 26.7px;
}
.mobile_link_text {
  color: #fff;
  font-size: 32.04px;
}
.mobile_address_box {
  padding: 32.04px;
}
.mobile_address_box > p {
  width: 100%;
  text-align: center;
  color: #808080;
  font-family: SourceHanSansCN-Normal;
  font-size: 56.07px;
  margin-top: 29.37px;
}
</style>