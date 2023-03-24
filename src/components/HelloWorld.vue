<template>
  <div class="home">
    <div id="intro" class="bg-image" style="
        background-image: url('https://i.postimg.cc/wBrQ9mbC/205916.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-size: cover;
        height: 100vh;
        background-position: relative;
      ">
      <div class="mask h-100" style="background-color: rgba(0, 0, 0, 0.2);">
        <div class="container d-flex justify-content-center align-items-center h-100">
          <div class="row align-items-center">
            <div class="col-12">
              <h1 class="mb-0 text-white display-1">Wanted</h1>
              <router-link to="/products" class="button-57" role="button"><span class="text">SHOP</span><span>WNTD</span></router-link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <section class="vh-100">
      <div class="slider pt-4">
        <div class="slide-track">

          <div class="slide">
            <img src="../assets/0151ef7e-edb5-11ea-8288-5c49f42eee5c_image_hires_193040.avif" />
          </div>

          <div class="slide">
            <img src="../assets/4b473202-051f-4a4b-b756-83ae23ed1fa7.webp" />
          </div>

          <div class="slide">
            <img src="../assets/b26a2b7ef6fe86f35fd79f114e39e2ee.jpg" />
          </div>

          <div class="slide">
            <img src="../assets/best-nike-air-max-sneakers.webp" />
          </div>

          <div class="slide">
            <img src="../assets/image.jpg" />
          </div>

          <div class="slide">
            <img src="https://i.postimg.cc/Bbf1B0Gp/NIKE-TRAINERS-100522-Getty-Images-1394778848a.webp" class=""/>
          </div>

          <div class="slide">
            <img src="../assets/nike-airmax-93-01.webp" />
          </div>

          <div class="slide">
            <img src="../assets/nike-voguebus-Edward-Berthelot_Getty-Images-feb-21-story.webp" />
          </div>

          <div class="slide">
            <img src="../assets/fa679982-14d4-4c71-bd7c-32a274e3c969.webp" />
          </div>

          <!-- Same slides -->
          <div class="slide">
            <img src="../assets/0151ef7e-edb5-11ea-8288-5c49f42eee5c_image_hires_193040.avif" />
          </div>

          <div class="slide">
            <img src="../assets/4b473202-051f-4a4b-b756-83ae23ed1fa7.webp" />
          </div>

          <div class="slide">
            <img src="../assets/b26a2b7ef6fe86f35fd79f114e39e2ee.jpg" />
          </div>

          <div class="slide">
            <img src="../assets/best-nike-air-max-sneakers.webp" />
          </div>

          <div class="slide">
            <img src="../assets/image.jpg" />
          </div>

          <div class="slide">
            <img src="https://i.postimg.cc/Bbf1B0Gp/NIKE-TRAINERS-100522-Getty-Images-1394778848a.webp" />
          </div>

          <div class="slide">
            <img src="../assets/nike-airmax-93-01.webp" />
          </div>

          <div class="slide">
            <img src="../assets/nike-voguebus-Edward-Berthelot_Getty-Images-feb-21-story.webp" />
          </div>

          <div class="slide">
            <img src="../assets/fa679982-14d4-4c71-bd7c-32a274e3c969.webp" />
          </div>

        </div>


      </div>
      <div class="container border">
        <div class="row">
          <div class="col">
      <h5 class="about pb-3 mt-5 ms-5 pt-5" >Respected as a quality provider of sneakerwear, Wanted is an authorised retailer of footwear
from iconic street-inspired brands including, Nike, Air Jordan, adidas Originals, PUMA, 
Converse and Vans to name a few.
You’ll also find a wide variety of accessories including caps and beanies, bags, sunglasses 
and music accessories for men, women and kids at Wanted. Browse our online catalogue to 
see our latest products available online (Our aim is to have over 200 stores across southern 
Africa).
 Our online store offers the very best in exclusive sneakers and apparel to every corner of 
Africa and the world. Our store was founded on music and street art which is also where I 
got inspired to have my own Sneaker store , which is still a priority for us to promote the 
scene in South Africa. Wanted holds the rights to spray paint and customise many brands 
from around the world.
</h5></div>
<div class="col">
<img src="https://i.postimg.cc/gJNYtPz9/1668197985-airdiorc.webp" class="about-img pt-5" />
</div>
</div>
</div>
    </section>
  </div>
</template>

<script>
export default {
  name:"HelloWorld"
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.button-57 {
  position: relative;
  overflow: hidden;
  border: 1px solid #18181a;
  color: #18181a;
  font-family: 'Roboto Condensed', sans-serif;
  display: inline-block;
  font-size: 15px;
  line-height: 15px;
  padding: 18px 18px 17px;
  text-decoration: none;
  cursor: pointer;
  background: #fff;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  margin-left: 38%;
  box-shadow: 0 0 5px 0 rgb(188, 185, 185) ;
  border: none;
}

.button-57 span:first-child {
  position: relative;
  transition: color 600ms cubic-bezier(0.48, 0, 0.12, 1);
  z-index: 10;
}

.button-57 span:last-child {
  color: white;
  display: block;
  position: absolute;
  bottom: 0;
  transition: all 500ms cubic-bezier(0.48, 0, 0.12, 1);
  z-index: 100;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translateY(225%) translateX(-50%);
  height: 14px;
  line-height: 13px;
}

.button-57:after {
  content: "";
  position: absolute;
  bottom: -50%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  transform-origin: bottom center;
  transition: transform 600ms cubic-bezier(0.48, 0, 0.12, 1);
  transform: skewY(9.3deg) scaleY(0);
  z-index: 50;
  font-family: 'Roboto Condensed', sans-serif;
}

.button-57:hover:after {
  transform-origin: bottom center;
  transform: skewY(9.3deg) scaleY(2);
}

.button-57:hover span:last-child {
  transform: translateX(-50%) translateY(-100%);
  opacity: 1;
  transition: all 900ms cubic-bezier(0.48, 0, 0.12, 1);
}

body{
  display: grid;
}

.slider{
  height:250px;
  margin: auto;
  position: relative;
  width: 90%;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.slide-track {
  display: flex;
  width: calc(250px * 18);
  animation: scroll 40s linear infinite ;
}

/* .slide-track:hover{
  animation-play-state: paused;
} */

@keyframes scroll {
  0%{
    transform: translate(0);
  }
  100%{
    transform: translateX(calc(-250px * 9));
  }
  
}

.slide{
  height: 200px;
  width: 250px;
  display: flex;
  align-items: center;
  padding: 15px;
  perspective: 100px;
}

img{
  width: 100%;
  transition: transform 1%;
}

img:hover {
  transform: translateZ(20px);
  transition: 0.4s;
}
/* shadows */
.slider::before,
.slider::after {
  background: linear-gradient(to right, rgba(255,255,255,1) 0%,
  rgba(255,255,255,));
  /* content: ''; */
  height: 100%;
  position: absolute;
  width: 15%;
  z-index: 2;
}

.slider::before{
  left: 0;
  top: 0;
}

.slider::after{
  right:0;
  top: 0;
  transform: rotateZ(180deg);
}
h5{
  font-family: 'Roboto Condensed', sans-serif;
}



@media screen and (max-width:720px ){
    .container{
        width: 100%;
        display: flex;
        
    }
    .col{
      width: 100%;
      display: flex;
      justify-content: center;
      
    }
    .row{
      width: 100%;
    }
    section{
      width: 100%;
    }
    .about{
      margin: auto;
      width: 100%;
    }
    h5{
      font-size: 10px;
      align-items: center;
      width: 100%;
      align-self: center;
    }
    .about-img{
      width: 100%;
      display: none;
    }

}
</style>
