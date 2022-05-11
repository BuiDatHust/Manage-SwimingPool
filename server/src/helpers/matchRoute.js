const matchRoute = (route,url) => {
    return url.startsWith(route) ;
}

module.exports  = matchRoute