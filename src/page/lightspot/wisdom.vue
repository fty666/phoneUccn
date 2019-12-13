<template>
	<div>
		<div>
			<img src="../../assets/lightbot/crowdFund3.jpg" style="width: 100%;height: auto">
		</div>
		<div>
			<p class="Dtitle">智慧餐饮供应链</p>
			<div class="xia"></div>
			<p class="Dfont">
				“无界智慧供应链系统”通过录入采集原材料供应商信息、供货政策、供货价格等，并结合采购、批款、验收、入库、盘点、调拨、变卖、废弃等各环节的手机App审批流程，确保所采购原材料供应稳定、质优价廉、品质可靠，而且可以全流程监控原材料来源和去向，实现移动化、无纸化办公，流程化、精细化管理。</p>
			<p class="Dfont">
				“无界食品安全预警系统”实现对食材采购、存储、加工、制作的全流程监控，并根据时节的变化分别提供初级、中级和到期预警，最大程度避免因食材过期变质导致的食品安全问题，规避卫生投诉监管风险。</p>
		</div>
		<div class="tese">
			<div class="Dtitle" style="padding-top:20px;">特色亮点</div>
			<div class="xia"></div>
			<div class="warp" style="padding-bottom: 30px">
				<div style="width: 45%;margin-bottom: 20px">
					<img src="../../assets/lightbot/bright8.png" class="xImg">
					<p>智慧供应链</p>
				</div>
				<div style="width: 45%;margin-bottom: 20px">
					<img src="../../assets/lightbot/bright9.png" class="xImg">
					<p>库存预警系统</p>
				</div>
				<div style="width: 45%">
					<img src="../../assets/lightbot/bright10.png" class="xImg">
					<p>食品安全预警系统</p>
				</div>
				<div style="width: 45%;">
					<img src="../../assets/lightbot/bright11.png" class="xImg">
					<p>原材料智能预估系统</p>
				</div>
			</div>
		</div>
		<div>
			<swiper :options="swiperOption" ref="mySwiper" class="swiper">
				<swiper-slide class="swiper_item">
					<img src="../../assets/lightbot/canyingongyin.jpg" style="width: 90%;height: auto;padding-top: 30px">
				</swiper-slide>
				<swiper-slide class="swiper_item">
					<img src="../../assets/lightbot/zhihuilian2.png" style="width: 82%;height: auto;margin-left: 20px">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination" style="bottom: 0px"></div>
			</swiper>
		
		
		</div>
		<div class="tese">
			<div class="Dtitle" style="padding-top:20px;">适用商家</div>
			<div class="xia"></div>
			<div class="Dfont" style="text-align: left;text-indent: 2em">
				大型连锁餐饮企业、中式餐厅、火锅、海鲜、烧烤等，例如海底捞、小肥羊、俏江南、外婆家、真功夫等。
			</div>
			<div>
				<swiper :options="swiperOption" ref="mySwiper" class="swiper" style="height: 190px">
					<swiper-slide class="swiper_item">
						<img src="../../assets/lightbot/businessThree1.png" class="pic"/>
					</swiper-slide>
					<swiper-slide class="swiper_item">
						<img src="../../assets/lightbot/businessThree2.png" class="pic"/>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination" style="top:156px"></div>
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
		created(){
			this.common.menu()
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