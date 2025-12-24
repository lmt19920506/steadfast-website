<template>
  <div>
    <div class="layout_default_container">
      <Header></Header>
      <component :is="currentComponent" class="show-content-box"></component>
      <!-- <createProject></createProject> -->
      <!-- <Footer></Footer> -->
    </div>
  </div>
</template>
  
  <script>
import Header from "../components/common/header.vue";
import Footer from "../components/common/footer.vue";
import createProject from "../components/common/createProject.vue";
import home from "@/views/home";
import productService from "@/views/product-service";
import productDescription from '@/views/product-description'
import productFrameIntroduction from '@/views/product-description/product-frame-introduction.vue'
import solution from '@/views/solution'
import applicationCase from '@/views/application-case'
import contact from '@/views/contact'
export default {
  components: {
    Header,
    Footer,
    createProject,
    home,
    productService,
    productDescription,
    productFrameIntroduction,
    solution,
    applicationCase,
    contact
  },
  data() {
    return {
      currentPath: "",
      currentComponent: "",
    };
  },
  methods: {},
  watch: {
    // currentPath(newVal) {
    //     console.log('current path watch---', newVal)
    //     if (newVal === '/') {
    //         this.currentComponent = 'home'
    //     }
    //     if (newVal === '/product-service') {
    //         this.currentComponent = 'productService'
    //     }
    // },
    "$route.path": {
      handler: function (newVal) {
        console.log("show-watch-path---", newVal);
        if (newVal === "/") {
          this.currentComponent = "home";
        }
        if (newVal === "/product-service") {
          this.currentComponent = "productService";
        }
        if (newVal === "/product-description") {
          this.currentComponent = "productDescription";
        }
        if (newVal === '/product-description/product-frame-introduction') {
            this.currentComponent = 'productFrameIntroduction'
        }
        if (newVal === "/solution") {
          this.currentComponent = "solution";
        }
        if (newVal === "/application-case") {
          this.currentComponent = "applicationCase";
        }
        if (newVal === "/contact") {
          this.currentComponent = "contact";
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    console.log("route---1", this.$route.path);
    this.currentPath = this.$route.path;
  },
};
</script>
  
  <style scoped>
  .show-content-box {
    margin-top: 68px;
    /* padding-top: 68px; */
    /* position: relative;
    top: 68px; */
  }
</style>