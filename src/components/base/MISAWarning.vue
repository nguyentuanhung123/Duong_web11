<template>
    <div class="popup__warning">
        <div class="wrapper__warning">
            <div class="content__warning" v-for="(item,index) in listErrorForm" :key="index">
                <div class="icon__showWarning"></div>
                <div class="text">{{ item }}</div>
            </div>
            <div class="footer__warning">
                <button @click="btnClose" class="btn btnsave2">Đồng ý</button>
                
            </div>
        </div>
        
    </div>
    
</template>
<script>

export default {
    name:"MISAWarning",
    props:["listErrorForm"],
    methods:{
        /**
         * Đóng form thông báo kết quả 
         * Duongpv(21/12/2022)
         * Click vào đồng ý sẽ đóng form thông báo và reload trang
         */
        btnClose(){
            this.$emit("onCloseWarning");
        }
    },
    created(){
       
    },

    data(){
       return{
        
       }
    }
}
</script>
<style scoped>
@import url(../../css/icon/icon.css);
@import url(../../css/base/warning.css);
</style>