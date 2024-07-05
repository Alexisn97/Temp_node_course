const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url == '/'){
      res.end('Welcome to our First Home Page')         
    }
    if (req.url =='/about'){
        res.end('Here is more about our history')
    }
    res.end(`
        <h1>Ooops</h1>
        <p>We can't seems to find page you are looking for</p>
        <a href="/">Back Home</a>
        `)
})

server.listen(5000)