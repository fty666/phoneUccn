<template>
	<div>
		<div class="titles">流程图</div>
		<div class="xia"></div>
		<div class="flexs" style="width: 50%;margin: 10px auto">
			<div :class="['btn',{active:btnact==1}]" @click="Dbtn">到店就餐</div>
			<div :class="['btn',{active:btnact==2}]" @click="Ybtn">宴会预定</div>
		</div>
		<div v-if="btnact==1"><img src="../../assets/restaurant/daodian.jpg" style="width: 90%;height: 170px" alt="">
		</div>
		<div v-if="btnact==2"><img src="../../assets/restaurant/yuding.png" style="width: 90%;height: 170px" alt="">
		</div>
		<div style="background: #F6F6F6;padding-bottom:18px">
			<div style="background: white">
				<p class="Rtitle" style="font-size: 20px">微信餐厅（用户端）</p>
				<div class="xia" style="margin-bottom: 17px"></div>
				<p class="Rcontent">
					无界智慧餐饮系统拥有完善的微信公众号+小程序方案，顾客通过关注商户的微信公众号和小程序即可实现在线自主订座、排号、点餐、外卖、支付、点评等一系列功能操作，方便快捷。</p>
			</div>
			<div style="background: #F6F6F6">
				<p class="Rtitle" style="padding-top: 20px;font-size: 20px">微信排号点餐</p>
			</div>
			<div class="xia"  style="margin-bottom: 17px"></div>
			<div class="Rbody"  style="margin-top: 9px">
				<img src="../../assets/restaurant/now.png" class="Rimg" alt="">
				<p class="Rtitle" >微信在线排号</p>
				<p class="Rcontent">
					顾客通过关注或访问微信端商户的公众号或小程序，足不出户即可实现远程在线排号。根据系统大数据算法预估的到号时间，顾客可以适时取号，合理安排到店时间。同时，通过微信实时推送的最新排号进度，顾客还可适当调整到店时间，省时省力，从而有效避免因为等候时间过长导致的顾客流失。</p>
			</div>
			<div class="Rbody">
				<img src="../../assets/restaurant/yuan.png" class="Rimg" alt="">
				<p class="Rtitle">微信远程订座</p>
				<p class="Rcontent">
					不用电话或到店，顾客通过访问微信端商户的公众号或小程序即可完成预订，系统实时传输预订订单消息到服务员端的无界餐厅APP上，彻底摆脱纸笔记录，方便快捷。</p>
			</div>
			<div class="Rbody">
				<img src="../../assets/restaurant/numPeople.png" class="Rimg">
				<p class="Rtitle">多人同时点餐</p>
				<p class="Rcontent">同行多人可通过分享点餐码或点餐链接，实现多人同步、实时、远程点餐和预点餐，免去来回沟通意见、多方确认、多点和漏点菜的诸多不便。</p>
			</div>
			<div class="Rbody">
				<img src="../../assets/restaurant/mobile.png" class="Rimg">
				<p class="Rtitle">微信自助点餐</p>
				<p class="Rcontent">
					免去顾客叫服务员的麻烦，顾客通过微信即可自助点菜下单，服务员通过所持平板或手机端安装的无界餐厅APP可实时收到订单，确认接单后即刻传输到厨房制作。</p>
			</div>
		</div>
		<!--APP管理-->
		<div class="container">
			<p class="Rtitle" style="font-weight: bold;margin-top: 20px;font-size:20px;">无界餐厅（服务员端）：真正意义上的移动便捷APP管理</p>
			<div class="xia" style="margin-bottom: 20px"></div>
			<p class="Rcontent fcolor" style="width: 98%;margin: 12px auto;">
				无界智慧餐饮系统为餐厅服务员专门打造了一款名叫“无界餐厅”的APP神器，可安装在手机或平板上，帮助服务员从日常繁杂、细致的工作中彻底解放出来，实现真正意义上的移动便捷APP管理。</p>
			<div class="flexs">
				<div :class="['fiveBody',{factive:fstatus==item.id}]" v-for="item in fitSolve"
				     @click="selecImg(item.id)">
					<div v-if="fstatus!=item.id"><img :src="item.img" class="fImg"></div>
					<div v-if="fstatus==item.id"><img :src="item.activeImg" class="fImg "></div>
					<div v-if="fstatus!=item.id" class="fContent">{{item.title}}</div>
					<div v-if="fstatus==item.id" class="fContent" style="color: white">{{item.title}}</div>
				</div>
			</div>
			<div class="user_repeat_item" v-for="(item,index) in appData" v-show="fstatus === index">
				<img :src="item.img" alt="" style="width: 100%;height: auto;margin-top: 15px">
			</div>
			<p class="Rtitle" style="font-weight: bold;margin-top: 20px;font-size: 20px">超级菜单</p>
			<div class="xia" style="margin-bottom: 20px"></div>
			<p class="Rcontent fcolor" style="width: 98%;margin: 10px auto;padding-bottom: 0px">
				商户后台可根据用餐区域的划分，创建不同的菜单，比如中餐菜单、西餐菜单等，并能设置不同赠品和赠送条件，以及适用的门店范围，还支持各菜单之间的切换使用。无界超级菜单帮助餐饮商家彻底实现菜单的电子化、无纸化，有效节省印制成本和人力成本。</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "restaurant",
		data() {
			return {
				btnact: 1,
				fitSolve: [
					{
						img: require('../../assets/restaurant/iconn1.jpg'),
						activeImg: require('../../assets/restaurant/icon1.jpg'),
						title: '智能叫号',
						id: 0,
					},
					{
						img: require('../../assets/restaurant/iconn2.jpg'),
						activeImg: require('../../assets/restaurant/icon2.jpg'),
						title: '餐台管理',
						id: 1,
					},
					{
						img: require('../../assets/restaurant/iconn3.jpg'),
						activeImg: require('../../assets/restaurant/icon3.jpg'),
						title: '菜品调换',
						id: 2,
					},
					{
						img: require('../../assets/restaurant/iconn4.jpg'),
						activeImg: require('../../assets/restaurant/icon4.jpg'),
						title: '服务员点餐',
						id: 3,
					},
					{
						img: require('../../assets/restaurant/iconn5.jpg'),
						activeImg: require('../../assets/restaurant/icon5.jpg'),
						title: '送菜打折',
						id: 4,
					}
				],
				appData: [
					{
						img: require('../../assets/restaurant/app1.jpg')
					},
					{
						img: require('../../assets/restaurant/ctguanli.jpg')
					},
					{
						img: require('../../assets/restaurant/cpdiaohuan.jpg')
					},
					{
						img: require('../../assets/restaurant/fwydinacan.jpg')
					},
					{
						img: require('../../assets/restaurant/soncaidazhe.jpg')
					}
				],
				fstatus: 0,
			}
		},
		methods: {
			//按钮选择
			Dbtn() {
				this.btnact = 1;
			},
			Ybtn() {
				this.btnact = 2;
			},
			//	按钮选择
			selecImg(index) {
				this.fstatus = index;
			}
		}
	}
</script>

<style scoped>
	.titles {
		font-size: 20px;
		font-weight: bold;
		text-align: center;
		margin: 20px auto;
	}
	
	.xia {
		width: 40%;
		height: 1px;
		background: black;
		margin: 0 auto;
		margin-bottom: 17px;
	}
	
	.btn {
		width: 50%;
		height: 35px;
		border-radius: 5px;
		background: #FDDFCC;
		font-size: 13px;
		color: #666666;
		margin: auto 5px;
		line-height: 25px;
	}
	
	.active {
		color: white;
		background: #F67524;
	}
	
	.Rbody {
		width: 95%;
		height: auto;
		margin: 30px auto;
		background: white;
	}
	
	.Rtitle {
		margin: 0px auto;
		font-size: 15px;
		font-weight: bold;
		padding-bottom: 15px;
	}
	
	.Rcontent {
		text-align: left;
		text-indent: 2em;
		font-size: 12px;
		margin: 0 15px;
		padding-bottom: 30px;
		line-height: 20px;
	}
	
	.Rbody {
		width: 94%;
		height: auto;
		margin: 20px auto;
		border-radius: 8px;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
	}
	
	.Rimg {
		width: 65px;
		height: 65px;
		margin: 20px auto;
	}
	
	.fiveBody {
		width: 20%;
		height: 80px;
		border: 1px solid #999999;
	}
	
	.factive {
		background: #F67524;
		color: white;
	}
	
	.fImg {
		width: 40px;
		height: 40px;
		margin-top: 10px;
	}
	
	.fContent {
		font-size: 12px;
		color: #999999;
		margin: 10px 0 0 0;
		text-align: center;
		
	}
</style>