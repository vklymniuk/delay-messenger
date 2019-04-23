const app = require('./app');
const debug = require('debug')('app');
const port = process.env.PORT || 8282;

debug('booting %s', 'application');

let server = app.listen(port, function () {
    console.log('Express server listening on port ' + port);
});

module.exports = server;