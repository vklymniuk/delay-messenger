//dev dependencies
global.assert = require('assert');
global.chai = require('chai');
global.should = global.chai.should();
global.chai.use(require('chai-counting'));
global.chai.use(require('chai-http'));

//app dependencies
global.config = require('../config');
global.server = require('../server');