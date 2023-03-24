<template  >
    <div ><SpinnerC></SpinnerC></div>
    <div class="profile-wrapper" v-if="user">
	<div class="profile-image">

	</div>
	<div class="close"></div>
	<h2 class="profile-title">{{ user.firstName }}<span>{{ user.lastName }}</span></h2>
	<div class="profile-info">
		<div class="content">
			<h3><word class="text">Cellphone: </word></h3> <p>{{ user.cellphoneNumber }}</p>
           <h3><word  class="text">Email:</word></h3> <p>{{ user.emailAdd }}</p>
            <div class="logout">
            <button type="submit" @click="logout" class="btn  btn-block mb-4" > 
                Log Out
              </button>
            </div>
		</div>
	</div>
</div>
<!-- <div v-else><SpinnerC/></div> -->
</template>
<script>
// import { useStore } from 'vuex';
import SpinnerC from '../components/Spinner.vue'

export default {
    // components: {SpinnerC}
    props: ['id'],
    name: 'userProfile', 
        components: {SpinnerC} ,
        computed: {
        user() {
            console.log(this.$store.state.user);
            return this.$store.state.user;
        },
    },
    created() {
        console.log();
    },
    // setup() {
    //     const store = useStore()
    //     const logout = () =>{
    //         store.dispatch('logout')
    //     }
    //     const fetchUser = () => {
    //         let userID = this.cookies.get("UserID");
    //         console.log(userID);
    //         store.dispatch('fetchUserById', userID)
    //     } 
    //     return{
    //         fetchUser,
    //         logout
    //     }
    // },
        mounted() {
            console.log(this.id);
            this.$store.dispatch('fetchUserById', this.id)
        }
}
</script>
<style scoped>
.logout{
    padding-left: 40%;
    padding-top: 20%;
}
.btn{
  background-color: #a6bcff;
}
    body{
	margin: 0;
	background-color: white;
	font-family :'Montserrat', cursive;
	font-weight :400;
	color: rgba(0,0,0,0.8);
}
.profile-wrapper{
	display: block;
    position: absolute;
	top: 50%;
	left: 50%;
	transform :translate(-50%,-50%);
	width: 800px; 
	height: 680px; 
	margin:3em 0 0 ; 
}
	.profile-image{
		display: inline-block;
		width:45%;
		height: 75%;
        position: absolute;
		top :0;
		left :0;
		border-radius: 1em;
		background-color :#a6bcff;
		z-index: 1;
		overflow: hidden;
		-webkit-box-shadow :1px 24px 55px -19px #a6bcff;
		-moz-box-shadow :1px 24px 55px -19px #a6bcff;
		box-shadow :1px 24px 55px -19px #a6bcff;
    }
		img{
			-webkit-filter :grayscale(100%);
			filter: grayscale(100%) contrast(120%);
			opacity :0.3;
			display: block;
			width : 115%;
			height: 100%;
			position :absolute;
        }
	.close{
		display: block;
		width: 60px;
		height: 60px;
		position :absolute;
		top: 12.3%;
		right: 7%;
    }
	
	.profile-title{
		display :block;
		position :absolute;
		top :8%;
		left :34%;
		color :#333;
		z-index :2;
		font-weight :700;
		font-size: 4.5em;
		line-height :1em;
		letter-spacing: -0.02em;
		margin :0;
    }
		span{
			display :block;
			margin-left: 28% ;}


	.profile-info{
		display: block;
		position :absolute;
		top: 25%;
		right: 0;
		border-radius :1em;
		width: 90%;
		height :63%;
		background-color: #FFF;
		-webkit-box-shadow: 0px 15px 50px -13px rgba(0,0,0,0.34);
		-moz-box-shadow: 0px 15px 50px -13px rgba(0,0,0,0.34);
		box-shadow: 0px 15px 50px -13px rgba(0,0,0,0.34);
    }
		.content{
			display: inline-block;
			float: right;
			width :47%;
			padding: 7%;
        }
			h3{
				text-transform: uppercase;
				color: #a6bcff;
            }
			p{
                 font-family: 'Roboto Condensed', sans-serif;
            }
</style>