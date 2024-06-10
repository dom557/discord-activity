'use strict';

var common = require('../schema/common.cjs');
var responses = require('../schema/responses.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

/**
 *
 */
const openExternalLink = (sendCommand) => commandFactory.commandFactory(sendCommand, common.Commands.OPEN_EXTERNAL_LINK, responses.EmptyResponse);

exports.openExternalLink = openExternalLink;
