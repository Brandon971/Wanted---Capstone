import { createStore } from 'vuex'
import axios from 'axios'
import { useCookies } from 'vue3-cookies'
import router from '@/router'
const {cookies} = useCookies();

const wanted = 'https://wanted-capstone-project.onrender.com/'

// http://localhost:3300/

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    logOut:null,
    asc: true,
    showSpinner: true,
    token: null,
    cart: null
  },
  getters: {
  },
  mutations: {
    setUsers(state, values) {
      state.users = values
    },
    setUser(state,values) {
      state.user = values
    },
    setProducts(state, values) {
      state.products = values
    },
    setProduct(state,values) {
      state.product = values
    },
    setToken(state, value) {
      state.token = value
    },
    setSpinner(state, values) {
      state.showSpinner = values
    },
    setMessage(state, values) {
      state.message = values
    },
    setLogOut(state){
      state.user = null
    },
    clearItems(state) {
      state.items = [];
    },
    sortProductsPrice: (state) => {
      state.products.sort((a, b)=> {
        return a.price - b.price;
      })
      if(!state.asc) {
        state.products.reverse()
      }
      state.asc =!state.asc
    },
    setCart(state, value) {
      state.cart = value
    }
  },
  actions: {
    async login (context, payload) {
      context.commit('setMessage', 'PLease Be Patient')
      const res = await axios.post(`${wanted}login`, payload);
      const {result, jwt, err, msg} = await res.data;
      if(result) {
        console.log(result);
        context.commit('setUser', result);
        context.commit('setToken', jwt);
        cookies.set('Legit', jwt)
        cookies.set('UserID', result.userID);
        context.commit('setMessage', msg)
        console.log(result.userID);
        router.push({name: 'home'})
      }else {
        context.commit('setMessage', err)
      }
    },
    async logout (context) {
      context.commit('setLogOut');
      cookies.remove('Legit')
      cookies.remove('UserId')
      location.reload()
    },
    async registerUser(context, payload) {
      const res = await axios.post(`${wanted}register`,payload);
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
        
      }else {
        context.commit('setMessage',err);
      }
    },
    async fetchUsers(context) {
      const res = await axios.get(`${wanted}users`);
      console.log(await res.data)
      if(res.data !== undefined){
        context.commit('setUsers', res.data)
      } else {
        context.commit('setUsers', res)
      }
    },
    async fetchUserById(context, id){
      const res = await axios.get(`${wanted}user/${id}`);
      context.commit('setUser', res.data);
      // context.commit('setSpinner', false);
    },
    async fetchProducts (context) {
      const res= await axios.get(`${wanted}products`);
      const data = await res.data;
      if(data){
        context.commit('setProducts', data)
      }
    },
    async fetchProductByID(context, id){
      const {data} = await axios.get(`${wanted}product/${id}`, {withCredentials:true});
      context.commit('setProduct', data.result);
      context.commit('setSpinner', false);
      // if(results){
      //   context.commit('setProduct', results);
      //   console.log(results[0])
      // } else context.commit('setMessage', err);
    },
    async createProduct(context, payload) {
      const res = await axios.post(`${wanted}product`,payload)
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setMessage', msg);
      } else {
        context.commit('setMessage', err);
      }
    },
    async deleteProduct({commit, dispatch}, id) {
      try {
        await axios.delete(`${wanted}product/${id}`)
        commit('setMessage','Sneaker Deleted');
        dispatch('fetchProducts');
      }catch(error) {
        commit('setMessage','Unable to delete')
      }
    },
    async deleteUser({commit, dispatch}, id) {
      try {
        await axios.delete(`${wanted}user/${id}`)
        commit('setMessage','User Deleted');
        dispatch('fetchUsers');
      }catch(error) {
        commit('setMessage','Unable to delete')
      }
    },
    async fetchCart(context, id) {
      const res = await axios.get(`${wanted}user/${id}/carts`);
      context.commit('setCart', res.data)
      console.log(id);
    },
    async addToCart(context, {payload}) {
      console.log(payload);
      let userID = cookies.get('UserID')
      const {res, message} = await axios.post(`${wanted}user/${userID}/cart`, payload)
      if(res) {
        context.commit('setCart', res.data)
      } else {
        context.commit('setMessage', message)
      }
    },
    async updateProduct(context, payload) {
      try{
        const res = await axios.put(`${wanted}product/${payload.id}`, payload)
        console.log('Response: ' , res);
        alert('Update Success')
        let { results, err} = await res.data;
        if (results) {
          context.commit('setProduct', results[0])
        }else {
          context.commit('setMessage', err)
        }
      }catch(error) {
        console.log(error)
      }
    },
    async updateUser(context, payload) {
      try{
        const res = await axios.put(`${wanted}user/${payload.userID}`, payload)
        console.log('Response: ' , res);
        alert('Update Success')
        let { results, err} = await res.data;
        if (results) {
          context.commit('setUser', results[0])
        }else {
          context.commit('setMessage', err)
        }
      }catch(error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
