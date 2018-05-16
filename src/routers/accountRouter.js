const express=require("express")
const path =require("path")
// 路由中间件
const accountRouter=express.Router()
// 获取控制器模块
const accountController=require(path.join(__dirname,"../controllers/accountController.js"))
// 当二级目录包含/login时,执行控制器
accountRouter.get("/login",accountController.getLoginPage)
accountRouter.get("/vcode",accountController.getVscode)
accountRouter.get("/register",accountController.getRegisterPage)
// 导出
module.exports=accountRouter