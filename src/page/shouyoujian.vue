<template>
	<div >
	     <section class="dx_body">
                <section class="mt40  cen">
                            <img src="../assets/img/emali.png" class="sd_jh_deert">
                    <p class="z3 fz15">验证邮证已发出</p>
                </section>
             
             <p class="fz13 z6 xcg_xdeert mt30">
                A verifry identity Email has benn sent to you. Please check your Email for link to reset your password
            </p>
             
             
                   <section class="mt100"> 
                        <van-button type="danger" class="w100" @tap="hf('')">Back Home</van-button>
                </section>
             <p class="fz12 z6 mt30">Please contact us if you need more technical support</p>
             
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

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .dx_body {
        width: 300px;
        margin: auto
    }

    .sd_jh_deert {
        width: 80px;
    }

    .xcg_xdeert {
        line-height: 1.5
    }

</style>
