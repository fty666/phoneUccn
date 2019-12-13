<template>
	<div>
		<div>
			<img src="../../assets/lightbot/crowdFund2.jpg" style="width: 100%;height: auto">
		</div>
		<div>
			<p class="Dtitle">异业联盟</p>
			<div class="xia"></div>
			<p class="Dfont">
				随着商业的发展，市场竞争越来越残酷，行业集中度越来越高。近年来国内少数本地生活服务平台和外卖网站就逐渐形成了垄断地位，而餐饮行业以中小商家为主的格局又削弱了各自的议价能力。大量的小商家、小企业、小品牌的生存受到巨大威胁。为打破这种局面，广大中小商家、企业必须联合起来，积众弱为强，共同对抗大品牌、大平台的冲击。
			</p>
			<p class="Dfont">
				通过无界智慧餐饮打造的“共同体营销系统”，各行业商家可自由发起和组织异业联盟，联合发行各店通用的超级会员卡、超级优惠券、超级代金券、超级兑换券等，相互引流、互相借力，形成区域的商业集聚效应，有效降低获客成本。
			</p>
		</div>
		<div class="tese">
			<div class="Dtitle" style="padding-top:20px;">特色亮点</div>
			<div class="xia"></div>
			<div class="warp" style="padding-top:20px;padding-bottom: 40px">
				<div>
					<img src="../../assets/lightbot/bright12.png" class="xImg">
					<p>超级会员卡</p>
				</div>
				<div>
					<img src="../../assets/lightbot/bright13.png" class="xImg">
					<p>超级优惠券</p>
				</div>
				<div>
					<img src="../../assets/lightbot/bright14.png" class="xImg">
					<p>超级代金券</p>
				</div>
				<div>
					<img src="../../assets/lightbot/bright15.png" class="xImg">
					<p>超级兑换券</p>
				</div>
			</div>
		</div>
		<div>
			<img src="../../assets/lightbot/gongtongti.jpg" style="width: 85%;height: auto">
		</div>
		<div class="tese">
			<div class="Dtitle" style="padding-top:20px;">适用商家</div>
			<div class="xia"></div>
			<div class="Dfont" style="text-align: left;text-indent: 2em">
				夫妻餐饮店、酒楼饭店，以及入驻高校食堂、商场和商业街的各色商家。
			</div>
			<div>
				<swiper :options="swiperOption" ref="mySwiper" class="swiper" style="height: 190px">
					<swiper-slide class="swiper_item">
						<img src="../../assets/lightbot/businessTwo1.png" class="pic"/>
					</swiper-slide>
					<swiper-slide class="swiper_item">
						<img src="../../assets/lightbot/businessTwo2.png" class="pic"/>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination" style="top:160px"></div>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				swiperOption: {
					loop: true,
					autoplay: true,
					auto: 4000,
					pagination: {  //分页器
						el: '.swiper-pagination',
					},
					autoplay: {//手动拖动完图片会继续自动播放
						disableOnInteraction: false,
					}
				}
			}
		},
		created() {
			this.menu();
		},
		methods: {
			menu() {
				window.scrollTo(0, 0)
			}
		},
	}
</script>

<style scoped>
	.Pimg {
		width: 90%;
		height: auto;
		margin-top: 40px
	}
	
	.Dtitle {
		text-align: center;
		margin: 10px auto;
		font-size: 18px;
		font-weight: bold;
	}
	
	.Dfont {
		font-size: 12px;
		color: #666666;
		width: 90%;
		margin: 0 0 15px 20px;
		text-align: left;
		text-indent: 2em;
	}
	
	.xia {
		width: 30%;
		height: 1px;
		background: black;
		margin: 0px auto;
		margin-bottom: 20px;
	}
	
	.tese {
		width: 100%;
		height: auto;
		background: #F6F6F6;
	}
	
	.xImg {
		width: 50px;
		height: 50px;
		margin-bottom: 20px;
	}
</style>