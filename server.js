
const express = require('express')
const path = require('path')
const ejs = require('ejs')

const app =  express()

const http = require('http').createServer(app)

const port = process.env.PORT || 8080

app.use(express.static(__dirname + '/public'))

app.set('views', path.join(__dirname + '/public'))



app.engine('html', require('ejs').renderFile )

app.set('view engine', 'html')


app.use('/', (req, res) =>{
  res.render('index.html')
})

http.listen(port , () => console.log(`rodando na porta: ${port}`))


