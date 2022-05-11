class Middleware {
    constructor() {
        this.middlewares = [];
    }

    use(fn) {
        this.middlewares.push(fn);
    }

    executeMiddleware(middlewares, next) {
        const composition = middlewares.reduceRight((next, fn) => v => {
            fn(next)
        }, next);       
        composition();
    }

    run() {
        this.executeMiddleware(this.middlewares, ( next) => {
           
        });
    }
}

module.exports  = Middleware