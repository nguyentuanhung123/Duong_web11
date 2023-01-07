<template>
    <div class="dialog" id="dlog" style="display: flex;">
        <div class="dialog-wrapper">
            <button @click="btnCloseOnClick"  class="dialog__close">X</button>
            <div class="dialog__header">{{TheTitle}}</div>
            <div class="dialog__content">
                <div class="logrow">
                    <div class="assetsID logleft">
                        <div class="text">Mã tài sản <span style="color: red;">*</span></div>
                       
                        
                            <input class="tbx dpl" ref="txtEmployeeCode"   property-name="assetsid" id="assetsid" v-model="newEmployee.EmployeeCode" m-required="" field-label="Mã tài sản" type="text">
                        
                        <div class="error--text" hidden="">
                            Mã tài sản không được để trống
                        </div>

                    </div>
                    <div class="assetsName logright">
                        <div class="text">Tên tài sản <span style="color: red;">*</span></div>
                        
                            <input class="tbx dpl" property-name="assetsname" id="assetName" v-model="newEmployee.EmployeeName" m-required="" field-label="Tên tài sản" type="text">
                        
                        <div class="error--text" hidden="">
                            Tên tài sản không được để trống
                        </div>
                    </div>
                </div>
                <div class="logrow">
                    <div class="componentID logleft">
                        <div class="text">Mã bộ phận sử dụng <span style="color: red;">*</span></div>
                       
                        <!-- <div class="tbx"> -->
                            <!-- <input id="componentid" class="input1" type="text"> -->
                            <select class="tbx dpl" name="" id="cbDepartmentId" v-model="newEmployee.DepartmentId">
                                
                                <option value="469b3ece-744a-45d5-957d-e8c757976496">Phòng sản xuất</option>
                                <option value="17120d02-6ab5-3e43-18cb-66948daf6128">Phòng tuyển sinh</option>
                                <option value="142cb08f-7c31-21fa-8e90-67245e8b283e">Phòng nhân sự</option>
                            </select>
                            <!-- <div class="tbx__icondown"></div> -->
                        <!-- </div> -->

                    </div>
                    <div class="componentName logright">
                        <div class="text">Tên bộ phận sử dụng</div>
                        
                            <input class="tbx dpl" type="text" style="background-color:#E1E1E1 ">
                        
                    </div>
                </div>
                <div class="logrow">
                    <div class="assetstypeID logleft">
                        <div class="text">Mã loại tài sản</div>
                        <select class="tbx dpl" name="" id="">
                                
                                <option>TS01</option>
                                <option>TS02</option>
                                <option>TS03</option>
                            </select>
                        <!-- <div class="tbx">
                            <div class="tbx__dropdown" onclick="show_typeID()">
                                <div class="buttondl">--Chọn loại tài sản--</div>
                            <center>
                                <div id="list-items">
                                    <div class="TS" id="TS01">TS01</div>
                                    <div class="TS" id="TS02">TS02</div>
                                    <div class="TS" id="TS03">TS03</div>
                                </div>
                            </center>
                            </div>
                            <div onclick="show_typeID()" class="tbx__icondown"></div>
                        </div> -->

                    </div>
                    <div class="assetstypeName logright">
                        <div class="text">Tên loại tài sản</div>
                        
                        <input class="tbx dpl" type="text" style="background-color:#E1E1E1 ">
                        
                    </div>
                </div>
                <div class="logrow">
                    <div class="count logleft">
                        <div class="text">Số lượng</div>
                        <div class="tbx">
                            <input class="input1 text-align--right" type="text" value="0">
                            <div class="tbx__iconcount"></div>
                        </div>
                    </div>
                    <div class="logright">
                        <div class="logright__bottom">
                            <div class="cost">
                                <div class="text">Nguyên giá <span style="color: red;">*</span></div>
                                
                                
                                <input  property-name="cost" class="tbx text-align--right input2 formattedNumberField"  v-model="newEmployee.Salary" m-required="" field-label="Nguyên giá" id="cost" type="text">
                                 
                                <div class="error--text" hidden="">
                                    Nguyên giá không được để trống
                                </div>
                            </div>
                            <div class="yearUse">
                                <div class="text">Số năm sử dụng</div>
                                
                                    <input class="tbx text-align--right input2" type="text">
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div class="logrow">
                    <div class="tlhm logleft">
                        <div class="text">Tỉ lệ hao mòn(%)</div>
                        <div class="tbx">
                            <input class="input1 text-align--right" type="text" value="0">
                            <div class="tbx__iconcount"></div>
                        </div>
                            <!-- <input class="tbx" type="number"> -->
                            <!-- <div class="tbx__icontlhm"></div> -->
                        
                    </div>
                    <div class="logright">
                        <div class="logright__bottom">
                            <div class="gthmn">
                                <div class="text">Giá trị hao mòn năm</div>
                                
                                    <input class="tbx text-align--right input2" type="text">
                                
                            </div>
                            <div class="ntd">
                                <div class="text">Năm theo dõi</div>
                                
                                    <input class="tbx text-align--right input2" type="text" style="background-color:#E1E1E1 ">
                               
                            </div>
                        </div>
                    </div>

                </div>
                <div class="logrow">
                    <div class="datebuy logleft">
                        <div class="text">Ngày mua</div>
                        <!-- <div class="tbx"> -->
                            <input class="tbx" type="date">
                            <!-- <div class="icon__datebuy"></div> -->
                        <!-- </div> -->
                    </div>
                    <div class="logright">
                        <div class="logright__bottom">
                            <div class="dateuse">
                                <div class="text">Ngày bắt đầu sử dụng</div>
                                <!-- <div class="tbx"> -->
                                    <input class="tbx" type="date">
                                    <!-- <div class="icon__dateuse"></div> -->
                                <!-- </div> -->
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div class="dialog__footer">
                <button id="btnsave" @click="btnSaveOnClick" class="btn btn-save">Đồng ý</button>
                <button id="btnhuy"   @click="btnCloseOnClick" class="btn btn-cancel">Huỷ bỏ</button>
            </div>
            
        </div>
    </div>
    <MISAWarningVue v-show="isMISAWarning" :listErrorForm="listError" @onCloseWarning="btnCloseWarning"></MISAWarningVue>
    <MISASuccesVue v-show="isMisaSucces" :succesNumber="succesNumberForm" @onClose="btnClose"></MISASuccesVue>
</template>
<script>
import MISAWarningVue from '@/components/base/MISAWarning.vue';
import MISASuccesVue from '@/components/base/MISASucces.vue';
import axios from 'axios';
export default {
    name:"EmployeeDetail",
    components:{
        MISASuccesVue,MISAWarningVue 
    },
    props:["employee","employeeId","employeeTitle"],
    
    computed:{
        //ham tra ve ket qua kiem tra da ton tai id hay chua
        IsAdd: function(){
            if(this.valueIsEmpty(this.employeeId)){
                return true;
            }
            else{
                return false;
            }
        }
    },
    created(){
        //Đổi title form cho từng Mode
        if(this.employeeTitle==1){
            this.TheTitle="Sửa tài sản";    //Đổi title thành sửa tài sản
            this.succesNumberForm=1;        
        }
        if(this.employeeTitle==0){          
            this.TheTitle="Thêm tài sản";//Đổi title thành thêm tài sản
            this.succesNumberForm=0;
        }
       //Lay ma nv moi
        if(this.IsAdd){
            axios.get("https://amis.manhnv.net/api/v1/Employees/NewEmployeeCode")
        .then(res=>{
            this.newEmployee.EmployeeCode=res.data;
            //Focus vao o nhap lieu dau tien
            this.$refs.txtEmployeeCode.focus();
        })
        .catch(error=>{
            console.log(error);
        })
        }
        //Lấy dữ liệu từ Server:
        else{ 
            axios.get(`https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`)
        .then(res=>{
            this.newEmployee=res.data;
            //Focus vào ô nhập liệu đầu tiên
            this.$refs.txtEmployeeCode.focus();
        })
        .catch(error=>{
            console.log(error);
        })
        }
    },
    methods:{
        
        /**
         * Đóng form thông báo kết quả 
         * Duongpv(21/12/2022)
         * Click vào đồng ý để đóng form và reload trang
         */
        btnClose(){
            this.isMisaSucces=false;
            //gọi hàn reloadData để load lại dữ liệu
            this.$emit("reloadData");
            //gọi hàm đóng form
            this.$emit("onClose");
        },
        /**
         * Đóng thông báo hiển thị lỗi
         * Duongpv(21/12/2022)
         * Click đồng ý đóng thông báo lỗi
         */
        btnCloseWarning(){
           this.isMISAWarning=false;
        },
        /**
         * Đóng dialog
         * Duongpv(19/12/2022)
         * click vào button đóng sẽ đóng dialog
         */
       
        btnCloseOnClick(){
            this.$emit("onClose");
            
        },
        /**
         * Thực hiện cất dữ liệu
         * Duongpv(19/12/2022)
         * Khi click vào nút save sẽ lưu dữ liệu 
         */
        btnSaveOnClick(){
            try {
                //validate dữ liệu
                var isValid=this.validateData();
                
                if(isValid){
                //gọi api cất dữ liệu
                
                    if(this.IsAdd){
                        
                        axios.post("https://amis.manhnv.net/api/v1/Employees",this.newEmployee)
                        
                        .then(res=>{
                            console.log(res);
                            
                            this.isMisaSucces=true;
                           
                            // this.$emit("reloadData");
                            // this.$emit("onClose");
                        })
                        .catch(error=>{
                            console.log(error);
                        })
                    }
                //gọi api update dữ liệu
                    else{
                        
                        axios.put(`https://amis.manhnv.net/api/v1/Employees/${this.employeeId}`,this.newEmployee)
                        .then(res=>{
                            console.log(res);
                            
                            this.isMisaSucces=true;
                            
                            // alert("Sửa thành công");
                            // this.$emit("onClose");
                        })
                        .catch(error=>{
                            console.log(error);
                        })
                    
                    }
                }
                
                
            } catch (error) {
                console.log(error);
            }

        },
        /**
         * Kiểm tra dữ liệu
         */
        validateData(){
            try {
                var errors=[];
                //Mã tài sản không được phép trống
                if(this.valueIsEmpty(this.newEmployee.EmployeeCode)){
                    errors.push("Mã tài sản không được phép để trống");
                }
                //Tên nhân viên không được phép trống
                if(this.valueIsEmpty(this.newEmployee.EmployeeName)){
                    errors.push("Tên tài sản không được phép để trống");
                }
                //Nguyên giá không được để trống
                if(this.valueIsEmpty(this.newEmployee.Salary)){
                    errors.push("Nguyên giá không được phép để trống");
                }
                if(errors.length>0){
                    //Hiển thị cảnh báo lỗi
                    this.listError=errors;
                    this.isMISAWarning=true;
                    //trả về 
                    return false;
                }
                return true;
            } catch (error) {
                console.log(error);
            }
        },
        /**
         * Kiểm tra dữ liệu bắt buộc
         * @param {} value 
         */
        valueIsEmpty(value){
            try {
                if(value==""||value==null||value==undefined) {
                    return true;
                }
                else{
                    return false;
                }

            } catch (error) {
                console.log(error);
            }
        }
    },
    data(){
        return{
            listError:[],
            newEmployee:{},
            TheTitle:"",
            
            succesNumberForm:"",
            isMisaSucces:false,
            isMISAWarning:false,
        }
    }
}
</script>
<style scoped>

</style>