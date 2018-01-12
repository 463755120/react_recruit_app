const express = require("express")
const Router = express.Router()
const model = require('./model')
const utils = require('utility')

const User = model.getModel('user')
Router.get('/list',function(req,res){
    User.find({},function(err,doc){
        return res.json(doc)
    })
})
Router.post('/register',function(req,res){
    console.log(req.body)
    const {user,pwd,type} = req.body
    User.findOne({user},function(err,doc){
        if(doc){
            return res.json({code:1,msg:"用户名重复"})
        } 
        User.create({user,type,pwd:md5Pwd(pwd)},function(err,doc){
            if(err){
                return res.json({code:1,msg:"后端报错了"+err})
            } 
            return res.json({code:0})
        })
    })

})
Router.get('/info',function(req,res){
    return res.json({code:0})
})
function md5Pwd(pwd){
    const salt= "s4dasd/asd*a*sd/asd/32/4/35/**&^%$#@$%^"
    return utils.md5(utils.md5(pwd+salt))
}
module.exports =  Router