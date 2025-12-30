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
import home from "@/views/home";
import productService from "@/views/product-service";
import productDescription from '@/views/product-description'
import solution from '@/views/solution'
import contact from '@/views/contact'
export default {
  components: {
    Header,
    Footer,
    home,
    productService,
    productDescription,
    solution,
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
        if (newVal === "/solution") {
          this.currentComponent = "solution";
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