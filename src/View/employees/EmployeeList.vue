<template>
    <div class="page">
                <div class="page__header">
                    <div class="page__header--left">
                        <div class="button__search" >
                            <div class="button__search--icon"></div>
                            <!-- <div class="button__search--text">Tìm kiếm tài sản</div> -->
                            <input type="text" placeholder="Tìm kiếm tài sản" class="input__function" >
                        </div>
                        <div class="button__type">
                            <div class="type__left">
                                <div class="button__type--left"></div>
                                <div class="button__type--text">Loại tài sản</div>
                            </div>
                            
                            <div class="type__right">
                                <div class="button__type--right"></div>
                            </div>
                            
                        </div>
                        <div class="button__use">
                            <div class="use__left">
                                <div class="button__use--left"></div>
                            <div class="button__use--text">Bộ phận sử dụng</div>
                            </div>
                            <div class="use__right">
                                <div class="button__use--right"></div>
                            </div>
                        </div>
                    </div>
                    <div class="page__header--right">
                        <div class="button__add" @click="btnAddOnClick">
                            <div class="button__add--text">+Thêm tài sản</div>
                        </div>
                        <div class="button__print">
                            <div class="button__print--icon" title="In"></div>
                        </div>
                        <div class="button__delete" >
                            <div class="button__delete--icon" title="Xoá"></div>
                        </div>
                    </div>
                </div>
                <div class="page__container">
                   <div class="table">
                    <div class="table__container">
                        <table id="tbList">
                            <thead>
                                <tr>
                                    <th class="text-align--center" style="width: 10px">
                                        <div class="table__icon">
                                            <input type="checkbox" class="checkbox__style">
                                        </div>
                                    </th>
                                    <th class="text-align--center" title="Số thứ tự" style="width: 10px">STT</th>
                                    <th class="text-align--left">Mã tài sản </th>
                                    <th class="text-align--left">Tên tài sản</th>
                                    <th class="text-align--left">Loại tài sản</th>
                                    <th class="text-align--left">Bộ phận sử dụng</th>
                                    <th class="text-align--right" style="width: 60px">Số lượng</th>
                                    <th class="text-align--right">Nguyên giá</th>
                                    <th class="text-align--right" title="Hao mòn/Khấu hao luỹ kế">HM/KH luỹ kế</th>
                                    <th class="text-align--right">Giá trị còn lại</th>
                                    <th class="text-align--center">Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item,index) in employees" :key="index"   @dblclick="rowOnDblClick(item)">
                                    <td class="text-align--center" style="width: 10px">
                                        <div class="table__icon">
                                            <input type="checkbox" class="checkbox__style">
                                        </div>
                                    </td>
                                    <td class="text-align--center" style="width: 10px">{{index+1}}</td>
                                    <td class="text-align--left">{{item.EmployeeCode}}</td>
                                    <td class="text-align--left">{{item.EmployeeName}}</td>
                                    <td class="text-align--left">{{item.Email}}</td>
                                    <td class="text-align--left">{{item.DepartmentName}}</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">{{item.Salary}}</td>
                                    <td class="text-align--right" >{{ formatMoney('11111111') }}</td>
                                    <td class="text-align--right">{{ formatMoney('12345678') }}</td>
                                    <td class="text-align--center">
                                        <div class="fuc">
                                            <div @click="rowEdit(item)" title="Sửa" class="iconedit"></div>
                                            <div @click="rowDelete(item)" title="Nhân bản" class="icondelete"></div>
                                        </div>
                                    </td>
                                </tr>
                               

                            </tbody>
                        </table>
                    </div>
                    <div class="table__paging">
                        <div class="table__paging--left">
                            <div class="text1">Tổng số:</div>
                            <div class="text2 textbold">200</div>
                            <div class="text3">bản ghi</div>
                            <div class="btncount">
                                <div class="btncount__text">20</div>
                                <div class="btncount__icon"></div>
                            </div>
                            <div class="cbcount">
                                <div class="cbcount__icon--left">
                                    
                                </div>
                                <div class="cbcount__text">
                                    <div class="cbtext1 textbold">1</div>
                                </div>
                                <div class="cbcount__text">
                                    <div class="cbtext2">2</div>
                                </div>
                                <div class="cbcount__text">
                                    <div class="cbtext3">...</div>
                                </div>
                                <div class="cbcount__text">
                                    <div class="cbtext10">10</div>
                                </div>
                                <div class="cbcount__icon--right">
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                </div>
            </div>
            <!-- <div class="table__paging--right">
                            <div class="cbtext4 textbold">13</div>
                            <div class="cbtext5 textbold">249.000.000</div>
                            <div class="cbtext6 textbold">19.716.000</div>
                            <div class="cbtext7 textbold">229.284.000</div>
            </div> -->
     <MISALoadingVue v-show="isShowLoading"></MISALoadingVue>
     <EmployeeDetail v-if="isShowDialog" :employeeId="employeeIdSelected" :employeeTitle="employeeTitleNumber" :reloadData="loadData()" @onClose="btnCloseOnClick"></EmployeeDetail>
     <EmployeeDelete v-if="isShowFormDelete" :employeeId="employeeIdSelected" :reloadData="loadData()" @onClose="btnCloseOnClick"></EmployeeDelete>
</template>
<script>
import MISALoadingVue from '@/components/base/MISALoading.vue';
import EmployeeDelete from './EmployeeDelete.vue';
import EmployeeDetail from './EmployeeDetail.vue';
import axios from 'axios'
export default {
    
    components:{
        EmployeeDetail,EmployeeDelete,MISALoadingVue
    },
    created(){
        //load du lieu
        this.loadData();
    },
    methods:{
        /**
         * Load du lieu
         * author: Duongpv(19/12/2022)
         * Load du lieu khi khoi tao trang
         */
        loadData(){
            this.isShowLoading=true;
            axios.get("https://cukcuk.manhnv.net/api/v1/Employees")
            .then(res=>{
                this.employees=res.data;
                this.isShowLoading=false ;
            })
            .catch(error=>{
                console.log(error);
            })
        },
        /**
         * Hiển thị dữ liệu từ 1 dòng trên table lên dialog
         * author: Duongpv(19/12/2022)
         * Hiển thị dữ liệu khi kích đúp vào 1 dòng trên table
         */
         rowEdit(item){
            try {
                //Hiển thị dialog
                this.isShowDialog= true;
                this.employeeTitleNumber=1;
                this.employeeIdSelected=item.EmployeeId;
                console.log(item);

            } catch (error) {
                console.log(error);
            }
         },
         /**
          * Hiển thị form xác nhận xoá dữ liệu trên 1 dòng
          * Duongpv(20/12/2022)
          * Xoá dữ liệu của 1 tài sản trên serve
          */
         rowDelete(item){
            try {
                this.isShowFormDelete=true;
                this.employeeIdSelected=item.EmployeeId;
                // console.log(item.EmployeeId);
            } catch (error) {
                console.log(error);
            }
         },

        /**
         * Dinh dang tien te
         * author: Duongpv(18/12/2022)
         * dinh dang du lieu tien
         */
        formatMoney(money){
            try {
                if(money){
                    //var moneyFormat=new Intl.NumberFormat('vi',{style:'currency',currency:"VND"}).format(money);
                    //NumberFormat('vi',{style:'currency',currency:"VND"})
                    var moneyFormat=money.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
                    //n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
                    return moneyFormat;
                }
                else{
                    return "";
                }
            } catch (error) {
                console.log(error);
                return "";
            }
        },

        /**
         * Dinh dang ngay sinh
         * author: Duongpv(18/12/2022)
         * dinh dang du lieu ngay thang nam
         */
        formatDate(date){
            try{
                if(date){
                    //chuyen du lieu sang dang date
                    date = new Date(date);
                    let day=date.getDay();
                    day=(day < 10 ? `0${day}`:day);
                    let month=date.getMonth()+1;
                    month=(month < 10 ? `0${month}`:month);
                    let year=date.getFullYear();
                    return `${day}/${month}/${year}`;
                }
                else{
                    return "";
                }
            }
            catch(error){
                console.log(error);
                return "";
            }
        },
        /**
         * Hiển thị Dialog thêm tài sản
         * author: Phan Van Duong(16/12/2022)
         * @param: sửa lại button click add
         */
        btnAddOnClick(){
            try {
                this.employeeTitleNumber=0;
                this.isShowDialog= true;
                this.employeeIdSelected=null;
            } catch (error) {
                console.log(error);
            }
            
        },
        /**
         * Hiển thị Dialog thêm tài sản
         * author: Phan Van Duong(16/12/2022)
         * @param: sửa lại button click add
         */
        btnCloseOnClick(){
            try {
                this.isShowDialog= false,
                this.isShowFormDelete=false
            } catch (error) {
                console.log(error);
            }
        }
    },
    data(){
        return {
            isShowLoading: false,
            isShowDialog: false,
            isShowFormDelete:false,
            employees:[],
            employeeIdSelected:null,
            employeeTitleNumber:null
        }
    }

}
</script>
<style scoped>

</style>