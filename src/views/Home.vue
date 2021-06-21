<template>
  <div class="home">
      
      <HeaderQayla/>
      <HeroQayla/>
      <ProductQayla/>
      <ProductQayla2/>
      <InstaQayla/>
      <FooterQayla/>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import HeaderQayla from "@/components/HeaderQayla.vue";
import HeroQayla from "@/components/HeroQayla.vue";
import ProductQayla from "@/components/ProductQayla.vue";
import ProductQayla2 from "@/components/ProductQayla2.vue";
import InstaQayla from "@/components/InstaQayla.vue";
import FooterQayla from "@/components/FooterQayla.vue";


export default {
  name: 'Home',
  components: {
        HeaderQayla,
        HeroQayla,
        ProductQayla,
        ProductQayla2,
        InstaQayla,
        FooterQayla
  }
};
</script>
