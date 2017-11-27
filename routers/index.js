var router = require('express').Router();

function renderIndex(req,res){
    var obj = {
        name:'index',
    }
//   res.send('name');
  res.render('index',obj);
//   console.log('index');
}
router.get('/',renderIndex);
module.exports = router;