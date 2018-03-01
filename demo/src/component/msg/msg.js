import React from 'react'
import {connect} from 'react-redux' 
import {List,Badge} from 'antd-mobile'
 
@connect(
	state=>state
)
class Msg extends React.Component{
    render(){
        return (<div>
            <h4>聊天列表页</h4>
        </div>)
    }
}
export default Msg