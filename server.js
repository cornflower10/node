// /*check at first*/
// process.on('uncaughtException', function(err) {
//     require('./lib/log').debug("----------------------es---------------------------");
//     require('./lib/log').debug(err.stack);
//     require('./lib/log').debug("----------------------ee---------------------------");
// });

var fs = require('fs');
var path = require('path');
// var Logger = require('./lib/log');
var app = require('./app');

// if (!fs.existsSync('config.js')) {
//     Logger.debug('no config.js');
//     process.exit(0);
// }

require('http').createServer(app).listen(app.get('port'), function(err) {
    // if (err) Logger.debug(err);
   console.log('Express server listening on port: ' + app.get('port'));
    // fs.writeFileSync(require('./config').pidfile, process.pid);
});