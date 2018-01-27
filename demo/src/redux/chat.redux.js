import axios from 'axios'
import io from 'socket.io-client'
const socket = io('ws://localhost:9093')
//获取聊天列表
const MSG_LIST = 'MSG_LIST'
// 读取信息
const MSG_RECV = 'MSG_RECV'
// 标识已读
const MSG_READ = 'MSG_READ'

const initState = {
    chatmsg:[],
    user:{},
    unread:0
}

export function chat(state=initState,action){
    switch (action.type) {
        case MSG_LIST:
			return {...state,users:action.payload.users, chatmsg:action.payload.msgs,unread:action.payload.msgs.filter(v=>!v.read&&v.to==action.payload.userid).length}
            case MSG_RECV:
			const n = action.payload.to==action.userid?1:0
			return {...state,chatmsg:[...state.chatmsg,action.payload],unread:state.unread+n}
        default:
            return state;
    }
}
export function getMsgList(){
    return (dispatch)=>{
        axios.get('/user/getmsglist')
             .then(res=>{
                 if(res.status === 200 && res.data.code === 0){
                    dispatch(msgList(res.data.msgs))
                 }
             })
    }
}
export function sendMsg({from ,to ,msg}){
    return dispatch=>{
        socket.emit('sendmsg',{from ,to ,msg})
    }
}
export function recvMsg(){
    return (dispatch)=>{
        socket.on('recvmsg',function(data){
            dispatch(msgRecv(data))
        })
    }
}
function msgList(msgs){
    return {type:MSG_LIST,payload:{msgs}}
}
function msgRecv(msg){
    console.log(msg,"msgRecv***")
    return {type:MSG_RECV,payload:msg}
}