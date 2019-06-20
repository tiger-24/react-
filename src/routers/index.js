
//路由的配置文件

import {
    Home,
    Login,
    NotFound,
    Settings,
    Users,
} from "views"

//基础路由
export const mainRouter = [
    {
        pathname:"/login",
        component:Login,
    },
    {
        pathname:"/404",
        component:NotFound,
    }
]

//页面级别路由
export const pageRouter = [
    {
        pathname:"/admin/home",
        component:Home,
        title:"首页",
        icon:"home",
    },
    {
        pathname:"/admin/settings",
        component:Settings,
        title:"执行选项",
        icon:"cluster",
        children:[
            {
                title:"合同选项",
                pathname:"admin/seetings1"
            },
            {
                title:"经纪人选项",
                pathname:"admin/seetings2"
            },
            {
                title:"球员选项",
                pathname:"admin/seetings3"
            }
        ]
    },
    {
        pathname:"/admin/users",
        component:Users,
        title:"赛事处理",
        icon:"global",
        children:[
            {
                title:"常规赛",
                pathname:"admin/users1"
            },
            {
                title:"季后赛",
                pathname:"admin/users2"
            },
            {
                title:"总决赛",
                pathname:"admin/users3"
            }
        ]
    },
]