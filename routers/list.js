var router = require('express').Router();
var Movie = require('../model/mongoose/model/movie');

function renderList(req,res){
    
    console.log(obj);
//   res.send('name');
  res.render('list',obj);
//   console.log('index');
}
router.get('/',renderList);

module.exports = router;