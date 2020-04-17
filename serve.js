const express = require('express')
const path = require('path')
var secure = require('ssl-express-www');
const app = express()

app.use(express.static(path.join(__dirname, 'build')))
app.use(secure);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(process.env.PORT || 9001)
