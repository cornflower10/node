var router = require('express').Router();
var Movie = require('../model/mongoose/model/movie');

function renderList(req,res){
    var obj={
        name:'列表',
        movies:[]
    }
    Movie.fetch(function(error,result){
        if(error){
          console.log(error);
        }else{
            obj.movies = result;
        }
        console.log(obj);
    });
  
//   res.send('name');
  res.render('list',obj);
//   console.log('index');
}
router.get('/',renderList);

module.exports = router;