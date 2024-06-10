'use strict';

var common = require('../schema/common.cjs');
var responses = require('../schema/responses.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

/**
 * Returns an object with information about platform behaviors
 * This command can be utilized to inform and react to a breaking change in platform behavior
 *
 * @returns {GetPlatformBehaviorsPayload} payload - The command return value
 * @returns {boolean} payload.data.iosKeyboardResizesView - If on iOS the webview is resized when the keyboard is opened
 */
const getPlatformBehaviors = (sendCommand) => commandFactory.commandFactory(sendCommand, common.Commands.GET_PLATFORM_BEHAVIORS, responses.GetPlatformBehaviorsResponse);

exports.getPlatformBehaviors = getPlatformBehaviors;
