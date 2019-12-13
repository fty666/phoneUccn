<template>
	<div>
		<div>
			<img src="../../assets/lightbot/crowdFund1.jpg" style="width: 100%;height: auto">
		</div>
		<div>
			<p class="Dtitle">无界众筹</p>
			<div class="xia"></div>
			<p class="Dfont">
				无界众筹系统是一款在无界智慧餐饮系统实现关键数据和环节透明化、可视化的基础上，致力于解决实体门店项目开店和经营过程中面临的资金短缺和忠诚客户积累两大难题的项目投资管理系统。</p>
			<p class="Dfont">
				餐厅门店作为独立的众筹项目发布到交易平台上，会员可在线购买、转让份额化的餐厅权益，并可通过无界掌柜手机端APP获取、查看、监控餐厅的日常经营情况，同时作为权益人还享受一系列特殊的到店消费权益，例如会员价格、打折特权、转赠卡券、菜品赠送等。
			</p>
			<p class="Dfont">
				在所有的商业模式中，不管采用什么样的方式，只要锁定了消费者，就锁定了一切。通过无界众筹系统，就让消费者或会员成为了餐厅的主人，不仅能极大缓解餐饮项目运营中诸如批量采购、装修升级、连锁开店等遇到的资金短缺难题，同时还能吸引一批原始的忠诚客户，保证了基础客流量。</p>
		</div>
		<div class="tese">
			<div class="Dtitle" style="padding-top:30px;">特色亮点</div>
			<div class="xia"></div>
			<div class="warp" style="padding-top:0px;padding-bottom: 40px">
				<div>
					<img src="../../assets/lightbot/bright1.png" class="limg">
					<p style="padding-top: 15px">无界掌柜</p>
				</div>
				<div>
					<img src="../../assets/lightbot/bright2.png" class="limg">
					<p style="padding-top: 15px">超级权益卡</p>
				</div>
				<div>
					<img src="../../assets/lightbot/bright3.png" class="limg">
					<p style="padding-top: 15px">权益人特权</p>
				</div>
			</div>
		</div>
		<div>
			<img src="../../assets/lightbot/shiyonshanjia.jpg" style="width: 90%;height: auto">
		</div>
		<div class="tese">
			<div class="Dtitle" style="padding-top:20px;">适用商家</div>
			<div class="xia"></div>
			<div class="Dfont">
				有一定经营基础和升级拓店需求的中小型餐饮商家，有大量用户群的网红店，以及有一定会员基础沉淀的传统饭店和餐厅等。例如鲍师傅糕点、喜茶、书香门第海鲜、娜娜家西餐厅、莎莎餐厅。
			</div>
			<div>
				<swiper :options="swiperOption" ref="mySwiper" class="swiper" style="height: 190px">
					<swiper-slide class="swiper_item">
						<img src="../../assets/lightbot/businessOne1.png" class="pic"/>
					</swiper-slide>
					<swiper-slide class="swiper_item">
						<img src="../../assets/lightbot/businessOne2.png" class="pic"/>
					</swiper-slide>
					<swiper-slide class="swiper_item">
						<img src="../../assets/lightbot/businessOne3.png" class="pic"/>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination" style="top:150px"></div>
				</swiper>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "lightspotIndex",
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
		margin-bottom: 30px;
	}
	
	.tese {
		width: 100%;
		height: auto;
		background: #F6F6F6;
	}
	
	.limg {
		width: 50px;
		height: 50px;
	}
</style>