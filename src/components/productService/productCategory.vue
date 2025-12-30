<template>
    <div class="product-category-container">
        <section class="title-box">
            <p class="title">Product Category</p>
            <p class="desc">With a global network of more than 10000 electronic component suppliers, Steadfast can source a wide range of components for your business needs.</p>
            <p class="desc">Integrated circuits, discrete semiconductors, circuit protection, sensors, connectors, resistors, capacitors, isolators, relays, memory card modules, power boards, radio frequency</p>   
        </section>
    <section class="show-category-box">
        <div class="category-item" v-for="(item, index) in categoryList" :key="index" @click="goTo(item)">{{ item.text }}</div>
    </section>
    <section class="icon-container">
        <p class="title">Application Industry</p>
        <div class="icon-desc-box">
        <div class="icon-item" v-for="(item, index) in iconList" :key="index">
            <img :src="item.url" alt="">
            <p>{{ item.name }}</p>
        </div>
    </div>
    </section>
    </div>
</template>

<script>
export default {
  data() {
    this.categoryList = [
      { id: 1, text: "Integrated Circuits (ICS)", anchor: "ics" },
      { id: 5, text: "Connector Interconnect", anchor: "connector" },
      { id: 11, text: "Power Supply/UPS", anchor: "ups" },
      { id: 2, text: "Servo", anchor: "servo" },
      { id: 3, text: "Radar", anchor: "radar" },
      { id: 4, text: "Sensor Sensors & Camera", anchor: "camera" },
      { id: 8, text: "relay", anchor: "relay" },
      { id: 10, text: "Memory Cards, Modules", anchor: "mcm" },
      { id: 12, text: "RF/IF and RFID", anchor: "rfid" },
    ];
    this.iconList = [
      {
        name: "Artificial Intelligence",
        url: require("../../assets/images/product/ai.jpg"),
      },
      { name: "new energy", url: require("../../assets/images/product/ne.jpg") },
      {
        name: "Industrial Electronics",
        url: require("../../assets/images/product/ie.jpg"),
      },
      {
        name: "Automotive Electronics",
        url: require("../../assets/images/product/ae.jpg"),
      },
      {
        name: "Communication Electronics",
        url: require("../../assets/images/product/ce.jpg"),
      },
      {
        name: "Medical Electronics",
        url: require("../../assets/images/product/me.jpg"),
      },
      {
        name: "Consumer Electronics",
        url: require("../../assets/images/product/ce2.jpg"),
      },
      {
        name: "Internet of Things",
        url: require("../../assets/images/product/it.jpg"),
      },
    ];
    return {};
  },
  methods: {
    goTo(item) {
      console.log("go to ===", item);
      this.$router.push({
        path: "/product-description",
        query: { target: item.anchor },
      });
    },
  },
};
</script>

<style scoped>
.product-category-container {
  width: 80%;
  height: 100px;
  /* padding: 30px; */
  margin: 0 auto;
}
.title-box {
  margin-top: 30px;
}
.title {
  padding-left: 40px;
  font-size: 30px;
  position: relative;
  visibility: visible;
  animation-duration: 1s;
  animation-delay: 0.2s;
  animation-name: fadeInUp;
}
.title::before {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  background: #722f8b;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
.desc {
  width: 100%;
  font-size: 20px;
  animation-duration: 1s;
  animation-delay: 0.2s;
  animation-name: fadeInUp;
  /* background: red;
  white-space: nowrap; */
}
.show-category-box {
  width: 100%;
  /* background: yellow; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
  animation-duration: 1s;
  animation-delay: 0.2s;
  animation-name: fadeInUp;
}
.category-item {
  width: calc((100% - 80px) / 3);
  flex: 0 0 auto;
  /* margin-right: 20px; */
  margin-bottom: 20px;
  padding: 50px 45px;
  font-size: 25px;
  cursor: pointer;
  transition: opacity 0.4s ease;
}
.category-item:hover {
  scale: 1.1
}
.category-item:nth-child(odd) {
  background: #722f8b;
  color: #fff;
}
.category-item:nth-child(even) {
  background: #fff;
  color: #722f8b;
}
.icon-container {
  margin-top: 30px;
}
.icon-desc-box {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  max-width: 100%;
  background: #722f8b;
  margin-top: 30px;
  visibility: visible;
  animation-duration: 1s;
  animation-delay: 0.2s;
  animation-name: fadeInUp;
}
.icon-item {
  flex: 0 0 auto;
  width: calc(100% / 8);
  flex-basis: calc(100% / 8);
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  /* background: pink;
  outline: 1px solid red; */
  transition: transform 0.3s ease;
}
.icon-item:hover {
  transform: scale(1.1);
}
.icon-item p {
  width: 100%;
  text-align: center;
  font-size: 20px;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
  }
}
</style>