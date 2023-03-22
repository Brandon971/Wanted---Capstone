import { createStore } from 'vuex'
import axios from 'axios'
import { useCookies } from 'vue3-cookies'
const {cookies} = useCookies();

const wanted = 'http://localhost:3300/'

// http://localhost:3300/

export default createStore({
  state: {
    users: null,
    user: null || JSON.parse(localStorage.getItem("token")),
    products: null,
    product: null,
    asc: true,
    showSpinner: true,
    token: null
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
    sortProductsPrice: (state) => {
      state.products.sort((a, b)=> {
        return a.price - b.price;
      })
      if(!state.asc) {
        state.products.reverse()
      }
      state.asc =!state.asc
    },
  },
  actions: {
    async login (context, payload) {
      const res = await axios.post(`${wanted}login`, payload);
      const {result, jwt, err} = await res.data;
      if(result) {
        console.log(result);
        context.commit('setUser', result);
        context.commit('setToken', jwt);
        cookies.set('Legit', jwt);
      }else {
        context.commit('setMessage', err)
      }
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
    async updateUser(context, payload) {
      const res = await axios.post(`${wanted}user`, payload);
      const {msg, err} = await res.data;
      if(msg) {
        context.commit('setUser', msg)
      } else {
        context.commit('setUser', err)
      }
    },
    async fetchProducts (context) {
      const res= await axios.get(`${wanted}products`);
      console.log(await res.data)
      if(res.data !== undefined){
        context.commit('setProducts', res.data)
      }else{
        context.commit('setProducts', res.data)
      }
    },
    async fetchProductByID(context, id){
      const res = await axios.get(`${wanted}product/${id}`, {withCredentials:true});
      context.commit('setProduct', res.data);
      context.commit('setSpinner', false);
      // if(results){
      //   context.commit('setProduct', results);
      //   console.log(results[0])
      // } else context.commit('setMessage', err);
    },
  },
  modules: {
  }
})
