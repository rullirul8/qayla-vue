<template>

    <section class="hero-section">
        <carousel class="hero-items" :items="1" :nav="false" :autoplay="true">

            <div class="single-hero-items set-bg" style="background-image: url('/img/heroo2.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            
                            <h1>By.Qayla</h1>
                            <p>Embrace Your Style</p>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div class="single-hero-items set-bg" style="background-image: url('/img/heroo1.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Dress</span>
                            <h1>Odile Tunic</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <a href="#" class="primary-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="single-hero-items set-bg" style="background-image: url('/img/heroo2.jpg')">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5">
                            <span>Bag,kids</span>
                            <h1>Black friday</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            </p>
                            <a href="#" class="primary-btn">Shop Now</a>
                        </div>
                    </div>
                </div>
            </div>

        </carousel>
    </section>

</template>

<script>
import carousel from "vue-owl-carousel";

export default {
    name: 'HeroQayla',
    components: {
        carousel
    }
}
</script>