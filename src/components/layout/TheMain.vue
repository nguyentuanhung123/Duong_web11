<template>
    <div class="main">
        <router-view></router-view>
            <!-- <div class="page">
                <div class="page__header">
                    <div class="page__header--left">
                        <div class="button__search">
                            <div class="button__search--icon"></div>
                            <div class="button__search--text">Tìm kiếm tài sản</div>
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
                        <div class="button__add" onclick="Show()">
                            <div class="button__add--text">+Thêm tài sản</div>
                        </div>
                        <div class="button__print">
                            <div class="button__print--icon"></div>
                        </div>
                        <div class="button__delete">
                            <div class="button__delete--icon"></div>
                        </div>
                    </div>
                </div>
                <div class="page__container">
                   <div class="table">
                    <div class="table__container">
                        <table id="tbList">
                            <thead>
                                <tr>
                                    <th class="text-align--center" style="width: 30px">
                                        <div class="table__icon">
                                            <input type="checkbox" class="checkbox__style">
                                        </div>
                                    </th>
                                    <th class="text-align--center" style="width: 20px">STT</th>
                                    <th class="text-align--left">Mã tài sản </th>
                                    <th class="text-align--left">Tên tài sản</th>
                                    <th class="text-align--left">Loại tài sản</th>
                                    <th class="text-align--left">Bộ phận sử dụng</th>
                                    <th class="text-align--right" style="width: 60px">Số lượng</th>
                                    <th class="text-align--right">Nguyên giá</th>
                                    <th class="text-align--right">HM/KH luỹ kế</th>
                                    <th class="text-align--right">Giá trị còn lại</th>
                                    <th class="text-align--center">Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center">
                                        <div class="fuc">
                                            <div class="iconedit"></div>
                                            <div class="icondelete"></div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
                                </tr>
                                <tr>
                                    <td class="text-align--center" style="width: 30px">
                                        <div class="table__icon"></div>
                                    </td>
                                    <td class="text-align--center" style="width: 30px">1</td>
                                    <td class="text-align--left">55H7WN72/2022</td>
                                    <td class="text-align--left">Dell Inspiron 3467</td>
                                    <td class="text-align--left">Máy vi tính xách tay</td>
                                    <td class="text-align--left">Phòng hành chính kế toán</td>
                                    <td class="text-align--right" style="width: 60px">1</td>
                                    <td class="text-align--right">20.000.000</td>
                                    <td class="text-align--right">894.000</td>
                                    <td class="text-align--right">19.106.000</td>
                                    <td class="text-align--center"></td>
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
            </div> -->
            <!-- <div class="table__paging--right">
                            <div class="cbtext4 textbold">13</div>
                            <div class="cbtext5 textbold">249.000.000</div>
                            <div class="cbtext6 textbold">19.716.000</div>
                            <div class="cbtext7 textbold">229.284.000</div>
            </div> -->
            
    </div>
</template>

<script>
export default {
    name:"TheMain",
}
</script>

<style scoped>
   @import url(../../css/layout/page.css);
</style>