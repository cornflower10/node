var config = require('../config');
var result = {
    success:false,
    msg:'未登录'
}
module.exports.auth = function(req,res,next){
    if(req.session.user){
        if(req.session.user.name===config.admin.name
           &&req.session.user.passwd===config.admin.passwd){
            return next();

        }else{
            res.body = result;
            res.redirect('/admin_login');
        }
       
    }
    else{
        res.body = result;
        res.redirect('/admin_login');
    }

}