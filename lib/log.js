var winston = require('winston');
var config = require('../config');
var libObject = require('../lib/object');

exports.config = function(key) {
    exports.thirdlogger = new winston.Logger({
        exitOnError: config[key].exitOnError,
        transports: [
            new(winston.transports.Console)(config[key].console),
            new(require('winston-daily-rotate-file'))(config[key].dailyRotateFile)
        ]
    });
}
exports.config('winston');
["debug", "info", "error", "warn"].forEach(function(level) {
    exports[level] = function(msg) {
        for (var key in arguments) {
            var p = arguments[key];
            if (typeof p == 'function') {
                arguments[key] = {}.toString.call(p);
            }
            if (typeof p == 'string' || typeof p == 'boolean' || !p) continue;
            if (libObject.isJson(p) || p.length) {
                arguments[key] = JSON.stringify(p);
            }
        }
        exports.thirdlogger[level].apply(exports.thirdlogger, arguments);
    };
});