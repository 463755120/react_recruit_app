import react from "react"
import axios from 'axios'
import {withRouter} from 'react-router-dom'
import { loadData } from '../../redux/user.redux'
import { connect } from 'react-redux'

@withRouter
//获取用户信息
// 是否登录
// 用户type
// 用户信息是否完整
@connect(
    null,
    {loadData}
)
class  Authroute extends react.Component{
     componentDidMount(){
         const publist = ['/login','/register']
         const pathname = this.props.location.pathname
         if(publist.indexOf(pathname)>-1){
             return null
         }
        axios.get('/user/info')
            .then(res=>{
                if(res.status === 200){
                    if(res.data.code ===0 ){
                        this.props.loadData(res.data.data)
                    } else{
                        this.props.history.push('/login')
                    }
                }
            }) 
     }
     render(){
         return null
     }
}
export default Authroute