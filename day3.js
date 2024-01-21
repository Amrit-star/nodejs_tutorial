const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/about', (req, res)=>{
    res.send("This is about me")
})

app.get('/contact', (req, res)=>{
    var detail = {
        name: 'Amrit Kumar',
        college: 'IIT Patna',
        email: 'amritkumarlive06@gmail.com',
        mobile: 7979907264
    }
    res.send(detail)
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})