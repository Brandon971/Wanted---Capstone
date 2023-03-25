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
              <th scope="col"><router-link to="/register" type="button" class="btn btn-dark d-flex w-50">
                Add User</router-link>
</th>
<th>edit</th>
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
          </td>  <td>
            <button type="button" class="btn btn-dark my-3 d-flex" data-bs-toggle="modal" :data-bs-target="'#updateUserModal' + `${user.userID}`"><i class="bi bi-pencil-square"></i>
    </button>
    
    <!-- Modal -->
    <div class="modal fade mx-auto" :id="'updateUserModal' + `${user.userID}`" tabindex="-1" aria-labelledby="updateUserModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-light">
        <div class="modal-header p-3">
          <h1 class="modal-title fs-5" id="updateUserModal">Update Product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-3">
          <form @submit.prevent="updateUser">
            <input class="form-control mb-1" type="number" name="userID" id="userID" placeholder="ID" v-model="user.userID" required>

              <input class="form-control mb-1" type="text" name="firstName" id="firstName" placeholder="firstName" v-model="user.firstName" required>
    
              <input class="form-control mb-1" type="text" name="lastName" id="lastName" placeholder="lastName" v-model="user.lastName" required>
    
              <input class="form-control mb-1" type="text" name="cellphoneNumber" id="cellphoneNumber" placeholder="cellphone" v-model="user.cellphoneNumber" required>

              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary"   data-bs-dismiss="modal">Save Changes</button>
              </div>
          </form>
          </div>
      </div>
    </div>
    
    </div> 
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
          <th scope="col"><button type="button" class="btn btn-dark  d-flex" data-bs-toggle="modal" data-bs-target="#addProductModal">Add
    </button>
    
    <!-- Modal -->
    <div class="modal fade mx-auto" id="addProductModal" tabindex="-1" aria-labelledby="addProductModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-light">
        <div class="modal-header p-3">
          <h1 class="modal-title fs-5" id="addProductModal">New Product</h1>
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
    <th>edit</th>
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
          <td> <i class="bi bi-trash3 p-2 my-3"  @click="deleteProduct(product.id)" ></i>
            
          </td>
          <td>
            <button type="button" class="btn btn-dark my-3 d-flex" data-bs-toggle="modal" :data-bs-target="'#updateProductModal' + `${product.id}`"><i class="bi bi-pencil-square"></i>
    </button>
    
    <!-- Modal -->
    <div class="modal fade mx-auto" :id="'updateProductModal' + `${product.id}`" tabindex="-1" aria-labelledby="updateProductModal" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content bg-light">
        <div class="modal-header p-3">
          <h1 class="modal-title fs-5" id="updateProductModal">Update Product</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body p-3">
          <form @submit.prevent="updateProduct">
            <input class="form-control mb-1" type="number" name="productID" id="productID" placeholder="ID" v-model="product.id" required>

              <input class="form-control mb-1" type="text" name="prodName" id="prodName" placeholder="Name" v-model="product.prodName" required>
    
              <input class="form-control mb-1" type="text" name="prodDescription" id="prodDescription" placeholder="Description" v-model="product.prodDescription" required>
    
              <input class="form-control mb-1" type="text" name="price" id="price" placeholder="price" v-model="product.price" required>
    
              <input class="form-control mb-1" type="text" name="prodQuantity" id="prodQuantity" placeholder="Quantity" v-model="product.prodQuantity" required>
              
              <input class="form-control mb-1" type="text" name="category" id="category" placeholder="category" v-model="product.category" required>
    
              <input class="form-control mb-1" type="text" name="imgURL" id="imgURL" placeholder="imgURL" v-model="product.imgURL">
              <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-primary"   data-bs-dismiss="modal">Save Changes</button>
              </div>
          </form>
          </div>
      </div>
    </div>
    
    </div> 
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
    this.$store.dispatch('fetchProducts')
  },
  async deleteProduct(id) {
      alert('successfully deleted')
    this.$store.dispatch("deleteProduct",id)
  },
  async deleteUser(id) {
      alert('successfully deleted')
    this.$store.dispatch("deleteUser",id)
  },
  updateProduct: function (product) {
    return this.$store.dispatch('updateProduct', {
      id: product.id,
      prodName: product.prodName,
      prodDescription: product.prodDescription,
      price: product.price,
      prodQuantity: product.prodQuantity,
      imgURL: product.imgURL
    })
  },
  updateUser: function (user) {
    return this.$store.dispatch('updateUser', {
      userID: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      cellphoneNumber: user.cellphoneNumber,
      emailAdd: user.emailAdd,
    })
  }
    // async addProduct() {
    //   await this.$store.dispatch('registerUser',this.reg )
    //   alert('Product Added')
    // }
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