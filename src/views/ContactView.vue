<template >
     <div>
        <section class="vh-100 bg-image">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card bg-transparent border-dark box-shadow" style="border-radius: 15px;">
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center text-dark mb-5">Message Us</h2>

              <form action="https://formspree.io/f/moqzwded" method="POST">

                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" required="required"/>
                  <label class="form-label text-dark" for="form3Example1cg">Your Name</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" required="required" />
                  <label class="form-label text-dark" for="form3Example3cg">Your Email</label>
                </div>
                <div class="md-form">
                            <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea" required="required"></textarea>
                            <label for="message" class="text-dark pb-4">Your message</label>
                        </div>

                <div class="d-flex justify-content-center">
                  <button type="submit"
                    class="btn btn-light btn-block btn-md gradient-custom-4 text-dark">Send</button>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
</section>
  </div>
</template>
<script>
export default {
    
}
</script>
<style >
    
</style>