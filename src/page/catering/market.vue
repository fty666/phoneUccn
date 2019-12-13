<template>
	<div>
		<div class="Ytitle">会员营销</div>
		<div class="xia"></div>
		<div>
			<swiper :options="swiperOption" ref="mySwiper" class="swiper" style="height: 240px">
				<swiper-slide v-for="(item,index) in market" :key="index" class="swiper_item">
					<div class="marketbody">
						<div><img :src="item.imgs" class="markImg"></div>
						<div class="markTitle">{{item.title}}</div>
						<div class="markCon" style="font-size: 12px">{{item.content}}</div>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<!--趣味营销-->
		<div class="spice">
			<div class="Ytitle" style="padding-top: 30px">趣味营销</div>
			<div class="xia"></div>
			<div class="markCon fcolor" style="text-indent: 2em;font-size: 13px">为用户打造有趣、好玩的购物体验，在互动中建立信任，让购物就像在“玩游戏”。
			</div>
			<div class="warp" style="position: relative">
				<div class="game" v-for="item in gameInfo" @click="getGame(item.id)">
					<div><img :src="item.gimg" class="gameImg"></div>
					<div class="gameTitle">{{item.gtitle}}</div>
					<div class="gameCon" style="color: #2c3e50;margin-left: 5px">{{item.gcontent}}</div>
				</div>
				<div class="showGame" v-for="item in showGame" v-if="item.id==gameId"
				     :style="{background:item.colors}" @click="getGame(item.id)">
					<div style="position: relative">
						<div class="showImg2"><img :src="item.gimg"
						                           style="width: 60px;height: 60px"></div>
						<div class="showTitle">{{item.gtitle}}</div>
						<div class="showFont">{{item.gcontent}}</div>
					</div>
				</div>
			</div>
			<div class="warp" style="position: relative">
				<div class="game" v-for="item in gameInfo2" @click="getGame(item.id)">
					<div><img :src="item.gimg" class="gameImg"></div>
					<div class="gameTitle">{{item.gtitle}}</div>
					<div class="gameCon" style="color: #2c3e50">{{item.gcontent}}</div>
				</div>
				<div class="showGame" v-for="item in showGame2" v-if="item.id==gameId"
				     :style="{background:item.colors}" @click="getGame(item.id)">
					<div style="position: relative">
						<div class="showImg2"><img :src="item.gimg"
						                           style="width: 60px;height: 60px"></div>
						<div class="showTitle">{{item.gtitle}}</div>
						<div class="showFont">{{item.gcontent}}</div>
					</div>
				</div>
			</div>
		</div>
		<!--微信吸粉-->
		<div>
			<div class="Ytitle">微信吸粉</div>
			<div class="xia"></div>
			<div class="warp">
				<div class="wcheat" v-for="item in wechat" :key="item.wTitle" style="background: #FAFAFA">
					<div><img :src="item.wimg" class="wImg"></div>
					<div class="wTitle">{{item.wTitle}}</div>
					<div class="xia2"></div>
					<div class="wcontent">{{item.wcontent}}</div>
				</div>
			</div>
		</div>
		<!--智慧收银-->
		<div style="background: #F6F6F6;margin: 10px auto;padding-top: 10px;padding-bottom: 10px">
			<div class="Ytitle">智慧收银</div>
			<div class="xia"></div>
			<div class="warp">
				<div class="wcheat" v-for="item in cashier">
					<div><img :src="item.cimg" class="wImg"></div>
					<div class="wTitle">{{item.cTitle}}</div>
					<div class="wcontent">{{item.ccontent}}</div>
				</div>
			</div>
		</div>
		<!--会员转化-->
		<div class="Ytitle">会员转化</div>
		<div class="xia"></div>
		<div class="warp" style="position: relative">
			<!--第一个-->
			<div class="change" @click="selecStatu(1)">
				<div><img src="../../assets/restaurant/conversion1.png" class="chImg"></div>
				<div class="chTitle">拉新营销</div>
			</div>
			<div class="positions" style="background: #F5B51C" v-if="status==1" @click="selecStatu(1)">
				<p class="pp">通过店员和老会员进行营销拉新，实现会员的裂变式增长。</p>
			</div>
			<!--第二个-->
			<div class="change" style="background: #4FA3DA" @click="selecStatu(2)">
				<div><img src="../../assets/restaurant/conversion2.png" class="chImg"></div>
				<div class="chTitle">转赠卡券</div>
			</div>
			<div class="positions2" style="background: #4FA3DA" v-if="status==2" @click="selecStatu(2)">
				<p class="pp">商家可设定哪些等级的会员具有卡券的转赠权限，让老会员身边更多的亲朋好友享受到店内实惠。</p>
			</div>
		</div>
		<div class="warp" style="position: relative">
			<!--第一个-->
			<div class="change" @click="selecStatu(3)" style="background: #35B794">
				<div><img src="../../assets/restaurant/conversion4.png" class="chImg"></div>
				<div class="chTitle">超级券</div>
			</div>
			<div class="positions" style="background: #35B794" v-if="status==3" @click="selecStatu(3)">
				<p class="pp">超级券具体包括超级优惠券、超级代金券、超级兑换券和超级现金券等，以微信商户公众号和小程序内的会员卡包为入口，通过各种券引导会员到店消费，提高会员转化率和回购率。</p>
			</div>
			<!--第二个-->
			<div class="change" style="background: #e94a40" @click="selecStatu(4)">
				<div><img src="../../assets/restaurant/conversion5.png" class="chImg"></div>
				<div class="chTitle">卡券商城</div>
			</div>
			<div class="positions2" style="background:  #e94a40" v-if="status==4" @click="selecStatu(4)">
				<p class="pp">会员通过各种途径获得的各共同体商家的卡券可在卡券商城发布转卖，有效提高卡券的利用率，吸引更多新顾客到店消费。</p>
			</div>
		</div>
		<div class="warp" style="position: relative">
			<!--第一个-->
			<div class="change" @click="selecStatu(5)" style="background: #ad67a7">
				<div><img src="../../assets/restaurant/conversion6.png" class="chImg"></div>
				<div class="chTitle">卡券投放</div>
			</div>
			<div class="positions" style="background:  #ad67a7" v-if="status==5" @click="selecStatu(5)">
				<p class="pp">关注送券，转发送券，邀请送券，支付送券群发派券，线下扫码送券等各种灵活多样的卡券投放方式和渠道，确保商家投放卡券的效果。</p>
			</div>
			<!--第二个-->
			<div class="change" style="background: #e72f6f" @click="selecStatu(6)">
				<div><img src="../../assets/restaurant/conversion3.png" class="chImg"></div>
				<div class="chTitle">投放渠道分析</div>
			</div>
			<div class="positions2" style="background:  #e72f6f" v-if="status==6" @click="selecStatu(6)">
				<p class="pp">对各种投放方式和渠道的转化数据进行监控对比、整合分析，提供最优的投放策略建议。</p>
			</div>
		</div>
		<!--决策支持-->
		<div style="background: #F6F6F6">
			<div class="Ytitle" style="padding-top: 20px">决策支持</div>
			<div class="xia"></div>
			<swiper :options="swiperOption" ref="mySwiper" class="swiper">
				<swiper-slide v-for="(item,index) in decision" :key="index" class="swiper_item" style="height: 270px">
					<div class="change2" style="background: white;height: 220px">
						<div><img :src="item.imgs" class="chImg2"></div>
						<div class="chTitle fcolor">{{item.title}}</div>
						<div class="chContent fcolor">{{item.content}}</div>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination" style="top:240px"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		name: "market",
		data() {
			return {
				market: [
					{
						imgs: require('../../assets/restaurant/sale2.png'),
						title: '超级会员卡',
						content: '商家可自定义会员卡，设置会员卡名称、虚拟货币、等级名称、等级权益、获取方式等，让会员营销更具灵活性。'
					},
					{
						imgs: require('../../assets/restaurant/sale3.png'),
						title: '微信卡券',
						content: '会员卡及优惠券电子化，会员可通过微信登录商户的公众号和小程序，随时随地查看和使用自己账户内的余额和各种卡券。'
					},
					{
						imgs: require('../../assets/restaurant/grade.png'),
						title: '等级体系',
						content: '除了自定义会员卡外，商家还可以对会员等级的升降级条件和方式进行自定义。'
					},
					{
						imgs: require('../../assets/restaurant/sale4.png'),
						title: '会员标签画像',
						content: '系统根据会员所留信息和记录的日常消费数据，通过科学算法对会员进行标签化画像，以便后续进行精准的二次营销。'
					},
					{
						imgs: require('../../assets/restaurant/sale5.png'),
						title: '会员渠道分析',
						content: '通过无界会员系统，商家可清楚掌握每个会员的加入方式和渠道，并对数据进行全面的分析。'
					},
					{
						imgs: require('../../assets/restaurant/sale1.png'),
						title: '推送营销',
						content: '在节假日、店庆或店内做促销活动时，商家可通过短信和微信向会员推送节日问候、活动通知等，也可以直接给会员账户派送红包和优惠券，以此提升会员活跃度，刺激重复消费。'
					},
					{
						imgs: require('../../assets/restaurant/birthday.png'),
						title: '生日营销',
						content: '商家可设置在会员生日时通过短信或微信发送生日祝福、红包和优惠券，体现商家关怀，拉近客情关系。'
					},
				],
				gameInfo: [
					{
						id: 11,
						gimg: require('../../assets/restaurant/happy1.png'),
						gtitle: '集碎片',
						gcontent: '一款养成类小游戏，通过每日打卡、分享等方式获得游戏银两，然后通过使用银两来抽取活动商品的碎片，在有效活动时间内集齐活动商品的所有碎片，即可获得此款奖品。'
					},
					{
						id: 1,
						gimg: require('../../assets/restaurant/happy2.png'),
						gtitle: '紫薇斗数',
						gcontent: '一款命理测算类小游戏，通过输入出生日期和时间，即可生成包含六大方面的命格解读报告。'
					},
					{
						id: 2,
						gimg: require('../../assets/restaurant/happy3.png'),
						gtitle: '抓娃娃',
						gcontent: '一款策略技巧类直播在线游戏，通过登录手机APP即可实时远程在线操作娃娃机来抓取奖品。'
					},
				],
				showGame: [
					{
						id: 11,
						gimg: require('../../assets/restaurant/whappy.png'),
						gtitle: '集碎片',
						gcontent: '一款养成类小游戏，通过每日打卡、分享等方 式获得游戏银两，然后通过使用银两来抽取活动商品的碎片，在有效活动时间内集齐活动商品的所有碎片，即可获得此款奖品。',
						colors: '#F67524'
					},
					{
						id: 1,
						gimg: require('../../assets/restaurant/whapp2.png'),
						gtitle: '紫薇斗数',
						gcontent: '一款命理测算类小游戏，通过输入出生日期和时间，即可生成包含六大方面的命格解读报告。',
						colors: '#8957A1'
					},
					{
						id: 2,
						gimg: require('../../assets/restaurant/whapp3.png'),
						gtitle: '抓娃娃',
						gcontent: '一款策略技巧类直播在线游戏，通过登录手机APP即可实时远程在线操作娃娃机来抓取奖品。',
						colors: '#EA68A2'
					},
				],
				gameInfo2: [
					{
						id: 3,
						gimg: require('../../assets/restaurant/happy4.png'),
						gtitle: '链客系统',
						gcontent: '一款分销拓客系统，商家通过链客系统既可以分销、推广店内商品，又可以拓展客源、获取推荐奖励。'
					},
					{
						id: 4,
						gimg: require('../../assets/restaurant/happy5.png'),
						gtitle: '省钱购',
						gcontent: '对接京东、天猫、淘宝、拼多多主流平台的高性价比商品专区，为线下合作商户的会员谋取真正的实惠。'
					},
					{
						id: 5,
						gimg: require('../../assets/restaurant/happy6.png'),
						gtitle: '礼品商店',
						gcontent: '为商户反馈广大新老客户发布各类礼品、赠品兑换商品等提供展示专区，有效提升会员的活跃度和复购率。'
					},
				],
				showGame2: [
					{
						id: 3,
						gimg: require('../../assets/restaurant/whapp4.png'),
						gtitle: '链客系统',
						gcontent: '一款分销拓客系统，商家通过链客系统既可以分销、推广店内商品，又可以拓展客源、获取推荐奖励。',
						colors: '#2E8CEB'
					},
					{
						id: 4,
						gimg: require('../../assets/restaurant/whapp5.png'),
						gtitle: '省钱购',
						gcontent: '对接京东、天猫、淘宝、拼多多主流平台的高性价比商品专区，为线下合作商户的会员谋取真正的实惠。',
						colors: '#80C269'
					},
					{
						id: 5,
						gimg: require('../../assets/restaurant/whapp6.png'),
						gtitle: '礼品商店',
						gcontent: '为商户反馈广大新老客户发布各类礼品、赠品兑换商品等提供展示专区，有效提升会员的活跃度和复购率。',
						colors: '#ED594D'
					},
				],
				gameId: '11a',
				wechat: [
					{
						wimg: require('../../assets/restaurant/powder1.png'),
						wTitle: '收银吸粉',
						wcontent: '通过智慧收银系统实现支付即会员，推荐关注商户公众号。'
					},
					{
						wimg: require('../../assets/restaurant/powder2.png'),
						wTitle: '红包卡券营销',
						wcontent: '通过发放各类红包及优惠券吸引更多粉丝，扩大潜在顾客群。'
					},
					{
						wimg: require('../../assets/restaurant/powder3.png'),
						wTitle: '点餐吸粉',
						wcontent: '通过微信点餐把线下顾客转 化成线上粉丝，实现线上线下会员的统一化管理。'
					},
					{
						wimg: require('../../assets/restaurant/powder4.png'),
						wTitle: '分享裂变',
						wcontent: '通过分享、转发、助力各类优惠活动、趣味游戏、优质商品等，以老带新，巩固老会员、吸引新顾客。'
					}
				],
				cashier: [
					{
						cimg: require('../../assets/restaurant/zhihui1.png'),
						cTitle: '优惠买单',
						ccontent: '顾客买单时支持会员等级折扣、叠加优惠券、积分抵扣、买单立减、满折满赠等多种优惠方式，而且支持商家在 商户后台做自定义设置和随意组合。'
					},
					{
						cimg: require('../../assets/restaurant/zhihui2.png'),
						cTitle: '红包卡券营销',
						ccontent: '通过发放各类红包及优惠券吸引更多粉丝，扩大潜在顾客群。'
					},
					{
						cimg: require('../../assets/restaurant/zhihui3.png'),
						cTitle: '支付宝收银',
						ccontent: '支持手机和平板端APP收款、 二维码支付、扫码收款。'
					},
					{
						cimg: require('../../assets/restaurant/zhihui4.png'),
						cTitle: '收银后营销',
						ccontent: '支持收银后推荐关注公众号、领取各种优惠券、注册成为会员、派发红包、打开指定活动页面等。'
					},
					{
						cimg: require('../../assets/restaurant/zhihui5.png'),
						cTitle: '多门店管理',
						ccontent: '支持多个加盟或连锁门店的收银操作、统一财务管理和数据的整合分析。'
					},
					{
						cimg: require('../../assets/restaurant/zhihui6.png'),
						cTitle: '退款找零',
						ccontent: '通过微信或支付宝进行退款找零，无现金操作，方便随时对账，省时省力，高效管理。'
					}
				],
				decision: [
					{
						imgs: require('../../assets/restaurant/policy1.png'),
						title: '有奖调查',
						content: '商家可通过发起调查问卷，并设置给参与者赠送或抽取奖品的方式，收集粉丝和会员的各种反馈信息，为及时调整经营和营销策略提供决策依据。'
					},
					{
						imgs: require('../../assets/restaurant/policy2.png'),
						title: '点评打赏分析',
						content: '通过分析消费顾客的点评打赏记录，经营决策者可不断优化内部员工考评机制，提升服务质量。'
					},
					{
						imgs: require('../../assets/restaurant/policy3.png'),
						title: '经营数据分析',
						content: '线上线下、多门店、多渠道的收银财务数据和经营数据，系统自动整合成统一的数据报表营业流水、利润、客流量、客单价、翻台率等各项经营数据一目了然，为决策者随时掌握公司的整体经营情况，调整经营策略提供坚持的数据支撑。'
					},
					{
						imgs: require('../../assets/restaurant/policy4.png'),
						title: '分享数据统计',
						content: '根据粉丝和会员对微信公众号中各板块内容分享转发数据的统计分析，可判断粉丝和会员的喜好，更喜欢哪个板块的哪类活动内容，据此优化微信营销推广策略。'
					},
					{
						imgs: require('../../assets/restaurant/policy5.png'),
						title: '产品销售统计',
						content: '系统通过自动记录、汇总各类产品的销售情况生成直观的销售数据统计图表，为后续改进产品、优化产品搭配、进一步提升营业额提供决策依据。'
					}
				],
				status: 'ppp',
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
		methods: {
			getGame(id) {
				var that = this;
				if (id == that.gameId) {
					that.gameId = '11a';
				} else {
					that.gameId = id;
				}
			},
			selecStatu(id) {
				var that = this;
				if (that.status == id) {
					that.status = 'qq';
				} else {
					that.status = id;
				}
			}
		}
		
	}
</script>

<style scoped>
	.Ytitle {
		font-size: 20px;
		font-weight: bold;
		margin: 20px auto;
	}
	
	.xia {
		width: 35%;
		height: 1px;
		background: #707070;
		margin: 0 auto;
		margin-bottom: 20px;
	}
	
	.swiper-pagination {
		top: 225px;
	}
	
	.marketbody {
		width: 90%;
		height: 215px;
		border: 2px solid rgba(229, 229, 229, 1);
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
		margin: 0px auto;
	}
	
	.markImg {
		width: 56px;
		height: 56px;
		margin: 15px auto;
	}
	
	.markTitle {
		color: #2c3e50;
		font-size: 18px;
	}
	
	.markCon {
		text-align: left;
		font-size: 15px;
		width: 90%;
		margin: 10px auto;
	}
	
	/*趣味*/
	.spice {
		background: #F6F6F6;
		height: auto;
		padding-bottom: 20px;
	}
	
	.game {
		width: 28%;
		height: 160px;
		background: white;
		position: relative;
		margin-top: 50px;
		cursor: pointer;
	}
	
	.gameImg {
		width: 50px;
		height: 50px;
		position: absolute;
		top: -20px;
		left: 24%;
	}
	
	.gameTitle {
		font-size: 15px;
		text-align: center;
		padding-top: 45px;
	}
	
	.gameCon {
		width: 90%;
		font-size: 11px;
		margin: 10px 5px;
		text-align: center;
		color: #666666;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
	}
	
	.showGame {
		width: 94%;
		height: 190px;
		background: #F67524;
		z-index: 50;
		position: absolute;
		border-radius: 4px;
		top: 12%;
		left: 3%;
		cursor: pointer;
	}
	
	.showImg2 {
		width: 60px;
		height: 60px;
		position: absolute;
		top: -17%;
		left: 41%;
	}
	
	.showTitle {
		padding-top: 50px;
		color: white;
		text-align: center;
		font-size: 18px;
	}
	
	.showFont {
		color: white;
		text-align: left;
		font-size: 13px;
		width: 90%;
		margin: 0 auto;
		padding-top: 10px;
	}
	
	/*微信*/
	.wcheat {
		width: 45%;
		height: 230px;
		margin-top: 10px;
		/*background:rgba(250,250,250,1);*/
		background: white;
		box-shadow: 0px 3px 6px #e5e5e5;
	}
	
	.wImg {
		width: 60px;
		height: 60px;
		margin: 10px auto;
	}
	
	.wTitle {
		font-size: 15px;
		text-align: center;
		/*padding-top: 10px;*/
	}
	
	.xia2 {
		width: 15%;
		height: 2px;
		background: #F67524;
		margin: 10px auto;
	}
	
	.wcontent {
		width: 90%;
		font-size: 12px;
		margin: 10px auto;
		text-align: left;
	}
	
	/*会员转化*/
	.change {
		width: 45%;
		height: 160px;
		background: #F5B51C;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
		opacity: 1;
		border-radius: 4px;
		margin: 10px auto;
		color: white;
		cursor: pointer;
	}
	
	.chImg {
		width: 50px;
		height: 50px;
		margin: 30px auto;
	}
	
	.positions {
		position: absolute;
		width: 45%;
		height: 160px;
		top: 5%;
		left: 2%;
		text-align: left;
		z-index: 40;
		cursor: pointer;
	}
	
	.positions2 {
		position: absolute;
		width: 45%;
		height: 160px;
		top: 5%;
		left: 52.5%;
		text-align: left;
		z-index: 40;
		cursor: pointer;
	}
	
	.pp {
		width: 95%;
		margin: 10px 6px;
		color: white;
	}
	
	.change2 {
		width: 95%;
		height: 200px;
		background: #F5B51C;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
		opacity: 1;
		border-radius: 4px;
		margin: 10px auto;
		color: white;
	}
	
	.chImg2 {
		width: 50px;
		height: 50px;
		margin: 20px auto;
	}
	
	.chTitle {
		font-size: 15px;
		margin: 5px auto;
	}
	
	.chContent {
		text-align: left;
		width: 92%;
		margin: 0 auto;
	}
</style>