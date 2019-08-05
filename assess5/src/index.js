let express= require('express')
let apiRoutes= require('./App')
let mongoose= require('mongoose')
let bodyParser= require('body-parser')
let app=express()
var cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/moviesdb',{useNewUrlParser:true});
app.use('/apiRoutes',apiRoutes);

app.get('/',function(req,res){
    console.log("Welcome to Movie app")
})

let port= process.env.port||8000;
app.listen(port,()=>console.log("Server started"));

var db=mongoose.connection.on('error', err => {
    logError(err);
  });

if(db){
    console.log('Movies database connected successfully');
}
else{
    console.log('Error in connecting to database');
}