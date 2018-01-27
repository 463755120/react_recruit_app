import React from 'react'
import {List,InputItem,NavBar,Icon, Grid} from 'antd-mobile'
import io from 'socket.io-client'
import {connect} from 'react-redux'
import {getMsgList,sendMsg,recvMsg} from '../../redux/chat.redux'
const socket = io('ws://localhost:9093')
@connect(
    state=>state,
    {getMsgList,sendMsg,recvMsg}    
)
class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state = {text:'',msg:[]}
    }
    componentDidMount() {
        this.props.getMsgList()
        this.props.recvMsg()
    }
    handleSubmit(){
        const from  = this.props.user._id
        const to = this.props.match.params.user
        const msg = this.state.text
        this.props.sendMsg({from,to,msg})
        this.setState({
            text:''
        })
    }
    render(){
        const userid = this.props.match.params.user           
        console.log(this.props)
        return(
            <div>
                {this.props.chat.chatmsg.map(v=>{
                    console.log(v.content)
                    return <p key={v._id}>{v.content}</p>
                })}
                <div className="stick-footer">
                    <List>
                        <InputItem
                            placeholder="请输入"
                            value={this.state.text}
                            onChange={v=>{
                                this.setState({text:v})
                            }}
                            extra={
                                <div>
                                    <span
                                        style={{marginRight:15}}
                                        onClick={()=>{ }}
                                    ></span>
                                    <span onClick={()=>this.handleSubmit()} >发送</span>
                                </div>
                            }
                        ></InputItem>
                    </List>
                </div>
            </div>
        )
    }
}
export default Chat
