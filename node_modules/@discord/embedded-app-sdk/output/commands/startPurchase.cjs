'use strict';

var common = require('../schema/common.cjs');
var responses = require('../schema/responses.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

/**
 *
 */
const startPurchase = (sendCommand) => commandFactory.commandFactory(sendCommand, common.Commands.START_PURCHASE, responses.StartPurchaseResponse);

exports.startPurchase = startPurchase;
