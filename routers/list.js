var router = require('express').Router();

function renderList(req,res){
    var obj = {
        name:'list',
        flag:true,
        products:['1','2','3']
        

    }
    console.log(obj);
//   res.send('name');
  res.render('list',obj);
//   console.log('index');
}
router.get('/',renderList);

module.exports = router;