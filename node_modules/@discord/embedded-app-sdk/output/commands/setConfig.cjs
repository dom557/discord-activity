'use strict';

var common = require('../schema/common.cjs');
var responses = require('../schema/responses.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

/**
 *
 */
const setConfig = (sendCommand) => commandFactory.commandFactory(sendCommand, common.Commands.SET_CONFIG, responses.SetConfigResponse);

exports.setConfig = setConfig;
