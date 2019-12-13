<template>
	<div style="background: #F6F6F6">
		<div><img src="../../assets/underline/special4.jpg" class="Bimg"></div>
		<div class="cTitle">线上线下融合的收银体系</div>
		<div class="xia"></div>
		<div class="warp">
			<div class="coll " v-for="item in collInfo">
				<div><img :src="item.img" class="collImg"></div>
				<div class="collTitle">{{item.title}}</div>
				<div class="collCon">{{item.con}}</div>
			</div>
		</div>
		<div style="background: white;margin-top: 20px">
			<div class="cTitle" style="padding-top: 20px">线上线下融合的收银方案</div>
			<div class="xia"></div>
			<div class="warp">
				<div class="coll" v-for="item in scheme" style="background: #FAFAFA">
					<div><img :src="item.img" style="margin: 20px auto"></div>
					<div class="collTitle">{{item.title}}</div>
					<div class="collCon">{{item.con}}</div>
				</div>
			</div>
		</div>
		<div>
			<div class="cTitle">功能支持</div>
			<div class="xia" style="margin-bottom: 20px"></div>
			<div style="height: 230px">
				<swiper :options="swiperOption" ref="mySwiper" class="swiper" style="height: 230px">
					<swiper-slide class="swiper_item">
						<div class="warp">
							<div class="fun" v-for="item in fun1">
								<div><img :src="item.img" class="funImg"></div>
								<div class="funTitle">{{item.title}}</div>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper_item">
						<div class="warp">
							<div class="fun" v-for="item in fun2">
								<div><img :src="item.img" class="funImg"></div>
								<div class="funTitle">{{item.title}}</div>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper_item">
						<div class="bttenWarp">
							<div class="fun" v-for="item in fun3">
								<div><img :src="item.img" class="funImg"></div>
								<div class="funTitle">{{item.title}}</div>
							</div>
						</div>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination" style="top:210px"></div>
				</swiper>
			</div>
		</div>
		<div style="background: white">
			<div class="cTitle" style="padding-top: 20px">产品优势</div>
			<div class="xia" style="margin-bottom: 10px"></div>
			<div style="margin-top: 10px"><img src="../../assets/cash/xianxia.png" style="width: 80%;height: auto">
			</div>
			<div class="flexs">
				<div class="wai1"><p>支持微信支付、支付宝、无界支付、现金等方式，线上线下打通融合的收银体系，可不用硬件收银，方便快捷。</p></div>
				<div class="wai1"><p>直接使用商家自己独立的微信支付账户和支付宝账户收银，费率低、零风险，秒到账。</p></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "collMoney",
		data() {
			return {
				collInfo: [
					{
						img: require('../../assets/cash/pay1.png'),
						title: '无界支付',
						con: '共享无界智慧餐饮系统海量会员，共享无界余额和积分，专享超低费率。'
					},
					{
						img: require('../../assets/cash/pay2.png'),
						title: '现金支付',
						con: '支持现金收款，系统自动提示找零金额。'
					},
					{
						img: require('../../assets/cash/pay3.png'),
						title: '微信支付',
						con: '专享超低费率，支持扫码收款和被扫支付。'
					},
					{
						img: require('../../assets/cash/pay4.png'),
						title: '支付宝',
						con: '专享超低费率，支持扫码收款和被扫支付。'
					}
				],
				scheme: [
					{
						img: require('../../assets/cash/programme1.png'),
						title: 'APP收银',
						con: '店员手持平板或手机即可完成移动扫码收款和被扫支付。'
					},
					{
						img: require('../../assets/cash/programme2.png'),
						title: '扫码收款',
						con: '商户主动扫客户二维码收款。'
					},
					{
						img: require('../../assets/cash/programme3.png'),
						title: '被扫支付',
						con: '顾客扫描商家二维码进行付款。'
					},
					{
						img: require('../../assets/cash/programme4.png'),
						title: '支付后营销',
						con: '支付后即成为会员，商家可进行发红包，送优惠券等二次营销。'
					}
				],
				fun1: [
					{
						img: require('../../assets/cash/support1.png'),
						title: '微信收银体系'
					},
					{
						img: require('../../assets/cash/support2.png'),
						title: '支付宝收银体系'
					},
					{
						img: require('../../assets/cash/support3.png'),
						title: '优惠规则设定'
					},
					{
						img: require('../../assets/cash/support4.png'),
						title: '超低费率收银'
					},
					{
						img: require('../../assets/cash/support5.png'),
						title: '支付送券'
					},
					{
						img: require('../../assets/cash/support6.png'),
						title: '支付即会员'
					},
					{
						img: require('../../assets/cash/support7.png'),
						title: '推广渠道管理'
					},
					{
						img: require('../../assets/cash/support8.png'),
						title: '收银后营销功能'
					},
				],
				fun2: [
					{
						img: require('../../assets/cash/support9.png'),
						title: '移动收银APP'
					},
					{
						img: require('../../assets/cash/support10.png'),
						title: '多收银员管理'
					},
					{
						img: require('../../assets/cash/support11.png'),
						title: '退款找零'
					},
					{
						img: require('../../assets/cash/support12.png'),
						title: '多门店管理'
					},
					{
						img: require('../../assets/cash/support13.png'),
						title: '智能收银终端'
					},
					{
						img: require('../../assets/cash/support14.png'),
						title: '详实的数据统计'
					},
					{
						img: require('../../assets/cash/support15.png'),
						title: '多终端适配'
					},
					{
						img: require('../../assets/cash/support16.png'),
						title: '收银渠道统计分析'
					},
				],
				fun3: [
					{
						img: require('../../assets/cash/support17.png'),
						title: '详尽权限控制'
					},
					{
						img: require('../../assets/cash/support18.png'),
						title: '吸粉拉新'
					},
					{
						img: require('../../assets/cash/support19.png'),
						title: '卡券平台'
					},
					{
						img: require('../../assets/cash/support20.png'),
						title: '会员CRM系统'
					},
					{
						img: require('../../assets/cash/support21.png'),
						title: '多行业应用'
					}
				],
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
			this.common.menu();
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
	}
</script>

<style scoped>
	.cTitle {
		font-size: 20px;
		margin: 20px auto;
		font-weight: bold;
	}
	
	.xia {
		width: 30%;
		height: 1px;
		background: #707070;
		margin: 0px auto;
	}
	
	.coll {
		width: 45%;
		height: 190px;
		background: white;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
		border-radius: 4px;
		margin-top: 20px;
	}
	
	.collImg {
		width: 60px;
		height: 60px;
		margin: 15px auto;
	}
	
	.collTitle {
		font-size: 15px;
	}
	
	.collCon {
		font-size: 11px;
		width: 90%;
		margin: 5px 10px;
		text-align: left;
	}
	
	.fun {
		width: 25%;
		height: auto;
	}
	
	.funImg {
		width: 55px;
		height: 55px;
		margin-top: 10px;
	}
	
	.funTitle {
		margin-top: 10px;
		color: #333333;
		font-size: 11px;
	}
	
	.wai1 {
		width: 45%;
		height: 100px;
		border: 1px solid #F67524;
		margin: 10px auto;
	}
	
	.wai1 p {
		width: 95%;
		text-align: left;
		margin: 5px auto;
		color: #666666;
	}
</style>