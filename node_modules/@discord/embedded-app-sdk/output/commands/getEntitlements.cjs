'use strict';

var common = require('../schema/common.cjs');
var responses = require('../schema/responses.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

/**
 *
 */
const getEntitlements = (sendCommand) => commandFactory.commandFactory(sendCommand, common.Commands.GET_ENTITLEMENTS_EMBEDDED, responses.GetEntitlementsResponse);

exports.getEntitlements = getEntitlements;
