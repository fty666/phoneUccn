<template>
	<div class="footer" style="margin-top: 30px">
		<div class="titles">联系我们</div>
		<div class="warp">
			<div style="width: 49%;padding-left:6px">
				<div class="name" style="font-size: 14px">无界智慧餐饮系统</div>
				<div class="name" style="line-height: 22px">
					<div>24小时服务专线</div>
					<div style="line-height: 0px;line-height: 10px">022-27419966</div>
				</div>
				<div class="name" style="letter-spacing: 2px;line-height: 47px">为梦想而来 为创业而生</div>
			</div>
			<div class="xia"></div>
			<div class="flexs warp" style="width: 50%">
				<div class="logo" style="width: 45%">
					<div><img src="../assets/home/gzh.png" style="width: 60px;height: 60px"></div>
					<div class="logoName">扫码关注</div>
					<div class="logoName">无界掌柜公众号</div>
				</div>
				<div class="logo">
					<a href="http://www.wujiemall.com/" target="_blank">
						<div style="margin-left: 10px"><img src="../assets/home/gzh2.png"
						                                    style="width: 60px;height: 60px"></div>
					</a>
					<a href="http://www.wujiemall.com/" target="_blank">
						<div class="logoName" style="margin-left: 10px">点击下载</div>
						<div class="logoName" style="margin-left: 10px">无界智慧系列APP</div>
					</a>
				</div>
			</div>
		</div>
		<div class="xia2"></div>
		<div class="bottom">©2014-2019沃天科技（天津）有限公司 版权所有</div>
		<div class="bottom">ICP证：津ICP备12005490号</div>
	</div>
</template>

<script>
	export default {
		name: "commonFooter"
	}
</script>

<style scoped>
	.footer {
		width: 100%;
		height: 220px;
		background: #181921;
	}
	
	.titles {
		font-size: 20px;
		color: white;
		line-height: 50px;
		text-align: center;
	}
	
	.name {
		font-size: 11px;
		color: white;
		line-height: 30px;
		text-align: left;
		margin-left: 10px;
	}
	
	.xia {
		width: 1px;
		height: 80px;
		background: white;
	}
	
	.xia2 {
		width: 92%;
		height: 1px;
		background: white;
		margin: 5px auto;
	}
	
	.logo {
		width: 50%;
		text-align: center;
	}
	
	.logo img {
		width: 70px;
		height: 70px;
	}
	
	.logoName {
		color: white;
		font-size: 10px;
	}
	
	.bottom {
		text-align: center;
		color: white;
		font-size: 14px;
	}
	
	.wimg {
		width: 30px;
		height: 30px;
	}
</style>