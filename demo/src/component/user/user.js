import React from 'react'
import {connect} from 'react-redux'
import {Result, List,Brief,WhiteSpace,Modal} from 'antd-mobile'
@connect(
    state=>state.user
)
class User extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const props = this.props
        const Item = List.Item
        const Brief = Item.Brief
        return props.user?(
            <div>
                <Result
                    img={<img src={require(`../img/${props.avatar}.png`)} style={{width:50}} alt="" />}
                    title={props.user}
                    message={props.type === 'boss'?props.company:null}
                ></Result>
                <List
                    
                ></List>
            </div>
        ):null
    }
}
export default User