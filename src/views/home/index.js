import React from "react";
import timg from "static/timg1.jpg";
import "./index.css"

class Home extends React.Component{
    render(){
        return(
            <div className="img">
                <h1>湖人总冠军</h1>
                <img src={timg}/>
            </div>
        )
    }
}


export default Home;