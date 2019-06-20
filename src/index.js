import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {HashRouter as Router,Route,Redirect,Switch} from "react-router-dom";
import {mainRouter} from "routers";
ReactDOM.render(
    <Router>
        <Switch>
            {/* 只有当路由匹配到admin的时候才会进入app组件  否则只能进404或者login页面
                要做路由验证用render  应为只有render能做逻辑的判断
                redirect 重定向   exact路劲完全匹配
            */}
            <Route path="/admin" render={()=>{
                return <App />
            }}/>


            {
                mainRouter.map((item,index)=>(
                    <Route key={index} path={item.pathname} component={item.component}/>
                ))
            }

            <Redirect from="/" to="/admin" exact/>
            <Redirect from="**" to={mainRouter[1].pathname}/>

        </Switch>
    </Router> ,
    document.getElementById('root')
);
