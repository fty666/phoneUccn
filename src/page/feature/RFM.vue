<template>
	<div>
		<div><img src="../../assets/underline/special2.jpg" class="Bimg"></div>
		<div class="titles">什么是RFM模型</div>
		<div class="xia"></div>
		<div class="rcontent fcolor" style="font-size: 13px">
			RFM模型是衡量客户价值和客户创利能力的重要工具和手段。通过RFM模型可以分析出顾客在店消费情况，并据此数据做精准的二次营销 。
		</div>
		<div class="rfm warp">
			<div class="hui" v-for="item in rfmInfo">
				<div><img :src="item.imgs" class="rfmImg"></div>
				<div class="rfmTitle fcolor" style="font-size: 13px">{{item.title1}}</div>
				<div class="rfmCon fcolor" style="font-size: 13px">{{item.title2}}</div>
			</div>
		</div>
		<div class="rfm " style="width: 100%;margin: 20px 0">
			<div class="titles">二次营销唤醒</div>
			<div class="xia"></div>
			<div class="rcontent fcolor" style="font-size: 13px">
				无界智慧餐饮系统根据RFM模型算法，自动追踪顾客的消费行为，并对顾客进行分类，提醒商家对活跃、睡眠和沉默等不同类型的顾客发起发券、送红包、短信推送等营销活动，进行精准的二次营销唤醒，提升客情关系，避免客户流失。
			</div>
			<div class="warp">
				<div class="client" v-for="item in clientInfo">
					<div><img :src="item.imgs" class="rfmImg"></div>
					<div class="rfmTitle" style="font-size: 13px">{{item.title1}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "RFM",
		data() {
			return {
				rfmInfo: [
					{
						imgs: require('../../assets/underline/consume_time.png'),
						title1: '最近一次消费',
						title2: '(Recency)'
					},
					{
						imgs: require('../../assets/underline/consume_speed.png'),
						title1: '消费频率',
						title2: '(Frequency)'
					},
					{
						imgs: require('../../assets/underline/consume_money.png'),
						title1: '消费金额',
						title2: '(Monetary)'
					}
				],
				clientInfo: [
					{
						imgs: require('../../assets/underline/active.png'),
						title1: '活跃顾客',
					},
					{
						imgs: require('../../assets/underline/sleep.png'),
						title1: '睡眠顾客',
					},
					{
						imgs: require('../../assets/underline/silent.png'),
						title1: '沉默顾客',
					},
					{
						imgs: require('../../assets/underline/loss.png'),
						title1: '流失顾客',
					},
					{
						imgs: require('../../assets/underline/potential.png'),
						title1: '潜在顾客',
					}
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
	
	.titles {
		margin: 15px auto;
		font-size: 20px;
		font-weight: bold;
	}
	
	.xia {
		background: #707070;
		width: 30%;
		height: 1px;
		margin: 0 auto;
	}
	
	.rcontent {
		font-size: 15px;
		color: #2c3e50;
		text-align: left;
		text-indent: 2em;
		width: 92%;
		margin: 20px 15px;
	}
	
	.rfmImg {
		width: 50px;
		height: 50px;
	}
	
	.rfmTitle {
		color: #2c3e50;
		font-size: 14px;
		margin-top: 20px;
	}
	
	.rfmCon {
		color: #2c3e50;
		font-size: 14px;
	}
	
	.rfm {
		width: 90%;
		background: #F4F4F4;
		margin: 10px auto;
		padding-top: 20px;
		padding-bottom: 20px;
	}
	
	.hui {
		width: 30%
	}
	
	.client {
		width: 20%;
	}
	
	.clientImg {
		width: 40px;
		height: 40px;
	}
	
	.clientfont {
		font-size: 15px;
		font-weight: bold;
	}
</style>