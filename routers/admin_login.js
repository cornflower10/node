var router = require('express').Router();
var config = require('../config');

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
   if(obj.name===config.admin.name&&obj.passwd===config.admin.passwd){
       req.session.user = obj
       console.log('----sessionId------>'+req.sessionID);
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