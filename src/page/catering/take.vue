<template>
	<div>
		<div class="Zbody" style="position: relative">
			<div ><img src="../../assets/restaurant/take2.png" class="Zimg"></div>
			<div class="Ztitle">对接第三方平台</div>
			<div class="Zcontent">支持对接美团、饿了么、口碑等主流外卖平台，以及无缝对接自主运营的OMO新型平台——无界优品商城，各渠道订单汇总到服务员APP端做统一处理，然后再同步到后厨同意备菜、制作、摆盘打包，杜绝人工录单、递单出错，大大缩短出菜时间。打造线上加线下全渠道经营模式，全面提升餐厅的工作效率和服务质量，提升消费者体验。</div>
		</div>
		<div class="Zbody" style="position: relative">
			<div style="position: relative"><img src="../../assets/restaurant/take3.png" class="Zimg"></div>
			<div class="Ztitle">线上代运营服务</div>
			<div class="Zcontent">专业化运营团队，精细化运营，提供基础运营、活动运营、平台管理、数据分析等各方面代运营服务，协助打造“精细化、流程化、标准化、规模化经营”的智慧餐厅。
			</div>
		</div>
		<div>
			<div class="Ztitle2">外卖流程图</div>
			<div class="xia"></div>
			<div>
				<img src="../../assets/restaurant/take4.png" class="Zimg">
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "take"
	}
</script>

<style scoped>
	.Zbody {
		width: 90%;
		height: auto;
		margin: 20px auto;
		border: 1px solid #E5E5E5;
		border-radius: 5px;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
		background: #F6F6F6;
	}
	
	.Zimg {
		width: 90%;
		height: auto;
	}
	
	.Ztitle {
		font-size: 16px;
		font-weight: bold;
		position: absolute;
		color: white;
		top:30%;
		left: 35%;
		z-index: 40;
	}
	.Ztitle2 {
		font-size: 20px;
		font-weight: bold;
	}
	.xia {
		width: 30%;
		height: 1px;
		background:#707070;
		margin: 10px auto;
	}
	
	.Zcontent {
		width: 95%;
		height: auto;
		text-align: left;
		margin: 5px 10px;
		padding-bottom: 20px;
	}
</style>