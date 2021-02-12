<template>
  <div class="product">
      
      <HeaderQayla/>
      <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section text-left">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text product-more">
                        <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
                        <span>Detail</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Product Shop Section Begin -->
    <section class="product-shop spad page-details">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="product-pic-zoom">
                                <img class="product-big-img" :src="foto_hijab" alt="" />
                            </div>
                            <div class="product-thumbs">
                                <carousel :dots="false" :nav="false" class="product-thumbs-track ps-slider">
                                    <div class="pt" @click="changeImage(thumbs[0])" :class="thumbs[0] == foto_hijab ? 'active' : '' ">
                                        <img src="img/hijab_detail/ella1.png" alt="" />
                                    </div>

                                    <div class="pt" @click="changeImage(thumbs[1])" :class="thumbs[1] == foto_hijab ? 'active' : '' ">
                                        <img src="img/hijab_detail/ella2.png" alt="" />
                                    </div>

                                    <div class="pt" @click="changeImage(thumbs[2])" :class="thumbs[2] == foto_hijab ? 'active' : '' ">
                                        <img src="img/hijab_detail/ella3.png" alt="" />
                                    </div>

                                    <div class="pt" @click="changeImage(thumbs[3])" :class="thumbs[3] == foto_hijab ? 'active' : '' ">
                                        <img src="img/hijab_detail/ella4.png" alt="" />
                                    </div>
                                    
                                    <div class="pt" @click="changeImage(thumbs[4])" :class="thumbs[4] == foto_hijab ? 'active' : '' ">
                                        <img src="img/hijab_detail/ella5.png" alt="" />
                                    </div>
                                    
                                </carousel>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="product-details text-left">
                                <div class="pd-title">
                                    <span>Kemeja</span>
                                    <h3>Elle Brown Tunic</h3>
                                </div>
                                <div class="pd-desc">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, error officia. Rem aperiam laborum voluptatum vel, pariatur modi hic provident eum iure natus quos non a sequi, id accusantium! Autem.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam possimus quisquam animi, commodi, nihil voluptate nostrum neque architecto illo officiis doloremque et corrupti cupiditate voluptatibus error illum. Commodi expedita animi nulla aspernatur.
                                        Id asperiores blanditiis, omnis repudiandae iste inventore cum, quam sint molestiae accusamus voluptates ex tempora illum sit perspiciatis. Nostrum dolor tenetur amet, illo natus magni veniam quia sit nihil dolores.
                                        Commodi ratione distinctio harum voluptatum velit facilis voluptas animi non laudantium, id dolorem atque perferendis enim ducimus? A exercitationem recusandae aliquam quod. Itaque inventore obcaecati, unde quam
                                        impedit praesentium veritatis quis beatae ea atque perferendis voluptates velit architecto?
                                    </p>
                                    <h4>$15.00</h4>
                                </div>
                                <div class="quantity">
                                    <router-link to="/keranjang"><a href="shopping-cart.html" class="primary-btn pd-cart">Add To Cart</a></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Product Shop Section End -->
      
      <RelatedQayla/>
      <FooterQayla/>

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue';
import HeaderQayla from "@/components/HeaderQayla.vue";
import FooterQayla from "@/components/FooterQayla.vue";
import RelatedQayla from "@/components/RelatedQayla.vue";

import carousel from "vue-owl-carousel";

export default {
  name: 'product',
  components: {
        HeaderQayla,
        FooterQayla,
        carousel,
        RelatedQayla
  },
  data() {
      return {
        foto_hijab: "img/hijab_detail/ella1.png",
        thumbs: [
            "img/hijab_detail/ella1.png",
            "img/hijab_detail/ella2.png",
            "img/hijab_detail/ella3.png",
            "img/hijab_detail/ella4.png",
            "img/hijab_detail/ella5.png"
        ]
      }
  },
  methods: {
      changeImage(urlImage) {
          this.foto_hijab = urlImage
      }
  }
};
</script>

<style scoped>
.product-thumbs .pt {
    margin-right: 14px;
}

</style>
