const authRouter = (url, method,res ) =>{
    console.log(url,method)
    res.writeHead(200, { "Content-type": "text/plain" })
    res.write("Delete Success")
    res.end()
}

module.exports  = authRouter