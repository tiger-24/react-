import React from 'react';
import {Layout,Menu,Icon,Row, Col} from "antd";
import logo from "static/logo2.png";
import "./index.css";

const {Header} = Layout

class topNav extends React.Component{
    render(){
        return(
            <Header className="header">
                <Row>
                    <Col span={6}>
                        <div className="logo">
                            <img src={logo}/>
                        </div>
                    </Col>
                    <Col span={15}>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '70px' }}
                            className="item"
                        >
                            <Menu.Item key="1">精彩赛事</Menu.Item>
                            <Menu.Item key="2">球员访谈</Menu.Item>
                            <Menu.Item key="3">湖人总冠军</Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={3}>
                        <div className="admin">
                            <Menu
                                mode="inline"
                                className="userInfo"
                            >
                                <Menu.Item key="setting:1"> <Icon type="setting" theme="filled" />退出登陆</Menu.Item>
                            </Menu>
                        </div>
                    </Col>
                </Row>
            </Header>
        )
    }
}

export default topNav;