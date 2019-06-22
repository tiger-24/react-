import React from "react";
import wangEditor from "wangeditor";

class Editor extends React.Component{

    render(){
        return(
            <div ref="content_editor">
                ad as 
            </div>
        )
    }
    componentDidMount(){
        this.editor2 = new wangEditor(this.refs.content_editor)
        this.editor2.create()
    }
}


export default Editor;