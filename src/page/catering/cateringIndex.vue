<template>
	<div>
		<div><img src="../../assets/catering/canyin1.jpg" class="timg"></div>
		<div class="titles">无界智慧餐饮系统能帮您解决哪些痛点？</div>
		<div class="xia"></div>
		<div class="catering_solve_wrap clearfix" style="padding-bottom: 9px">
			<swiper :options="swiperOption" ref="mySwiper" class="swiper">
				<swiper-slide class="swiper_item" style="height: 315px">
					<div class="catering_solve_item" style="border: 1px solid #f67524;border-bottom:2px solid #f67524;">
						<div class="catering_solve_item_top">
							<p style="background: #f67524;">人员流动性大，员工不积极，人力成本高。</p>
						</div>
						<div class="catering_solve_item_bottom">
							<p><span style="color:#f67524;">解决方案：</span><span>微信公众号、小程序和手机客户端app实现顾客在线全程自助排号、预订、点餐、外卖、支付、点评，有效提升用户体验，同时还能降低餐厅对员工人数的需求；另外，通过顾客打赏系统，不但能实现对员工的科学考评，提升员工积极性，还能有效降低人员管理和激励成本。</span>
							</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper_item">
					<div class="catering_solve_item fl"
					     style="border: 1px solid #4fa3da;border-bottom:2px solid #4fa3da;">
						<div class="catering_solve_item_top">
							<p style="background:#4fa3da;">员工食品安全意识差，卫生监管风险高。</p>
						</div>
						<div class="catering_solve_item_bottom">
							<p><span style="color:#4fa3da;">解决方案：</span><span>无界智慧餐饮推出专门的“食品安全监管系统”，记录从原材料的采购、入库、储存、使用、保质期等各个环节的操作数据和责任人，并能根据季节变化提前发出到期预警。另外，借助24小时联网的无界智能摄像头，餐厅老版和会员可以随时通过手机上安装的无界掌柜app，实时远程监控餐厅各区域的操作情况。综合以上措施，确保菜品的安全卫生，有效规避卫生监管风险。</span>
							</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper_item">
					<div class="catering_solve_item fl"
					     style="border: 1px solid #e94a40;border-bottom:2px solid #e94a40;">
						<div class="catering_solve_item_top">
							<p style="background:#e94a40;">原材料浪费严重，出品率低。</p>
						</div>
						<div class="catering_solve_item_bottom">
							<p><span style="color:#e94a40;">解决方案：</span><span>“无界原材料智能预估系统”专门设计，记录采购的各种原材料从粗加工、细加工，再到制成半成品、成品的各个环节的损耗率和操作人，并生成各个时段各种原材料、各环节、各操作人的损耗率分析报表，并能据此预估合理的采购原材料种类和数量，为查找浪费源头，提升出品率提供坚持的数据支撑与合理化建议。</span>
							</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper_item">
					<div class="catering_solve_item fl"
					     style="border: 1px solid #e72f6f;border-bottom:2px solid #e72f6f;">
						<div class="catering_solve_item_top">
							<p style="background:#e72f6f;">各服务和制作环节协作不畅，上错菜、漏菜、缺菜的情况时有发生。</p>
						</div>
						<div class="catering_solve_item_bottom">
							<p><span style="color:#e72f6f;">解决方案：</span><span>通过无界智慧餐饮的前厅后厨协同系统可以实现，从前厅的排号叫号、入号就座、点菜下单，到后厨的接单备菜、分菜制作、摆盘上菜等各个环节，无缝对接和信息的实时共享，保证各岗位各司其职，从而有效地把出错率降到最低。</span>
							</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper_item">
					<div class="catering_solve_item fl"
					     style="border: 1px solid #35b794;border-bottom:2px solid #35b794;">
						<div class="catering_solve_item_top">
							<p style="background:#35b794;">采购成本高，采购价格不透明，品质参差不齐，以次充好的现象屡见不鲜。</p>
						</div>
						<div class="catering_solve_item_bottom">
							<p><span style="color:#35b794;">解决方案：</span><span>“无界智慧供应链系统”通过录入采集原材料供应商信息、供货政策、供货价格等，并结合采购、批款、验收、入库等各环节的审批流程，确保所采购原材料供应稳定、质优价廉且品质可靠。</span>
							</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper_item">
					<div class="catering_solve_item fl"
					     style="border: 1px solid #ad67a7;border-bottom:2px solid #ad67a7;">
						<div class="catering_solve_item_top">
							<p style="background:#ad67a7;">线上红利枯竭，利润受线上大平台挤压。</p>
						</div>
						<div class="catering_solve_item_bottom">
							<p><span style="color:#ad67a7;">解决方案：</span><span>无界智慧餐饮专门开发一套“共同体系统”，支持使用该系统的餐饮商家自行发起或参与各类共同体，帮助广大本地中小商家实现跨店跨业跨界联盟，通过联合发行各店通用的超级会员卡、优惠券、代金券和兑换券等，整合各店优势，相互引流、互利共赢。同时，合作商家还可以选择在我司完全独立运营开发的综合性移动社交电商平台——无界优品（WUJIEMALL）上进行推广引流，从而帮助广大餐饮商家最大程度摆脱对单一线上平台的过度依赖，确保自身利润不被挤压。</span>
							</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper_item">
					<div class="catering_solve_item fl"
					     style="border: 1px solid #f5b51c;border-bottom:2px solid #f5b51c;">
						<div class="catering_solve_item_top">
							<p style="background:#f5b51c;">获客成本高，客户留存率低。</p>
						</div>
						<div class="catering_solve_item_bottom">
							<p><span style="color:#f5b51c;">解决方案：</span><span>通过无界智慧餐饮打造的会员营销系统，合作商家可联合发行各店通用的超级会员卡、超级优惠券、超级代金券、超级抵扣券等，相互引流、相互借力，形成集群效应，有效降低获客成本。另外，通过互动游戏板块的各种趣味分享小游戏，例如抓娃娃、集碎片、紫薇斗数等，促进会员活跃度和参与度，有效提升客户留存。最终实现巩固老客户，吸引新客户，实现客流量不断增长的良性循环。</span>
							</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper_item">
					<div class="catering_solve_item fl"
					     style="border: 1px solid #1edcdc;border-bottom:2px solid #1edcdc;">
						<div class="catering_solve_item_top">
							<p style="background:#1edcdc;">客流集中，等候时间长，用户体验差。</p>
						</div>
						<div class="catering_solve_item_bottom">
							<p><span style="color:#1edcdc;">解决方案：</span><span>通过无界智慧餐饮系统中的“沃天客流量预估系统”，可自动时时记录和存储餐厅的客流量数据，并通过科学的大数据算法，精准预估小时、日、周、月、季、年各个时段的客流量变化数据，为管理者提前制定有效预案，采取各种措施“削峰填谷”，分流客流量，缩短顾客等候时间，提升用户体验提供坚实的科学决策依据。</span>
							</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper_item">
					<div class="catering_solve_item fl"
					     style="border: 1px solid #ea68a2;border-bottom:2px solid #ea68a2;">
						<div class="catering_solve_item_top">
							<p style="background: #ea68a2;">普遍面临大批量采购、装修升级、连锁开店的资金短缺问题。</p>
						</div>
						<div class="catering_solve_item_bottom">
							<p><span style="color:#ea68a2;">解决方案：</span><span>“无界众筹系统”在无界智慧餐饮系统实现对餐厅关键数据和环节透明化、可视化的基础上，把餐厅作为独立的众筹项目发布到平台上，会员可在线购买、交易份额化的餐厅权益，并可通过无界掌柜手机端app获取、查看、监控餐厅的日常经营情况，同时还作为权益人享受一系列特殊的到店消费权益。通过此系统，不仅能解决餐饮项目的资金短缺问题，同时还积累了一批原始的忠诚客户。</span>
							</p>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper_item">
					<div class="catering_solve_item fl"
					     style="border: 1px solid #8f82bc;border-bottom:2px solid #8f82bc;">
						<div class="catering_solve_item_top">
							<p style="background: #8f82bc;">各项经营数据缺失或零散，提升管理、优化经营缺少坚实的数据支撑。</p>
						</div>
						<div class="catering_solve_item_bottom">
							<p><span style="color:#8f82bc;">解决方案：</span><span>通过综合运用无界智慧餐饮系统，可以有效收集、整合餐厅日常经营管理过程中各环节的数据，并通过后台的大数据算法，生成各类报表，比如原材料库存量、经营流水、客流量、订单量、客单价、翻台率等，进而给出合理的预估建议，为日常经营决策提供坚实的数据支撑。</span>
							</p>
						</div>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div class="fit_solve_wrap">
			<div class="container">
				<div class="user_basic_info">
					<p style="padding:1rem 0 0.2rem;font-size: 18px;font-weight: bold">全业态解决方案 总有一款适合你</p>
					<span class="line"></span>
					<p class="normalFonts"
					   style="text-align: justify;text-indent: 2em;padding-top:0.5rem;color: #2c3e50">
						无界智慧餐饮系统是一套软硬件结合的，集数据收集整理、分析处理、智能建议功能为一体的智能餐饮管理系统。无界智慧餐饮系统为餐饮商家提供从吸客引流、排号预订、点餐外卖、点评打赏、支付收银、前厅后厨协同、供应链管理、仓储管理、食品安全、会员营销、营业报表、人事管理等各个环节和模块的一系列解决方案，真正助力餐饮商家由传统的“粗放式、模糊式、经验式、家庭式经营”全面向“精细化、流程化、标准化、规模化经营”转型升级，最终与万千合作商家共同构建“沃天民生产业创新创业共同体”。
					</p>
					<div class="warp">
						<div class="fit_solve_item " v-for="(item,index) in fitSolve" :key="index"
						     @click="addClassName(item.id)" style="width:80px;height:80px;">
							<router-link :to="{path:'/catering/' + item.url}">
								<img :src="item.img" height="51" width="51" alt="" v-if="addStatus !== index"
								     style="margin-top: 10px">
								<img :src="item.activeImg" height="51" width="51" alt="" v-if="addStatus === index"
								     style="margin-top: 10px">
								<p :class="[index === addStatus?'active':'noac']" style=" margin: 5px auto">
									{{item.title}}</p>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div v-if="componflag==true">
			<restaurant></restaurant>
		</div>
		<div v-else>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	import restaurant from '@/page/catering/restaurant'
	
	export default {
		name: "cateringIndex",
		data() {
			return {
				fitSolve: [
					{
						img: require('../../assets/catering/type1.png'),
						activeImg: require('../../assets/catering/typen1.png'),
						title: '餐厅管理',
						url: 'restaurant',
						id: 0
					},
					{
						img: require('../../assets/catering/type2.png'),
						activeImg: require('../../assets/catering/typen2.png'),
						title: '厨房管理',
						url: 'kitchen',
						id: 1
					},
					{
						img: require('../../assets/catering/type3.png'),
						activeImg: require('../../assets/catering/typen3.png'),
						title: '顾客评价',
						url: 'customer',
						id: 2
					},
					{
						img: require('../../assets/catering/type4.png'),
						activeImg: require('../../assets/catering/typen4.png'),
						title: '营销管理',
						url: 'market',
						id: 3
					},
					{
						img: require('../../assets/catering/type5.png'),
						activeImg: require('../../assets/catering/typen5.png'),
						title: '营业画像',
						url: 'business',
						id: 4
					},
					{
						img: require('../../assets/catering/type6.png'),
						activeImg: require('../../assets/catering/typen6.png'),
						title: '智慧供应链',
						url: 'wisdom',
						id: 5
					},
					{
						img: require('../../assets/catering/type7.png'),
						activeImg: require('../../assets/catering/typen7.png'),
						title: '报表管理',
						url: 'form',
						id: 6
					},
					{
						img: require('../../assets/catering/type8.png'),
						activeImg: require('../../assets/catering/typen8.png'),
						title: '外卖',
						url: 'take',
						id: 7
					}
				],
				addStatus: 0,
				componflag: true,
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
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		components: {
			restaurant
		},
		methods: {
			addClassName(index) {
				this.componflag = false;
				this.addStatus = index;
			}
		}
	}
</script>

<style scoped>
	a {
		text-decoration: none
	}
	
	.noac {
		color: #515a6e;;
	}
	
	.active {
		color: #F67524;
	}
	
	.swiper {
		width: 100%;
		min-height: 1px;
	}
	
	.pic {
		width: 90%;
	}
	
	.swiper-pagination {
		top: 290px;
	}
	
	.timg {
		width: 100%;
		height: auto;
	}
	
	.user_basic_info {
		/*height: 400px;*/
		padding-bottom: 40px;
	}
	
	.titles {
		font-size: 17px;
		font-weight: bold;
		margin: 20px auto;
	}
	
	.xia {
		width: 40%;
		height: 1px;
		background: #ddd;
		margin: 0 auto;
	}
	
	.catering_solve_item {
		width: 95%;
		height: 266px;
		margin: 15px auto;
		border-radius: 5px;
		text-align: left;
		line-height: 20px;
	}
	
	.catering_solve_item_top {
		text-align: center;
		color: white;
		font-size: 15px;
		height: 60px;
	}
	
	.catering_solve_item_top p {
		height: 60px;
		padding-top: 20px;
		font-size: 13px;
	}
	
	.catering_solve_item_bottom {
		margin: 15px 15px;
	}
	
	.fit_solve_wrap {
		background: #f6f6f6;
	}

</style>