require('dotenv').config()
const http = require("http");
const { matchRoute } = require('./helpers/matchRoute');
const Router = require('./helpers/routerMiddleware');
const authRouter = require('./routes/authRouter');
const manageRouter = require('./routes/manageRoute');
const ticketRouter = require('./routes/ticketRouter');
const userRouter = require('./routes/userRouter');
const TidaNode = require('./tidaNode/tida');

const PORT = process.env.PORT || 5000;


// const server = http.createServer((req, res) => {
//     let url = req.url
//     let method = req.method

//     console.log(Router)
//     let router = new Router(url,2) ; 

//     router.setRoute("auth",authRouter)
//     router.setRoute("users",userRouter)
    
//     // if( matchRoute() || url=="api/auth" ){
//     //   authRouter(matchRoute[1],method, res ) 
//     // }
//     // else if(route || url=="api/users"){
//     //   userRouter(route[1], method,res) 
//     // }
//     // else if(route || url=="api/tickets"){
//     //   ticketRouter(route[1], method, res )
//     // }else if(route || url=="api/check-in"){
//     //   checkInRouter(route[1], method, res )
//     // }else if(route || url=="api/finance-managements"){
//     //   financialRouter(route[1], method, res)
//     // }else{
//     //   res.writeHead(404, { "Content-Type": "application/json" });
//     //   res.end(JSON.stringify({ message: "Route not found" }));
//     // }
// })
  
// server.listen(PORT, () => {
//     console.log(`Server running on Port ${PORT}`)
// })


const tidaNode = new TidaNode() 
tidaNode.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`)
})

tidaNode.use(function(){
    console.log("first middleware") 
})
tidaNode.use(function(){
    console.log("second middleware") 
})

tidaNode.get("/api/auth",function(req,res){
    console.log("get")
})
tidaNode.post("/api/auth",function(req,res){
    console.log("post")
})

