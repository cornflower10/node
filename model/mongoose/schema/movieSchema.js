var mongoose = require('mongoose');
// 在声明中指定 ObjectId 类型
let ObjectId = mongoose.Schema.Types.ObjectId;
var movieSchema = new mongoose.Schema({
    title:String,
    doctor:String,
    country:String,
    year:Number,
    poster:String,
    flash:String,
    summary:String,
    language:String,
    catergory:{
        type:ObjectId,
        ref:'categoryModel'
    },
    meta:{
        createAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }

    }
    
});
movieSchema.pre('save',function(next){
    var movie = this;
    if(this.isNew){
        this.meta.createAt = Date.now();
    }else{
        this.meta.updateAt = Date.now();
    }
     next();
});

movieSchema.statics={
    fetch:function(cb){
        return this
        .find({})
        .sort('meta.updateAt')
        exec(cb)
    },
    findById:function(id,cb){
        return this
        .findOne({_id:id})
        exec(cb)
    }
}

 module.exports = movieSchema;