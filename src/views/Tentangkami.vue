<template>
<div class="success">

    <HeaderQayla/>
    <div class="breacrumb-section text-left">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb-text product-more">
                        <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
                        <span>Tentang Kami</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="col col-lg-15 text-center">
            <h3 class="mt-4">
                Tentang By.Qayla
            </h3>
            <p class="mt-2" style="margin-bottom: 250px">
                By.Qayla merupakan e-commerce busana muslimah yang dideikasikan untuk menyediakan pakaian muslimah dengan gaya
                yang fresh dan fashionable. Kami menawarkan ragam pilihan busana muslimah, mulai dari pakaian bergaya basic seperti
                dress dan hijab. Produk-produk yang kami sediakan dipilih secara selektif untuk memenuhi kebutuhan fashion muslimah 
                bergaya chic dan up to date, semuanya ditawarkan dengan harga yang terjangkau. Selain bertujuan menjadi e-commerce 
                busana muslim terbaik di Indonesia, By.Qayla juga ingin menjadikan para Muslimah Indonesia untuk menjadi trendstter
                bagi fashion muslim dunia.
            </p>
        </div>
    </div>
    <FooterQayla/>
</div>
</template>

<script>
import HeaderQayla from "@/components/HeaderQayla.vue";
import FooterQayla from "@/components/FooterQayla.vue";

export default {
    name: "tentangkami",
        components: {
            HeaderQayla,
            FooterQayla
        }
};
</script>