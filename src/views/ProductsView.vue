<template >
    <section class="sneakers">
        <header>
            <h1 class="title">SNEAKERS</h1>
        </header>
        <div class="navigators">
            <div class="row">
            
            <div class="search col-4 ">
                <div class="input-group rounded">
                  <input class="filter-input rounded" id="search" v-model="searching" type="text" placeholder="Search" />
                  <span class="input-group-text border-0" id="search-addon">
                    <i class="fas fa-search text-info"></i> 
                  </span>
                </div>
                 <button id="sort" class="rounded bg-light" @click="sortPrice">Sort By Price</button>
             </div>
            </div>
        </div>

        <div class="container pt-5">
            <SpinnerC v-if="loading"/>
            <div v-else>
             <div class="row d-flex justify-content-center ms-5"  v-if="filtering">
                <div class="card g-5 m-3 border bg-white " v-for="product in filtering" :key="product.id">
  <div class="card-img"> <router-link :to="{ name: 'singleProduct', params: { id: product.id } }">
    <img :src="product.imgURL" class="card-img-top" ></router-link></div>
  <div class="card-info pt-5">
    <p class="text-title">{{ product.prodName }} </p>
    <!-- <p class="text-body">{{ product.prodDescription }}</p> -->
  </div>
  <div class="card-footer">
  <span class="text-title"> R{{ product.price }}</span>
  <div class="card-button w-25">
    <router-link :to="{ name: 'singleProduct', params: { id: product.id } }">
    <svg class="svg-icon" viewBox="0 0 20 20">
      <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
      <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
      <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
    </svg></router-link>
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
        let product = computed(()=> this.$store.state.products);

        function storeProductID(product) {
        localStorage.setItem('id', product.id);
      }
        
        return{
            product,
            storeProductID,
            useProductID() {
            store.dispatch('fetchProductByID', product.value);
        },
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
        },

        // goToLogin(){
        //   this.$router.push('/login')
        // }
    }
}
</script>
<style scoped>

.card {
 width: 190px;
 height: 254px;
 padding: .8em;
 background: #f5f5f5;
 position: relative;
 overflow: visible;
 box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.card-img {
 background-color: #a6bcff;
 height: 40%;
 width: 100%;
 border-radius: .5rem;
 transition: .3s ease;
}

.card-info {
 padding-top: 10%;
}

svg {
 width: 20px;
 height: 20px;
}

.card-footer {
 width: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding-top: 10px;
 border-top: 1px solid #ddd;
}

/*Text*/
.text-title {
 font-weight: 900;
 font-size: 1.2em;
 line-height: 1.5;
}

.text-body {
 font-size: .9em;
 padding-bottom: 10px;
}

/*Button*/
.card-button {
 border: 1px solid #252525;
 display: flex;
 padding: .3em;
 cursor: pointer;
 border-radius: 50px;
 transition: .3s ease-in-out;
}

/*Hover*/
.card-img:hover {
 transform: translateY(-25%);
 box-shadow: rgba(226, 196, 63, 0.25) 0px 13px 47px -5px, rgba(71, 180, 158, 0.3) 0px 8px 16px -8px;
}

.card-button:hover {
 border: 1px solid #a6bcff;
 background-color: #a6bcff;
}

.button-48 {
  appearance: none;
  background-color: #FFFFFF;
  border-width: 0;
  box-sizing: border-box;
  color: #000000;
  cursor: pointer;
  display: inline-block;
  font-family: Clarkson,Helvetica,sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 1em;
  margin: 0;
  opacity: 1;
  outline: 0;
  padding: 1.5em 2.2em;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-rendering: geometricprecision;
  text-transform: uppercase;
  transition: opacity 300ms cubic-bezier(.694, 0, 0.335, 1),background-color 100ms cubic-bezier(.694, 0, 0.335, 1),color 100ms cubic-bezier(.694, 0, 0.335, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  white-space: nowrap;
}

.button-48:before {
  animation: opacityFallbackOut .5s step-end forwards;
  backface-visibility: hidden;
  background-color: #EBEBEB;
  clip-path: polygon(-1% 0, 0 0, -25% 100%, -1% 100%);
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateZ(0);
  transition: clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1), -webkit-clip-path .5s cubic-bezier(.165, 0.84, 0.44, 1);
  width: 100%;
}

.button-48:hover:before {
  animation: opacityFallbackIn 0s step-start forwards;
  clip-path: polygon(0 0, 101% 0, 101% 101%, 0 101%);
}

.button-48:after {
  background-color: #FFFFFF;
}

.button-48 span {
  z-index: 1;
  position: relative;
}

header{
    margin-left: 45%;
}
.navigators{
    margin-left: 15%;
    backdrop-filter: blur(8px);
}
.sneakers{
    padding-top: 4%;
    min-height: 100vh;
    padding-bottom: 5%;
    font-family: 'Roboto Condensed', sans-serif;
    
}


#error{
    color: black;
    margin: 50px;
    padding-top: 150px;
}

.title{
    padding-left: 55%;
    color: lightgray;
    font-size: 60px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bolder;
}


</style>