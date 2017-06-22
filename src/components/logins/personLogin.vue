<template lang="html">
  <div>
    <div class="content">
			<div class="login-header">
				<router-link to="/" class="fl"><img src="../../assets/images/logo.jpg" alt="1站路"></router-link>
				<p class="login-title fl">{{loginTitle}}</p>
        <p class="haveAccount fr" v-if="topLoginHide">已有账号,请 <a href="javascript:void(0);" @click="loginShow">登录</a></p>
			</div>
		</div>
		<!--正文-->
    <!-- 登录页 -->
		<div class="login-banner" v-if="loginBol">
			<div class="login-banner-in">
				<div class="login-box fr">
					<p>账户登录</p>
					<div class="input-box">
						<div class="input-box1">
							<i class="icon icon1"></i><input type="text" placeholder="用户名/手机号">
						</div>
						<div class="input-box1">
							<i class="icon icon2"></i><input type="text" placeholder="密码">
						</div>
					</div>
					<div class="forget"><a href="#" class="fr">忘记密码?</a></div>
					<div class="login-btn"><a href="#">登&nbsp;&nbsp;&nbsp;录</a></div>
					<div class="register-link fr">
						<!--跳转到注册页面-->
						<a href="javascript:void(0);" @click="regShow"><i class="icon icon3"></i><span>立即注册</span></a>
					</div>
				</div>
			</div>
		</div>
    <!-- 注册页 -->
    <div class="register container2" v-else>
        <div class="reg-left fl">
            <div class="reg-inbox"><span>&nbsp;手&nbsp;&nbsp;&nbsp;机&nbsp;&nbsp;&nbsp;号</span><input type="text" placeholder="请输入您的手机号"></div>
            <div class="reg-inbox"><span>&nbsp;设&nbsp;置&nbsp;密&nbsp;码</span><input type="text" placeholder="请输入密码"></div>
            <div class="reg-inbox"><span>&nbsp;确&nbsp;认&nbsp;密&nbsp;码</span><input type="text" placeholder="请确认密码"></div>
            <div class="reg-inbox"><span>&nbsp;验&nbsp;&nbsp;&nbsp;证&nbsp;&nbsp;&nbsp;码</span><input type="text" placeholder="请输入验证码"><span class="pic-yzm"><img
                    src="../../assets/images/reg-yzm.png" alt=""></span></div>
            <div class="reg-inbox phone-yzm"><span>手机验证码</span><input type="text" placeholder="请输入手机验证码"><span class="get-yzm">获取验证码</span></div>
            <div class="read">
                <input type="checkbox" checked="checked"><span>我已阅读并同意<a href="#">《用户注册协议》</a></span>
            </div>
            <div class="reg-btn"><a href="#">立即注册</a></div>
        </div>
        <div class="reg-right fl">
            <img src="../../assets/images/reg-img.png" alt="">
        </div>
    </div>

		<!-- 底部信息 -->
		<div class="login-bot">
			<div class="bot-link container">
				<ul>
					<li><a href="#">了解我们</a></li>
					<li><a href="#">新闻中心</a></li>
					<li><a href="#">联系我们</a></li>
					<li><a href="#">加入我们</a></li>
					<li><a href="#">服务指南</a></li>
					<li><a href="#">支付说明</a></li>
					<li><a href="#">开具发票</a></li>
					<li><a href="#">商务合作</a></li>
					<li><a href="#">渠道加盟</a></li>
				</ul>
			</div>
			<div class="bot-line"></div>
			<div class="bot-copyright">
					版权所有：城云科技（中国）有限公司 &amp; 杭州云际视界科技有限公司&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					备案号：浙ICP备15004644号-2
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;咨询热线：400-818-3885
			</div>
		</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loginTitle:"欢迎登录",
      loginBol:true,
      topLoginHide:false
    }
  },
  methods:{
    regShow(){
      this.loginBol=false;
      this.loginTitle="欢迎注册";
      this.topLoginHide=true;
      // Chrome
      document.body.scrollTop = 0;
      // Firefox
      document.documentElement.scrollTop = 0;
      // Safari
      window.pageYOffset = 0;
    },
    loginShow(){
      this.loginBol=true;
      this.loginTitle="欢迎登录";
      this.topLoginHide=false;
    }
  }
}
</script>

<style lang="less">
 @import "personLogin.less";
</style>
