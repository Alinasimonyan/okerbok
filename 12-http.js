const http = require("http")

 const server = http.createServer((req, res) => {
    if (req.url === "/") {
       res.end('Hey gurl')
    }
    if (req.url === "/about") {
        res.end('this is happening now')
 }
res.end ("didn't work :(")
} )

 server.listen(5001)