import React from "react"
import { Form, Icon, Input, Button } from 'antd';
import "./index.css";
import logo from "static/logo2.png";
import {connect} from "react-redux"
import {AsyncLoginAction} from "action/login"

 class Login extends React.Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
           <div className="login_container">
               <div className="logo">
                   <img src={logo} />
               </div>
               <Form onSubmit={this.props.handleSubmit.bind(this)} className="login-form">
                   <Form.Item
                       label="用户名"
                   >
                       {getFieldDecorator('username', {
                           rules: [{ required: true, message: 'Please input your username!' }],
                       })(
                           <Input
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder="Username"
                           />,
                       )}
                   </Form.Item>
                   <Form.Item
                       label="密码"
                   >
                       {getFieldDecorator('password', {
                           rules: [{ required: true, message: 'Please input your Password!' }],
                       })(
                           <Input
                               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type="password"
                               placeholder="Password"
                           />,
                       )}
                   </Form.Item>
                   <Form.Item>

                       <Button type="primary" htmlType="submit" className="login-form-button">
                           登陆
                       </Button>

                   </Form.Item>
               </Form>
           </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

const mapDispatchToProps = (dispatch)=>({
    handleSubmit(e){
        e.preventDefault();
        this.props.form.validateFields((err, values)=>{
            // console.log(values);
            dispatch(AsyncLoginAction(values))
        })
        this.props.history.push("/admin/home")
    }
})

export default connect(mapDispatchToProps)(WrappedNormalLoginForm)