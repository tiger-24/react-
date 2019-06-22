//http://rap2api.taobao.org/app/mock/222414/users/login

import http from "utils/request";


export const login = (userInfo)=>http.post("/app/mock/222414/users/login",userInfo);