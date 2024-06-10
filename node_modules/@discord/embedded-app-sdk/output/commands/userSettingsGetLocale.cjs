'use strict';

var common = require('../schema/common.cjs');
var responses = require('../schema/responses.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

/**
 *
 */
const userSettingsGetLocale = (sendCommand) => commandFactory.commandFactory(sendCommand, common.Commands.USER_SETTINGS_GET_LOCALE, responses.UserSettingsGetLocaleResponse);

exports.userSettingsGetLocale = userSettingsGetLocale;
