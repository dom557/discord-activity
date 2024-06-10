'use strict';

var schemas = require('../generated/schemas.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

/**
 * Gets all participants connected to the instance
 */
const getInstanceConnectedParticipants = commandFactory.schemaCommandFactory(schemas.Command.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);

exports.getInstanceConnectedParticipants = getInstanceConnectedParticipants;
