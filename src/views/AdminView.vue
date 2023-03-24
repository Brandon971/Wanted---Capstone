<template >
    <SpinnerC v-if="loading" />
   <body  v-else>
 <div class="container pt-5">
  <h1 >Users</h1>
  
    <div class="table-responsive">
        <table class="table bg-dark text-light">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">firstName</th>
              <th scope="col">LastName</th>
              <th scope="col">cellphone</th>
              <th scope="col">Email</th>
              <th scope="col"><button type="button" class="btn btn-dark my-3 d-flex" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Add
</button>
</th>
            </tr>
          </thead>
          <tbody v-for="users in user" :key="users">
            <tr>
              <td>{{ users.userID }}</td>
              <td>{{ users.firstName }}</td>
              <td>{{ users.lastName }}</td>
              <td>{{ users.cellphoneNumber }}</td>
              <td>{{ users.emailAdd }}</td>
              <td> <i class="bi bi-trash3 p-2"  @click="deleteUser(users.userID)"></i>
              <i class="bi bi-pencil-square"></i> 
          </td>
            </tr>
          </tbody>
        </table>
    </div>

 </div> 
 <div class="container">
 <h1>Sneakers</h1>
  
<div class="table-responsive">
    <table class="table bg-dark text-light">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">prodName</th>
          <th scope="col">prodDescription</th>
          <th scope="col">category</th>
          <th scope="col">price</th>
          <th scope="col">prodQuantity</th>
          <th scope="col">imgURL</th>
          <th scope="col"><button type="button" class="btn btn-dark my-3 d-flex" data-bs-toggle="modal" data-bs-target="#exampleModal">
    
              Add
    </button>
    
    <!-- Modal -->
    <div class="modal fade mx-auto" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-light">
        <div class="modal-header p-3">
          <h1 class="modal-title fs-5" id="exampleModalLabel">New Product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-3">
          <form @submit.prevent="newProduct">
              <input class="form-control mb-1" type="text" name="prodName" id="prodName" placeholder="Name" v-model="product.prodName" required>
    
              <input class="form-control mb-1" type="text" name="prodDescription" id="prodDescription" placeholder="Description" v-model="product.prodDescription" required>
    
              <input class="form-control mb-1" type="text" name="price" id="price" placeholder="price" v-model="product.price" required>
    
              <input class="form-control mb-1" type="text" name="prodQuantity" id="prodQuantity" placeholder="Quantity" v-model="product.prodQuantity" required>
              
              <input class="form-control mb-1" type="text" name="category" id="category" placeholder="category" v-model="product.category" required>
    
              <input class="form-control mb-1" type="text" name="imgURL" id="imgURL" placeholder="imgURL" v-model="product.imgURL">
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary"   data-bs-dismiss="modal">Add Sneaker</button>
              </div>
          </form>
          </div>
      </div>
    </div>
    
    </div></th>
        </tr>
      </thead>
      <tbody v-for="product in products" :key="product" >
        <tr>
          <td>{{ product.id}}</td>
          <td>{{ product.prodName }}</td>
          <td>{{ product.prodDescription }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.prodQuantity }}</td>
          <td><img :src="product.imgURL"  class="w-50" alt=""></td>
          <td> <i class="bi bi-trash3 p-2"  @click="deleteProduct" ></i>
              <i class="bi bi-pencil-square"></i> 
          </td>
        </tr>
      </tbody>
    </table>


</div>

 </div> 
</body>
</template>
<script>

import {useStore} from 'vuex';
import {computed} from '@vue/runtime-core';
import SpinnerC from '../components/Spinner.vue'
export default {
    components: {
    SpinnerC
  },
  data(){
    return {
      isLoading: true,
      product: {
        prodName: '',
        imgURL: '',
        prodDescription: '',
        prodQuantity: '',
        price: ''
      }
    }
  },
  created(){
    setTimeout(()=> {
      this.loading = false;
    },2000);
  },
  setup() {
        const store = useStore();
        store.dispatch("fetchProducts");
        store.dispatch("fetchUsers");
        let users = computed(() => store.state.users)
        let products = computed(() => store.state.products)
        return{
            products,
            users
        }   
},
computed: {
        user() { 
          return this.$store.state.users
        }
},
methods: {
  async newProduct() {
    await this.$store.dispatch('createProduct', this.product);
    this.product.prodName = '';
    this.product.prodDescription = '';
    this.product.imgURL = '';
    this.product.price = '';
    this.product.prodQuantity = '';
  },
  async deleteProduct(id) {
      alert('successfully deleted')
    this.$store.dispatch("deleteProduct",id)
  },
  async deleteUser(id) {
      alert('successfully deleted')
    this.$store.dispatch("deleteUser",id)
  },
    async addProduct() {
      await this.$store.dispatch('registerUser',this.reg )
      alert('Product Added')
    }
  }

}

</script>
<style scoped>
.table-responsive{
    border-radius: 15px;
    box-shadow: 0 0 5px 0 rgb(0, 0, 0)  
}
.table{
    border-radius: 15px;
    box-shadow: 0 0 5px 0 rgb(0, 0, 0)  
}
.modal{
    margin-left: 33%;
}
</style>