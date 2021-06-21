<template>

<div>
 
        <div class="container">
            <div class="inner-header">
        
        <b-navbar toggleable="lg">
        

            <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>

            <div class="col-sm-1 col-md-1"></div>
            <b-navbar-brand href="#">Hijab</b-navbar-brand>

            <div class="col-sm-1 col-md-1"></div>
            <b-navbar-brand href="#">Dress</b-navbar-brand>

            <div class="col-sm-8 col-md-8"></div>
            <router-link to="/"><font face="Allura" color="black" size="10" text="bold">By.Qayla</font></router-link>
            
            
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </b-navbar-nav>

        <div class="col-sm-4 col-md-4"></div>
                    <div class="col-sm-4 text-right col-md-4">
                        <ul class="nav-right">
                            <li class="cart-icon">
                                 &nbsp;
                                <a href="#">
                                    <i class="icon_bag_alt"></i>
                                    <span>{{  keranjangUser.length }}</span>
                                </a>
                                <div class="cart-hover">
                                    <div class="select-items">
                                        <table>
                                            <tbody v-if="keranjangUser.length > 0">

                                                <tr v-for=" keranjang in keranjangUser" :key="keranjang.id">
                                                    <td class="si-pic">
                                                        <img class="photo-item" :src="keranjang.photo" alt="" />
                                                    </td>
                                                    <td class="si-text">
                                                        <div class="product-selected">
                                                            <p>Rp.{{ keranjang.price }}</p>
                                                            <h6>{{ keranjang.name }}</h6>
                                                        </div>
                                                    </td>
                                                    <td @click="removeItem(keranjang.id)" class="si-close">
                                                        <i class="ti-close"></i>
                                                    </td>
                                                </tr>
                                                
                                            </tbody>
                                            <tbody v-else>
                                                  <tr>
                                                    <td>Keranjang Kosong</td>    
                                                  </tr>  
                                            </tbody>
                                        </table>
                                    </div>
                                    <div class="select-total">
                                        <span>total:</span>
                                        <h5>Rp.{{  totalHarga }}</h5>
                                    </div>
                                    <div class="select-button">
                                        <a href="#" class="primary-btn view-card"><router-link to="/keranjang" style="color: #FFF;">VIEW CARD</router-link></a>
                                        <a href="#" class="primary-btn checkout-btn">CHECK OUT</a>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                </b-collapse>
            </b-navbar>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name: 'HeaderQayla',
    data() {
      return {
        keranjangUser: []
      };
    },
    methods: {
        removeItem(idx) {
            let keranjangUserStorage = JSON.parse(localStorage.getItem("keranjangUser"));
            let itemKeranjangUserStorage = keranjangUserStorage.map(itemKeranjangUserStorage => itemKeranjangUserStorage.id);
            
            let index = itemKeranjangUserStorage.findIndex(id => id == idx);
            this.keranjangUser.splice(index, 1);

            const parsed = JSON.stringify(this.keranjangUser);
            localStorage.setItem("keranjangUser", parsed);
            window.location.reload();
        }
    },
    mounted() {
        if (localStorage.getItem('keranjangUser')) {
            try {
                this.keranjangUser = JSON.parse(localStorage.getItem('keranjangUser'));
            } catch(e) {
                localStorage.removeItem('keranjangUser');
            }
        }
    },
    // menampilkan data yang akan di kalkulasi sebelumnya menggunakan fungsi reduce
    computed: {
        totalHarga() {
            return this.keranjangUser.reduce(function(items, data){
                return items + data.price;
            }, 0);
        }
    }
};
</script>

<style scoped>
    .photo-item {
        width: 80px;
        height: 80px;
    }

    
</style>