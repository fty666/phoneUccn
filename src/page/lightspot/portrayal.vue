<template>
	<div>
		<div>
			<img src="../../assets/lightbot/businessPortrait.jpg" style="width: 100%;height: auto">
		</div>
		<div>
			<p class="Dtitle">营业画像</p>
			<div class="xia"></div>
			<p class="Dfont">
				通过综合运用无界智慧餐饮系统，可以有效收集、整合餐厅日常经营管理过程中各环节的数据，包括顾客预订、排号、点餐、后厨备菜、制作、上菜、支付、点评打赏等，并通过后台的大数据算法，生成各类报表，比如原材料库存量、原材料损耗、经营流水、上菜时间、客流量、订单量、客单价、翻台率等，并能精准预估小时、日、周、月、季、年各个时段关键经营数据的变化，进而给出合理的预估建议，为日常经营决策提供坚实的数据支撑。</p>
			<p class="Dfont">
				无界智慧餐饮系统将改变会员对餐厅的价值。以往，会员业务仅仅是餐厅为顾客提供储值功能或打折促销的手段，会员数量少且难以触达，移动互联网的发展让对消费行为的数据收集变成了可能。线上线下全渠道的消费者都将成为餐厅的会员，通过对这些会员的消费行为进行分析形成用户画像，商家可以一目了然的知道用户的消费频次、消费场景、消费金额、消费习惯等，再通过无界智慧餐饮系统服务提供的营销工具，实现用户的精准触达，吸引更多的消费者。通过消费者的行为和偏好进行分析，同时还能为餐厅选址、菜品的研发、定价等等一系列经营决策进行指导。</p>
		</div>
		<div class="tese">
			<div class="Dtitle" style="padding-top:20px;">特色亮点</div>
			<div class="xia"></div>
			<div class="warp" style="padding-bottom: 20px">
				<div style="width: 45%;margin-bottom: 20px">
					<img src="../../assets/lightbot/bright4.png" class="xImg">
					<p>大数据采集存储</p>
				</div>
				<div style="width: 45%;margin-bottom: 20px">
					<img src="../../assets/lightbot/bright5.png" class="xImg">
					<p>大数据测算预估</p>
				</div>
				<div style="width: 45%">
					<img src="../../assets/lightbot/bright6.png" class="xImg">
					<p>数据化运营</p>
				</div>
				<div style="width: 45%;">
					<img src="../../assets/lightbot/bright7.png" class="xImg">
					<p>精准营销</p>
				</div>
			</div>
		</div>
		<div>
			<img src="../../assets/lightbot/yinxianhuaxian.png" style="width: 100%;height: auto;margin: 30px auto">
		</div>
		<div class="tese">
			<div class="Dtitle" style="padding-top:20px;">适用商家</div>
			<div class="xia"></div>
			<div class="Dfont">
				所有餐饮商家，尤其是大中型餐厅和自助餐，例如肯德基、麦当劳、星巴克、观宴海鲜自助等，客户量越大的餐厅，营业画像对其提升经营业绩的促进也越大。
			</div>
			<div>
				<swiper :options="swiperOption" ref="mySwiper" class="swiper" style="height: 190px">
					<swiper-slide class="swiper_item">
						<img src="../../assets/lightbot/businessFour1.png" class="pic"/>
					</swiper-slide>
					<swiper-slide class="swiper_item">
						<img src="../../assets/lightbot/businessFour2.png" class="pic"/>
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
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			},
		}
		,
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