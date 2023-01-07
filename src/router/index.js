import { createRouter,createWebHistory } from 'vue-router';
import SettingList from '../View/settings/SettingList'
import ReportList from '../View/reports/ReportList.vue'
import EmployeeList from '../View/employees/EmployeeList.vue'
import CustomerList from '../View/customers/CustomerList.vue'

// khai bao routers
const routes=[{
     path:"/home",
     component: SettingList
},
{
    path:"/customers",
    component: CustomerList
},
{
    path:"/employees",
    component: EmployeeList
},
{
    path:"/reports",
    component: ReportList
}
]

//Khoi tao vue router
 const router=createRouter({
     history: createWebHistory(),
     routes:routes
 })
 export default router;
