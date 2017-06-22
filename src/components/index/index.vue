<template lang="html">
  <div>
    <header-one></header-one>
    <div class="indexBanner">
      <el-carousel trigger="click" :interval="5000">
        <el-carousel-item v-for="item in 4" :key="item">
          <a href="http://www.baidu.com/"></a>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container indexBox1">
      <div class="banner2 fl">
        <el-carousel trigger="click" :autoplay=false >
          <el-carousel-item v-for="item in banner2Items" :key="item">
            <a :href=item.net>
              <img :src=item.img alt="">
              <p>{{item.font}}</p>
            </a>
          </el-carousel-item>
          <ul class="el-carousel__indicators other-dot">
            <li class="el-carousel__indicator" v-for="item in banner2Items">
              <button class="el-carousel__button">
                <img :src=item.img alt="">
              </button>
            </li>
          </ul>
        </el-carousel>
      </div>
      <div class="news fl">
        <ul>
          <a href="#">
            <li v-for="list in newsList">
              <p class="tit"><a>{{list.tit}}</a></p>
              <p class="txt">{{list.txt}}</p>
            </li>
          </a>
        </ul>
      </div>
      <div class="searchTool fr">
        <ul>
          <a href="#">
            <li>
              <img src="../../assets/images/searchTool1.png" alt="">
              <p>商标查询</p>
            </li>
          </a>
          <a href="#">
            <li>
              <img src="../../assets/images/searchTool2.png" alt="">
              <p>公司查询</p>
            </li>
          </a>
          <a href="#">
            <li>
              <img src="../../assets/images/searchTool3.png" alt="">
              <p>发票查询</p>
            </li>
          </a>
          <a href="#">
            <li>
              <img src="../../assets/images/searchTool4.png" alt="">
              <p>发票查询</p>
            </li>
          </a>
          <a href="#">
            <li>
              <img src="../../assets/images/searchTool5.png" alt="">
              <p>企业信用</p>
            </li>
          </a>
          <a href="#">
            <li>
              <img src="../../assets/images/searchTool6.png" alt="">
              <p>纳税状态</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
    <!-- 优秀服务机构 -->
    <div class="indexBox2 container">
      <div class="servers fl">
        <div class="title">
          <span class="big fl">优秀服务机构</span>
          <span class="small fr">打造信誉机构 树立行业典范</span>
        </div>
        <table>
          <tr>
            <td><a href="#"></a><img src="../../assets/images/server1.png" alt=""></td>
            <td><a href="#"></a><img src="../../assets/images/server2.png" alt=""></td>
            <td><a href="#"></a><img src="../../assets/images/server3.png" alt=""></td>
          </tr>
          <tr>
            <td><a href="#"></a><img src="../../assets/images/server4.png" alt=""></td>
            <td><a href="#"></a><img src="../../assets/images/server5.png" alt=""></td>
            <td><a href="#"></a><img src="../../assets/images/server6.png" alt=""></td>
          </tr>
        </table>
      </div>
      <div class="newsTab fl">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="新闻资讯" name="first">
            <ul>
              <li v-for="news in newsList2">
                <a href="#" class="fl">{{news.tit}}</a>
                <span class="fr">{{news.time}}</span>
              </li>
            </ul>
          </el-tab-pane>
          <el-tab-pane label="企业百科" name="second">
            <ul>
              <li v-for="baike in baikeList">
                <a href="#" class="fl">{{baike.tit}}</a>
                <span class="fr">{{baike.time}}</span>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="joinUs fr"></div>
    </div>
    <!-- 创办公司 -->
    <div class="box buildCompany container">
      <table>
        <tr>
          <td rowspan="2" style="font-size:0;width:290px;"><img v-lazy="buildImg" alt=""></td>
          <td colspan="2" class="td t1">
            <a href="#"></a>
            <div class="font">
              <p class="tit">公司注册</p>
              <p class="price"><span>￥588</span>.00</p>
            </div>
            <img src="../../assets/images/buildCompany1.png" alt="">
          </td>
          <td class="td t2">
            <a href="#"></a>
            <div class="font">
              <p class="tit">股权分配</p>
              <p class="price"><span>￥588</span>.00</p>
            </div>
            <img src="../../assets/images/buildCompany2.png" alt="">
          </td>
        </tr>
        <tr>
          <td class="td">
            <a href="#"></a>
            <div class="font">
              <p class="tit">注册地址</p>
              <p class="price"><span>￥588</span>.00</p>
            </div>
            <img src="../../assets/images/buildCompany3.png" alt="">
          </td>
          <td class="td">
            <a href="#"></a>
            <div class="font">
              <p class="tit">社保开户</p>
              <p class="price"><span>￥588</span>.00</p>
            </div>
            <img src="../../assets/images/buildCompany4.png" alt="">
          </td>
          <td class="td">
            <a href="#"></a>
            <div class="font">
              <p class="tit">小规模代理记账</p>
              <p class="price"><span>￥588</span>.00</p>
            </div>
            <img src="../../assets/images/buildCompany5.png" alt="">
          </td>
        </tr>
      </table>
    </div>
    <div class="box middleBar container"></div>
    <!-- 快速发展 -->
    <div class="box fastDevelop container">
      <table>
        <tr>
          <td rowspan="2" style="font-size:0;width:290px;"><img v-lazy="quickDev" alt=""></td>
          <td class="td">
            <a href="#"></a>
            <div class="font">
              <p class="tit">协议代写</p>
              <p class="price"><span>￥588</span>.00</p>
            </div>
            <img src="../../assets/images/fastDevelop1.png" alt="">
          </td>
          <td class="td">
            <a href="#"></a>
            <div class="font">
              <p class="tit">商标注册</p>
              <p class="price"><span>￥588</span>.00</p>
            </div>
            <img src="../../assets/images/fastDevelop2.png" alt="">
          </td>
          <td class="td">
            <a href="#"></a>
            <div class="font">
              <p class="tit">软件著作权</p>
              <p class="price"><span>￥588</span>.00</p>
            </div>
            <img src="../../assets/images/fastDevelop3.png" alt="">
          </td>
        </tr>
        <tr>
          <td class="td">
            <a href="#"></a>
            <div class="font">
              <p class="tit">年度报告</p>
              <p class="price"><span>￥588</span>.00</p>
            </div>
            <img src="../../assets/images/fastDevelop4.png" alt="">
          </td>
          <td class="td">
            <a href="#"></a>
            <div class="font">
              <p class="tit">股权变更</p>
              <p class="price"><span>￥588</span>.00</p>
            </div>
            <img src="../../assets/images/fastDevelop5.png" alt="">
          </td>
          <td class="td">
            <a href="#"></a>
            <div class="font">
              <p class="tit">电话问律师</p>
              <p class="price"><span>￥588</span>.00</p>
            </div>
            <img src="../../assets/images/fastDevelop6.png" alt="">
          </td>
        </tr>
      </table>
    </div>
    <!-- 一线名家 -->
    <div class="box famous container">
      <div class="title">
        <span class="big fl">国内一线名家坐阵</span>
        <a href="#" class="fr"><span class="more">更多<i class="el-icon-arrow-right"></i></span></a>
      </div>
      <div class="famousList">
        <div class="list fl">
          <div class="inner">
            <img src="../../assets/images/layerPhoto1.png" alt="" class="fl">
            <div class="info fl">
              <p class="name"><span>程青松<i></i></span>北京盈科（上海）律师事务所律师合伙人</p>
              <p class="intro">主要业务领域：企业法律事务，企业投资、并购，新三板挂牌、融资、股权激励，争议解决，法律顾问。</p>
            </div>
          </div>
        </div>
        <div class="list fr">
          <div class="inner">
            <img src="../../assets/images/layerPhoto2.png" alt="" class="fl">
            <div class="info fl">
              <p class="name"><span>陈家斌<i></i></span>复旦大学首届法律硕士、工学士</p>
              <p class="intro">曾为多家世界500强企业，众多大型、中小国企和民营企业提供过法律服务，办理过数百件诉讼、仲裁、非讼法律全过程服务、常年法律顾问等事务</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 他们这样说 -->
    <div class="box theySay container">
      <p class="title">他们这样说</p>
      <!-- <bot-slide></bot-slide> -->
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in botBanners" :key="item">
          <img v-lazy=item.img alt="">
        </el-carousel-item>
      </el-carousel>
      <p class="together">他们与1站路共同<span>颠覆</span></p>
    </div>
    <!-- 合作伙伴 -->
    <div class="grayBg partner">
      <div class="container">
        <ul>
          <!-- <li v-for="num in 8">
            <img :src= alt="">
          </li> -->
          <li><img src="../../assets/images/bot-img1.jpg" alt=""></li>
          <li><img src="../../assets/images/bot-img2.jpg" alt=""></li>
          <li><img src="../../assets/images/bot-img3.jpg" alt=""></li>
          <li><img src="../../assets/images/bot-img4.jpg" alt=""></li>
          <li><img src="../../assets/images/bot-img5.jpg" alt=""></li>
          <li><img src="../../assets/images/bot-img6.jpg" alt=""></li>
          <li><img src="../../assets/images/bot-img7.jpg" alt=""></li>
          <li><img src="../../assets/images/bot-img8.jpg" alt=""></li>
        </ul>
      </div>
    </div>
    <footer-one></footer-one>
  </div>
</template>

<script>
import headerone from '../header/headone.vue';
import footerone from '../footer/footerone.vue';
import img1 from '../../assets/images/banner2-img1.png';
import img2 from '../../assets/images/banner2-img2.png';
import img3 from '../../assets/images/banner2-img3.png';
import img4 from '../../assets/images/banner2-img4.png';
import buildCompany from '../../assets/images/buildCompany.png';
import quickDev from '../../assets/images/fastDevelop.png';
import botImg1 from "../../assets/images/bottomBanner.jpg";

export default {
  data(){
    return{
      // bannerItems:[
      //   {bg:'url(indexBanner.jpg)'},{bg:'url(../index/indexBanner.jpg)'}
      // ]
      banner2Items:[
        {img:img1,font:"【园区活动】学法懂法，放胆创业——生物医药类企业，不可规避是的啊",net:"http://www.ezhanlu.com/"},{img:img2,font:"jdbjfbsbfsf",net:"http://element.eleme.io/#/zh-CN/component/carousel"},{img:img3,font:"打卡大护法发发发",net:"http://www.cnblogs.com/1rookie/p/6540471.html"},{img:img4,font:"hello world!",net:"https://vuefe.cn/v2/guide/"}
      ],
      newsList:[
        {tit:"“1站路”提醒：创业者们，企业知识产权保护越早越好知道吗",txt:"不同类型的企业，对于知识产权保护的侧重点和需求不同，其相应..."},
        {tit:"1站路：企业服务生态一体化联盟是关键",txt:"基于B2B2C的模式，平台运作的实质是在共享理念..."},
        {tit:"互联网打假，企业服务B2B平台同样需要行动起来 ",txt:"当大量存在于线下的社会服务移师线上，当互联网日益成为一种生活和..."}
      ],
      activeName: 'first',
      newsList2:[
        {tit:"[媒体报道]“1站路”提醒：创业者们，企业知识产权是的嘛啊啊",time:'04-05'},
        {tit:"[媒体报道]1站路：企业服务生态一体化联盟是关键 ",time:'04-02'},
        {tit:"[媒体报道]互联网打假，企业服务B2B平台同样需要... ",time:'03-29'},
        {tit:"[媒体报道]这个成立仅一年的企业服务平台，快速覆盖... ",time:'03-26'},
        {tit:"[平台动态]同心筑未来，明日更精彩——“1站路”举办... ",time:'03-15'},
      ],
      baikeList:[
        {tit:"[企业百科]这是一个百科，关于企业家们，谁知道在做什么事情",time:'04-05'},
        {tit:"[企业百科]关于建设豆粕长期的事情 ",time:'04-02'},
        {tit:"[企业百科]你需要治疗 ",time:'03-29'},
        {tit:"[企业百科]回到家坚实的粗话的味道和厚度为；才能玩吃不完就和我单位 ",time:'03-26'},
        {tit:"[企业百科]啦啦啦啦啦绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿绿 ",time:'03-15'},
      ],
      buildImg:buildCompany,
      quickDev:quickDev,
      botBanners:[{img:botImg1},{img:botImg1},{img:botImg1}]
    }
  },
  mounted () {
     this.$nextTick(()=>{

     })
   },
   methods:{
    //  新闻资讯tab
     handleClick(tab, event) {
        console.log(tab, event);
      },
   },
  //  组件
   components:{
     'header-one':headerone,
     'footer-one':footerone
   }
}
</script>

<style lang="less">
  @import "index.less";
</style>
