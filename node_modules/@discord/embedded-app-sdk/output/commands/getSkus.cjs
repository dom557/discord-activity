'use strict';

var common = require('../schema/common.cjs');
var responses = require('../schema/responses.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

/*
 *
 */
const getSkus = (sendCommand) => commandFactory.commandFactory(sendCommand, common.Commands.GET_SKUS_EMBEDDED, responses.GetSkusResponse);

exports.getSkus = getSkus;
