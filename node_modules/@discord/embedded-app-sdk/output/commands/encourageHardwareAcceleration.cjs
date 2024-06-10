'use strict';

var common = require('../schema/common.cjs');
var responses = require('../schema/responses.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

/**
 *
 */
const encourageHardwareAcceleration = (sendCommand) => commandFactory.commandFactory(sendCommand, common.Commands.ENCOURAGE_HW_ACCELERATION, responses.EncourageHardwareAccelerationResponse);

exports.encourageHardwareAcceleration = encourageHardwareAcceleration;
