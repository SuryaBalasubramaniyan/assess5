let Movie=require('./Movie-model')

exports.create= function(req,res){
    console.log('came insidde create function');
    let movie= new Movie();
    movie._id=req.body._id;
    movie.movieName= req.body.movieName;
    movie.genre= req.body.genre;
    movie.rating= req.body.rating;
    console.log(movie.movieName);
    movie.save(function(err){
        if(err)
        res.send(err);
        else
        res.json({
            status:'Success',
            message:'Movie created successfully'
        })
    });

}

exports.getById= function(req,res){
    Movie.findById(req.params._id,function(err,movie){
        if(err)
        res.send(err);
        else
        res.json({
            status:'Success',
            message:'Movie data loaded successfully',
            data: movie
        })
    })
    console.log('came inside get movie by Id');
}

exports.delete= function(req,res){
    Movie.remove({_id:req.params._id},function(err,movie){
        if(err)
        res.send(err);
        else
        res.json({
            status:'Success',
            message:'Movie data deleted successfully',
            data: movie
        })
    })
    console.log('came inside delete movie by Id');
}

exports.findAll= function(req,res){
    console.log('came inside findAll function');
    Movie.find(function(err,movies){
        if(err)
        res.send(err);
        else
        res.json({
            status:'Success',
            message:'Movies listed successfully!',
            data: movies
        })
    })
}