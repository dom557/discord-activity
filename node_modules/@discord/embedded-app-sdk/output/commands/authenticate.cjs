'use strict';

var schemas = require('../generated/schemas.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

/**
 * Authenticate Activity
 */
const authenticate = commandFactory.schemaCommandFactory(schemas.Command.AUTHENTICATE);

exports.authenticate = authenticate;
