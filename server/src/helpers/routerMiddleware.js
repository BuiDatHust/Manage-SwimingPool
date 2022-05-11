const matchRoute = require("./matchRoute");

let Router = class {
    constructor(url,numRoute){
        this.url = url ;
        this.numRoute = numRoute ;
        this.routes = [] ;  
        this.makePromise()
    }

    setRoute(route,routeFunc){
        this.route = route ;
        this.routes.push(route);

        this.routePromise.then((val) => {
            if(matchRoute(this.route,this.url)){
                console.log("match")
                routeFunc() ;
            }else{
                console.log("not match")
                return val ;
            }
        }) ;
    }

    makePromise = function(){
        this.routePromise = new Promise(function(resolve, reject){
            resolve(0)
        })
        this.routePromise.catch(err => console.log(err)) ;
    }
}

module.exports = Router