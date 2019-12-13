<template>
	<div>
		<div class="headColor">
			<div>
				<div class="warp" style="height: 50px">
					<div class="ztu"><img src="../assets/fontlogo.png" style="width: 70%;height: auto" @click="toIndex"></div>
					<div class="btnbj " @click="selects" v-if="selecFlag==true"></div>
					<div class="cha " v-if="selecFlag==false" @click="selects"></div>
				</div>
				<div :class="[selecFlag==false?'lists':'lists2']" v-if="selecFlag==false">
					<el-collapse accordion class="fathclass">
						<div :class="['twoTitle','one',activeFont==1?'activefont':'']" @click="indexs(1)"
						     style="width: 100%;margin-left: 0px;">首页
						</div>
						<div style="width: 100%;height: 1px;background: white;"></div>
						<el-collapse-item>
							<template slot="title">
								<p :class="['titleFont',activeFont==2?'activefont':'']" @click="showFont(2)">行业应用</p>
							</template>
							<div class="twoTitle" @click="catering">餐饮行业</div>
							<div class="twoTitle">超市行业</div>
							<div class="twoTitle">健身行业</div>
							<div class="twoTitle">教育行业</div>
							<div class="twoTitle">酒店行业</div>
							<div class="twoTitle">美容行业</div>
							<div class="twoTitle">美发行业</div>
							<div class="twoTitle">生鲜行业</div>
						</el-collapse-item>
						<el-collapse-item>
							<template slot="title">
								<p :class="['titleFont',activeFont==3?'activefont':'']" @click="showFont(3)">亮点展示</p>
							</template>
							<div class="twoTitle" @click="lightspot">无界众筹</div>
							<div class="twoTitle" @click="league">异业联盟</div>
							<div class="twoTitle" @click="leagWisdom">智慧餐饮供应链</div>
							<div class="twoTitle" @click="portrayal">营业画像</div>
						</el-collapse-item>
						<el-collapse-item>
							<template slot="title" @click="showFont(6)">
								<p :class="['titleFont',activeFont==4?'activefont':'']" @click="showFont(4)">特色产品</p>
							</template>
							<div class="twoTitle" @click="offine">线下客流转化系统</div>
							<div class="twoTitle" @click="grm">顾客RFM模型</div>
							<div class="twoTitle" @click="rowNum">智慧排号系统</div>
							<div class="twoTitle" @click="collMoney">智慧收银体系</div>
							<div class="twoTitle" @click="userportrayal">用户画像</div>
							<div class="twoTitle" @click="marketing">游戏场景营销</div>
							<div class="twoTitle" @click="coupon">卡券营销</div>
							<div class="twoTitle" @click="retail">新零售体系</div>
						</el-collapse-item>
						<el-collapse-item>
							<template slot="title" @click="showFont(6)">
								<p :class="['titleFont',activeFont==5?'activefont':'']" @click="showFont(5)">关于我们</p>
							</template>
							<div class="twoTitle" @click="compony">企业简介</div>
							<div class="twoTitle" @click="culture">企业文化</div>
							<div class="twoTitle" @click="componyWay">更多方式</div>
							<div class="twoTitle" @click="develop">发展历程</div>
						</el-collapse-item>
						<el-collapse-item>
							<template slot="title" @click="showFont(6)">
								<p :class="['titleFont',activeFont==6?'activefont':'']" @click="showFont(6)">加入我们</p>
							</template>
							<div class="twoTitle" @click="tojoin">加盟管理</div>
							<div class="twoTitle" @click="joinme">招聘动态</div>
						</el-collapse-item>
						<div :class="['twoTitle','one',activeFont==7?'activefont':'']" @click="operator(7)"
						     style="width: 100%;margin-left: 0px;">运营学院
						</div>
						<div style="width: 100%;height: 1px;background: white;"></div>
						<div class="twoTitle one" @click="goUrl(8)" style="width: 100%;margin-left: 0px;"><a
								href="http://www.wotianhui.com/" target="_blank"><p
								:class="[activeFont==8?'activefont':'']">进入沃天</p></a></div>
					</el-collapse>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "commonHeader",
		data() {
			return {
				selecFlag: true,
				activeFont: 'sss'
			}
		},
		methods: {
			showFont(id) {
				this.activeFont = id;
			},
			operator(id) {
				this.activeFont = id;
			},
			goUrl(id) {
				this.activeFont = id;
			},
			toIndex() {
				this.$router.push({path: '/'});
				this.selecFlag = true
			},
			//下拉展示
			selects() {
				this.selecFlag = !this.selecFlag;
			},
			//	首页
			indexs(id) {
				this.activeFont = id;
				this.selecFlag = true;
				this.$router.push({path: '/'})
			},
			//	动态招聘
			joinme() {
				this.selecFlag = true;
				this.$router.push({path: '/joinme'})
			},
			//	加盟管理
			tojoin() {
				this.selecFlag = true;
				this.$router.push({path: '/tojoin'})
			},
			//	餐饮页面
			catering() {
				this.selecFlag = true;
				this.$router.push({path: '/catering'})
			},
			//	特色亮点
			lightspot() {
				this.selecFlag = true;
				this.$router.push({path: '/lightspot'})
			},
			//	异业联盟
			league() {
				this.selecFlag = true;
				this.$router.push({path: '/league'})
			},
			//	智慧餐饮
			leagWisdom() {
				this.selecFlag = true;
				this.$router.push({path: 'leagWisdom'})
			},
			//	营业画像
			portrayal() {
				this.selecFlag = true;
				this.$router.push({path: '/protrayal'})
			},
			//线下客流
			offine() {
				this.selecFlag = true;
				this.$router.push({path: '/offine'})
			},
			//	顾客frm
			grm() {
				this.selecFlag = true;
				this.$router.push({path: '/frm'})
			},
			// 排号系统
			rowNum() {
				this.selecFlag = true;
				this.$router.push({path: '/rowNumber'})
			},
			//	新零售
			retail() {
				this.selecFlag = true;
				this.$router.push({path: '/retail'})
			},
			//	卡券营销
			coupon() {
				this.selecFlag = true;
				this.$router.push({path: '/coupon'})
			},
			//	用户画像
			userportrayal() {
				this.selecFlag = true;
				this.$router.push({path: '/userportrayal'})
			},
			//智慧收银
			collMoney() {
				this.selecFlag = true;
				this.$router.push({path: '/collMoney'})
			},
			//	游戏场景营销
			marketing() {
				this.selecFlag = true;
				this.$router.push({path: '/marketing'})
			},
			//	企业简介
			compony() {
				this.selecFlag = true;
				this.$router.push({path: '/compony'})
			},
			//	企业文化
			culture() {
				this.selecFlag = true;
				this.$router.push({path: '/culture'})
			},
			//	更多方式
			componyWay() {
				this.selecFlag = true;
				this.$router.push({path: '/componyWay'})
			},
			//	发展历程
			develop() {
				this.selecFlag = true;
				this.$router.push({path: '/develop'})
			}
		}
	}
</script>

<style scoped>
	.ztu {
		width: 65%;
		height: auto;
		margin: 9px 0 0 -10%;
		cursor: pointer
	}
	
	body {
		position: relative;
	}
	
	body a:active {
		color: red;
	}
	
	a {
		text-decoration: none;
	}
	
	.headColor {
		background: #F67524;
		width: 100%;
		height: 40px;
		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 99;
	}
	
	.logoimg {
		width: 28px;
		height: 28px;
		margin: 5px 0 0 20px;
	}
	
	.btnbj {
		width: 20px;
		height: 20px;
		background-image: url("../assets/home/menu.png");
		background-size: 100% 100%;
		margin: 3% 0 0 10px;
		position: relative;
	}
	
	.cha {
		width: 20px;
		height: 20px;
		background-image: url("../assets/home/chacha.png");
		background-size: 100% 100%;
		margin: 3% 0 0 10px;
		position: relative;
	}
	
	.lists {
		position: absolute;
		top: 40px;
		left: 0px;
		width: 100%;
		height: auto;
		z-index: 99;
		animation: myfirst 0.3s 1;
	}
	
	.one {
		background: rgba(0, 0, 0, 0.9);
		opacity: 0.9;
		color: white;
		padding: 10px 0 10px 30px;
		font-size: 13px;
		font-weight: 500;
		font-family: 'Avenir Helvetica, Arial, sans-serif';
	}
	
	@keyframes myfirst {
		0% {
			transform: translate(-150px, 0px);
		}
		/*50% {*/
			/*transform: translate(0px, -4px);*/
		/*}*/
		100% {
			transform: translate(0px, 0px);
		}
	}
	/*@keyframes myfirst {*/
		/*0% {*/
			/*transform: translate(0px, -50px);*/
		/*}*/
		/*10%{*/
			/*transform: translate(0px, -45px);*/
		/*}*/
		/*20%{*/
			/*transform: translate(0px, -40px);*/
		/*}*/
		/*30%{*/
			/*transform: translate(0px, -35px);*/
		/*}*/
		/*40%{*/
			/*transform: translate(0px, -30px);*/
		/*}*/
		/*50% {*/
			/*transform: translate(0px, -25px);*/
		/*}*/
		/*60%{*/
			/*transform: translate(0px, -20px);*/
		/*}*/
		/*70%{*/
			/*transform: translate(0px, -15px);*/
		/*}*/
		/*80%{*/
			/*transform: translate(0px, -10px);*/
		/*}*/
		/*90%{*/
			/*transform: translate(0px, -5px);*/
		/*}*/
		/*100% {*/
			/*transform: translate(0px, 0px);*/
		/*}*/
	/*}*/
	
	
	.name {
		color: white;
		margin: 3% 0 0 2%;
		font-size: 14px;
		width: 68%;
		text-align: left;
	}
	
	.titleFont {
		width: 80%;
		text-align: left;
		margin-left: 30px;
	}
	
	.twoTitle {
		text-align: left;
		margin-left: 30px;
		/*margin-top: 10px;*/
		line-height: 30px;
		cursor: pointer;
	}
	
	.activefont {
		color: #F67524;
	}
	
	.twoTitle a {
		color: white;
	}
	
	.twoTitle a:hover {
		color: blue;
		text-decoration: underline;
	}
	
	.twoTitle a:active {
		color: red;
		text-decoration: underline;
	}
	
	.fathclass >>> .el-collapse-item__header {
		background: rgba(0, 0, 0, 0.9);
		opacity: 0.9;
		color: white;
	}
	
	.fathclass >>> .el-collapse-item__content {
		background: rgba(0, 0, 0, 0.9);
		opacity: 0.9;
		color: white;
	}
</style>