<template>
    <div class="dialog__delete">
        <div class="wrapper__delete">
            <div class="content__delete">
                <div class="icon__show"></div>
                <div class="text">Bạn có chắc muốn xoá tài sản ?</div>
            </div>
            <div class="footer__delete">
                <button @click="btnDeleteOnClick" class="btn btnsave2">Đồng ý</button>
                <button @click="btnCloseOnClick" class="btn btn_cancel">Huỷ bỏ</button>
            </div>
        </div>
        
    </div>
    <MISASuccesVue v-show="isMisaSucces" :succesNumber="succesNumberForm" @onClose="btnClose"></MISASuccesVue>
</template>
<script>
import MISASuccesVue from '@/components/base/MISASucces.vue';
import axios from 'axios';
export default {
    // name:EmployeeDelete,
    components:{
        MISASuccesVue
    },
    props:["employee","employeeId"],
    created(){
        this.succesNumberForm=2;
        //gọi api lấy dữ liệu
        axios.get(`https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`)
        .then(res=>{
            this.newEmployee=res.data;
            
        })
        .catch(error=>{
            console.log(error);
        })
    },
    methods:{
        /**
         * Đóng form thông báo xoá tài sản thành công
         * Duongpv(21/12/2022)
         * Click đồng ý để đóng form và reload lại dữ liệu trên table
         */
        btnClose(){
            this.isMisaSucces=false;
            //gọi hàn reloadData để load lại dữ liệu
            this.$emit("reloadData");
            //gọi hàm đóng form
            this.$emit("onClose");
        },
        /**
         * Đóng form thông báo xoá tài sản
         * Duongpv(20/12/2022)
         * Thực hiện đóng form khi click vào nút huỷ bỏ
         */
        btnCloseOnClick(){
            this.$emit("onClose");
        },
        /**
         * Thực hiện xoá tài sản 
         * Duongpv(20/12/2022)
         * Xoá tài sản khỏi serve
         */
        btnDeleteOnClick(){
            axios.delete(`https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`,this.newEmployee)
            .then(res=>{
                console.log(res);
                this.isMisaSucces=true;
                //this.$emit("onClose");
                //this.$emit("reloadData");
            })
            .catch(error=>{
                console.log(error);
            })

        }
    },
    data(){
        return{
            newEmployee:[],
            isMisaSucces:false,
            succesNumberForm:"",

        }
    }
}
</script>
<style scoped>
@import url(../../css/icon/icon.css);
@import url(../../css/layout/dialog__delete.css);
</style>