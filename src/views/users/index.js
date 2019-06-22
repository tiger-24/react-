import React from "react";
import echarts from "echarts";
import "./index.css";
import wangEditor from "wangeditor";

class Users extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <ul className="ul">
                        <li>湖人总冠军</li>
                    </ul>
                </div>
                <div className="wrap" ref="wrap">
                    
                </div>
                <div ref="content_editor" className="editor">

                </div>
            </div>
        )
    }
    componentDidMount(){
        // 基于准备好的dom，初始化echarts实例
        this.myChart = echarts.init(this.refs.wrap);

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'NBA球员能力值'
            },
            tooltip: {},
            legend: {
                data:['kobe']
            },
            xAxis: {
                data: ["得分","封盖","组织","速度","投篮","篮板"]
            },
            yAxis: {},
            series: [{
                name: 'kobe',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        this.myChart.setOption(option);

        this.editor2 = new wangEditor(this.refs.content_editor)
        this.editor2.create()
    }
}


export default Users;