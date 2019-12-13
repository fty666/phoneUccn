<template>
	<div>
		<div><img src="../assets/home/jiamen.jpg" class="join"></div>
		<frominput></frominput>
	</div>
</template>

<script>
	import frominput from '@/components/frominput'
	
	export default {
		data() {
			return {
				//	表单
				form: {
					name: '',
				}
			}
		},
		components: {
			frominput
		},
		methods: {
			//	表单提交
			onSubmit() {
				console.log('submit!');
			}
		}
	}
</script>

<style scoped>
	.join {
		width: 100%;
		height: auto;
	}
	
	.title1 {
		font-size: 20px;
		font-weight: bold;
		text-align: center;
		margin: 20px auto;
	}


</style>