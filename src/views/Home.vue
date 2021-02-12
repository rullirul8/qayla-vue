<template>
  <div class="home">
      
      <HeaderQayla/>
      <HeroQayla/>
      <ProductQayla/>
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
import InstaQayla from "@/components/InstaQayla.vue";
import FooterQayla from "@/components/FooterQayla.vue";


export default {
  name: 'Home',
  components: {
        HeaderQayla,
        HeroQayla,
        ProductQayla,
        InstaQayla,
        FooterQayla
  }
};
</script>
