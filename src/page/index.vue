<template>
<div  >
 
    <van-row class="pt10 pm10 cen bgff">
        <van-col span="6">
                <img src="../assets/img/quanquan.png" class="sd_deert">
            <p class="fz12 z9">Silver</p>
        </van-col>
          <van-col span="6">
                <img src="../assets/img/quanquan.png" class="sd_deert">
            <p class="fz12 z9">Silver</p>
        </van-col>
           <van-col span="6">
                <img src="../assets/img/quanquan.png" class="sd_deert">
            <p class="fz12 z9">Silver</p>
        </van-col>
           <van-col span="6">
                <img src="../assets/img/quanquan.png" class="sd_deert">
            <p class="fz12 z9">Silver</p>
        </van-col>
    </van-row>
    
    <section class=" pd mt10">
        
        <van-row class="cen dsf_deertt">
            <van-col span="8" v-for="(sd,idx) in 9" class="dsf_ddf pt20 pm20"> 
                <span class="pr f_b">
       <img src="../assets/img/quanquan.png" class="sd_deert ab">
                    <span class="yj dsf_dferert" v-if="idx==1">5</span>
                </span>
             
                    <p class="fz12 z9">Silver
            </p>
            </van-col>
          
        </van-row>
    
    </section>
    
    
    <van-tabbar v-model="active"  active-color="#FD751D">
  <van-tabbar-item icon="home-o">主页</van-tabbar-item>
  <van-tabbar-item icon="home-o">分类</van-tabbar-item>
         <van-tabbar-item icon="home-o">服务</van-tabbar-item>
         <van-tabbar-item icon="home-o">购物车</van-tabbar-item>
         <van-tabbar-item icon="home-o">会员</van-tabbar-item>
</van-tabbar>
</div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        components: {

        },
        methods: {


        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_deert {
        width: 30px;
    }

    .dsf_ddf {
        border-right: 1px solid #EAEAEA;
        border-bottom: 1px solid #EAEAEA
    }

    .dsf_deertt {
        border-left: 1px solid #EAEAEA;
        border-top: 1px solid #EAEAEA;
    }

    .sd_deert.ab {
        width: 35px;
        margin-bottom: 5px;
    }

    .dsf_dferert {
        background: red;
        position: absolute;
        width: 18px;
        height: 18px;
        color: #fff;
        font-size: 12px;
        line-height: 18px;
        right: -5px;
        top: -8px;
    }

</style>
