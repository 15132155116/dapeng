<template>
	<div>
		<h3>欢迎登录</h3>
		<form action="">
			手机号：<input type="text" v-model="pnumber" />
			<span style="color: red;">{{ptext}}</span>
			<br>
			
			密码：<input type="password" v-model="passw">
			<span style="color: red;">{{pwtext}}</span>
			<br>
			
			<button type="button" @click="userlogin">点击登录</button>
		</form>
	</div>
</template>

<script>
	export default {
		data:function(){
			return {
				pnumber:"",
				passw:"",
				ptext:"请输入11位手机号",
				pwtext:"请输入6~16位包含数字/字母/下划线/特殊字符的密码"
			}
		},
		watch:{
			pnumber(){
				let reg=/^1[3-9]\d{9}$/;
				if(reg.test(this.pnumber)){
					this.ptext=""
				}
			},
			passw:function(){
				let reg=/^(?=.*\d+)(?=.*[A-z]+)(?=.*[_]+)(?=.*\W+).{6,16}$/g;
				if(reg.test(this.passw)){
					this.pwtext=""
				}
			}
		},
		methods:{
            userlogin(){//发起网络请求
				if(this.ptext===""&&this.pwtext===""){
					this.$http.post("/login",{pnumber:this.pnumber,passw:this.passw})
					.then((res)=>{
                        console.log(res.data)
                        let list = res.data;
						if(res.data.status==0){
							this.nologin=false
                            sessionStorage.setItem("nologin",1)
                            // console.log(this.pnumber);
                            document.cookie = "phonenum="+this.pnumber;
							this.$router.push("/my")
						}
                        alert(res.data.msg)
					})
				}
			},
		}
	}
	
</script>

<style>
</style>
