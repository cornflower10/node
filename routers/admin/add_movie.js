var router = require('express').Router();
var Movie = require();

function renderIndex(req,res){

    var obj = {
        name:'',
    }
//   res.send('name');
  res.render('admin_movie_list',obj);
//   console.log('index');
}
router.get('/',renderIndex);
module.exports = router;