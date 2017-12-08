module.exports = function(req,res,next){
  consoleParams(req,res,next);
}

function consoleParams(req,res,next){
   console.log('--req.query--',req.query);
   console.log('--req.params--',req.params);
}