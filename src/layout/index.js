import React from "react";
import { Layout} from 'antd';
import SliderNav from "common/sliderNav";
import TopNav from "common/topNav";

const { Content, Sider } = Layout;

class LayoutCom extends React.Component{
    render(){
        return(
            <Layout style={{height:"100%"}}>

                <TopNav/>

                <Layout>
                    <Sider>
                    
                        <SliderNav/>

                    </Sider>
                    <Layout style={{ padding: '0 24px 24px',margin: '24px 0'}}>
                        <Content
                        style={{
                            background: '#fff',
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                        >
                           {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}


export default LayoutCom;