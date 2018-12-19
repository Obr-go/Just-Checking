var express = require('express')
var hbs=require('hbs')

var app=express();
var port = process.env.PORT || 3000;

app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res)=>{
  res.render('home',{
    name:"Gagan",
    C_dt: new Date().toString()
    })
})

arr1=[23,34,55,76,33]

var vl=0;
app.get('/about',(req,res)=>{
  res.render('about',{
   arr:arr1,
   arr_sum:arr1.forEach(function(num){
      vl=vl+num;
   }),
   arr_sum:vl
  })
})


app.listen(port, function(){
    console.log("App is up and running")
});
