var router = require('express').Router();
var Movie = require('../../model/mongoose/model/movie');

function renderIndex(req,res){
    var obj = req.body;
    Movie = new Movie({
        title:obj.title,
        doctor:obj.doctor,
        country:obj.country,
        year:obj.year,
        poster:obj.poster,
        flash:obj.flash,
        summary:obj.summary,
        language:obj.language,
    });
    Movie.save(function(error,movie){
        if(error){
            console.log(error);
        }else{
            res.render('detail',movie);
        }

    });
}
router.get('/',renderIndex);
module.exports = router;