const express = require('express')
const app = express();
const connection = require('./mysql')
const ejs = require('ejs');
//const { getList } = require('./mysql');
//const bodyParser = require('body-parser')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'ejs')
//app.set('port', process.env.PORT || 3000);
connection.connect();

app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/create',(req,res)=>{
    res.render("create")
})

app.post('/create_process',(req,res)=>{
    res.render("create_process", req.body)
})

app.get('/users', (req, res) => {
    connection.query('SELECT * from bml_contents', (error, rows) => {
      if (error) throw error;
      console.log('User info is: ', rows);
      res.send(rows);
    });
  });

app.get('/read',(req,res)=>{
    connection.query('SELECT * from bml_contents', (error, result) => {
        if (error) throw error;
        console.log(result)
        res.render("read", {list : result});
      });
})

app.get('/read/:id',(req,res)=>{
    res.render("read")
})

app.get('/update/:id',(req,res)=>{
    res.render("update")
})

app.get('/delete',(req,res)=>{
    res.render("delete")
})

app.listen( 8000, function(){
    console.log('connected to port')
})