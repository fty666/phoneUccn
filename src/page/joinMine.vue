<template>
	<div>
		<div><img src="../assets/home/joinme.png" class="join"></div>
		<div class="title1">招聘动态</div>
		<div class="title2">投递方式：532182742@qq.com</div>
		<div class="title2">人力资源部：022-27419966</div>
		<div class="require" v-for="item in Info">
			<div class="titleFont">{{item.name}}</div>
			<div class="Yfont btten">
				<div>发布时间：</div>
				<div>2019-10-13</div>
			</div>
			<div class="Yfont btten">
				<div>招聘人数：</div>
				<div>{{item.num}}</div>
			</div>
			<div class="Yfont btten">
				<div>工作地点：</div>
				<div>天津市南开区白堤路</div>
			</div>
			<div>
				<el-collapse accordion v-model="activeName">
					<el-collapse-item class="fathclass"  :name="item.name">
						<template slot="title">
							<p class="titleFont">职位详情</p>
						</template>
						<div class="twoTitle">
							<p v-for="askItem in item.ask " class="fontInfo">{{askItem}}</p>
						</div>
					</el-collapse-item>
				</el-collapse>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "joinMine",
		data() {
			return {
				Info: [
					{
						name: 'PHP开发工程师',
						num: 2,
						ask: [
							'1、3年以上PHP面向对象编程开发经验，精通PHP与MySQL，熟悉至少两种框架，如ThinkPHP，laravel；',
							'2、了解W3C标准，熟练掌握CSS、XML、AJAX、jQuery、Smarty、MVC、Memcach缓存技术、svn/git，使用MongoDB，Redis优先，了解软件设计流程和软件工程规范；',
							'3、掌握Linux/Windows等操作系统Web环境配置的各种优化方案；',
							'4、熟练掌握Mysql索引优化、查询优化和存储优化、PHP缓存、静态化等技术；',
							'5、有微信开发经验，熟悉微信接口者优先；',
							'6、良好的人际关系，出色的沟通技巧，能吃苦耐劳，拥有强烈的上进心和团队创新精神，热爱PHP语言，热爱开源技术，具分享精神。',
						]
					},
					{
						name: 'iOS开发工程师',
						num: 1,
						ask: [
							'1. 三年以上iOS应用开发实战经验',
							'2. 精通Objective-C开发语言',
							'3. 熟练运用XCode开发工具',
							'4. 精通iPhone SDK开发环境及底层调用，有大型商城开发经验者优先',
							'5. 熟悉iPhone平台的无线网络应用开发，精通socket和http网络接口编程',
							'6. 熟悉Json及Xml数据结构及数据解析',
							'7. 熟悉Cocoa, SQLite',
							'8. 有App Store上架作品的开发经历'
						],
					},
					{
						name: 'Android开发工程师',
						num: 1,
						ask: [
							'1、参与业务需求设计讨论，基于Android平台进行应用程序开发;',
							'2、负责移动平台软件框架的研究，设计和实现、关键技术验证和选型等工作;',
							'3、完成Android项目设计、编码、测试和优化。',
							'4、编写相关的开发文档，如技术文档，设计文档，测试文档等。',
							'5、开发针对不同的Android操作系统版本和屏幕尺寸的应用，并完成兼容性测试。',
							'6、对所开发的APP、SDK进行版本更新及维护。',
							'7、学习和研究新的移动互联网技术以满足产品的需求。',
						],
					},
					{
						name: 'WEB前端开发工程师',
						num: 1,
						ask: [
							'1、负责公司网站、App内嵌h5页面、活动专题页、Wap应用开发;',
							'2、参与微信公众号、小程序应用开发；',
							'3、参与项目通用前端框架组件库开发。',
							'4、熟练使用Photoshop，Indesign工具。',
							'5、至少2-3年以上实际工作经验；',
							'6、精通ES6、HTML5、CSS3等技术；',
							'7、熟悉React、Vue、Eggjs、Nodejs等；',
							'8、有良好的沟通能力，关注新技术，较强的学习能力；',
							'9、有React-Native、Wexx经验者加分；',
						],
					},
					{
						name: 'UI设计',
						num: 1,
						ask: [
							'1、负责用户界面设计，根据产品原型进行具体效果图设计，视觉设计（包括主次界面风格化，版面布局细节处理，icon绘制等）',
							'2、独立完成UI相关制作，能根据产品的设计思路设计相应配套的UI。',
							'3、参与产品构思及软件界面优化，提出对产品界面规划，把握产品最终界面实现效果。',
							'4、结合用户体验，优化完善设计，制定可行的产品品质提升方案。',
							'7、熟悉常用设计工具，具备一定插画绘制能力，对后期处理及动效设计有一定了解。',
							'8、设计思路清晰，有丰富的创新思维、想象力及较强的视觉感知能力。',
							'9、具备良好的沟通协作及抗压能力。',
						],
					},
					{
						name: '渠道负责人',
						num: 1,
						ask: [
							'1、依据销售中心度工作目标和上级领导分配任务，制定本人年度工作目标和工作计划，经批准后实施。',
							'2、依据年度工作目标，以月、季、年度为单位，制定相应渠道销售计划，并进行具体落实。',
							'3、依据公司渠道代理政策，具体落实对渠道商的服务培养、激励等具体工作，对渠道商工作开展提供支持和指导。',
							'4、向渠道商进行公司渠道代理政策的宣传和解释工作，监督并规范渠道商行为。',
							'5、定期对渠道商进行相关回访工作，采集渠道商的反馈意见，提交渠道部大区经理。',
							'6、授理渠道伙伴的意见建议反馈和投诉。',
							'7、协调公司资源，协助各地渠道商组织相关市场活动。',
							'8、手机整理渠道维护、培养、激励工作过程中渠道商反馈的各类问题并记录，定期汇总并提交渠道大区总监。',
							'9、对渠道伙伴的运营情况等方面进行调研，参与制定相应的扶植培养计划。',
							'10、接受领导安培的临时性工作。'
						],
					},
					{
						name: '网络维护',
						num: 1,
						ask: [
							'1、利用网管平台实时监控网络设备、服务器等各种设备。',
							'2、使用网管工具实施日常网络与系统监视工作。',
							'3、配合优化网络系统，规划调整设备配置等。',
							'4、提供系统资源利用信息，供系统管理员和用户参考并以此进行调整。',
							'5、预防网络故障，并制定网络受到攻击后的紧急处理措施。',
							'6、完成领导交给的其他各项工作。',
						],
					},
					{
						name: '运营经理',
						num: 2,
						ask: [
							'1、制定新媒体渠道内容的整体运营规划。',
							'2、负责日常运营、数据记录和分析，保证粉丝数量及活跃度。',
							'3、负责日常活动内容策划编辑，参与完成项目相关传播工作。',
							'4、研究网络热点话题。',
							'5、跟踪活动执行效果，总结活动总结报告。',
							'6、负责媒体资源拓展、用户拓展运营、渠道运营及管理。',
							'7、根据公司业务发展计划和安排，积极开展市场调研，积累商家资源，搜索目标客户信息，不断拓展新的商家，不断的优化和升级商家资源。',
							'8、负责商户引进、洽谈、签订合同等一系列流程。',
							'9、协调公司的运营以及营销活动安排，对所负责的商家进行有效的管理。',
							'10、协调、处理商家关系，维护并及时更新商家资料。',
							'11、定期向招商领导汇报工作情况和商家跟踪情况，定期进行工作总结，提高工作计划性和有效性。',
							'12、要求具备较强的组织协调及沟通交际能力，具有很强的执行力以及创新、学习能力。',
						],
					},
					{
						name: '销售经理',
						num: 2,
						ask: [
							'1、与团队销售人员合作完成各项销售指标；',
							'2、开发新客户，拓展与老客户的业务，建立和维护客户档案。',
							'3、协调公司内部资源，促进销售进度，提高客户满意度。',
							'4、收集和分析客户信息及市场数据，定期反馈工作总结。',
							'5、完成领导交办的其他工作。'
						],
					},
				],
				activeName:'0'
			}
		}
	}
</script>

<style scoped>
	.join {
		width: 100%;
		height: auto;
	}
	
	.title1 {
		font-size: 20px;
		font-weight: bold;
		text-align: center;
		margin: 20px auto;
	}
	
	.title2 {
		font-size: 17px;
		color: #707070;
		margin-left: 30px;
		text-align: left;
	}
	
	.require {
		width: 85%;
		margin: 15px auto;
		border: 1px solid #F67524;
		border-radius: 5px;
	}
	
	/*.titleFont {*/
		/*font-size: 17px;*/
		/*font-weight: bold;*/
		/*text-align: left;*/
		/*margin: 5px 10px;*/
	/*}*/
	
	.Yfont {
		font-size: 15px;
		text-align: left;
		margin: 5px 12px;
		color: #666666;
	}
	
	.titleFont {
		font-size: 15px;
		font-weight: bold;
		text-align: left;
		margin: 5px 12px;
		color: #666666;
	}
	
	.el-collapse-item__header {
		border-bottom: 0px solid #F67524;
	}
	
	.fontInfo {
		text-align: left;
		font-size: 12px;
		margin: 0 12px;
	}
	.el-collapse{
		border-top: 0px solid white;
	}
</style>