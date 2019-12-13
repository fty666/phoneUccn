<template>
	<div id="app">
		<commonHeader></commonHeader>
		<router-view style="margin-top: 30px"/>
		<commonFooter></commonFooter>
	</div>
</template>

<script>
	import commonHeader from '@/components/commonHeader'
	import commonFooter from '@/components/commonFooter'
	
	export default {
		name: 'App',
		components: {
			commonHeader,
			commonFooter
		},
		methods: {}
	}

</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin: 0 0;
		padding: 0 0;
		/*margin-top: 60px;*/
	}
	
	a {
		text-decoration: none
	}
	
	.fcolor{
		color: #2c3e50;
	}
	.flexs {
		display: flex;
	}
	
	.warp {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}
	
	.huan {
		display: flex;
		flex-wrap: wrap;
	}
	
	.btten {
		display: flex;
		justify-content: space-between;
	}
	
	.bttenWarp {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	
	.Bimg {
		width: 100%;
		height: auto;
	}
	
	.swiper {
		width: 100%;
		min-height: 1px;
	}
	
	.pic {
		width: 90%;
	}
</style>
