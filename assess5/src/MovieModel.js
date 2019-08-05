let mongoose= require('mongoose');

let movieSchema = mongoose.Schema({
    _id:{
        type:String,
        required:true
    },
    movieName:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    }
})

let Movie= module.exports=mongoose.model('Movie',movieSchema);