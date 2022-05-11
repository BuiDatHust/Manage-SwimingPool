const http = require("http");
const matchRoute = require("../helpers/matchRoute");
const Router = require("../helpers/routerMiddleware");
const Middleware = require("./Middleware");

class TidaNode {
    constructor(){
        this.req= {}
        this.res= {}
        this.middleware = new Middleware() 
        this.routes = []

        this.server = http.createServer()
        this.server.on('request', (req, res) => {
            this.req = req  
            this.res = res
            
            for(let r of this.routes) {
                if( r.method == req.method && matchRoute(r.route,req.url) ){
                    r.fn(this.req,this.res)
                }
            }
        });
    }

    listen(port,cb) {
        this.server.listen(port, cb())
    }

    get(route,cb){
        this.routes.push({ method: "GET", route: route, fn: cb}) 
        console.log(this.routes)
    }
    post(route,cb){
        this.routes.push({ method: "POST", route: route, fn: cb}) 
        console.log(this.routes)
    }
    put(route,cb){
        this.routes.push({ method: "PUT", route: route, fn: cb}) 
        console.log(this.routes)
    }
    delete(route,cb){
        this.routes.push({ method: "DELETE", route: route, fn: cb}) 
        console.log(this.routes)
    }

    use(fn){
        this.middleware.use(function(next){
            fn() ;
            next() ;  
        }) ; 
    }
    startMiddleware(){
        this.middleware.run()
    }

}

module.exports  = TidaNode