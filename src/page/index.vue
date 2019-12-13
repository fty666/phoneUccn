<template>
	<div>
		<!--轮播-->
		<div class="block">
			<el-carousel height="180px" :interval="3000">
				<el-carousel-item>
					<img src="../assets/home/indexbj1.jpg" class="Bimg">
				</el-carousel-item>
				<el-carousel-item>
					<img src="../assets/home/indexbj2.jpg" class="Bimg">
				</el-carousel-item>
			</el-carousel>
			<!--<swiper :options="swiperOption" ref="mySwiper" class="swiper" style="height: 180px">        -->
			<!--<swiper-slide class="swiper_item">-->
			<!--   <img src="../assets/home/indexbj1.jpg" class="pic2" style="width: 100%"/> -->
			<!--</swiper-slide>-->
			<!--<swiper-slide class="swiper_item">-->
			<!--   <img src="../assets/home/indexbj2.jpg" class="pic2" /> -->
			<!--</swiper-slide>   -->
			<!--<div class="swiper-pagination"  slot="pagination" style="bottom:0px"></div>-->
			<!-- -->
			<!--</swiper>-->
		</div>
		<!--行业应用-->
		<div class="han" style="font-size: 20px">行业应用</div>
		<div class="warp">
			<div class="business">
				<div class="logo" @click="gocan">
					<img src="../assets/home/canyin.png" alt="">
				</div>
				<div class="businame" style="color:black;">餐饮</div>
			</div>
			<div class="business">
				<div class="logo">
					<img src="../assets/home/chaoshi.png" class="g">
				</div>
				<div class="businame">超市</div>
			</div>
			<div class="business">
				<div class="logo">
					<img src="../assets/home/jianshen.png" class="g">
				</div>
				<div class="businame">健身</div>
			</div>
			<div class="business">
				<div class="logo">
					<img src="../assets/home/jiaoyu.png" class="g">
				</div>
				<div class="businame">教育</div>
			</div>
			<div class="business">
				<div class="logo">
					<img src="../assets/home/jiudian.png" class="g">
				</div>
				<div class="businame">酒店</div>
			</div>
			<div class="business">
				<div class="logo">
					<img src="../assets/home/meirong.png" class="g">
				</div>
				<div class="businame">美容</div>
			</div>
			<div class="business">
				<div class="logo">
					<img src="../assets/home/meifa.png" class="g">
				</div>
				<div class="businame">美发</div>
			</div>
			<div class="business">
				<div class="logo">
					<img src="../assets/home/shengxian.png" class="g">
				</div>
				<div class="businame">生鲜</div>
			</div>
		</div>
		<!--卡片-->
		<div style="margin: 15px auto">
			<swiper :options="swiperOption" ref="mySwiper" class="swiper" style="height: 320px">        
				<swiper-slide v-for="item in imgs" class="swiper_item" :key="item.title">
					   <img :src="item.srcs" class="pic" @click="goPath(item.urls)"/> 
					<div class="caption" @click="goPath(item.urls)">
						<p class="yinxian">{{item.title}}</p>
						<p class="content">{{item.conten}}</p>
					</div>
					       
				</swiper-slide>
				     
				<div class="swiper-pagination"  slot="pagination" style="bottom:0px"></div>
				 
			</swiper>
		</div>
		<!--选择-->
		<div class="about">关于我们</div>
		<div class="warp" style="margin-top: 10px">
			<div :class="['minefont',selectId===item.id?'bjfont':'']" v-for="item in select"
			     @click="aboutBtn(item.id)">{{item.name}}
			</div>
		</div>
		<!--关于-->
		<div v-for="item in aboutCon" v-show="selectId===item.id">
			<div v-if="item.id==0"><img src="../assets/home/address.jpg" class="addImg" alt=""></div>
			<div v-if="item.id==1"><img src="../assets/home/wenhua.png" class="addImg" alt=""></div>
			<div v-if="item.id==2"><img src="../assets/home/lianxi.jpg" class="addImg" alt=""></div>
			<div v-if="item.id==3"><img src="../assets/banner.png" class="addImg" alt=""></div>
			<div v-if="item.id==3"><img src="../assets/fazhan.png" class="addImg" alt=""></div>
			<div class="intro">
				<p v-for="pp in item.con">{{pp.itemCon}}</p>
			</div>
			<div style="width: 95%;text-align: left;margin: 5px auto" v-if="showvideo==false">
				<video-player class="video-player vjs-custom-skin"
				              ref="videoPlayer"
				              :playsinline="true"
				              :options="playerOptions"
				              @ended="onplay($event)"
				></video-player>
			</div>
			<div style="width: 95%;text-align: left;margin: 5px auto" v-else>
				<video-player class="video-player vjs-custom-skin"
				              ref="videoPlayer"
				              :playsinline="true"
				              :options="playerOptions2"
				              @ended="onplay($event)"
				></video-player>
			</div>
			<div v-if="item.id==0">
				<froms></froms>
			</div>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import froms from '@/components/frominput'
	
	export default {
		name: "index",
		data() {
			return {
				merchant_city_id: [],
				citys: "",
				address: '',
				name: '',
				mobile: '',
				message: '',
				imgs: [
					{
						srcs: require('../assets/home/huaxiang.png'),
						title: '营业画像',
						conten: '通过综合运用无界智慧餐饮系统，可以有效收集、整合餐厅日常经营管理过程中各环节的数据，包括顾客预订、排号、点餐、后厨备菜、制作、上菜、支付、点评打赏等，并通过后台的大数据算法，生成各类报表，比如原材料库存量、原材料损耗、经营流水、上菜时间、了流量、订单量、客单价、翻台率等，并能精准预估时、日、周、月、季、年各个时段关键经营数据的变化，进而给出合理的预估建议，为日常经营决策提供坚实的数据支撑。',
						urls: '/protrayal'
					},
					{
						srcs: require('../assets/home/zhongchou.jpg'),
						title: '无界众筹',
						conten: '无界众筹系统是一款在无界智慧餐饮系统实现关键数据和环节透明化、可视化的基础上，致力于解决实体门店项目开店和经营过程中面临的资金短缺和忠诚客户积累两大难题的项目投资管理系统。',
						urls: '/lightspot'
					},
					{
						srcs: require('../assets/home/lainmen.jpg'),
						title: '异业联盟',
						conten: '通过无界智慧餐饮打造的“共同体营销系统”，各行业商家可自由发起和组织异业联盟，联合发行各店通用的超级会员卡、超级优惠券、超级代金券、超级抵扣券等，相互引流、相互借力，形成区域的商业集聚效应，有效降低获客成本。',
						urls: '/league'
					},
					{
						srcs: require('../assets/home/zhihui.jpg'),
						title: '智慧餐饮供应链',
						conten: '无界智慧供应链系统”通过录入采集原材料供应商信息、供货政策、供货价格等，并结合采购、入库、盘点、变卖、废弃等各环节的手机App审批流程，确保所采购原材料供应稳定、质优价廉，全流程监控原材料来源和去向，实现移动化办公，精细化管理。',
						urls: '/leagWisdom'
					},
				],
				//关于我们
				select: [
					{id: 0, name: '企业简介'},
					{id: 1, name: '企业文化'},
					{id: 2, name: '更多方式'},
					{id: 3, name: '发展历程'},
				],
				swiperOption: {
					loop: true,
					autoplay: 2000,
					pagination: {
						el: '.swiper-pagination',
					},
					autoplay: {
						disableOnInteraction: false,
					}
				},
				selectId: 0,
				aboutCon: [
					{
						id: 0,
						img: '../assets/home/address.jpg',
						con: [
							{
								itemCon: '沃天科技（天津）有限公司（简称：沃天），总部设在天津。公司致力于打造中国最大的社区OMO智慧生活服务平台，最终构建完整的“沃天民生产业创新创业共同体”。'
							},
							{
								itemCon: '公司旗下现有完全自主研发运营的综合性移动社交电商平台——无界优品（WUJIEMALL）。同时在开发针对餐饮行业商家用户的“无界智慧餐饮系统”，这是一套软硬件结合的，集数据收集整理、分析处理、预估建议功能为一体的智慧餐饮管理系统。公司目前已取得相关的6项国家软件著作权证书保护。'
							},
							{
								itemCon: '公司团队以80后和90后为主，团队总人数在20人以上，其中技术研发人员占80%，其他人员占20%，全面覆盖管理、产品运维、技术研发、美工设计、市场营销等各岗位。这是一支富有活力的创新型团队，致力于让每个人通过自用和分享产品及服务获得成功的机会，让个人创业变得更加简单。我们期待每一个创业者能够在快乐中传播价值，在分享中获得快乐。'
							}
						]
					},
					{
						id: 1,
						img: '../assets/home/wenhua.png',
						con: [
							{
								itemCon: '1、企业愿景：让创业变得简单'
							},
							{
								itemCon: ' 2、企业使命：为有梦想的人搭建创业平台'
							},
							{
								itemCon: ' 3、核心价值观：盛德、正直、担当、诚信、感恩、孝、笑 '
							},
							{
								itemCon: ' 4、口号：为梦想而来，为创业而生 '
							},
							{
								itemCon: ' 5、团队文化：简单、务实、轻松、活力，快乐、分享、创意、热爱，敢想、能拼、会干 '
							},
							{
								itemCon: ' 公司崇尚扁平化的精英小团队管理模式，倡导简单、务实的工作方式。作为一群务实的创业者，我们始终致力于营造一个轻松的伙伴式工作氛围，所有人同心协力，踏踏实实做好手头每一件工作。'
							}
						]
					},
					{
						id: 2,
						img: '../assets/home/lianxi.jpg',
						con: [
							{
								itemCon: '总机：022-27419966'
							},
							{
								itemCon: '招商热线：022-27413188'
							},
							{
								itemCon: '客服热线：022-27412988'
							},
							{
								itemCon: '地址：天津市南开区白堤路186号天津电子科技中心707室'
							},
							{
								itemCon: '邮编：300192'
							}
						]
					},
					{
						id: 3,
						img: '../assets/banner.png'
					}
				],
				//	表单
				form: {
					name: '',
				},
				playerOptions: {
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
					sources: [{
						type: 'video/mp4',
						src: require('../assets/videos.mp4')
					}],
					poster: require("../assets/logo.png"), //你的封面地址
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
						timeDivider: true,
						durationDisplay: true,
						remainingTimeDisplay: false,
						fullscreenToggle: true  //全屏按钮
					}
				},
				playerOptions2: {
					playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
					autoplay: false, //如果true,浏览器准备好时开始回放。
					muted: false, // 默认情况下将会消除任何音频。
					loop: false, // 导致视频一结束就重新开始。
					preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
					language: 'zh-CN',
					aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
					fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
					sources: [{
						type: 'video/mp4',
						src: require('../assets/videos.mp4')
					}],
					poster: require("../assets/logo.png"), //你的封面地址
					notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
					controlBar: {
						timeDivider: true,
						durationDisplay: true,
						remainingTimeDisplay: false,
						fullscreenToggle: true  //全屏按钮
					}
				},
				showvideo: false,
			}
		},
		components: {
			froms
		},
		created() {
			this.common.menu();
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		methods: {
			//	关于我们
			aboutBtn(index) {
				this.selectId = index;
			},
			//	餐饮
			gocan() {
				this.$router.push({path: '/catering'})
			},
			//	跳转
			goPath(urls) {
				this.$router.push({path: urls})
			},
			onplay($event) {
				this.showvideo = !this.showvideo;
			},
		}
	}
</script>

<style scoped>
	
	.swiper {
		width: 100%;
		min-height: 1px;
	}
	
	.pic {
		width: 90%;
	}
	
	.business {
		width: 24%;
		height: 90px;
		text-align: center;
	}
	
	.logo img {
		width: 50px;
		height: 50px;
		/*margin: 0px 10px;*/
	}
	
	.businame {
		font-size: 14px;
		line-height: 40px;
		color: #ccc;
	}
	
	/*二级导航*/
	.yinxian {
		color: #F67524;
		font-size: 14px;
		line-height: 33px;
		height: 20px;
	}
	
	.content {
		font-size: 12px;
		text-indent: 2em;
		text-align: left;
		margin: 10px 20px;
		height: 50px;
		width: 90%;
		overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 3;
		display: -webkit-box;
		-webkit-box-orient: vertical;
	}
	
	/*关于我们*/
	.about {
		text-align: center;
		font-size: 20px;
		font-weight: bold;
	}
	
	.minefont {
		width: 20%;
		height: 25px;
		border: 1px solid #999999;
		border-radius: 5px;
		font-size: 11px;
		line-height: 25px;
		cursor: pointer;
	}
	
	.han {
		font-size: 16px;
		text-align: center;
		font-weight: bold;
		margin-bottom: 20px;
	}
	
	.bjfont {
		background: #F67524;
		color: white;
		border: 1px solid white;
	}
	
	.addImg {
		width: 95%;
		height: auto;
		margin: 15px auto;
	}
	
	.intro {
		font-size: 12px;
		text-align: left;
		text-indent: 2em;
		margin: 0px 10px;
	}
	
	.g {
		filter: grayscale(100%);
	}
</style>