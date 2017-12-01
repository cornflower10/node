var router = require('express').Router();

function renderIndex(req,res){
    var obj = {
        name:'adminLogin',
    }
//   res.send('name');
  res.render('admin_login',obj);
//   console.log('index');
}
router.get('/',renderIndex);
module.exports = router;