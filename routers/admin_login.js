var router = require('express').Router();

function renderIndex(req,res){
    var obj = {
        name:'adminLogin',
    }
//   res.send('name');
  res.render('admin/admin_login',obj);
//   console.log('index');
}
router.get('/',renderIndex);

router.post('/login',function(req,res){
   var obj = req.body
   var result = {}
   if(obj.name==='admin'&&obj.passwd==='123456'){
       req.session.user = obj
       result = {
           success:true,
           msg:'success'
       }
    //    res.redirect('list/');
   }else{
       console.log('登录失败');
       result = {
        success:false,
        msg:'error'
    }
   }
   res.send(result);
});
module.exports = router;