<template >
    <section class="sneakers">
        <header>
            <h2>Sneakers</h2>
        </header>
        <div class="navigators">
            <div class="row">

            <div class="filter col-4">
                <button id="filter" class="rounded bg-light" @click="sortCategory">Brand</button>
            </div>

            <div class="sort col-4">
                <button id="sort" class="rounded bg-light" @click="sortPrice"><i class="bi bi-arrow-down"></i>Price<i class="bi bi-arrow-up"></i></button>
            </div>

             <div class="search col-4">
                 <div class="input-group rounded">
                   <input class="filter-input rounded" id="search" v-model="searching" type="text" placeholder="Search" />
                   <span class="input-group-text border-0" id="search-addon">
                     <i class="fas fa-search text-warning"></i>
                   </span>
                 </div>
             </div>
            </div>
        </div>

        <div class="container-fluid pt-5">
            <SpinnerC v-if="loading"/>
            <div v-else>
             <div class="row d-flex justify-content-center ms-5"  v-if="filtering">
                <div class="col-10 d-flex flex-wrap">
                    <div class="product-item g-5 border" v-for="product in filtering" :key="product.id" style="width: 18rem;">
                        <img :src="product.imgURL" class="card-img-top" >
                        <div class="card-body">
                          <h5 class="card-title ms-5">{{product.prodName}}</h5>
                          <!-- <div class="card-text ms-5">{{product.category}}</div> -->
                          <!-- <div class="card-text">{{product.prodDescription}}</div> -->
                          <!-- <div class="card-text ms-5">R{{product.price}}</div> -->
                          <a href="../views/SingleProductView.vue" class="btn ms-5" >View Item</a>
                        </div>
                      </div>
                </div>
                    </div> 
                      <div id="error" v-else>Can't find </div>   
            </div>
        </div>
       
    </section>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
import SpinnerC from '../components/Spinner.vue'
export default {
    components: {
        SpinnerC
    },
    data(){
        return {
            loading : true,
            searching: ''
        }
    },
    created(){
        setTimeout(()=>{
            this.loading = false;
        },2000);
    },
    setup() {
        const store = useStore();
        store.dispatch("fetchProducts");
        let products = computed(()=> this.$store.state.products)
        return{
            products
        },
        {
            sortBy: 'name',
            filterBy: 'all',
            searchQuery:'',
            categories :['Nike', 'Jordan', 'Puma','Adidas']
        }
    },
    computed: {
        products() {
            return this.$store.state.products;
        },
        filtering() {
            if(this.searching.trim().length > 0){
                return this.products.filter((name)=> name.prodName.toLowerCase().includes(this.searching.trim()))
            }
            return this.products
        }
    },
    methods: {
        sortPrice() {
            this.$store.commit("sortProductsPrice")
        }
    }
}
</script>
<style scoped>
header{
    margin-left: 45%;
}
.navigators{
    margin-left: 15%;
}
.sneakers{
    padding-top: 4%;
    min-height: 100vh;
    margin-bottom: 5%;
}

#error{
    color: black;
    margin: 50px;
    padding-top: 150px;
}

</style>