<template>
	<div>
		<!--关于-->
		<div><img src="../../assets/guanyu.jpg" class="Bimg"></div>
		<!--选择-->
		<div class="about" style="margin: 20px auto">关于我们</div>
		<div class="warp" style="margin-top: 10px">
			<div :class="['minefont',selectId===item.id?'bjfont':'']" v-for="item in select"
			     @click="aboutBtn(item.id)">{{item.name}}
			</div>
		</div>
		<div v-for="item in aboutCon" v-show="selectId===item.id">
			<div v-if="item.id==0"><img src="../../assets/home/address.jpg" class="addImg" alt=""></div>
			<div v-if="item.id==1"><img src="../../assets/home/wenhua.png" class="addImg" alt=""></div>
			<div v-if="item.id==2"><img src="../../assets/home/lianxi.jpg" class="addImg" alt=""></div>
			<div v-if="item.id==3"><img src="../../assets/banner.png" class="addImg" alt=""></div>
			<div v-if="item.id==3"><img src="../../assets/fazhan.png" class="addImg" alt=""></div>
			<div class="intro">
				<p v-for="pp in item.con">{{pp.itemCon}}</p>
			</div>
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
		<div v-if="selectId==0">
			<frominput></frominput>
		</div>
	</div>
</template>

<script>
	import frominput from '@/components/frominput'
	
	export default {
		data() {
			return {
				images: ['../assets/logo.png', '../assets/home/bjjoin.jpg'],
				//关于我们
				select: [
					{id: 0, name: '企业简介'},
					{id: 1, name: '企业文化'},
					{id: 2, name: '更多方式'},
					{id: 3, name: '发展历程'},
				],
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
						img: '../assets/home/licheng.png'
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
						src: require('../../assets/videos.mp4')
					}],
					poster: require("../../assets/logo.png"), //你的封面地址
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
						src: require('../../assets/videos.mp4')
					}],
					poster: require("../../assets/logo.png"), //你的封面地址
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
			frominput
		},
		created() {
			this.common.menu();
		},
		methods: {
			//	关于我们
			aboutBtn(index) {
				this.selectId = index;
			},
			//	表单提交
			onSubmit() {
				console.log('submit!');
			},
			//	餐饮
			gocan() {
				this.$router.push({path: '/catering'})
			},
			onplay($event) {
				this.showvideo = !this.showvideo;
			},
		}
	}
</script>

<style scoped>
	.business {
		width: 24%;
		height: 100px;
		text-align: center;
	}
	
	.logo img {
		width: 60px;
		height: 60px;
		margin: 0px 10px;
	}
	
	.businame {
		font-size: 14px;
		line-height: 40px;
	}
	
	/*二级导航*/
	.yinxian {
		color: #F67524;
		font-size: 14px;
		line-height: 33px;
		height: 20px;
	}
	
	.content {
		font-size: 10px;
		text-indent: 2em;
		text-align: left;
		margin: 10px 20px;
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
		margin: 15px auto;
		font-weight: bold;
	}
	
	.bjfont {
		background: #F67524;
		color: white;
		border: 1px solid white;
	}
	
	.addImg {
		width: 96%;
		height: auto;
		margin: 15px auto;
	}
	
	.intro {
		font-size: 12px;
		text-align: left;
		text-indent: 2em;
		margin: 0px 10px;
	}
</style>