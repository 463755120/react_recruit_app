import React from 'react'
import {NavBar,InputItem, TextareaItem, Button} from 'antd-mobile'
import AvatarSelector from '../../component/avatar-selector/avatar-selector'
class Bossinfo extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
			desc:'',
			company:'',
			money:''
        }
    }
    onChange(key,val){
        this.setState({
            [key]:val
        })
    }
    render(){
        return <div>
                <NavBar mode="dark" >BOSS完善信息页</NavBar>
                <AvatarSelector ></AvatarSelector>
                <InputItem onChange={v=>{this.onChange("title",v) }}>
                    招聘职位
                </InputItem>
                <InputItem onChange={(v)=>this.onChange('company',v)}>
					公司名称
				</InputItem>
				<InputItem onChange={(v)=>this.onChange('money',v)}>
					职位薪资
				</InputItem>
				<TextareaItem
					onChange={(v)=>this.onChange('desc',v)}
					rows={3}
					autoHeight
					title='职位要求'
				>
					
				</TextareaItem>
        </div>
    }
}
export default Bossinfo