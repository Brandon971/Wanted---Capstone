<!-- eslint-disable vue/no-parsing-error -->
<!-- eslint-disable vue/no-duplicate-attributes -->
<template >
    
    <nav class="navbar navbar-expand-lg fixed-top navbar-scroll">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand">WNTD</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link" to="/products">Sneakers</router-link>
          </li>
          <li class="nav-item">
           <router-link to="/contact" class="nav-link">Contact Us</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin" class="nav-link">Admin</router-link>
          </li>
        </ul>
        <ul class="navbar-nav d-flex flex-row">
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="#!">
              <i class="fas fa-shopping-cart"></i>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="#!">
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a class="nav-link" href="https://www.instagram.com/_brandonswinton_/">
              <i class="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>



</script>

<style >
	.navbar {
    background-color:  #fff;
  }
  .nav-link{
    color: black !important;
    font-family: 'Roboto Condensed', sans-serif;
  }
  .nav-link:hover{
    color: #a6bcff!important;
    font-size: 17px;
    transition: 0.4s;
  }
  .navbar-brand{
    color: black !important;
    font-family: 'Roboto Condensed', sans-serif;
  }
  .navbar-brand:hover{
    color: #a6bcff!important;
  }
@media (max-width: 991px) {
  .navbar-scroll {
    background-color: #fff;
  }
     
  .navbar-scroll .navbar-brand,
  .navbar-scroll .nav-link,
  .navbar-scroll .fa-bars {
    color: #4f4f4f !important;
  }         
}

.navbar-brand {
  letter-spacing: 3px;
  font-size: 2rem;
  font-weight: 500;
}
.navbar-scroll .navbar-brand,
.navbar-scroll .nav-link,
.navbar-scroll .fa-bars {
  color: #fff;
}

.navbar-scroll {
  box-shadow: none;
}

.navbar-scrolled {
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.05);
}

.navbar-scrolled .navbar-brand,
.navbar-scrolled .nav-link,
.navbar-scrolled .fa-bars {
  color: #4f4f4f;
}

.navbar-scrolled {
  background-color: #fff;
}

@media (max-width: 450px) {
  #intro {
    height: 950px !important;
  }
}

@media (min-width: 550px) and (max-width: 750px) {
  #intro {
    height: 1100px !important;
  }
}

@media (min-width: 800px) and (max-width: 990px) {
  #intro {
    height: 600px !important;
  }
}

.display-1 {
  font-weight: 500 !important;
  letter-spacing: 40px;
}

@media (min-width: 1600px) {
  .display-1 {
    font-size: 10rem;
  }
}

    
</style>