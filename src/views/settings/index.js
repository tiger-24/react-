import React from "react";
import { Card,Button,Table } from 'antd';
import { plist } from "api/plist";
import XLSX from "xlsx";
import Modalcom from "components/modal";
import {modalAction} from "action/modalActions";
import {connect} from "react-redux";

class Settings extends React.Component{
    constructor(){
      super();
      this.state = {
        dataSource:[],
        columns:[],
        flag:true,
        modalFlag:false,
      }
    }
    render(){
      let {dataSource,columns,flag,modalFlag} = this.state;
        return(
            <div style={{  padding: '10px' }}>
                <Card title="球员信息" bordered={false} extra={<Button onClick={this.exportFile.bind(this)}>导出excel</Button>}>
                    <Table dataSource={dataSource} columns={columns}
                        rowKey={(record)=>record.id}
                        loading={flag} 
                        pagination={{
                          pageSize:6,
                          total:100,
                          hideOnSinglePage:true,
                          onChange:this.handleToPage.bind(this),
                        }}
                    />
                    <Modalcom modalFlag={modalFlag}/>
                </Card>
            </div>
        )
    }

    handleToPage(page,pageSize){
        console.log(page,pageSize);
        //在这里发送AJAX
        //前端首先获取当前页数，规定好每页显示几条数据，点击按钮发送ajax
        //服务端接收到page和pageSize从数据库中拿数据
        //limit(显示多少条) skip(跳过多少条)
        //db.表名.find().skip((page-1)*pagesize).limit(pagesize)
    }

    async componentDidMount() {
      let data = await plist();
      if(data){
        this.setPlist(data);
      }
    }

    setPlist(data){
      let keys = Object.keys(data.data.list[0]);
      let mapKeys = {
        id:"序号",
        name:"球员名字",
        address:"球员地址",
        price:"球员价值",
        phone:"球员电话"
      };
      let columns = keys.map((item)=>{
        return{
          title:mapKeys[item],
          dataIndex:item,
          key:item,
        }
      });
      columns.push({
        title:"操作",
        key:"operation",
        render:(record)=>
          <div>
            <Button size="small" type="primary" onClick={this.handleModify.bind(this,record)}>修改</Button>
            <Button size="small" type="danger" onClick={this.handleDel.bind(this.record)}>删除</Button>
          </div>
        
      })
      this.setState({
        dataSource:data.data.list,
        columns,
        flag:false,
      })
    }

    handleDel(record){
      console.log("...我删除了!...");
    }

    handleModify(record){
      this.setState({
        modalFlag:true,
      })
      this.props.modalSave(record);
      // console.log(record);
    }

    exportFile() {
      let data = [Object.keys(this.state.dataSource[0])];
      for(var i=0;i<this.state.dataSource.length;i++){
        data.push(Object.values(this.state.dataSource[i]));
      }

      const ws = XLSX.utils.aoa_to_sheet(data);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
      XLSX.writeFile(wb, "sheetjs.xlsx")
    };

    
}

const mapDispatchToProps = (dispatch)=>({
  modalSave(val){
    dispatch(modalAction(val))
  }
})

export default connect(null,mapDispatchToProps)(Settings);