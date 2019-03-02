<template>
	<div >
	
    
        
            <section class="dx_body">
                <section class="mt40  cen">
        <img src="https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/upload_3fa96b9e84871da3ef5e5a54f2ad6600.jpg" class="sd_jh_deert yj">
            <p class="fz15 mt20 z6">重新设置登录密码</p>
    </section>
                
                
<!--               emali -->
             
                   
                <van-cell-group class="mt80">
                    <van-field    placeholder="Your Email" class="fz16 cen" v-model="email_s" >
                <img src="../assets/img/emali.png" class="sd_deeertt" slot="button">        
                </van-field>
                </van-cell-group>
                
                  <section class="mt20"> 
                        <van-button type="danger" class="w100" @tap="send">SEND</van-button>
                </section>
                <p class="mt40 z6 fz12 cen">
                    Nam dapibus vitae elit fringillaru.
                </p>
                
    </section>
        

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
            send() { //SEND按钮触发
                if (!this.email_s) {
                    this.$notify('请输入email');
                    return
                }
                this.hf('shouyoujian')

            }
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .sd_jh_deert {
        width: 95px;
        height: 95px;
    }

    .dx_body {
        width: 300px;
        margin: auto
    }

    .sd_deeertt {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 22px;
        top: 1px;
    }

</style>
