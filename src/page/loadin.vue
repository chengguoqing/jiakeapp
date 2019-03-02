<template>
	<div >
<!--
       <van-nav-bar
                    fixed
  title="BLOCKS"
>
 
        <i class="dx icon-chakantiezigengduo fz26 dsf_dderrt" slot="left"></i>
    <i class="dx icon-user fz26 dsf_dderrt ab" slot="right"></i>
           
</van-nav-bar>
-->
        
        
        <section class="dx_body">
            
            <section class="sd_ger_drt">
                <p class="fz30 z6">Log in</p>
                
                <van-cell-group class="mt30">
                    <van-field    placeholder="Email" class="fz16" v-model="email_s" />
                </van-cell-group>
                
                  
                <van-cell-group class="mt10"> 
                    <van-field    placeholder="Password"  class="fz16" v-model="paddword_s" />
                </van-cell-group>
                
                <section class="mt40"> 
                        <van-button type="danger" class="w100" @tap="denglu">登录</van-button>
                </section>
                
                   <section class="mt15">
                       <van-button type="danger" plain  class="w100">免费注册新账户</van-button>
                </section>
                
                <p class="mt80" @tap="hf('forgot_paw')">
                Forgot <span class="red">password?</span>
                </p>
                
            </section>
            
        </section>
        
        

	</div>
</template>
<script>
    export default {
        data() {
            return {
                email_s: "",
                paddword_s: ""
            }
        },
        components: {

        },
        methods: {
            denglu() { //登录按钮触发
                if (!this.email_s) {
                    this.$notify('请输入email');
                    return
                }
                if (!this.paddword_s) {
                    this.$notify('请输入paddword');
                    return
                }

            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dsf_dderrt {
        position: relative;
        top: 10px;
    }

    .dsf_dderrt.ab {
        top: 9px;
    }

    .sd_ger_drt {
        width: 300px;
        margin: auto;
        margin-top: 80px;
    }

</style>
