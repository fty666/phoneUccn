<template>
	<div>
		<div>
			<div>
				<div><img src="../../assets/restaurant/customer1.png" class="Pimg"></div>
				<div>
					<p class="Dtitle">点评打赏</p>
					<div class="Dfont" style="font-size: 12px">
						<p class="fcolor">
							顾客支付买单后，除了能对餐厅的菜品质量、就餐环境、配送服务等做出评价外，还能对制作相关菜品的厨师和提供服务的服务员进行打赏，打赏类型包括赏金、虚拟礼物、代金券、笑脸等。</p>
						<P class="fcolor">
							通过打赏机制可以调动员工的积极性，同时引入外部的考核，让顾客直接对员工进行评价。系统通过文字评价、收到的礼物或者打赏的金额这些可量化的数据，会自动生成打赏排行榜并实时更新，这样就可以直观衡量员工服务的好坏，不再需要另外制定一系列的考核激励机制，直接让顾客对员工进行考核监督。从“人管人”直接升级到通过制度、KPI数据管人。不仅大大解放老板和管理者的管理压力，节约管理成本，还能让员工自发的服务好自己的顾客，提升客情关系和用户粘度！</P>
						<p class="fcolor">通过这种方式，最终让顾客得到更好的服务，店里获得更好的口碑。</P>
					</div>
				</div>
			</div>
		</div>
		<div style="background: #f6f6f6;">
			<div>
				<img src="../../assets/restaurant/customer2.png" class="Pimg">
			</div>
			<div>
				<p class="Dtitle" style="font-weight: normal">好评返现或返券</p>
				<p class="Dfont" style="font-size:12px;padding-bottom: 30px;color:#2c3e50;">支持商家在后台自主设置好评返现或返券功能。当顾客做出好评、晒图等操作后，系统自动给顾客的会员账户赠送指定额度的红包或各种优惠券、代金券、兑换券等，促进顾客二次消费，有效提升用户粘性和复购率。</p>
			</div>
		
		</div>
		<div class="container">
			<p style="padding:1rem 0 0.2rem;font-size: 20px;font-weight: bold">顾客评价流程图</p>
			<div class="xia"></div>
			<div class="card_put_info">
				<img src="../../assets/restaurant/customer3.png" class="Pimg" style="margin-bottom: 20px;width: 100%" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "customer"
	}
</script>

<style scoped>
	.Pimg {
		width: 70%;
		height: auto;
		margin-top: 40px
	}
	
	.Dtitle {
		/*font-weight: bold;*/
		text-align: center;
		margin: 15px auto;
		font-size: 20px
	}
	.xia {
		width: 40%;
		height: 1px;
		background: black;
		margin: 20px auto;
		margin-bottom: 0px;
	}
	.Dfont {
		font-size: 15px;
		color: #666666;
		width: 90%;
		margin: 0 0 20px 20px;
		text-align: left;
		text-indent: 2em;
	}
</style>