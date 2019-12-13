<template>
	<div>
		<div class="Zbody">
			<div><img src="../../assets/restaurant/chain1.png" class="Zimg"></div>
			<div class="Ztitle">智能到期预警</div>
			<div class="xia"></div>
			<div class="Zcontent">商家可根据食材和时节的不同，设定不同的到期预警时间，届时系统自动提前发出预警，避免食材的临期变质，规避食品安全风险。</div>
		</div>
		<div class="Zbody">
			<div><img src="../../assets/restaurant/chain2.png" class="Zimg"></div>
			<div class="Ztitle">供应商追溯</div>
			<div class="xia"></div>
			<div class="Zcontent">餐饮商家可建立完整的原材料供应商信息库，同时系统支持商家追溯查看供应商的各项资质，所供应原材料的生产日期、送货日期、收货质量等，确保食材安全可追溯和货源质量的稳定。</div>
		</div>
		<div class="Zbody">
			<div><img src="../../assets/restaurant/chain1.png" class="Zimg"></div>
			<div class="Ztitle">供销政策提醒</div>
			<div class="xia"></div>
			<div class="Zcontent">系统根据录入的各供应商的促销政策,在商家执行新采购计划时会自动提醒在具体哪年哪月哪日前再采购多少数量或金额的哪种原材料，即可达到要求获得相应优惠从而实现降低采购成本的目的。</div>
		</div>
		<div class="Zbody">
			<div><img src="../../assets/restaurant/chain4.png" class="Zimg"></div>
			<div class="Ztitle">结款账期提醒</div>
			<div class="xia"></div>
			<div class="Zcontent">系统根据录入的各供应商的结账方式，会自动生成应付货款的日报、周报、月报和季报，为提前合理调配资金、实现资金使用效 率的最大化提供保障。</div>
		</div>
		<div class="Zbody">
			<div><img src="../../assets/restaurant/chain5.png" class="Zimg"></div>
			<div class="Ztitle">退换货政策提醒</div>
			<div class="xia"></div>
			<div class="Zcontent">系统根据录入的各供应商的退换货政策，每日会自动生成报表显示商家哪个供应商的哪些原材料还剩余多少库存，距离可退换货的最后日期还剩多少天，提醒商家及时操作退换货，以避免原材料过期变质带来的损失。</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "wisdom"
	}
</script>

<style scoped>
	.Zbody{
		width: 90%;
		height: auto;
		margin: 20px auto;
		border: 1px solid #E5E5E5;
		border-radius: 5px;
		box-shadow: 0px 3px 6px rgba(0,0,0,0.16);
		background: #F6F6F6;
	}
	.Zimg{
		width:70px;
		height: 70px;
		margin: 20px auto;
		border-radius: 50%;
		background: #E5E5E5;
	}
	.Ztitle{
		font-size: 16px;
		font-weight: bold;
	}
	.xia{
		width: 10%;
		height: 1px;
		background: #F67524;
		margin: 10px auto;
	}
	.Zcontent{
		width: 95%;
		height: auto;
		text-align: left;
		margin: 5px 10px;
		padding-bottom: 20px;
		text-indent: 2em;
	}
</style>