'use strict';

var common = require('../schema/common.cjs');
var responses = require('../schema/responses.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

/**
 * Opens the invite dialog within the discord client, allowing users to share invite links to friends.
 * Does not work in (G)DM contexts (throws RPCError.INVALID_CHANNEL), so should not be called if discordSdk.guildId == null
 * Similarly, if the user does not have Permissions.CREATE_INSTANT_INVITE this command throws RPCErrors.INVALID_PERMISSIONS, so checking the user's permissions via getChannelPermissions is highly recommended.
 */
const openInviteDialog = (sendCommand) => commandFactory.commandFactory(sendCommand, common.Commands.OPEN_INVITE_DIALOG, responses.EmptyResponse);

exports.openInviteDialog = openInviteDialog;
