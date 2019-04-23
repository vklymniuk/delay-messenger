let EventEmitter = require('events');
let fs = require('file-system');

module.exports = new EventEmitter();

//register event listeners
fs.readdirSync(__dirname + '/listeners').forEach(function (file) {
    require(__dirname + '/listeners/' + file);
});