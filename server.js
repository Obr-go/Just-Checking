var express = require('express')
var hbs=require('hbs')

var app=express();
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
  res.render('home',{
    name:"Gagan",
    C_dt: new Date().toString()
    })
})


app.get('/about',(req,res)=>{
  res.render('about',{
    arr:['Gagan', 'Oberoi','123','456']
  })
})


app.listen(3000)
