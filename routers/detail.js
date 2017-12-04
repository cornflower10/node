var router = require('express').Router();
var Movie = require('../model/mongoose/model/movie');
function renderDetail(req,res){
  
    Movie.findById(req.params.id,function(error,movie){
         if(error){
             console.log(error);
         }else{
            res.render('detail',
            {
                name:"detail",
                movie:movie
            });
         }
    })
    // console.log(obj);
//   res.send('name');
}
router.get('/detail/:id',renderDetail);

module.exports = router;