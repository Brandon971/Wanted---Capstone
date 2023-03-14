<template >
       <section class="bg-image"
  style="background-image: url('https://i.postimg.cc/gJNYtPz9/1668197985-airdiorc.webp');
  background-repeat: no-repeat;
  background-size: cover;">
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100 pt-3 ">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card mb-5 mt-5 " style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Create an account</h2>

              <form>
                <div class="row form-outline mb-4">
                    <div class="col">
                  <input type="text" id="form3Example1cg" class="form-control " />
                  <label class="form-label" for="form3Example1cg">First Name</label>
                </div>
                
                    <div class="col">
                  <input type="text" id="form3Example1cg" class="form-control " />
                  <label class="form-label" for="form3Example1cg">Last Name</label>
                </div>
            </div>
            <div class="row form-outline mb-4">
                    <div class="col">
                  <input type="text" id="form3Example1cg" class="form-control " />
                  <label class="form-label" for="form3Example1cg">Your Email</label>
                </div>
                
                    <div class="col">
                  <input type="text" id="form3Example1cg" class="form-control " />
                  <label class="form-label" for="form3Example1cg">Cellphone</label>
                </div>
            </div>

            <div class="row form-outline mb-4">
                    <div class="col">
                  <input type="text" id="form3Example1cg" class="form-control " />
                  <label class="form-label" for="form3Example1cg">Create Password</label>
                </div>
                
                <div class="gender col pt-1">
                    <select class="select w-100 h-50">
                        <option value="1" disabled>Gender</option>
                        <option value="2">Female</option>
                        <option value="3">Male</option>
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
                  <button type="button"
                    class="btn btn-success btn-block gradient-custom-4 text-white">Register</button>
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
    
}
</script>
<style scoped>
.gradient-custom-3 {
background: #246662;
background: -webkit-linear-gradient(to right, rgba(1, 2, 6, 0.5), rgba(6, 6, 6, 0.5));
background: linear-gradient(to right, rgba(9, 1, 4, 0.5), rgba(2, 7, 9, 0.5))
}
.gradient-custom-4 {

background: #224b51;
background: -webkit-linear-gradient(to right, rgb(0, 0, 0), rgb(2, 10, 14));
background: linear-gradient(to right, rgb(0, 0, 0), rgb(4, 10, 14))
} 
.mask{
    backdrop-filter: blur(5px);
}


    
</style>