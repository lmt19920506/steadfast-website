<template>
  <div>
    <div class="product_service_container pc_container">
      <banner></banner>
      <product-category></product-category>
    </div>
    <div class="mobile_container">
      <mobile-product-service></mobile-product-service>
    </div>
  </div>
</template>
  
<script>
import banner from "@/components/productService/nav.vue";
import ProductCategory from '@/components/productService/productCategory.vue'
import mobileProductService from "@/components/mobile/productService/mobile-productService.vue";
export default {
  components: {
    banner,
    ProductCategory,
    mobileProductService
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>