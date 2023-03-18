<template>
    <div>
      <h1 class="display  p-5">Single Product</h1>
      <SpinnerC v-if="!product"/>
      <div class="card mb-3 w-75 mx-auto" v-if="product">
        <div class="row g-0">
          <div class="col-md-6">
            <img :src="product.imgURL" class="w-100 m-1 rounded-start" alt="...">
          </div>
          <div class="col-md-6">
            <div class="card-body">
              <h3 class="card-title">{{ product.prodName }}</h3>
              <h4 class="card-text"><span class="text">PRICE: </span> <br> R{{ product.price }}</h4>
              <h5 class="card-text"><span class="text">GENRE: </span> <br> {{ product.category }}</h5>
              <h6 class="card-text"><span class="text"> DESCRIPTION: </span> <br> {{ product.prodDescription }}</h6>
              <button class="button-86" role="button">Add To Cart</button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SpinnerC from '../components/Spinner.vue';
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  export default {
    name: 'singleProduct',
    methods: {
      returnToProducts() {
      this.$router.push("/products");
    },
  },
    components: {
      SpinnerC
    },
    setup() {
      const store = useStore();
      const product = computed(() => store.state.product);
      return {
        product
      }
    },
    mounted() {
      this.$store.dispatch('fetchProductByID', this.$route.params.id)
      console.log(this.$route.params.id)
    }
  };
  </script>
  
  <style scoped>
.text{
  color: #a6bcff;
  font-family: 'Roboto Condensed', sans-serif;
    font-weight: bolder;
}
.display{
  color: lightgray;
    font-size: 60px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bolder;
}
.button-86 {
  all: unset;
  width: 70px;
  height: 20px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: black;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin: auto;
}

.button-86::after,
.button-86::before {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all .4s;
}

.button-86::before {
  transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: #a6bcff;
}

.button-86::after {
  transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);

}

.button-86:hover::before {
  transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
}

.button-86:hover::after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
}

.button-86:active::after {
  transition: 0s;
  transform: translate(0, 5%);
}
  .img-fluid {
    height: 700px;
  }
  .icon{
    margin-left: 90%;
    transition: all .2s ease-in-out;
  }
  .icon:hover {
    transform: scale(1.3); 
  }
  </style>
  