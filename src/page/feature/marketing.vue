<template>
	<div style="background: #F6F6F6">
		<div><img src="../../assets/game/zhuaiwawa.jpg" class="Bimg"></div>
		<div class="mTitle">目前主流营销方式及弊端分析</div>
		<div class="xia"></div>
		<div class="warp">
			<div :class="['selec1',selecId==1?'selecBj':'']" @click="selected(1)">目前主流营销方式的弊端</div>
			<div :class="['selec1',selecId==2?'selecBj':'']" @click="selected(2)">目前主流营销方式</div>
		</div>
		<div v-if="selecId==1">
			<swiper :options="swiperOption" ref="mySwiper" class="swiper" style="height: 275px">
				<swiper-slide class="swiper_item">
					<div class="flexs">
						<div class="abuse" v-for="item in abuseList1">
							<div><img :src="item.img" class="abuseImg"></div>
							<div class="abuseTitle">{{item.title}}</div>
							<div class="abuseCon">{{item.con}}</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper_item">
					<div class="flexs">
						<div class="abuse" v-for="item in abuseList2">
							<div><img :src="item.img" class="abuseImg"></div>
							<div class="abuseTitle">{{item.title}}</div>
							<div class="abuseCon">{{item.con}}</div>
						</div>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination" style="top: 260px"></div>
			</swiper>
		</div>
		<div v-if="selecId==2">
			<swiper :options="swiperOption" ref="mySwiper" class="swiper" style="height: 275px">
				<swiper-slide class="swiper_item">
					<div class="flexs">
						<div class="abuse" v-for="item in abuseList3" style="margin-bottom: 5px">
							<div><img :src="item.img" class="abuseImg"></div>
							<div class="abuseTitle">{{item.title}}</div>
							<div class="abuseCon">{{item.con}}</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper_item">
					<div class="abuse" style="margin-left: 30px;margin-bottom: 10px">
						<div><img src="../../assets/game/abuse7.png" class="abuseImg"></div>
						<div class="abuseTitle">助力</div>
						<div class="abuseCon">通过分享点赞的方式吸粉，商家通过投票banner等点击广告做商业推广。</div>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination" style="top: 260px"></div>
			</swiper>
		</div>
		<div style="background: white;padding-bottom: 20px">
			<div class="mTitle" style="padding-top: 20px">互动游戏新营销模式优势介绍</div>
			<div class="xia"></div>
			<div class="mTitle2">无界趣味互动游戏营销系统专门为解决上述痛点进行整合创新。</div>
			<div class="warp">
				<div :class="['introduce',introId==item.id?'introducebj':'']" v-for="item in introduceList"
				     @click="selecIntro(item.id)">{{item.title}}
				</div>
			</div>
			<div v-for="item in advantageData">
				<div v-if="introId==item.id">
					<div><img :src="item.img" class="Bimg" style="width: 70%;height: auto"></div>
					<div style="color: #2c3e50;width: 90%;margin: 0 auto">{{item.title}}</div>
				</div>
			</div>
		</div>
		<div class="mTitle">互动游戏的四大营销方式介绍</div>
		<div class="xia"></div>
		<div class="warp">
			<div class="four" v-for="item in fourInfo">
				<div><img :src="item.img" class="fourImg"></div>
				<div class="fourTitle">{{item.title}}</div>
				<div class="fourCon">{{item.content}}</div>
			</div>
		</div>
		<div style="background: white;margin-top: 10px">
			<div class="mTitle" style="padding-top: 20px">互动游戏的四种营销派奖方式</div>
			<div class="xia"></div>
			<div>
				<div class="mode" @click="lookStatu(1)">
					<div><img src="../../assets/game/reward1.png" class="modeImg"></div>
					<div class="modeName">红包</div>
				</div>
				<div class="modeShow" v-if="statu==1"><p>比较适合高频消费行业的品牌营销；直接派发红包到参与者钱包，直截了当，能引爆活动，迅速吸引大批参与者。</p></div>
			</div>
			<div>
				<div class="mode" style="background: #80C269" @click="lookStatu(2)">
					<div><img src="../../assets/game/reward2.png" class="modeImg"></div>
					<div class="modeName">积分</div>
				</div>
				<div class="modeShow" v-if="statu==2" style="border: 1px solid #80C269"><p>
					适合高频消费行业，尤其是服务业；成本低、目标受众精准，能提升二次消费率。</p></div>
			</div>
			<div>
				<div class="mode" style="background: #ED594D" @click="lookStatu(3)">
					<div><img src="../../assets/game/reward3.png" class="modeImg"></div>
					<div class="modeName">优惠券/折扣券</div>
				</div>
				<div v-if="statu==3" class="modeShow" style="border: 1px solid #ED594D"><p>
					适合高频消费行业，尤其是服务业；成本低、目标受众较为精准，能提升用户粘性和复购率。</p></div>
			</div>
			<div>
				<div class="mode" style="background: #2E8CEB" @click="lookStatu(4)">
					<div><img src="../../assets/game/reward4.png" class="modeImg"></div>
					<div class="modeName">实物礼品</div>
				</div>
				<div v-if="statu==4" class="modeShow" style="border: 1px solid #2E8CEB"><p>适合任何行业，尤其是需要引导进店体验消费的行业；能引导参与者从线上转到线下，进店体验或者消费。</p></div>
			</div>
		</div>
		<div class="mTitle">游戏互动营销的应用场景</div>
		<div class="xia"></div>
		<div class="warp">
			<div :class="['selec1',scene==1?'selecBj':'']" @click="selscene(1)">碎片化时间营销</div>
			<div :class="['selec1',scene==2?'selecBj':'']" @click="selscene(2)">黏住客户，提高消费频次</div>
		</div>
		<div v-for="item in sceneData" style="margin-top: 20px">
			<div v-if="scene==item.id">
				<div><img :src="item.img" style="width: 50%;height: auto"></div>
				<div class="citing">应用举例</div>
				<div class="citcont">{{item.con1}}</div>
				<div class="citing">应用场景延伸</div>
				<div class="citcont">{{item.con2}}</div>
			</div>
		</div>
		<div style="background: white;padding-bottom: 20px">
			<div class="mTitle" style="padding-top: 20px">可植入或定制元素</div>
			<div class="xia"></div>
			<div>
				<swiper :options="swiperOption" ref="mySwiper" class="swiper" style="height: 240px">
					<swiper-slide v-for="(item,index) in logoInfo" :key="index" class="swiper_item">
						<div class="logo">
							<div><img :src="item.img" class="logoImg"></div>
							<div class="logoTitle" style="font-size: 16px">{{item.title}}</div>
							<div class="logoCon" style="font-size: 13px">{{item.con}}</div>
						</div>
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination" style="bottom: 0px"></div>
				</swiper>
			</div>
		</div>
		<div>
			<div class="mTitle">场景互动游戏示例</div>
			<div class="xia"></div>
			<div class="warp" style="position: relative">
				<div class="game">
					<a href="http://www.wujiemall.com/Splicing/Index/" target="_blank">
						<div><img src="../../assets/game/example1.png" alt="" class="gameImg"></div>
						<div class="gamename">集碎片</div>
					</a>
				</div>
				
				<div class="game">
					<a href="http://www.wujiemall.com/Divination/Index/" target="_blank">
						<div><img src="../../assets/game/zwdx.png" alt="" class="gameImg"></div>
						<div class="gamename">紫薇斗数</div>
					</a>
				</div>
				<div class="game">
					<div><img src="../../assets/game/example3.png" class="gameImg"></div>
					<div class="gamename">抓娃娃</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "marketing",
		data() {
			return {
				selecId: 1,
				abuseList1: [
					{
						img: require('../../assets/game/abuse1.png'),
						title: '互动性极差',
						con: '模式太过传统，活动千篇一律，趣味性差，粉丝对活动缺乏新鲜感，完全利益驱动。'
					},
					{
						img: require('../../assets/game/abuse2.png'),
						title: '营销深度及黏性极差',
						con: '粉丝完全奔着奖品参与，对于活动的主题及商家甚至完全不知道，比如砸金蛋，砸完领奖就走，粉丝在页面的停留时间极短，对商家无感，失去营销意义。'
					},
				],
				abuseList2: [
					{
						img: require('../../assets/game/abuse3.png'),
						title: '取关率高',
						con: '因活动形式交互差、没兴趣点，导致拿奖后就取消关注。'
					},
					{
						img: require('../../assets/game/abuse4.png'),
						title: '营销性价比极低',
						con: '利益驱动化增粉，领奖后取关率高，营销效果差，导致营销性价比极低。'
					},
				],
				abuseList3: [
					{
						img: require('../../assets/game/abuse5.png'),
						title: '投票',
						con: '以萌宝和美女投票为主，商家通过赞助及投票banner区做商家推广。'
					},
					{
						img: require('../../assets/game/abuse6.png'),
						title: '抽奖',
						con: '通过刮刮卡、大转盘、水果机、砸金蛋等活动方式，设置礼品吸引粉丝参加，商家通过设置点击广告进行商业推广。'
					},
				],
				abuseList4: [
					{
						img: require('../../assets/game/abuse7.png'),
						title: '助力',
						con: '通过分享点赞的方式吸粉，商家通过投票banner等点击广告做商业推广。'
					}
				],
				introduceList: [
					{
						id: 0,
						title: '场景化营销'
					},
					{
						id: 1,
						title: '个性化定制'
					},
					{
						id: 2,
						title: '强互动性'
					},
					{
						id: 3,
						title: '深度参与'
					},
				],
				introId: 0,
				advantageData: [
					{
						id: 0,
						img: require('../../assets/game/advanage1.png'),
						title: '让参与者进入一个活动场景，增强趣味性。通过场景化营销，强化顾客品牌认知，提高转化率和营销精准性。'
					},
					{
						id: 1,
						img: require('../../assets/game/advanage2.png'),
						title: '商家可结合自身特点和行业特性定制符合自己特色的互动游 戏，进行品牌和产品植入。'
					},
					{
						id: 2,
						img: require('../../assets/game/advanage3.png'),
						title: '相比于传统的营销应用，游戏类营销活动具有更强的互动性，参与操作更有趣，更利于活动的传播。'
					},
					{
						id: 3,
						img: require('../../assets/game/advanage4.png'),
						title: '相比于抽奖、助力类活动，互动游戏需要参与者集中精力深入操作和体验，有效延长用户在活动页面的停留时间，极大 增强营销效果。'
					}
				],
				fourInfo: [
					{
						img: require('../../assets/game/gamem1.png'),
						title: '分享营销',
						content: '分享转发游戏获得奖励，激励参与者主动传播活动。'
					},
					{
						img: require('../../assets/game/gamem2.png'),
						title: '体验营销',
						content: '在游戏过程中设置礼品，比如红包、卡券、奖品等，给参与者惊喜体验。'
					},
					{
						img: require('../../assets/game/gamem3.png'),
						title: '抽奖营销',
						content: '参与者达到指定成绩获得抽奖资格，通过合理设置抽奖门框，提高营销深度。'
					},
					{
						img: require('../../assets/game/gamem4.png'),
						title: '排名营销',
						content: '根据游戏排名派发奖品，让参与者持续参与，奋勇争先。'
					},
				],
				scene: 1,
				sceneData: [
					{
						id: 1,
						img: require('../../assets/game/scene1.png'),
						con1: '某餐馆经常需要顾客排队，顾客在排队过程中较为烦躁，餐馆一般提供小食或者扑克牌供娱乐消磨时间。商家可以利用这种碎片时间，让等待顾客扫码完品牌植入游戏，在互动中植入优惠券、折扣券，提高参与度。通过这种互动方式可以一举多得，增加了粉丝、减少了顾客的烦躁情绪、对顾客深入了品牌印象等。',
						con2: '公交车、地铁乘车场景，其他排队场景等……'
					},
					{
						id: 2,
						img: require('../../assets/game/scene2.png'),
						con1: '某日本料理为了增加店内回头客，提高客户的二次消费频次。可以通过活动植入新菜品、植入店面品牌，通过在互动过程中或者活动结束后派送卡券和积分，增强营销粘性，提高客户消费频次。',
						con2: '高频服务业（餐饮、酒店、健身、美容）及快消品（比如牙膏、零食等）都可以使用……'
					},
				],
				logoInfo: [
					{
						img: require('../../assets/game/implantable1.png'),
						title: '品牌LOGO',
						con: '可以根据需要替换成自己的品牌LOGO。'
					},
					{
						img: require('../../assets/game/implantable2.png'),
						title: '游戏背景',
						con: '可以换成跟商家相关的，可以做产品或品牌植入。'
					},
					{
						img: require('../../assets/game/implantable3.png'),
						title: '游戏互动元素',
						con: '可以根据营销需要定制成任何形式。'
					},
					{
						img: require('../../assets/game/implantable4.png'),
						title: '背景声音',
						con: '可以替换成声音广告。'
					},
					{
						img: require('../../assets/game/implantable5.png'),
						title: '更多自定义元素',
						con: '包括分享提示语，分享引导图片、邀请提示语、关注设置、粉丝资料设置、主办赞助单位设置、各种奖项设置等，让互动与营销紧密结合。'
					},
				],
				statu: 'pppp',
				status: 'llll',
				swiperOption: {
					loop: false,
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
		methods: {
			selected(id) {
				this.selecId = id;
			},
			selecIntro(id) {
				this.introId = id;
			},
			selscene(id) {
				this.scene = id;
			},
			lookStatu(id) {
				let that = this;
				if (id == that.statu) {
					that.statu = 'ppp';
				} else {
					that.statu = id;
				}
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
	.mTitle {
		margin: 20px auto;
		font-size: 20px;
		font-weight: bold;
	}
	
	.mTitle2 {
		margin: 20px 10px;
		font-size: 13px;
		width: 90%;
	}
	
	.xia {
		width: 30%;
		height: 1px;
		background: #707070;
		margin: 0 auto;
		margin-bottom: 20px;
	}
	
	.selec1 {
		width: 45%;
		height: 40px;
		background: #FDDFCC;
		padding-top: 10px;
		font-size: 13px;
		color: #666666;
		cursor: pointer;
	}
	
	.selecBj {
		background: #F67524;
		color: white;
	}
	
	.abuse {
		width: 45%;
		height: 230px;
		background: white;
		margin: 20px auto;
	}
	
	.abuseImg {
		width: 60px;
		height: 60px;
		margin: 10px auto;
	}
	
	.abuseTitle {
		font-size: 15px;
		color: #666666;
	}
	
	.abuseCon {
		font-size: 12px;
		color: #666666;
		width: 90%;
		text-align: left;
		margin: 5px 10px;
	}
	
	.introduce {
		width: 22%;
		height: 35px;
		background: #FDDFCC;
		color: #666666;
		padding-top: 9px;
		border-radius: 4px;
		cursor: pointer;
	}
	
	.introducebj {
		background: #F67524;
		color: white;
	}
	
	.four {
		width: 45%;
		background: white;
		height: 170px;
		position: relative;
		margin-top: 30px;
	}
	
	.fourImg {
		width: 60px;
		height: 60px;
		position: absolute;
		top: -20px;
		left: 32%;
	}
	
	.fourTitle {
		font-size: 15px;
		margin-top: 60px;
	}
	
	.fourCon {
		width: 90%;
		font-size: 12px;
		text-align: left;
		color: #666666;
		margin: 5px auto;
	}
	
	.citing {
		color: #F67524;
		text-align: left;
		width: 90%;
		margin-left: 20px;
		font-size: 15px;
		margin-top: 15px;
	}
	
	.citcont {
		width: 90%;
		text-align: left;
		margin-left: 20px;
	}
	
	.logo {
		width: 90%;
		height: 200px;
		border: 1px solid rgba(229, 229, 229, 1);
		border-radius: 4px;
		margin: 0 auto;
	}
	
	.logoImg {
		margin-top: 30px;
	}
	
	.logoTitle {
		font-size: 15px;
		margin-top: 20px;
	}
	
	.logoCon {
		margin-top: 10px;
	}
	
	.game {
		width: 30%;
		height: 110px;
		background: white;
		margin-bottom: 20px;
	}
	
	.positions {
		position: absolute;
		top: 0;
		left: 2%;
	}
	
	.positions2 {
		position: absolute;
		top: 0;
		left: 36%;
	}
	
	.gameImg {
		width: 60px;
		height: 60px;
		margin-top: 10px;
	}
	
	.gamename {
		font-size: 13px;
		margin-top: 10px;
		color: #666666;
	}
	
	.mode {
		width: 100%;
		height: 100px;
		background: #F67524;
	}
	
	.modeImg {
		width: 55px;
		height: 55px;
		margin-top: 10px;
	}
	
	.modeName {
		font-size: 13px;
		color: white;
		margin-top: 5px;
	}
	
	.modeShow {
		border: 1px solid #F67524;
		width: 100%;
		height: 80px;
	}
	
	.modeShow p {
		width: 88%;
		margin: 20px auto;
		margin-left: 29px;
		text-align: left;
	}
</style>