<template>
	<div class="hui">
		<div><img src="../../assets/underline/special7.jpg" class="Bimg"></div>
		<div class="cTitle">为什么要用微信卡券</div>
		<div class="xia"></div>
		<swiper :options="swiperOption" ref="mySwiper" class="swiper">
			<swiper-slide v-for="(item,index) in whyInfo" :key="index" class="swiper_item" style="height: 23 0px">
				<div class="why">
					<div><img :src="item.img" class="whyImg"></div>
					<div class="whyTitle ">{{item.title}}</div>
					<div class="whyCon ">{{item.content}}</div>
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination" style="bottom: 0px"></div>
		</swiper>
		<div class="type">
			<div class="cTitle" style="padding-top: 20px">卡券的类型</div>
			<div class="xia" style="background: #707070"></div>
			<div class="warp">
				<div class="cardType" v-for="item in cardInfo">
					<div><img :src="item.img" class="cardImg"></div>
					<div class="cardTitle">{{item.title}}</div>
				</div>
			</div>
		</div>
		<div class="cTitle">卡券功能介绍</div>
		<div class="xia"></div>
		<div class="warp">
			<div class="fun warp" v-for="item in funInfo">
				<div><img :src="item.img" class="funImg"></div>
				<div class="funTitle">{{item.title}}</div>
				<div class="funCon">{{item.content}}</div>
			</div>
		</div>
		<div class="flexs">
			<div class="fun warp">
				<div><img src="../../assets/retail/consume_portrait.png" class="funImg"></div>
				<div class="funTitle">会员画像</div>
				<div class="funCon">运用大数据算法</div>
			</div>
			<div class="fun warp" style="margin-left: 20px">
				<div><img src="../../assets/retail/consume_notice.png" class="funImg"></div>
				<div class="funTitle">会员通知</div>
				<div class="funCon">多途径会员通知功能</div>
			</div>
		</div>
		<div class="type" style="padding-bottom: 20px">
			<div class="cTitle" style="padding-top: 20px">卡券投放方式</div>
			<div class="xia"></div>
			<div class="bttenWarp">
				<div class="way" v-for="item in wayInfo">
					<div><img :src="item.img" class="wayImg"></div>
					<div class="wayTitle">{{item.title}}</div>
				</div>
			</div>
			<div class="wayBottom">
				<p>线下渠道：多门店店内易拉宝、海报、点餐桌码、餐桌台卡、传</p>
				<p style="line-height: 3px">统媒体（比如报纸、杂志、电视台）等。</p>
			</div>
		</div>
		<div class="cTitle" style="margin-top: 20px">卡券的投放渠道监测与统计</div>
		<div class="xia"></div>
		<div class="warp">
			<div class="stat" v-for="item in statInfo">
				<div><img :src="item.img" class="statImg"></div>
				<div class="statTile">{{item.title}}</div>
			</div>
		</div>
		<div class="type">
			<div class="cTitle" style="padding-top: 20px">卡券的核销</div>
			<div class="xia"></div>
			<div class="flexs">
				<div :class="['selec1',selecId==1?'selecBj':'']" @click="selected(1)">核销方式</div>
				<div :class="['selec2',selecId==2?'selecBj':'']" @click="selected(2)">特性</div>
			</div>
			<div v-if="selecId==1" >
				<div><img src="../../assets/retail/write1.png" class="xiaoImg"></div>
				<div class="xiaoFont">手机或平板端移动APP核销、扫码枪核销、盒子核销、智慧POS核销。</div>
			</div>
			<div v-if="selecId==2" style="height: 250px">
				<div><img src="../../assets/retail/huiyuanjifen.png" class="xiaoImg"
				          style="width: 80%;margin: 50px auto"></div>
				<div class="xiaoFont">核销过程和收银相结合、会员积分体系相结合。</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "coupon",
		data() {
			return {
				whyInfo: [
					{
						img: require('../../assets/retail/card_system.png'),
						title: '脱离公众号体系',
						content: '无需关注公众号即可对会员进行二次营销'
					},
					{
						img: require('../../assets/retail/card_convenient.png'),
						title: '成本低，管理方便',
						content: '电子化卡券，成本低，商家管理极其方便'
					},
					{
						img: require('../../assets/retail/card_speed.png'),
						title: '转化率高',
						content: '基于社交平台，传播度高，办卡容易，二次营销转化率高'
					},
				],
				cardInfo: [
					{
						img: require('../../assets/retail/consumer_coupon.png'),
						title: '消费卡',
					},
					{
						img: require('../../assets/retail/equity_card.png'),
						title: '权益卡',
					},
					{
						img: require('../../assets/retail/youhui_coupon.png'),
						title: '优惠券',
					},
					{
						img: require('../../assets/retail/cash_card.png'),
						title: '代金券',
					},
					{
						img: require('../../assets/retail/exchange_card.png'),
						title: '兑换券',
					},
					{
						img: require('../../assets/retail/money_coupon.png'),
						title: '现金券',
					}
				
				],
				funInfo: [
					{
						img: require('../../assets/retail/consume_check.png'),
						title: '优惠买单',
						content: "多种优惠方式随意组合"
					},
					{
						img: require('../../assets/retail/consume_function.png'),
						title: '储值功能',
						content: "中小商家都能用的储值功能"
					},
					{
						img: require('../../assets/retail/consume_channel.png'),
						title: '会员渠道',
						content: "轻松掌握会员加入渠道"
					},
					{
						img: require('../../assets/retail/consume_member.png'),
						title: '支付即会员',
						content: "微信支付宝支付后即成会员"
					},
					{
						img: require('../../assets/retail/consume_grade.png'),
						title: '会员等级',
						content: "自定义会员等级成长体系"
					}, {
						img: require('../../assets/retail/consume_system.png'),
						title: '积分体系',
						content: "积分获取消耗，完全自定义"
					},
				
				],
				wayInfo: [
					{
						img: require('../../assets/retail/put1.png'),
						title: '活动派发'
					},
					{
						img: require('../../assets/retail/put2.png'),
						title: '关注派发'
					},
					{
						img: require('../../assets/retail/put3.png'),
						title: '群发推送'
					},
					{
						img: require('../../assets/retail/put4.png'),
						title: '游戏派送'
					},
					{
						img: require('../../assets/retail/put5.png'),
						title: '社交分享'
					},
					{
						img: require('../../assets/retail/put6.png'),
						title: '线下渠道'
					},
				],
				statInfo: [
					{
						img: require("../../assets/retail/count1.png"),
						title: '建立和选择投放渠道'
					},
					{
						img: require("../../assets/retail/count2.png"),
						title: '多渠道物料生成'
					},
					{
						img: require("../../assets/retail/count3.png"),
						title: '投放并监控效果'
					},
					{
						img: require("../../assets/retail/count4.png"),
						title: '改进渠道投放策略'
					},
				],
				selecId: 1,
				swiperOption: {
					loop: true,
					autoplay : 2000,
					pagination: {
						el: '.swiper-pagination',
					},
					autoplay: {
						disableOnInteraction: false,
					}
				},
			}
		},
		created(){
			this.common.menu()
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		methods: {
			selected(id) {
				this.selecId = id;
			}
		}
	}
</script>

<style scoped>
	.hui {
		width: 100%;
		height: auto;
		background: #F6F6F6;
	}
	
	.cTitle {
		font-size: 20px;
		font-weight: bold;
		margin: 20px auto;
	}
	
	.xia {
		width: 30%;
		height: 1px;
		background: #707070;
		margin: 20px auto;
	}
	
	.why {
		width: 90%;
		height: 200px;
		background: white;
		margin: 0 auto;
	}
	
	.whyImg {
		width: 80px;
		height: 70px;
		margin: 20px auto;
	}
	
	.whyTitle {
		font-size: 15px;
		color: #2c3e50;
	}
	
	.whyCon {
		font-size: 12px;
		color: #2c3e50;
		margin: 10px 15px;
	}
	
	.type {
		width: 100%;
		height: auto;
		background: white;
	}
	
	.cardType {
		width: 30%;
	}
	
	.cardImg {
		width: 60px;
		height: 60px;
	}
	
	.cardTitle {
		margin: 5px auto;
		font-size: 12px;
	}
	
	.fun {
		width: 30%;
		height: auto;
	}
	
	.funImg {
		width: 60px;
		height: 60px;
	}
	
	.funTitle {
		font-size: 14px;
		margin: 10px auto;
		color: #666666;
	}
	
	.funCon {
		font-size: 12px;
		color: #666666;
		margin-bottom: 16px;
	}
	
	.way {
		width: 30%;
	}
	
	.wayImg {
		width: 60px;
		height: 60px;
	}
	
	.wayTitle {
		font-size: 13px;
		margin-top: 10px;
	}
	
	.wayBottom {
		width: 90%;
		height: 55px;
		border: 1px solid #F67524;
		border-radius: 40px;
		color: #F67524;
		margin: 10px auto;
		font-size: 11px;
		line-height: 35px;
	}
	
	.stat {
		width: 45%;
		margin: 10px auto;
	}
	
	.statImg {
		width: 80px;
		height: 80px;
	}
	
	.statTile {
		font-size: 13px;
		line-height: 35px;
	}
	
	.selec1 {
		width: 100px;
		height: 40px;
		background: #FDDFCC;
		padding-top: 10px;
		font-size: 13px;
		margin-left: 20%;
		color: #666666;
		cursor: pointer;
		border-radius:4px;
	}
	
	.selec2 {
		width: 100px;
		height: 40px;
		background: #FDDFCC;
		padding-top: 10px;
		font-size: 13px;
		margin-left: 20px;
		color: #666666;
		cursor: pointer;
		border-radius:4px;
	}
	
	.selecBj {
		background: #F67524;
		color: white;
	}
	
	.xiaoImg {
		width: 95%;
		height: auto;
		margin-top: 20px;
	}
	
	.xiaoFont {
		color: #666666;
		font-size: 13px;
		width: 95%;
		margin: 5px 10px;
		text-align: center;
	}
	
	.el-carousel__container {
		height: 200px;
	}
</style>