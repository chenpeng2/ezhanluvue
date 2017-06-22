<template lang="html">
  <div>
    <div class="top-nav">
        <div class="container">
            <div class="welcome fl">
                欢迎您来到1站路&nbsp;&nbsp;
            </div>
            <div class="login fl">
                <a href="#">请登录</a>&nbsp;&nbsp;&nbsp;<a href="#">免费注册</a>
            </div>
            <div class="top-menu fr">
                <router-link to="/personLogin">我的订单</router-link>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <a href="#">个人订单</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                <a href="#">服务商入口</a>
            </div>
        </div>
    </div>
    <div class="header container">
        <div class="logo">
            <img  src="../../assets/images/logo.jpg" alt="1站路优选商城">
        </div>
        <div class="slogn"></div>
        <div class="areaswitch">
            <div class="areachoose">
                <span>杭州</span>
                <span class="fastchoose">[切换城市]</span>
            </div>
        </div>
        <div class="searchBox">
          <div class="downList fl">服务产品</div>
          <input type="text" value="" class="fl">
          <a href="#" class="searchBtn fl"></a>
        </div>
        <div class="post">发布需求</div>
        <div class="topCode">
          <img src="../../assets/images/code.png" alt="">
        </div>
        <div class="topTel fr">
          <img src="../../assets/images/topTel.png" alt="">
          4006-183-001
        </div>
    </div>
    <div class="nav">
  		<div class="container">
  			<div class="categories fl">
  				全部服务分类
  			</div>
  			<div class="nav-list fl">
  				<ul>
  					<li>
              <router-link to='/'>首页</router-link>
  					</li>
            <li>
  						<router-link to='/'>园区在线</router-link>
              <img src="../../assets/images/hot.gif" alt="">
  					</li>
  					<li>
  						<router-link to='/'>市场活动</router-link>
              <img src="../../assets/images/hot.gif" alt="">
  					</li>
  					<li>
  						<router-link to='/'>企业百科</router-link>
  					</li>
  					<li>
  						<router-link to='/'>名家专栏</router-link>
  					</li>
  					<li>
  						<router-link to='/'>服务集市</router-link>
              <img src="../../assets/images/hot.gif" alt="">
  					</li>
  				</ul>
  			</div>
  		</div>
  	</div>
    <!--选项分栏-->
  	<div class="side-list container" id="menu">
  		<div class="sidebar">
  			<ul class="sidemenu fl">
  				<li v-for="(item,index) in menus" @mouseenter="menuShow(index)" @mouseleave="menuHide()">
            <div><img :src=item.icon>{{item.name}} <i class="el-icon-arrow-right"></i></div>
          </li>
  			</ul>
  			<div class="sidesub fl">
  				<div class="sidelist" v-if="shows[0]">
  					<div class="sidelist-tit">
  						<i class="icon icon-side-tit01"></i>我要开公司
  					</div>
  					<div class="sidelist-list">
  						<a href="#">有限公司注册</a>
  						<a href="#">注册地址</a>
  					</div>
  					<div class="sidelist-tit">
  						<i class="icon icon-side-tit02"></i>我要公司变更
  					</div>
  					<div class="sidelist-list">
  						<a href="#">名称变更</a>
  						<a href="#">股权变更</a>
  						<a href="#">经营范围变更</a>
  						<a href="#">法人变更</a>
  						<a href="#">地址变更</a>
  					</div>
  				</div>
  				<div class="sidelist" v-else-if="shows[1]">
  					<div class="sidelist-tit">
  						<i class="icon icon-side-tit03"></i>我要代理记账
  					</div>
  					<div class="sidelist-list">
  						<a href="#">小规模记账（年付）</a>
  						<a href="#">小规模记账（季度付）</a>
  						<a href="#">一般纳税人记账（年付）</a>
  						<a href="#">一般纳税人记账（半年付）</a>
  					</div>
  				</div>
  				<div class="sidelist" v-else-if="shows[2]">
  					<div class="sidelist-tit">
  						<i class="icon icon-side-tit04"></i>我要注册商标
  					</div>
  					<div class="sidelist-list">
  						<a href="#">国内普通商标注册</a>
  						<a href="#">国内加急商标注册</a>
  					</div>
  					<div class="sidelist-tit">
  						<i class="icon icon-side-tit05"></i>我要办理著作权
  					</div>
  					<div class="sidelist-list">
  						<a href="#">软件著作权</a>
  						<a href="#">美术著作权</a>
  					</div>
  				</div>
  				<div class="sidelist" v-else-if="shows[3]">
  					<div class="sidelist-tit">
  						<i class="icon icon-side-tit06"></i>我要办社保
  					</div>
  					<div class="sidelist-list">
  						<a href="#">标准型（五险一金）</a>
  						<a href="#">升级型（七险一金）</a>
  						<a href="#">个人自由保</a>
  					</div>
  				</div>
  				<div class="sidelist" v-else-if="shows[4]">
  					<div class="sidelist-tit">
  						<i class="icon icon-side-tit07"></i>我要请法律顾问
  					</div>
  					<div class="sidelist-list">
  						<a href="#">法律顾问（标准版）</a>
  						<a href="#">法律顾问（商务版）</a>
  					</div>
  					<div class="sidelist-tit">
  						<i class="icon icon-side-tit08"></i>我要咨询律师
  					</div>
  					<div class="sidelist-list">
  						<a href="#">电话律师咨询</a>
  						<a href="#">面对面律师咨询</a>
  					</div>
  					<div class="sidelist-tit">
  						<i class="icon icon-side-tit09"></i>我要合同协议
  					</div>
  					<div class="sidelist-list">
  						<a href="#">合同及协议审核</a>
  						<a href="#">商务合同代写</a>
  						<a href="#">劳动合同代写</a>
  						<a href="#">股权协议代写</a>
  						<a href="#">保密和竞业限制协议代写</a>
  					</div>
  					<div class="sidelist-tit">
  						<i class="icon icon-side-tit10"></i>我要发起维权
  					</div>
  					<div class="sidelist-list">
  						<a href="#">律师函</a>
  						<a href="#">起诉状</a>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      menus:[
        {icon:require('../../assets/images/menuIcon1.png'),name:'工商服务'},
        {icon:require('../../assets/images/menuIcon2.png'),name:'财税服务'},
        {icon:require('../../assets/images/menuIcon3.png'),name:'社保服务'},
        {icon:require('../../assets/images/menuIcon4.png'),name:'知识产权'},
        {icon:require('../../assets/images/menuIcon5.png'),name:'法律服务'}
      ],
      shows:[false,false,false,false,false]
    }
  },
  methods:{
    menuShow:function(index){
      var copyArr=this.shows.slice(0);
      for(let i=0;i<5;i++){
        copyArr[i]=false;
      }
      copyArr[index]=true;
      this.shows=copyArr;
    },
    menuHide:function(){
      var copyArr=this.shows.slice(0);
      for(let i=0;i<5;i++){
        copyArr[i]=false;
      }
      this.shows=copyArr;
    }
  }
}
</script>

<style lang="less">
  @import "headone.less";
</style>
