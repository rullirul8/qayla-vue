<template>
<!-- Women Banner Section Begin -->
    <section class="women-banner spad">
        <div class="container p-4 my-4">
            <h3><font face="Allura" size="10" text="bold">Hijab</font></h3>
            <div class="row">
                <div class="col-lg-12 mt-5">
                    <carousel class="product-slider" :items="4" :dots="false" :autoplay="true" :nav="false">

                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="img/products/hijab/hijab-1.png" alt=""/>
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="icon_bag_alt"></i></a>
                                    </li>
                                    <li class="quick-view">
                                        <router-link to="/product">+ Quick View</router-link>
                                        </li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Hijab</div>
                                <a href="#">
                                    <h5>Sabeela Shawl</h5>
                                </a>
                                <div class="product-price">
                                    $14.00
                                </div>
                            </div>
                        </div>

                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="img/products/hijab/hijab-2.png" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="icon_bag_alt"></i></a>
                                    </li>
                                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Hijab</div>
                                <a href="#">
                                    <h5>Sabeela Shawl</h5>
                                </a>
                                <div class="product-price">
                                    $13.00
                                </div>
                            </div>
                        </div>

                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="img/products/hijab/hijab-3.png" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="icon_bag_alt"></i></a>
                                    </li>
                                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Jumpsuit & Overall</div>
                                <a href="#">
                                    <h5>Thalia Overall</h5>
                                </a>
                                <div class="product-price">
                                    $13.00
                                </div>
                            </div>
                        </div>

                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="img/products/hijab/hijab-4.jpeg" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="icon_bag_alt"></i></a>
                                    </li>
                                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                                </ul>
                            </div>
                            <div class="pi-text">
                                <div class="catagory-name">Shirt</div>
                                <a href="#">
                                    <h5>Zaina Shirt</h5>
                                </a>
                                <div class="product-price">
                                    $14.00
                                </div>
                            </div>
                        </div>

                        <div class="product-item">
                            <div class="pi-pic">
                                <img src="img/products/hijab/kemeja-1.png" alt="" />
                                <ul>
                                    <li class="w-icon active">
                                        <a href="#"><i class="icon_bag_alt"></i></a>
                                    </li>
                                    <li class="quick-view"><a href="#">+ Quick View</a></li>
                                    <li class="w-icon">
                                        <a href="#"><i class="fa fa-random"></i></a>
                                    </li>
                                </ul>
                            </div>
                            
                            <div class="pi-text">
                                <div class="catagory-name">Hijab</div>
                                <a href="#">
                                    <h5>Sabeela Shawl</h5>
                                </a>
                                <div class="product-price">
                                    $14.00
                                </div>
                            </div>
                        </div>

                    </carousel>
                </div>
            </div>
        </div>
    </section>
    <!-- Women Banner Section End -->
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
    name: 'ProductQayla',
    components: {
        carousel
    }
}
</script>

<style scoped>
.product-item {
    margin-right: 25px;
    
}
</style>