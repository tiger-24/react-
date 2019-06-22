import React from "react"
import {  Form, Icon, Input} from 'antd';
import "./index.css";
import {connect} from "react-redux";

class FormCom extends React.Component{
    render(){
        // console.log(this.props);
        return(
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item
                    label="球员姓名"
                    validateStatus="success"
                    onFieldsChange={this.handleChange.bind(this)}
                    className="Fitem"
                >

                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                            // value={data.name}
                        />
                </Form.Item>

                <Form.Item
                    label="球员地址"
                    validateStatus="success"
                    onFieldsChange={this.handleChange.bind(this)}
                    className="Fitem"
                >

                    <Input
                        prefix={<Icon type="twitter" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Address"
                        // value={data.address}
                    />
                </Form.Item>

                <Form.Item
                    label="球员价值"
                    validateStatus="success"
                    onFieldsChange={this.handleChange.bind(this)}
                    className="Fitem"
                >

                    <Input
                        prefix={<Icon type="alipay" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Price"
                        // value={data.price}
                    />
                </Form.Item>

                <Form.Item
                    label="球员电话"
                    validateStatus="success"
                    onFieldsChange={this.handleChange.bind(this)}
                    className="Fitem"
                >
                    
                    <Input
                        prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Phone"
                        // value={data.phone}
                    />
                </Form.Item>
            </Form>
        )
    }
    // handleSubmit(e){
    //    e.preventDefault()
    // }
    handleChange(record){
        console.log(record)
    }
}

const mapStateToProps = (state)=>({
    data:state.modal.data
})

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(FormCom);

export default connect(mapStateToProps)(WrappedNormalLoginForm);
