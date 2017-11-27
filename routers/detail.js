var router = require('express').Router();
function renderDetail(req,res){
    var obj = {
        name:'detail',
        flag:true,
        info:req.params.id
    }
    console.log(obj);
//   res.send('name');
  res.render('detail',obj);
//   console.log('index');
}
router.get('/detail/:id',renderDetail);

module.exports = router;