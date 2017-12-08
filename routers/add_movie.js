var router = require('express').Router();
var Movie = require('../model/mongoose/model/movie');
var auth = require('../controller/authController');

function renderIndex(req,res){
    var obj = {
         name:'添加'
    }

    res.render('admin/addmovie',obj);
}
router.get('/',renderIndex);

function renderAdd(req,res){
    var obj = req.body;
    Movie = new Movie({
        title:obj.title,
        doctor:obj.doctor,
        country:obj.country,
        year:"",
        poster:"",
        flash:"",
        summary:"",
        language:"",
    });
    Movie.save(function(error,movie){
        if(error){
            console.log(error);
        }else{
            var o={
                name:'详情',
                movie:movie
            }
            res.render('detail',o);
        }

    });
}
router.post('/add',auth.auth,renderAdd);

module.exports = router;