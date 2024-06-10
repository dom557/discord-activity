'use strict';

var common = require('../schema/common.cjs');
var responses = require('../schema/responses.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

/**
 * Returns a bigint representing Permissions for the current user in the currently connected channel. Use PermissionsUtils to calculate if a user has a particular permission.
 * Always returns `0n` (no valid permissions) in a (G)DM context, so is unnecessary to call when discordSdk.guildId == null.
 */
const getChannelPermissions = (sendCommand) => commandFactory.commandFactory(sendCommand, common.Commands.GET_CHANNEL_PERMISSIONS, responses.GetChannelPermissionsResponse);

exports.getChannelPermissions = getChannelPermissions;
