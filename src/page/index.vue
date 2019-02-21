<template>
<div  >
 
<van-button type="primary" @click="saoma">主要按钮2</van-button>
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
            saoma() {
                alert(2)
                uexWindow.showStatusBar()
            }

        },
        mounted() {

        },
    }

</script>
<style scoped>


</style>
