<template >
    <div class="profile-wrapper">
	<div class="profile-image">
		<img src="http://nickylew.com/wp-content/uploads/2016/09/image.jpeg">
	</div>
	<div class="close"></div>
	<h2 class="profile-title">Nick <span>Lewis</span></h2>
	<div class="profile-info">
		<div class="content">
			<h3>About</h3>
			<p>#Graphic / #Web #Designer & #frontend #developer fuelled by coffee. Longtime lover of skiing and mountain living. Occasional blogger.</p>
			<p class="link one"><i class="fa fa-link" aria-hidden="true"></i><a href="http://nickylew.com" target="_blank">www.nickylew.com</a></p>
			<p class="link"><i class="fa fa-globe" aria-hidden="true"></i>United Kingdom</p>
		</div>
		<div class="stats">
			<div class="stat">
				<span class="number">482</span> Followers
			</div>
			<div class="stat">
				<span class="number">1,061</span> Following
			</div>
			<div class="stat">
				<span class="number">15</span> Ski trips
			</div>
		</div>
	</div>
</div>
<!-- <div v-else><SpinnerC/></div> -->
</template>
<script>
    // import SpinnerC from '../components/Spinner.vue'
export default {
    // components: {SpinnerC}
}
</script>
<style scoped>
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
		background-color :crimson;
		z-index: 1;
		overflow: hidden;
		-webkit-box-shadow :1px 24px 55px -19px rgba(220,20,60,1);
		-moz-box-shadow :1px 24px 55px -19px rgba(220,20,60,1);
		box-shadow :1px 24px 55px -19px rgba(220,20,60,1);
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
		/* &:before,
		&:after
			display block
			content ""
			position absolute
			top 0
			left 0
			width 100%
			height 1px
			background #333
		&:before
			transform rotate(-45deg)
		&:after
			transform rotate(45deg) */
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
				color: crimson;
				letter-spacing :0.2em;
            }
			p{
				font-weight :400;
				text-rendering :optimizeLegibility;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				line-height :1.5em;
            }
				.link{
					font-size: 0.9em;
                }
					i{
						color: crimson;
						font-family: "FontAwesome";
						line-height :inherit;
						margin-right: 4%;
                    }
					a:link,
					a:visited{
						text-decoration: none;
						color :inherit;
						transition:  0.25s;
                    }
						/* &:hover
							color crimson
							transition color 0.25s
					&.one
						margin-top 3em */

		/* .stats{
			display: block;
			height auto
			position absolute
			bottom 7.8%
			right 0
        }
			.stat
				display inline-block
				width 33.33%
				float left
				text-align center
				color crimson
				font-size 0.8em
				line-height 2em
				.number
					font-size 2em
					font-weight 300
					font-family "Open Sans", sans-serif
					line-height 100%
					color #333
					vertical-align top
					margin-right 3%
		.arrow
			display block
			position absolute
			bottom 7.5%
			left 11px
			width 25px
			height 25px
			transform rotate(45deg)
			&.one
				border 1px solid #333
				border-left-color transparent
				border-bottom-color transparent
			&.two
				border 1px solid #333
				border-right-color transparent
				border-top-color transparent
				left -40px */
</style>