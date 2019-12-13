<template>
	<div>
		<div><img src="../../assets/underline/special1.jpg" class="bimg"></div>
		<div class="Htitle">用户基本信息及标签分组</div>
		<div class="xia"></div>
		<div>
			<img src="../../assets/underline/station.png" class="Himg">
		</div>
		<!--灰色内容1-->
		<div class="huibj">
			<div class="Htitle" style="padding-top: 20px;">线下客流转化系统为什么是一场革命？</div>
			<div class="xia" style="margin-bottom: 20px"></div>
			<div class="warp">
				<div class="wscope" v-for="item in contentInfo">
					<div><img :src="item.imgs" class="scopeImg"></div>
					<div class="scopeFont">{{item.title1}}</div>
					<div class="scopeCon">{{item.title2}}</div>
				</div>
			</div>
		</div>
		<!--灰色内容2-->
		<div style="padding-bottom: 20px">
			<div class="Htitle" style="padding-top: 20px;">线下客流获取方式</div>
			<div class="xia" style="margin-bottom: 20px"></div>
			<div class="bttenWarp">
				<div class="wscope" v-for="item in mode">
					<div><img :src="item.imgs" class="scopeImg"></div>
					<div class="scopeFont">{{item.title1}}</div>
					<div class="scopeCon">{{item.title2}}</div>
				</div>
			</div>
		</div>
		<!--灰色内容3-->
		<div class="huibj">
			<div class="Htitle" style="padding-top: 20px;">以店员为中心的线下客流转化体系</div>
			<div class="xia" style="margin-bottom: 20px"></div>
			<swiper :options="swiperOption" ref="mySwiper" class="swiper" style="height: 260px">
				<swiper-slide v-for="(item,index) in flowInfo" :key="index" class="swiper_item">
					<div class="wscope2">
						<div><img :src="item.imgs" class="scopeImg"></div>
						<div class="scopeFont">{{item.title1}}</div>
						<div class="xia2" :style="{background:item.colors}"></div>
						<div class="scopeCon" style="text-align: center">{{item.title2}}</div>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<!--内容4-->
		<div>
			<div class="Htitle" style="padding-top: 20px;margin-top: 0">以店员为中心的会员营销体系</div>
			<div class="xia" style="margin-bottom: 20px"></div>
			<div class="xiaoshou" v-for="item in sell">
				<div class="flexs">
					<div class="flexs" style="width: auto;">
						<div><img :src="item.imgs" class="fImg"></div>
						<div class="fTitle" style="justify-content: center;font-size: 13px">{{item.title1}}</div>
					</div>
				</div>
				<div class="xcontent" style="font-size: 11px">{{item.title2}}</div>
			</div>
			<div class="xiaoshou">
				<div class="flexs">
					<div class="flexs" style="width: auto;">
						<div><img src="../../assets/underline/under3.png" class="fImg" style="width: 26px;height: 20px">
						</div>
						<div class="fTitle" style="justify-content: center;font-size: 13px">拓客拉新</div>
					</div>
				</div>
				<div class="xcontent" style="font-size: 11px">店员和会员都可以发放优惠券吸引新会员，从而带来更多顾客。</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "offineIndex",
		data() {
			return {
				contentInfo: [
					{
						imgs: require('../../assets/underline/revolution1.png'),
						title1: '老板思维方式转变',
						title2: '面对新事物接受程度是否有改变的决心。'
					},
					{
						imgs: require('../../assets/underline/revolution2.png'),
						title1: '考核体系转变',
						title2: '考核指标新增发券数量、服务质量、拓客数量、自己维护二次核销率等。'
					},
					{
						imgs: require('../../assets/underline/revolution3.png'),
						title1: '员工思维方式转变',
						title2: '从被动接触顾客到主动接触维护顾客的思维转变。'
					},
					{
						imgs: require('../../assets/underline/revolution4.png'),
						title1: '服务体系的革新',
						title2: '员工变被动为主动；顾客打赏服务评价回馈等功能，可以提升服务质量。'
					}
				],
				mode: [
					{
						imgs: require('../../assets/underline/obtain1.png'),
						title1: 'WiFi连接',
						title2: '顾客微信关注商户公众号，获取WIFI登录密码，实现吸粉。'
					},
					{
						imgs: require('../../assets/underline/obtain2.png'),
						title1: '广告物料',
						title2: '扫码免费连WIFI、扫码关注领券、收藏转发菜品送券，多管齐下。'
					},
					{
						imgs: require('../../assets/underline/obtain3.png'),
						title1: '业务体系',
						title2: '多人扫桌码点餐、支付即会员、众筹支付、AA支付，实现分享裂变。'
					},
					{
						imgs: require('../../assets/underline/obtain4.png'),
						title1: '店员推荐',
						title2: '这是无界智慧餐饮线下客流转化系统的核心，下面展开详细介绍。'
					}
				],
				flowInfo: [
					{
						imgs: require('../../assets/underline/canversion1.png'),
						title1: '物料转化',
						title2: '店员专属二维码、挂牌，各种线下物料。',
						colors: '#F5B51C'
					},
					{
						imgs: require('../../assets/underline/canversion2.png'),
						title1: '转化工具',
						title2: '点评打赏、优惠券、会员卡、送菜、赠品等。',
						colors: '#4FA3DA'
					},
					{
						imgs: require('../../assets/underline/canversion3.png'),
						title1: '绩效考核',
						title2: '拉新考核、发券考核、会员储值考核、二次核销、打赏评价。',
						colors: '#E72F6F'
					},
					{
						imgs: require('../../assets/underline/canversion4.png'),
						title1: '拓客拉新',
						title2: '支付即会员、店员推荐、全民拓客。',
						colors: '#35B794'
					},
					{
						imgs: require('../../assets/underline/zhixiao.png'),
						title1: '会员营销',
						title2: '移动管理APP，会员画像，短信推送，系统发群，生日祝福，二次营销。',
						colors: "#ED594D"
					}
				],
				sell: [
					{
						imgs: require('../../assets/underline/under1.png'),
						title1: '顾客扫店员专属二维码',
						title2: '通过优惠券、会员特权、储值特惠等方式，引导顾客领券、办卡、储值，使用移动支付，支付即会员。'
					},
					{
						imgs: require('../../assets/underline/under2.png'),
						title1: '打赏评价店员',
						title2: '顾客进行打赏，可有效激励店员；顾客进行评价，可改进商家服务质量。'
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
	.bimg {
		width: 100%;
		height: auto;
	}
	
	.Htitle {
		margin: 20px auto;
		font-size: 20px;
		font-weight: bold;
	}
	
	.xia {
		background: #707070;
		width: 40%;
		height: 1px;
		margin: 0 auto;
	}
	
	.Himg {
		width: 100%;
		background: #F4F4F4;
		height: auto;
		margin: 20px auto;
	}
	
	.huibj {
		background: #F6F6F6;
		width: 100%;
		height: auto;
	}
	
	.wscope {
		width: 45%;
		height: 200px;
		background: #FFFFFF;
		margin: 10px auto;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
		border-radius: 4px;
	}
	
	.wscope2 {
		width: 90%;
		height: 210px;
		background: #FFFFFF;
		margin: 10px auto;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
		border-radius: 4px;
	}
	
	.scopeImg {
		margin-top: 30px;
		margin-bottom: 5px;
		width: 60px;
		height: 60px;
	}
	
	.scopeFont {
		font-size: 14px;
		font-weight: bold;
		text-align: center;
		width: 95%;
		margin: 5px 10px;
	}
	
	.scopeCon {
		font-size: 12px;
		width: 95%;
		margin: 5px 5px;
		text-align: center;
	}
	
	.xia2 {
		width: 20%;
		height: 1px;
		margin: 15px auto;
	}
	
	.flexs {
		width: 100%;
		background: #F67524;
		height: 50px;
		margin: 0 auto;
	}
	
	.fImg {
		width: 22px;
		height: 22px;
		margin: 13px 0 0 10px;
	}
	
	.fTitle {
		margin: 15px 0 0 10px;
		color: white;
	}
	
	.xiaoshou {
		width: 92%;
		height: auto;
		margin: 10px auto;
		border-radius: 4px;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
	}
	
	.xcontent {
		margin: 20px auto;
		font-size: 14px;
		width: 90%;
		text-align: left;
		padding-bottom: 10px;
	}

</style>