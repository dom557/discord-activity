'use strict';

var common = require('../schema/common.cjs');
var responses = require('../schema/responses.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

/**
 *
 */
const captureLog = (sendCommand) => commandFactory.commandFactory(sendCommand, common.Commands.CAPTURE_LOG, responses.EmptyResponse);

exports.captureLog = captureLog;
