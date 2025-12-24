<template>
  <div class="solution_left_type">
    <p class="solution_left_type_title">行业解决方案</p>
    <section class="solution_choose_box">
      <li
        v-for="(item, index) in solutionTypeArr"
        :key="index"
        class="choose_item"
        :class="current == index ? 'choosedType' : ''"
        @click="chooseType(index)"
      >
        <div class="line_show"></div>
        <div class="transform_box">
          <img class="icon_svg_img" :src="item.imgUrl" alt="" />
          <span class="choose_type_name">{{ item.name }}</span>
        </div>
      </li>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number | String,
      default: 0
    }
  },
  data() {
    return {
      solutionTypeArr: [
        {
          name: "智慧水务",
          value: 0,
          imgUrl: require("../../assets/images/jjfn_icon/shuiwu.svg"),
        },
        {
          name: "智慧交通",
          value: 1,
          imgUrl: require("../../assets/images/jjfn_icon/jiaotong.svg"),
        },
        {
          name: "钢铁冶金",
          value: 2,
          imgUrl: require("../../assets/images/jjfn_icon/gangtie.svg"),
        },
        {
          name: "仓储物流",
          value: 3,
          imgUrl: require("../../assets/images/jjfn_icon/wuliu.svg"),
        },
        {
          name: "智慧工厂",
          value: 4,
          imgUrl: require("../../assets/images/jjfn_icon/gongchang.svg"),
        },
        {
          name: "智慧政务",
          value: 5,
          imgUrl: require("../../assets/images/jjfn_icon/zhengwu.svg"),
        },
        {
          name: "智慧园区",
          value: 6,
          imgUrl: require("../../assets/images/jjfn_icon/yuanqu.svg"),
        },
        {
          name: "光伏能源",
          value: 7,
          imgUrl: require("../../assets/images/jjfn_icon/guangfu.svg"),
        },
        {
          name: "智慧校园",
          value: 8,
          imgUrl: require("../../assets/images/jjfn_icon/dian.svg"),
        },
        {
          name: "智慧医疗",
          value: 9,
          imgUrl: require("../../assets/images/jjfn_icon/yiliao.svg"),
        },
      ],
      current: 0,
    };
  },
  methods: {
    chooseType(index) {
      this.current = index;
      // this.$emit('update:currentIndex', index)
      this.$emit('changeType', index)
    },
  },
  watch: {
    index(newVal) {
      this.current = newVal
    }
  }
  // mounted() {
  //   this.current = this.index
  // }
};
</script>

<style scoped>
.solution_left_type {
  width: 400px;
  height: 976px;
  padding: 80px 80px 117px 80px;
  background: #222c3c;
  /* background: pink;
  position: fixed; */
  /* top: 640px; */
}
.solution_left_type_title {
  font-size: 32px;
  font-family: Source Han Sans CN;
  font-weight: 500;
  color: #ffffff;
}
.solution_choose_box {
  margin-top: 24px;
}
.solution_left_type .choose_item {
  height: 72px;
  line-height: 72px;
  width: 290px;
  display: inline-block;
  /* text-align: center; */
  /* border-top: 1px solid #3D4B64; */
  border-bottom: 1px solid #3d4b64;
  font-family: Source Han Sans CN;
  font-weight: 300;
  color: #ffffff;
  opacity: 0.7;
  box-sizing: border-box;
  cursor: pointer;
  /* position: relative; */
}
.choose_item:first-child {
  border-top: 1px solid #3d4b64;
}
.icon_svg_img {
  width: 25px;
  height: 26px;
  position: relative;
  top: 8px;
  margin-right: 13px;
  color: #ffffff;
}
.choosedType {
  border-top: 1px solid #758bb2 !important;
  /* border-bottom: 1px solid #758BB2!important; */
  border-color: #758bb2 !important;
  opacity: 1 !important;
  position: relative;
  box-sizing: border-box;
}
.choosedType .transform_box {
  max-width: 130px;
  position: absolute;
  transform: translate(170px, 0);
  transition: 0.5s ease-in-out;
  white-space: nowrap;
  /* position: relative;
    top: 1px; */
}
.choose_type_name {
  /* width: ; */
  /* background: pink; */
  white-space: nowrap;
  font-size: 20px;
}
.line_show {
  width: 0px;
  height: 3px;
  /* float: left; */
  background: #2070e5;
  position: relative;
  top: 36px;
}
.choosedType .line_show {
  width: 14px;
  transition: 0.3s 0.3s;
}
/* .choosedType::before {
    content: '';
    width: 14px;
    height: 3px;
    float: left;
    background: #2070E5;
    position: relative;
    top: 36px;
} */
.choosedType.choose_item.icon_svg_img {
  /* border-top: none; */
  /* filter: drop-shadow(#ffffff 100px 0);
	transform: translateX(-100px); */
}
</style>