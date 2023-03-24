<template >
       <section class="bg-image">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100 pt-3 ">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card mb-5 mt-5 " style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form @submit.prevent="regUser">
                <div class="row form-outline mb-4">
                    <div class="col">
                  <input type="text" id="form3Example1cg" class="form-control " v-model="reg.firstName"/>
                  <label class="form-label" for="form3Example1cg">First Name </label>
                </div>
                
                    <div class="col">
                  <input type="text" id="form3Example1cg" class="form-control " v-model="reg.lastName" />
                  <label class="form-label" for="form3Example1cg">Last Name</label>
                </div>
            </div>
            <div class="row form-outline mb-4">
                    <div class="col">
                  <input type="text" id="form3Example1cg" class="form-control " v-model="reg.emailAdd" />
                  <label class="form-label" for="form3Example1cg">Email Address</label>
                </div>
                
                    <div class="col">
                  <input type="text" id="form3Example1cg" class="form-control " v-model="reg.cellphoneNumber">
                  <label class="form-label" for="form3Example1cg">Cellphone</label>
                </div>
            </div>

            <div class="row form-outline mb-4">
                    <div class="col">
                  <input type="password" id="form3Example1cg" class="form-control " v-model="reg.userPass"/>
                  <label class="form-label" for="form3Example1cg">Create Password</label>
                </div>
                
                <div class="gender col pt-1">
                    <select v-model="reg.gender" class="select w-100 h-50">
                        <option value="1" disabled>Gender</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>
            </div>
                <div class="form-check d-flex justify-content-center mb-5">
                  <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                  <label class="form-check-label" for="form2Example3g">
                    I agree to all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                  </label>
                </div>

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-block text-dark">Register</button>
                </div>

                <p class="text-center text-muted mt-5 mb-0">Already Have An Account? <a href="/login"
                    class="fw-bold text-body"><u>Login here</u></a></p>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>
<script>
export default {
  data() {
    return{
      reg :{
        firstName:'',
        lastName:'',
        emailAdd:'',
        cellphoneNumber:'',
        userPass:'',
        gender: ''
      },
    
    }
  },
  methods: {
    async regUser() {
      await this.$store.dispatch('registerUser',this.reg )
      alert('You are registered')
      this.$router.push('/login')
    }
  }

    
}
</script>
<style scoped>
.bg-image{
  background-image: url('https://i.postimg.cc/gJNYtPz9/1668197985-airdiorc.webp');
  background-repeat: no-repeat;
  background-size: cover;
}
.btn{
  background-color: #a6bcff;
}
.mask{
    backdrop-filter: blur(5px);
}


    
</style>