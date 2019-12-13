<template>
	<div class="form">
		<div class="Ftitle">组织管理</div>
		<div class="xia"></div>
		<!--四个框-->
		<div class="warp" style="position: relative">
			<div class="wbody" style="border-bottom: 4px solid #1EDCDC;" @click="showTime(0)">
				<div><img src="../../assets/restaurant/organization1.png" class="fimg"></div>
				<div class="fFont">薪资管理</div>
			</div>
			<div class="wbody" style="border-bottom: 4px solid #4FA3DA;" @click="showTime(1)">
				<div><img src="../../assets/restaurant/organization2.png" class="fimg"></div>
				<div class="fFont">考勤管理</div>
			</div>
			<div class="wbody" style="border-bottom: 4px solid #E94A40;" @click="showTime(2)">
				<div><img src="../../assets/restaurant/organization3.png" class="fimg"></div>
				<div class="fFont">绩效管理</div>
			</div>
			<div class="wbody" style="border-bottom: 4px solid #FED387;" @click="showTime(3)">
				<div><img src="../../assets/restaurant/organization4.png" class="fimg"></div>
				<div class="fFont">员工档案</div>
			</div>
			<div class="layer posi1" v-if="status==0" @click="showTime(0)">
				<div><img src="../../assets/restaurant/organizations1.png" class="layImg"></div>
				<div class="layTitle">薪资管理</div>
				<div class="layContent">员工薪资结构、薪酬水平、职位等级，薪酬占比一目了然。</div>
			</div>
			<div class="layer posi2" v-if="status==1" @click="showTime(1)">
				<div><img src="../../assets/restaurant/organizations2.png" class="layImg"></div>
				<div class="layTitle">考勤管理</div>
				<div class="layContent">透明高效管理员工时间，员工通过手机移动端即可轻松实现考勤、打卡、交接班、请假等操作；精确采集员工考勤数据，保证薪资计算的数据来源真实、可靠。</div>
			</div>
			<div class="layer posi3" v-if="status==2" @click="showTime(2)">
				<div><img src="../../assets/restaurant/../../assets/restaurant/organizations3.png" class="layImg"></div>
				<div class="layTitle">绩效管理</div>
				<div class="layContent">综合出勤时间、服务人数、顾客点评等各方面数据，科学评估每位员工的工作绩效，实现公平公正，充分激发员工的工作热情。</div>
			</div>
			<div class="layer posi4" v-if="status==3" @click="showTime(3)">
				<div><img src="../../assets/restaurant/organizations4.png" class="layImg"></div>
				<div class="layTitle">员工档案</div>
				<div class="layContent">员工信息全面掌握，摒弃纸质化管理，大大提升管理效率，减轻行政工作负担。</div>
			</div>
		</div>
		<div class="Ftitle">统计报表</div>
		<div class="xia"></div>
		<div class="warp">
			<div class="stat">
				<div><img src="../../assets/catering/count1.png" class="Timg"></div>
				<div class="Ttitle">财务报表</div>
				<p class="Tcontent">
					线上线下各渠道、各连锁加盟店收银财务数据统一，资产、负债、现金流、利润率等各项财务数据一手掌握。
				</p>
			</div>
			<div class="stat">
				<div><img src="../../assets/catering/count2.png" class="Timg"></div>
				<div class="Ttitle">营销报表</div>
				<p class="Tcontent">
					客流量、客单价、回购率、会员数量、订单数量、好评打赏数量等营销数据一应俱全。
				</p>
			</div>
			<div class="stat">
				<div><img src="../../assets/catering/count3.png" class="Timg"></div>
				<div class="Ttitle">业务报表</div>
				<div class="Tcontent">
					原材料库存数量、采购周期、出品率、损耗率、翻台率、上菜时间等核心业务数据，为采取措施优化经营效率，提升服务质量提供全面的数据支持。</div>
			</div>
			<div class="stat">
				<div><img src="../../assets/catering/count4.png" class="Timg"></div>
				<div class="Ttitle">人事报表</div>
				<div class="Tcontent">薪酬、出勤、绩效、人员流动率等全方面的数据报表，为管理者制定和采取各项政策措施优化员工管理、降低人力成本、赋能员工成长、减少人才流失提供决策依据。
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "form",
		data() {
			return {
				status: '555s'
			}
		},
		methods: {
			showTime(id) {
				var that=this;
				if(that.status==id){
					that.status='ppp';
				}else{
					that.status = id;
					
				}
			}
		}
	}
</script>
<style scoped>
	.Ftitle {
		font-size: 20px;
		font-weight: bold;
		margin: 15px auto;
	}
	
	.xia {
		width: 30%;
		height: 1px;
		background: #707070;
		margin: 0 auto;
	}
	
	/*四个*/
	.wbody {
		/*overflow: hidden;*/
		position: relative;
		width: 40%;
		height: 220px;
		border: 1px solid #E5E5E5;
		margin: 10px auto;
		cursor: pointer;
	}
	
	.fBody {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
	}
	
	.fimg {
		width: 40px;
		height: 40px;
		margin: 40px auto;
	}
	
	.fFont {
		font-size: 17px;
		color: #666666;
	}
	
	/*统计*/
	.stat {
		width: 45%;
		height: 220px;
		margin: 10px auto;
		border: 1px solid #ddd;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
		position: relative;
	}
	
	.Timg {
		width: 100%;
		height: auto;
	}
	
	.Tcontent {
		font-size: 12px;
		margin: 10px 5px;
		color: #666666;
		text-align: left;
	}
	
	.Ttitle {
		position: absolute;
		top: 18%;
		left: 35%;
		color: white;
		z-index: 49;
	}
	
	.layer {
		width: 40%;
		z-index: 50;
		height: 220px;
		margin: 10px auto;
		cursor: pointer;
		color: white;
	}
	
	.posi1 {
		position: absolute;
		top: 0;
		left: 18px;
		background: #1EDCDC;
	}
	
	.posi2 {
		position: absolute;
		top: 0;
		left: 55%;
		background: #4FA3DA;
	}
	
	.posi3 {
		position: absolute;
		top: 50%;
		left: 18px;
		background: #E94A40;
	}
	
	.posi4 {
		position: absolute;
		top: 50%;
		left: 55%;
		background: #FED387;
	}
	
	.layImg {
		width: 50px;
		height: 50px;
		margin: 0 auto;
		margin-top: 10px;
	}
	
	.layTitle {
		margin: 8px auto;
		font-size: 15px;
		text-align: center;
	}
	
	.layContent {
		font-size: 11px;
		width: 90%;
		margin: 0px 10px;
		text-align: left;
	}
</style>