<template>
	<div>
		<div class="about" style="margin-top: 15px;margin-bottom: 15px"> 填写申请加盟信息</div>
		<div style="width: 95%;text-align: left">
			<!--<Cascader :data="merchant_city_id" size="large" @on-change="get_street"></Cascader>-->
			<el-form ref="form" :model="form" label-width="10px">
				<el-form-item>
					<el-cascader
							v-model="citys"
							:options="merchant_city_id" style="width: 100%" placeholder="请选择城市地址"></el-cascader>
				</el-form-item>
				<el-form-item>
					<el-input v-model="address" placeholder="具体联系地址"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="name" placeholder="您的姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input v-model="mobile" placeholder="联系电话"></el-input>
				</el-form-item>
				<el-form-item>
					<el-input type="textarea" v-model="message" placeholder="留言信息"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button @click="onSubmit"
					           style="width: 100%;background: #F67524;color: white;border: 1px solid white">
						点击提交信息
					</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	
	export default {
		data() {
			return {
				//	表单
				form: {
					name: '',
				},
				model: "",
				merchant_city_id: [],
				citys: "",
				address: '',
				name: '',
				mobile: '',
				message: '',
			}
		},
		mounted() {
			this.getCity();
		},
		methods: {
			//提交信息
			onSubmit() {
				var citys = this.citys;
				var address = this.address;
				var name = this.name;
				var mobile = this.mobile;
				var messages = this.message;
				var reg = this.common.reg;
				if (citys == '' || address == '' || name == '' || mobile == '' || messages == '') {
					this.$message.error('请填写正确的加盟信息');
					return false;
				}
				if (!reg.test(mobile)) {
					this.$message.error('请填写正确的手机号信息');
					return false;
				}
				var data = {
					name: name,
					province_id: citys[0],
					city_id: citys[1],
					area_id: citys[2],
					address: address,
					phone: mobile,
					message: messages
				}
				var url = this.dev.API_INFO + '/api/joinMerchant';
				var that = this;
				axios.post(url, data)
						.then(function (response) {
							that.citys = '';
							that.address = '';
							that.name = '';
							that.mobile = '';
							that.message = '';
							that.$message({
								showClose: true,
								message: '申请加盟成功，请等待联系',
								type: 'warning'
							});
						})
						.catch(function (error) {
							that.$message.error('提交失败，请稍后重试')
						});
			},
			//获取地址
			getCity() {
				var that = this;
				var $url = that.dev.API_ROOT + '/Api/Address/allAddress';
				axios.post($url, {
							region_id: ' ',
						})
						.then(function (response) {
							that.merchant_city_id = JSON.parse(JSON.stringify(response.data.data));
						})
						.catch(function (error) {
							console.log(error);
						});
			},
		}
	}
</script>

<style scoped>
	/*关于我们*/
	.about {
		text-align: center;
		font-size: 20px;
		font-weight: bold;
	}
	
	.minefont {
		width: 20%;
		height: 25px;
		border: 1px solid #999999;
		border-radius: 5px;
		font-size: 11px;
		line-height: 25px;
		cursor: pointer;
	}
	
	.han {
		font-size: 16px;
		text-align: center;
		font-weight: bold;
		margin-bottom: 20px;
	}
	
	.bjfont {
		background: #F67524;
		color: white;
		border: 1px solid white;
	}
	
	.addImg {
		width: 95%;
		height: auto;
		margin: 15px auto;
	}
	
	.intro {
		font-size: 12px;
		text-align: left;
		text-indent: 2em;
		margin: 0px 10px;
	}
</style>