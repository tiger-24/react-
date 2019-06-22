import React from  "react";
import { Modal} from 'antd';
import WrappedNormalLoginForm from "components/modalForm"

class Modalcom extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible:""
        }
        this.state.visible = this.props.modalFlag;
    }
    componentWillReceiveProps(nextProps,nextState){
        this.state.visible = nextProps.modalFlag;
    }
    render(){
        return(
            <div>
                <Modal
                title="修改球员信息"
                visible={this.state.visible}
                onOk={this.handleOk.bind(this)}
                onCancel={this.handleCancel.bind(this)}
                >
                    <WrappedNormalLoginForm/>
                </Modal>
          </div>
        )
    }
    handleOk(){
        this.setState({
            visible:false,
        })
    }
    handleCancel(){
        this.setState({
            visible:false,
        })
    }
}


export default Modalcom;