import React from 'react';
import {Switch,Route,Redirect} from "react-router-dom";
import {pageRouter} from "routers";
import LayoutCom from "layout";
class App extends React.Component{
  render(){
    return (
      <Switch>
        <Redirect from="/admin" to="/admin/home" exact/>
        <LayoutCom>
        {
          pageRouter.map((item,index)=>(
            <Route key={index} path={item.pathname} render={()=>{
              return <item.component/>
            }}/>
          ))
        }
        </LayoutCom>
        <Redirect from="**" to="/404"/>
      </Switch>
    )
  }
}
export default App;
