<!--
 * @Github: 我没有
 * @Author: 李鹏帅
 * @如果有bug，那肯定不是我的锅，嘤嘤嘤
 * @since: 2019-11-21 09:50:23
 * @lastTime: 2019-11-21 20:00:09
 * @LastAuthor: Do not edit
 * @message: 登陆页面 暂为添加注册
 -->
<template>
	<div class="con">
		<div class="title">学生寝室信息管理系统</div>
		<div class="form">
			<el-input v-model="ress.user" placeholder="用户名"></el-input>
			<el-input type="password" v-model="ress.password" placeholder="密码"></el-input>
			<el-button type="success" @click="goto()">登陆</el-button>
			<el-button type="info" @click="register()">注册</el-button>
		</div>
	</div>
</template>

<script>
import axios from "axios";
const defaultRes = {
	user: "",
	password: ""
};
export default {
	data() {
		return {
			ress: { ...defaultRes }
		};
	},
	methods: {
		register() {
			var self = this;
			axios
				.get(
					"/api/register?user=" +
						self.ress.user +
						"&password=" +
						self.ress.password
				)
				.then(res => {
					if (res.data.code === 200) {
						if (res.data.result == 1) {
							alert("注册成功");
						} else {
							alert("用户名已存在");
						}
					}
				});
		},
		goto() {
			var self = this;
			axios
				.get(
					"/api/findUserById?user=" +
						self.ress.user +
						"&password=" +
						self.ress.password
				)
				.then(res => {
					if (res.data.code === 200) {
						if (res.data.result == 1) {
							this.$store.commit("changeFlag");
							this.$router.push("/student");
						} else if (res.data.result == 0) {
							alert("用户名或密码错误");
						} else {
							alert("用户名不存在");
						}
					}
				});
			// alert(this.pw);
		}
	}
};
</script>

<style lang="scss" scoped>
.con {
	padding: 10px;
	background: #409eff;
	width: 400px;
	margin: 0 auto;
	margin-top: 200px;
}
.title {
	margin-top: 10px;
	font-family: "Hiragino Sans GB";
	font-size: 28px;
	color: white;
}
.form {
	margin: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 300px;
	.el-button,
	.el-input {
		width: calc(100% - 40px);
	}
}
</style>


