let express = require('express')
var bodyParser = require('body-parser')
let app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/test', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
  console.log(req.body.asdf)
  res.send('Hello, World')
})

let server = app.listen(8888, 'localhost', () => {
  let host = server.address().address
  let port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})