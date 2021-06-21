<template>

    <footer class="footer-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-5">
                    <div class="footer-left text-left">
                        <div class="footer-logo">
                            <a href="#"><img src="img/qayla_putih.png" alt="" /></a>
                        </div>
                        <ul>
                            <li>Address: Kembangarum, Semarang</li>
                            <li>Phone: +62822081996</li>
                            <li>Email: qayla.id@gmail.com</li>
                        </ul>
                        <div class="footer-social">
                            <a href="https://www.facebook.com/byqayla_id-102270318186491/?ref=page_internal"><i class="fa fa-facebook"></i></a>
                            <a href="https://www.instagram.com/by.qayla_id/"><i class="fa fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1">
                    <div class="footer-widget text-left">
                        <h5>Informasi</h5>
                        <ul>
                            <li>
                                <router-link to="/tentangkami">Tentang Kami</router-link>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="footer-widget text-left">
                        <h5>My Account</h5>
                        <ul>
                            <li>
                                <a href="#">My Account</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <router-link to="/keranjang">
                                    <a @click="saveKeranjang(productDetails.id, productDetails.name, productDetails.price, productDetails.galleries[0].photo)" href="#">Keranjang Belanja</a>
                                </router-link>
                            </li>
                            <li>
                                <a href="#">Shop</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright-reserved">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="copyright-text">
                            Copyright &copy;
                            2021 All rights reserved | by.Qayla
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>


<script>
export default {
    name: 'FooterQayla'
}
</script>