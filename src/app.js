// 导入页面
const express=require("express")
const path =require("path")
// 调用express
const app=express()
// 获取路由中间件
const accountRouter=require(path.join(__dirname,"routers/accountRouter.js"))
// 调用路由中间件
app.use("/account",accountRouter)
// 调用静态资源中间件
app.use(express.static(__dirname + '/statics'))

app.listen(3000,"127.0.0.1",err=>{
    if(err){
        console.log(err)
    }else {
        console.log("start ok")
    }
})