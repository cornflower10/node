var router = require('express').Router();

function renderIndex(req,res){
    var obj = {
        name:'login',
    }
//   res.send('name');
  res.render('login',obj);
//   console.log('index');
}
router.get('/login',renderIndex);

module.exports = router;