<template>
    <div class="popup">
        <div class="wrapper">
            <div class="content">
                <div class="icon__showSucces"></div>
                <div class="text">{{ Title }}</div>
            </div>
            <div class="footer">
                <button @click="btnClose" class="btn btnsave2">Đồng ý</button>
                
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"MISASucces",
    props:["succesNumber"],
    methods:{
        /**
         * Đóng form thông báo kết quả 
         * Duongpv(21/12/2022)
         * Click vào đồng ý sẽ đóng form thông báo và reload trang
         */
        btnClose(){
            this.$emit("onClose");
        }
    },
    created(){
        
        if(this.succesNumber==0){
            console.log(this.succesNumber);
            this.Title="Thêm tài sản thành công!";
        }
        if(this.succesNumber==1){
            this.Title="Sửa tài sản thành công!";
        }
        if(this.succesNumber==2){
            this.Title="Xoá thành công!";
        }
    },

    data(){
       return{
        Title:"",
       }
    }
}
</script>
<style scoped>
@import url(../../css/icon/icon.css);
@import url(../../css/base/popup.css);
</style>