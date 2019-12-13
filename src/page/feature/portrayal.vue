<template>
	<div>
		<div><img src="../../assets/underline/special5.jpg" class="Bimg" style="width: 100%"></div>
		<div class="pTitle">用户基本信息及标签分组</div>
		<div class="xia"></div>
		<div><img src="../../assets/portrait/basic.png" class="Bimg"></div>
		<div style="background: #F6F6F6">
			<div class="pTitle" style="padding-top: 20px">用户设备网络</div>
			<div class="xia"></div>
			<div><img src="../../assets/portrait/network.png" class="Bimg"></div>
		</div>
		<div class="pTitle" style="padding-top: 10px">用户等级</div>
		<div class="xia"></div>
		<div><img src="../../assets/portrait/usergrade.png" class="Bimg"></div>
		<div style="background: #F6F6F6;padding-bottom: 20px">
			<div class="pTitle" style="padding-top: 20px">用户消费偏好</div>
			<div class="xia"></div>
			<div><img src="../../assets/portrait/user_hobby.png" class="Bimg2"></div>
		</div>
		<div>
			<div class="pTitle" style="margin: 0 auto;padding-top: 20px;padding-bottom: 0;">用户行为数据</div>
			<div class="xia" style="margin-top: 15px"></div>
			<swiper :options="swiperOption" ref="mySwiper" class="swiper">
				<swiper-slide v-for="(item,index) in behavior" :key="index" class="swiper_item">
					<div><img :src="item.img" class="Bimg"></div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination" style="bottom: 0px"></div>
			</swiper>
		</div>
		<div style="background: #F6F6F6;padding-bottom: 20px">
			<div class="pTitle" style="padding-top: 20px">用户消费能力</div>
			<div class="xia"></div>
			<div style="background: white"><img src="../../assets/portrait/user_ability.png" class="Bimg2"></div>
		</div>
		<div>
			<div class="pTitle" style="padding-top: 10px">二次营销增加复购率</div>
			<div class="xia"></div>
			<div class="flexs">
				<div :class="['selec1',selecId==1?'selecBj':'']" @click="selected(1)">营销方式</div>
				<div :class="['selec2',selecId==2?'selecBj':'']" @click="selected(2)">营销事件</div>
			</div>
			<div v-if="selecId==1" style="width: 90%;margin-left: 4%;margin-top: 12px">
				<div class="warp">
					<div class="two" v-for="item in repeatData">
						<div><img :src="item.img" class="twoImg"></div>
						<div class="twoTitle">{{item.title}}</div>
					</div>
				</div>
			</div>
			<div v-if="selecId==2" style="width: 90%;margin-left: 4%;margin-top: 12px">
				<div class="warp">
					<div class="two" v-for="item in repeatData2">
						<div><img :src="item.img" class="twoImg"></div>
						<div class="twoTitle">{{item.title}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "portrayal",
		data() {
			return {
				selecId: 1,
				repeatData: [
					{
						img: require('../../assets/portrait/repeat1.png'),
						title: '优惠券'
					},
					{
						img: require('../../assets/portrait/repeat2.png'),
						title: '短信'
					},
					{
						img: require('../../assets/portrait/repeat3.png'),
						title: '微信图文回复'
					},
					{
						img: require('../../assets/portrait/repeat4.png'),
						title: '电话'
					},
					{
						img: require('../../assets/portrait/repeat5.png'),
						title: '邮件'
					},
					{
						img: require('../../assets/portrait/repeat6.png'),
						title: '模板消息'
					}
				],
				repeatData2: [
					{
						img: require('../../assets/portrait/repeat7.png'),
						title: '生日提醒'
					},
					{
						img: require('../../assets/portrait/repeat8.png'),
						title: '个性化营销'
					},
					{
						img: require('../../assets/portrait/repeat9.png'),
						title: '消费提醒'
					},
					{
						img: require('../../assets/portrait/repeat10.png'),
						title: '跟踪提醒'
					},
					{
						img: require('../../assets/portrait/repeat11.png'),
						title: '新品营销'
					},
					{
						img: require('../../assets/portrait/repeat12.png'),
						title: '活动促销'
					}
				],
				behavior: [
					{img: require('../../assets/portrait/userclass.png')},
					{img: require('../../assets/portrait/userTime.png')},
					{img: require('../../assets/portrait/userPay.png')},
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
				this.selecId = id;
			}
		}
	}
</script>

<style scoped>
	.Bimg{
		width: 70%;
		height: auto;
		height: auto;
	}
	.pTitle {
		font-size: 20px;
		font-weight: bold;
		margin: 20px auto;
	}
	
	.xia {
		width: 30%;
		height: 1px;
		margin: 0 auto;
		background: #707070;
		margin-bottom: 20px;
	}
	
	.Bimg2 {
		width: 95%;
		height: auto;
		margin: 0 auto;
	}
	
	.selec1 {
		width: 100px;
		height: 40px;
		background: #FDDFCC;
		padding-top: 10px;
		font-size: 13px;
		margin-left: 20%;
		color: #666666;
		cursor: pointer;
		border-radius: 8px;
		margin-bottom: 20px;
	}
	
	.selec2 {
		width: 100px;
		height: 40px;
		background: #FDDFCC;
		padding-top: 10px;
		font-size: 13px;
		margin-left: 20px;
		color: #666666;
		cursor: pointer;
		border-radius: 8px;
		margin-bottom: 20px;
	}
	
	.selecBj {
		background: #F67524;
		color: white;
	}
	
	.two {
		width: 30%;
		margin-top: 10px;
	}
	
	.twoImg {
		width: 45px;
		height: 45px;
	}
	
	.twoTitle {
		font-size: 12px;
		margin-top: 10px;
	}
</style>