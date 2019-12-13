<template>
	<div>
		<div style="width: 100%;height: auto;background: #F6F6F6">
			<div><img src="../../assets/underline/special8.jpg" class="Bimg"></div>
			<div class="rTitle">我们能解决哪些问题？</div>
			<div class="xia" style="margin-bottom: 20px"></div>
			<swiper :options="swiperOption" ref="mySwiper" class="swiper" style="height: 320px">
				<swiper-slide class="swiper_item">
					<div class="warp">
						<div class="isuse">
							<div><img src="../../assets/retail/problem1.png" class="isuseImg"></div>
							<div class="isuseTitle">成本高！顾客少！生意差！</div>
							<div class="isuseCon">线下店员拓客、全民拉新、权益人推荐三大核武器让您的店铺顾客盈门；线上通过趣味互动小游戏、对接第三方生活服务平台、无界优品商城和卡券营销体系等，解决线上流量问题。
							</div>
						</div>
						<div class="isuse">
							<div><img src="../../assets/retail/problem2.png" class="isuseImg"></div>
							<div class="isuseTitle">回头客少，复购率低！</div>
							<div class="isuseCon">通过数字化会员体系和顾客画像功能，大数据分析顾客基本信息、消费能力、消费偏好等数据，然后做全方位精准的二次营销，让复购率暴涨。</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper_item">
					<div class="warp" >
						<div class="isuse">
							<div><img src="../../assets/retail/problem3.png" class="isuseImg"></div>
							<div class="isuseTitle">营销成本高，垃圾粉多！</div>
							<div class="isuseCon">传统营销应用营销效果差，垃圾粉非常多，无界CMS精准营销、深度场景化营销方案和会员转化功能为您拓展精准顾客。</div>
						</div>
						<div class="isuse">
							<div><img src="../../assets/retail/problem4.png" class="isuseImg"></div>
							<div class="isuseTitle" style="width: 90%">门店多，线下流量浪费，线上线下杂乱！</div>
							<div class="isuseCon">把进店顾客通过各种方式数字化，多门店线上线下业务、会员、财务数据统一，打通O2O线上线下业务闭环，实现线上线下无障碍流量互导。
							</div>
						</div>
					</div>
				</swiper-slide>
				<swiper-slide class="swiper_item">
					<div class="warp">
						<div class="isuse">
							<div><img src="../../assets/retail/problem5.png" class="isuseImg"></div>
							<div class="isuseTitle">员工不积极，管理效率低！</div>
							<div class="isuseCon">结合顾客点评打赏系统，对员工的服务顾客数量服务订单金额、顾客满意度、拓客数量、会员储值金额、发卡发券数量等进行多维度综合考评，充分激发员工积极性和主动性，大大减轻管理压力。
							</div>
						</div>
						<div class="isuse">
							<div><img src="../../assets/retail/problem6.png" class="isuseImg"></div>
							<div class="isuseTitle">收银设备多，财务管理混乱！</div>
							<div class="isuseCon">每个店铺往往有多个POS机，再加上微信支付宝收银，收银通道非常混乱。无界CMS有全通道融合线上线下的收银体系，线上线下全通道财务数据统一。
							</div>
						</div>
					</div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
		<div>
			<div class="rTitle">数字化会员体系</div>
			<div class="xia"></div>
			<div class="warp">
				<div class="num" v-for="item in numInfo">
					<div><img :src="item.img" class="numImg"></div>
					<div class="numTitle">{{item.title1}}</div>
					<div class="numCon">{{item.title2}}</div>
				</div>
			</div>
		</div>
		<div style="width: 100%;height: auto;background: #F6F6F6;padding-top: 20px">
			<div class="rTitle">线下流量及转化</div>
			<div class="xia" style="margin-bottom: 20px"></div>
			<div class="warp">
				<div v-for="item in selectInfo" :class="['select',selectId==item.id?'selectBj':'']">
					<div @click="selected(item.id)">{{item.title}}</div>
				</div>
			</div>
			<div v-for="items in flowCon">
				<div v-if="selectId==items.id&&items.id!=5&&items.id!=1">
					<div><img :src="items.img" class="flowImg"></div>
					<div v-for="con in items.conList">
						<div class="flowTitle">{{con.title}}</div>
						<div class="flowCon">{{con.con}}</div>
					</div>
				</div>
				<div v-if="selectId==items.id&&items.id==1">
					<div><img :src="items.img" class="flowImg" style="margin: 30px auto"></div>
					<div v-for="con in items.conList">
						<div class="flowTitle">{{con.title}}</div>
						<div class="flowCon">{{con.con}}</div>
					</div>
				</div>
				<div v-if="selectId==items.id&&items.id==5">
					<div><img :src="items.img" class="flowImg" style="width: 75%;height: auto;margin-top:20px;margin-bottom: 20px"></div>
				</div>
			</div>
		</div>
		<div>
			<div class="rTitle">精准深度营销及促销方案</div>
			<div class="xia" style="margin-bottom: 20px"></div>
			<div class="warp">
				<div v-for="item in gameInfo">
					<div><img :src="item.img" class="gameImg"></div>
					<div class="gameFont">{{item.title}}</div>
				</div>
			</div>
		</div>
		<div style="width: 100%;height: auto;background: #F6F6F6;padding-top: 15px;padding-bottom: 15px">
			<div class="rTitle">用户画像CRM</div>
			<div class="xia" style="margin-bottom: 20px"></div>
			<div class="warp">
				<div v-for="item in userInfo" class="user">
					<div><img :src="item.img" class="userImg"></div>
					<div class="userFont">{{item.title}}</div>
				</div>
			</div>
		</div>
		<div>
			<div class="rTitle">数字化会员体系</div>
			<div class="xia" style="margin-bottom: 20px"></div>
			<div class="warp">
				<div class="math" v-for="item in mathInfo">
					<div><img :src="item.img" class="mathImg"></div>
					<div class="mathTitle">{{item.title}}</div>
					<div class="mathCon">{{item.content}}</div>
				</div>
			</div>
		</div>
		<div style="width: 100%;height: auto;background: #F6F6F6;padding-top: 15px">
			<div class="rTitle">收银财务体系</div>
			<div class="xia" style="margin-bottom: 20px"></div>
			<div class="warp">
				<div :class="['collbody', collecId==item.id?'collBj':'']" v-for="item in collect"
				     @click="collted(item.id)">{{item.title}}
				</div>
			</div>
			<div v-for="item in cashCon">
				<div v-if="collecId==item.id">
					<div><img :src="item.img" style="margin-top: 20px;width: 78%;height: auto"></div>
					<div style="text-align: left;width: 90%;margin: 10px 20px;padding-bottom: 10px">{{item.con}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "retail",
		data() {
			return {
				numInfo: [
					{
						img: require('../../assets/retail/num1.png'),
						title1: '会员体系',
						title2: '会员等级、会员特权，会员成长    体系，积分商城，会员关怀。'
					},
					{
						img: require('../../assets/retail/num2.png'),
						title1: '微信卡券',
						title2: '会员可通过微信登录商户公众号 和小程序，随时随地查看和使用 自己账户内的余额和各种卡券。'
					},
					{
						img: require('../../assets/retail/num3.png'),
						title1: 'RFM会员模型',
						title2: '流失客户、沉默客户、睡眠客户、潜在客户、活跃客户划分体系。'
					},
					{
						img: require('../../assets/retail/num4.png'),
						title1: '用户画像',
						title2: '基本信息、消费能力、消费行为、消费偏好分析。'
					},
					{
						img: require('../../assets/retail/num5.png'),
						title1: '储值体系',
						title2: '微信和支付宝充值会员卡、储值赠送、储值优惠、储值收支记录等功能。'
					},
					{
						img: require('../../assets/retail/num6.png'),
						title1: '支付即会员',
						title2: '缩短会员办卡流程，微信支付宝支付后立即成为会员。'
					},
				],
				selectInfo: [
					{
						title: "线下流量数据化",
						id: 0
					},
					{
						title: "会员转化工具",
						id: 1
					},
					{
						title: "线下物料生成",
						id: 2
					},
					{
						title: "卡券投放渠道",
						id: 3
					}, {
						title: "卡券核销",
						id: 4
					},
					{
						title: "投放检测",
						id: 5
					}
				],
				selectId: 0,
				flowCon: [
					{
						id: 0,
						img: require('../../assets/retail/member1.png'),
						conList: [
							{
								title: ' 线下流量转化，融合线上数据',
								con: '每个进店的顾客基本上都是潜在会员，要想尽办法去把进店顾客转化为会员。 上面为部分线下流量转化方式。'
							}
						]
					},
					{
						id: 1,
						img: require('../../assets/retail/xiaofeika.png'),
						conList: [
							{
								con: '以微信卡包为入口的电子化优惠券，成本低廉，传播度高，具有超强的社交化属性，能数倍提升粉丝顾客转化率。'
							}
						]
					},
					{
						id: 2,
						img: require('../../assets/retail/member3.png'),
						conList: [
							{
								title: '类型',
								con: '微信支付、支付宝支付、优惠券和会员卡领取发放等各种物料。'
							},
							{
								title: '形态',
								con: '台卡、门贴、挂件、点餐桌码等形态。'
							}
						]
					},
					{
						id: 3,
						img: require('../../assets/retail/member4.png'),
						conList: [
							{
								title: '线下渠道',
								con: '多门店、店内易拉宝、员工标牌、餐桌台卡、传统媒体（比如报纸、杂志、电视台）等。'
							}
						]
					},
					{
						id: 4,
						img: require('../../assets/retail/member5.png'),
						conList: [
							{
								title: '核销方式',
								con: '手机或平板端移动app核销、扫码枪核销、盒子核销、智慧POS核销。'
							},
							{
								title: '特性',
								con: '核销过程与收银相结合、会员积分体系相结合。'
							}
						]
					},
					{
						id: 5,
						img: require('../../assets/retail/member6.png')
					}
				],
				gameInfo: [
					{
						img: require('../../assets/retail/depth1.png'),
						title: '游戏营销'
					},
					{
						img: require('../../assets/retail/depth2.png'),
						title: '场景助力营销'
					},
					{
						img: require('../../assets/retail/depth3.png'),
						title: '活动促销'
					},
				],
				userInfo: [
					{
						img: require('../../assets/retail/user1.png'),
						title: '顾客信息'
					},
					{
						img: require('../../assets/retail/user2.png'),
						title: '消费偏好'
					},
					{
						img: require('../../assets/retail/user3.png'),
						title: '消费行为'
					},
					{
						img: require('../../assets/retail/xiaofeinengli.png'),
						title: '消费能力'
					},
				],
				mathInfo: [
					{
						img: require('../../assets/retail/center1.png'),
						title: '门店数据',
						content: '营业数据、流量转化数据、会员数据等。'
					},
					{
						img: require('../../assets/retail/center2.png'),
						title: '员工考核数据',
						content: '拓客数据、销售数据、发券数量等。'
					},
					{
						img: require('../../assets/retail/center3.png'),
						title: '拓客统计数据',
						content: '拓客营业额、拓客发券数量等。'
					},
					{
						img: require('../../assets/retail/center4.png'),
						title: '财务数据',
						content: '收银渠道统计、收银员统计等数据。'
					},
				],
				collect: [
					{
						id: 0,
						title: '线上线下财务融合'
					},
					{
						id: 1,
						title: '无硬件收银'
					},
					{
						id: 2,
						title: '多支付渠道统计'
					},
				],
				collecId: 0,
				cashCon: [
					{
						id: 0,
						img: require('../../assets/retail/cash1.png'),
						con: '多门店多收银员体系，能融合线上线下财务数据。'
					},
					{
						id: 1,
						img: require('../../assets/retail/cash2.png'),
						con: '不用任何硬件，通过我们研发的双平台原生APP，拿手机或平板就可以实现微信、支付宝、会员卡、现金和无界钱包的收款操作。'
					},
					{
						id: 2,
						img: require('../../assets/retail/cash3.png'),
						con: '统计各时段不同支付渠道的收款数量、收款金额、收款占比等。'
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
			this.common.menu();
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		methods: {
			selected(id) {
				this.selectId = id;
			},
			collted(id) {
				this.collecId = id;
			}
		}
	}
</script>

<style scoped>
	.rTitle {
		font-size: 20px;
		margin: 20px auto;
		font-weight: bold;
	}
	
	.xia {
		width: 30%;
		height: 1px;
		background: #707070;
		margin: 0 auto;
	}
	
	.isuse {
		width: 45%;
		height: 280px;
		background: white;
		color: #F67524;
		margin-bottom: 10px;
		font-size: 15px;
	}
	
	.isuseImg {
		width: 60px;
		height: 60px;
		margin-top: 20px;
	}
	
	.isuseTitle {
		width: 75%;
		height: 45px;
		margin: 10px auto;
		font-size: 15px;
	}
	
	.isuseCon {
		text-align: left;
		width: 92%;
		margin: 0 auto;
		font-size: 11px;
	}
	
	.num {
		width: 47%;
		height: 190px;
	}
	
	.numImg {
		width: 60px;
		height: 60px;
		margin-top: 15px;
	}
	
	.numTitle {
		color: #666666;
		font-size: 15px;
		margin: 10px auto;
	}
	
	.numCon {
		color: #666666;
		font-size: 11px;
		text-align: left;
		width: 95%;
		margin: 0 10px;
	}
	
	.select {
		width: 25%;
		height: 35px;
		background: #FDDFCC;
		color: #666666;
		line-height: 35px;
		border-radius: 4px;
		margin: 5px 10px;
		cursor: pointer;
	}
	
	.selectBj {
		background: #F67524;
		color: white;
	}
	
	.flowImg {
		width: 75%;
		height: auto;
		margin: 0 auto;
	}
	
	.flowTitle {
		text-align: center;
		font-size: 15px;
		color: #F67524;
	}
	
	.flowCon {
		text-align: left;
		width: 92%;
		margin: 5px 13px;
		font-size: 12px;
		color: #666666;
		padding-top: 10px;
		padding-bottom: 10px;
	}
	
	.gameImg {
		width: 60px;
		height: 60px;
	}
	
	.gameFont {
		font-size: 12px;
		margin: 10px auto;
	}
	
	.user {
		width: 20%;
		height: 125px;
		background: white;
	}
	
	.userImg {
		width: 50px;
		height: 50px;
		margin-top: 20px;
	}
	
	.userFont {
		font-size: 12px;
		color: #F67524;
		margin-top: 20px;
	}
	
	.math {
		width: 45%;
		height: auto;
	}
	
	.mathImg {
		width:60px;
		height: 60px;
	}
	
	.mathTitle {
		color: #666666;
		font-size: 15px;
		margin: 10px auto;
	}
	
	.mathCon {
		color: #666666;
		font-size: 11px;
		margin: 10px auto;
	}
	
	.collbody {
		width: 30%;
		height: 30px;
		background: #FDDFCC;
		line-height: 30px;
		color: #666666;
		cursor: pointer;
	}
	
	.collBj {
		background: #F67524;
		color: white;
	}
</style>