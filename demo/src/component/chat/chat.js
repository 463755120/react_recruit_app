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
        if(!this.props.chat.chatmsg.length){
            this.props.getMsgList()
            this.props.recvMsg()
        }
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
        const Item  = List.Item
        const users = this.props.chat.users
        return(
            <div id="chat-page">
                <NavBar mode="dark">
                    {userid}
                </NavBar>
                {this.props.chat.chatmsg.map(v=>{               
                    return v.from === userid?(
                        <List key={v._id}>
                            <Item>
                                {v.content}
                            </Item>
                        </List>
                    ):(	<List key={v._id}>
                        <Item
                            extra={'avatar'}
                             className='chat-me'
                             >{v.content}</Item>
                    </List>)
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
