<template>
	<div>
		<div>
			<div>
				<img src="../../assets/restaurant/zhinengyugu.png" class="Pimg">
			</div>
			<div>
				<p class="Dtitle">智能备料预估</p>
				<p class="Dfont" style="padding-bottom: 30px">无界智能备料预估系统可根据系统记录的日、周、月、季、年各个时段营业额、客流量、各菜品原料消耗量等各类数据的变动趋势，进行智能化预估备料，并提供精准订货建议，在保证各门店原料备货充足的前提下，尽可能减少库存数量，最大限度降低库存成本，提升资金周转效率。另外，还能保障产品原料的新鲜度，减少因废弃过期变质原料导致的成本损耗。</p>
			</div>
		</div>
		<div style="background: #f6f6f6;">
			<div><img src="../../assets/restaurant/foodTime.png" class="Pimg"></div>
			<p class="Dtitle">上菜时间预估</p>
			<div class="Dfont" style="padding-bottom: 20px">
				<p>
					系统会自动采集和记录各个菜品在不同季节、不同时段从下单到上桌各个环节的消耗时间和操作人，具体包括备菜、制作、摆盘、传菜等环节并通过大数据分析处理技术预估出上菜总耗时供顾客参考，并支持顾客实时查看跟踪上菜进度。同时，系统会生成各道菜品各环节、各操作人的耗时情况报表，为餐厅管理者优化上菜流程、节省上菜时间、考核员工效能提供决策依据。</p>
			</div>
		</div>
		<div>
			<div>
				<img src="../../assets/restaurant/keliulian.png" class="Pimg">
			</div>
			<div>
				<p class="Dtitle">客流量预估</p>
				<p class="Dfont" style="padding-bottom: 30px">
					系统自动时时记录和存储餐厅的客流量数据，并通过科学的大数据算法，精准预估时、日、周、月、季、年各个时段的客流量变化数据，为管理者提前制定有效预案，采取各种措施“削峰填谷”，分流客流量，缩短顾客等候时间，提升用户体验提供坚实的科学决策依据。</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "business"
	}
</script>

<style scoped>
	.Pimg {
		width: 66%;
		height: auto;
		margin-top: 40px
	}
	
	.Dtitle {
		/*font-weight: bold;*/
		text-align: center;
		margin: 20px auto;
		font-size: 20px
	}
	
	.Dfont {
		font-size: 12px;
		color: #2c3e50;
		width: 90%;
		margin: 0 0 20px 20px;
		text-align: left;
		text-indent: 2em;
	}
</style>