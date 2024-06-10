'use strict';

var schemas = require('../generated/schemas.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

/**
 * Opens the Share Moment Dialog in the user's client, allowing them to share the media at mediaUrl as a message.
 *
 * @param {string} mediaUrl - a Discord CDN URL for the piece of media to be shared.
 * @returns {Promise<void>}
 */
const openShareMomentDialog = commandFactory.schemaCommandFactory(schemas.Command.OPEN_SHARE_MOMENT_DIALOG);

exports.openShareMomentDialog = openShareMomentDialog;
