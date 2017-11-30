var router = require('express').Router();
var Movie = require('../model/mongoose/model/movie');

function renderList(req,res){
    // Movie.fetch(function(error,result){
    //     if(error){
    //       console.log(error);
    //     }else{
    //         res.render('list',
    //         {
    //             name:"列表",
    //             movies:result
    //         });
    //     }
    // });
  Movie.find({},function(error,movies){
       if(error){
          console.log(error);
        }else{
            res.render('list',
            {
                name:"列表",
                movies:movies
            });
        }
  });
  
//   res.send('name');
 
//   console.log('index');
}
router.get('/',renderList);

module.exports = router;