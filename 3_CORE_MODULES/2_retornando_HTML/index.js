const http = require("http")

const port = 3000

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Contenty-Type', 'text/html')
  res.end('<h1>Hello World HTML</h1> <p>att test</p>')

})

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
})
