require('dotenv').config()
const http = require("http");
const authRouter = require('./routes/authRouter');
const manageRouter = require('./routes/manageRoute');
const ticketRouter = require('./routes/ticketRouter');
const userRouter = require('./routes/userRouter');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    let url = req.url
    let method = req.method
    console.log(url, method)
    
    if( url== "/api/auth" ){
      authRouter(url, method,res) ;
    }
    if( url.match(/\/api\/user\/([0-9]+)/)){
      userRouter(url, method) ;
    }
    if( url.match(/\/api\/ticket\/([0-9]+)/)){
      ticketRouter(url, method);
    }
    if( url.match(/\/api\/pool-management\/([0-9]+)/)){
      manageRouter(url, method);
    }
})
  
server.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})