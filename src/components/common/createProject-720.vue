<template>
  <div>
    <section class="create_demo_container pc_container">
      <p>快速搭建自己的可视化项目</p>
      <div class="tiyan_btn" @click="tiyan">申请体验</div>
      <experience v-model="isShowExperienceDialog"></experience>
    </section>
    <div class="mobile_create_experience_container mobile_container">
      <section class="mobile_create_experience">
        <p class="mobile_create_text">快速搭建自己的可视化项目</p>
        <div class="mobile_tiyan_btn" @click="tiyan_mobile">申请体验</div>
        <mobileExperience v-model="isShowMobileExperience" />
      </section>
    </div>
  </div>
</template>

<script>
import experience from '@/components/experience/index.vue'
import mobileExperience from '../mobile/experience/mobile-experience.vue';
export default {
  components: {
    experience,
    mobileExperience
  },
  data() {
    return {
      isShowExperienceDialog: false,
      isShowMobileExperience: false
    }
  },
  methods: {
    tiyan() {
      this.isShowExperienceDialog = true
    },
    tiyan_mobile() {
      this.isShowMobileExperience = true
    },
    experience() {
      this.$router.push({
        path: "/contact",
      });
    },
  },
};
</script>

<style scoped>
.create_demo_container {
  height: 320px;
  background: url("../../assets/images/tiyan.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* margin-top: 83px; */
}

.create_demo_container>p {
  color: #ffffff;
  font-size: 32px;
  font-family: SourceHanSansCN-Regular;
  font-weight: 400;
  letter-spacing: 3px;
  font-style: italic;
}

.create_demo_container .tiyan_btn {
  width: 190px;
  height: 54px;
  line-height: 54px;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(90deg, #006fff 0%, #4699fa 100%);
  border-radius: 8px;
  margin-top: 61px;
  cursor: pointer;
}

.mobile_create_experience_container {
  display: none;
}

.mobile_create_experience {
  width: 720px;
  height: 320px;
  background-image: url("../../assets/images/mobile/mobile_tiyan_bg_img.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.mobile_create_text {
  font-size: 32px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  font-style: italic;
  color: #FFFFFF;
}
.mobile_tiyan_btn {
  width: 225px;
  height: 54px;
  line-height: 54px;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
  background: linear-gradient(90deg, #006fff 0%, #4699fa 100%);
  border-radius: 8px;
  margin-top: 41px;
  cursor: pointer;
}

</style>