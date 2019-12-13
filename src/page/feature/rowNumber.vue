<template>
	<div style="background: #F6F6F6">
		<div><img src="../../assets/underline/special3.jpg" class="Bimg"></div>
		<div class="rTitle">无界智慧排号流程</div>
		<div class="xia"></div>
		<div class="rCon fcolor" style="font-size: 13px">
			无界智慧排号系统是一款软硬件结合、涉及多操作终端的智慧系统，集合了取号、拿号、叫号、过号、入号等一系列排号功能。
		</div>
		<div class="warp">
			<div class="takeNum" v-for="item in takeInfo">
				<div><img :src="item.img" class="takeImg"></div>
				<div class="takeCon">{{item.title}}</div>
			</div>
		</div>
		<div style="width: 100%;height: 100%;background: white">
			<div class="rTitle" style="padding-top: 20px">轻松解决难题</div>
			<div class="xia"></div>
			<div class="warp">
				<div class="takeNum2" style="height: 230px;border-bottom:5px solid  #35B794">
					<div><img src="../../assets/underline/solve1.png" class="takeImg2"></div>
					<div class="takeCon2">顾客足不出户即可实现远程在线排号，有效避免因等候时间过长导致的顾客流失。</div>
				</div>
				<div class="takeNum2" style="height: 230px;border-bottom:5px solid  #EE736C">
					<div><img src="../../assets/underline/solve2.png" class="takeImg2"></div>
					<div class="takeCon2" >顾客可随时随地掌握最新的排号进度和预估到号时间，并合理安排到店时间，大大提升用户体验。</div>
				</div>
				<div class="takeNum2" style="height: 230px;border-bottom:5px solid  #FED387">
					<div><img src="../../assets/underline/solve3.png" class="takeImg2"></div>
					<div class="takeCon2" >方便顾客排队入座，免除服务员大声呼叫顾客入座就餐的辛苦和尴尬。</div>
				</div>
				<div class="takeNum2" style="height: 230px;border-bottom:5px solid  #1EDCDC">
					<div><img src="../../assets/underline/solve4.png" class="takeImg2"></div>
					<div class="takeCon2">减少顾客等待时间，提升翻台率增加餐厅的收益。</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "rowNumber",
		data() {
			return {
				takeInfo: [
					{
						img: require('../../assets/underline/flow2.png'),
						title: '1.微信公众号和小程序上远程取号。'
					},
					{
						img: require('../../assets/underline/weixinquhao.png'),
						title: '2.无界拿号触摸屏上拿号。'
					},
					{
						img: require('../../assets/underline/flow3.png'),
						title: '3.服务员APP端操作叫号。'
					},
					{
						img: require('../../assets/underline/flow4.png'),
						title: '4.无界大屏上同步播报和显示。'
					},
				],
				puzzle: [
					{
						img: require('../../assets/underline/solve4.png'),
						title: '减少顾客等待时间，提升翻台率增加餐厅的收益。',
						color: '#1EDCDC'
					},
				]
			}
		},
		created() {
			this.common.menu();
		}
	}
</script>

<style scoped>
	.Bimg {
		width: 100%;
		height: auto;
	}
	
	.rTitle {
		font-size: 20px;
		font-weight: bold;
		margin: 20px auto;
	}
	
	.xia {
		width: 35%;
		height: 1px;
		background: #707070;
		margin: 0 auto;
	}
	
	.rCon {
		font-size: 12px;
		text-align: left;
		text-indent: 2em;
		width: 95%;
		margin: 20px 10px;
	
	}
	
	.takeNum {
		width: 46%;
		height: 170px;
		background: white;
		margin: 0px auto;
		margin-top: 20px;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
		opacity: 1;
		border-radius: 4px;
	}
	
	.takeCon {
		width: 90%;
		font-size: 13px;
		margin:0 10px;
	}
	
	.takeNum2 {
		width: 45%;
		height: 170px;
		background: white;
		margin: 0px auto;
		margin-top: 20px;
		border: 1px solid rgba(229, 229, 229, 1);
		border-radius: 4px;
	}
	
	.takeImg2 {
		width: 60px;
		height: 60px;
		margin-top: 30px;
	}
	
	.takeCon2 {
		height: 200px;
		font-size: 13px;
		width: 90%;
		margin: 30px 10px;
		text-align: left;
		color: #2c3e50;
	}
	
	.bottom {
		width: 100%;
		height: 2px;
	}
</style>