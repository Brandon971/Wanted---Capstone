<template >
        <section class="text-center text-lg-start pt-5">
  <div class="container py-4">
    <div class="row g-0 align-items-center">
      <div class="col-lg-6 mb-5 mb-lg-0">
        <div class="card cascading-right" style="
            background: hsla(0, 0%, 100%, 0.55);
            backdrop-filter: blur(30px);
            ">
          <div class="card-body p-5 shadow-5 text-center">
            <h2 class="fw-bold mb-5">Login</h2>
            <form @submit.prevent="login" >
              
              <div class="form-outline mb-4">
                <input type="email" id="form3Example3" class="form-control" v-model="userLogin.emailAdd" required/>
                <label class="form-label" for="form3Example3">Email address</label>
              </div>


              <div class="form-outline mb-4">
                <input type="password" id="form3Example4" class="form-control" v-model="userLogin.userPass" required />
                <label class="form-label" for="form3Example4">Password</label>
              </div>


              <div class="form-check d-flex justify-content-center mb-4">
                <p class="small me-3 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
              </div>

              <SpinnerC v-if="loading"/>
              <div v-else>
                <p>{{ message }} {{ user?.firstName }} {{ user?.lastName }}</p>
              </div>
              <button type="submit" class="btn  btn-block mb-4" >
                Login
              </button>

              <div class="text-center">
                <p>Don't have an Account?</p>
                <router-link to="/register" >Register</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div class="col-lg-6 mb-5 mb-lg-0">
        <img src="../assets/d0252b475de307444f2fe9c04406d2c3.jpg" class="w-100 rounded-4 shadow-4 "
        alt="" loading="lazy"/>
      </div>
    </div>
  </div>

</section>
</template>
<script>
import SpinnerC from '../components/Spinner.vue'
export default {
  components:{
    SpinnerC
  },
  computed: {
    message(){
      return this.$store.state.message
    },
    user(){
      return this.$store.state.user
    }
  },
  data() {
    return{
      userLogin :{
        emailAdd :'',
        userPass:'',
      },
      loading : false,
    
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('login',this.userLogin )
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading =false
      }),
      this.loading = true;
      // alert('logged in')
    }
  },

}
</script>
<style scoped>
.btn{
  background-color: #a6bcff;
}

        .cascading-right {
      margin-right: -100px;
    }

    @media (max-width: 991.98px) {
      .cascading-right {
        margin-right: 0;
      }
    }
    a{
        text-decoration: none;
    }

</style>