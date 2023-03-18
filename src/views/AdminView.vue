<template >
    <SpinnerC v-if="loading" />
   <body  v-else>
 <div id="wrapper" class="pt-5 ">
  <h1>Users</h1>
  
  <table id="keywords" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th><span>id</span></th>
        <th><span>First Name</span></th>
        <th><span>Last Name</span></th>
        <th><span>Email Address</span></th>
        <th><span>Cellphone Number</span></th>
        <th><span><i class="bi bi-person-plus"></i></span></th>
      </tr>
    </thead>
    <tbody v-for="users in user" :key="users">
      <tr>
        <td>{{users.id}} </td>
        <td class="lalign"> {{ users.firstName }} </td>
        <td> {{users.lastName}} </td>
        <td> {{users.emailAdd}} </td>
        <td> {{users.cellphoneNumber}} </td>
        <td><i class="bi bi-trash3 p-2"></i>
        <i class="bi bi-pencil-square"></i></td>
      </tr>
    </tbody>
  </table>
 </div> 
 <div id="wrapper w-100" class="product-table">
 <h1>Sneakers</h1>
  
  <table id="keywords" cellspacing="0" cellpadding="0">
    <thead>
      <tr>
        <th><span>id</span></th>
        <th><span>prodName</span></th>
        <th><span>prodDescription</span></th>
        <th><span>category</span></th>
        <th><span>price</span></th>
        <th><span>prodQuantity</span></th>
        <th><span>imgURL</span></th>
        <th><span><i class="bi bi-person-plus"></i></span></th>
      </tr>
    </thead>
    <tbody v-for="product in products" :key="product" >
      <tr>
        <td class="lalign">{{ product.id }}</td>
        <td>{{product.prodName}}</td>
        <td>{{product.prodDescription}}</td>
        <td>{{product.category}}</td>
        <td>{{product.price}}</td>
        <td>{{product.prodQuantity}}</td>
        <td><img :src="product.imgURL"></td>
        <td> <i class="bi bi-trash3 p-2"></i>
            <i class="bi bi-pencil-square"></i> 
        </td>
      </tr>
    </tbody>
  </table>
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
  }
}
}
</script>
<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Amarante');

html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  outline: none;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
html { overflow-y: scroll; }
body { 
  background: #eee url('https://i.imgur.com/eeQeRmk.png'); /* https://subtlepatterns.com/weave/ */
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 62.5%;
  line-height: 1;
  color: #585858;
  padding: 22px 10px;
  padding-bottom: 55px;
}

::selection { background: #5f74a0; color: #fff; }
::-moz-selection { background: #5f74a0; color: #fff; }
::-webkit-selection { background: #5f74a0; color: #fff; }

br { display: block; line-height: 1.6em; } 

article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section { display: block; }
ol, ul { list-style: none; }

input, textarea { 
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  outline: none; 
}

blockquote, q { quotes: none; }
blockquote:before, blockquote:after, q:before, q:after { content: ''; content: none; }
strong, b { font-weight: bold; } 

table { border-collapse: collapse; border-spacing: 0; }
img { border: 0; max-width: 100%; }

h1 { 
  font-family: 'Amarante', Tahoma, sans-serif;
  font-weight: bold;
  font-size: 3.6em;
  line-height: 1.7em;
  margin-bottom: 10px;
  text-align: center;
}


/** page structure **/
#wrapper {
  display: block;
  width: 850px;
  background: #fff;
  margin: 0 auto;
  padding: 10px 17px;
  -webkit-box-shadow: 2px 2px 3px -1px rgba(0,0,0,0.35);

}

#keywords {
  margin: 0 auto;
  font-size: 1.2em;
  margin-bottom: 15px;
}


#keywords thead {
  cursor: pointer;
  background: #c9dff0;
}
#keywords thead tr th { 
  font-weight: bold;
  padding: 12px 30px;
  padding-left: 42px;
}
#keywords thead tr th span { 
  padding-right: 20px;
  background-repeat: no-repeat;
  background-position: 100% 100%;
}

#keywords thead tr th.headerSortUp, #keywords thead tr th.headerSortDown {
  background: #acc8dd;
}

#keywords thead tr th.headerSortUp span {
  background-image: url('https://i.imgur.com/SP99ZPJ.png');
}
#keywords thead tr th.headerSortDown span {
  background-image: url('https://i.imgur.com/RkA9MBo.png');
}


#keywords tbody tr { 
  color: #555;
}
#keywords tbody tr td {
  text-align: center;
  padding: 15px 10px;
}
#keywords tbody tr td.lalign {
  text-align: left;
}
.product-table{
    display: block;
    padding-top: 15%;
  width: 90%;
  background: #fff;
  margin: 0 auto;
  padding: 10px 17px;
  -webkit-box-shadow: 2px 2px 3px -1px rgba(0,0,0,0.35)

}
</style>