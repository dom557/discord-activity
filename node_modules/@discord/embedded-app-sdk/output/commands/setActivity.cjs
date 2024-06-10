'use strict';

var common = require('../schema/common.cjs');
var responses = require('../schema/responses.cjs');
var commandFactory = require('../utils/commandFactory.cjs');

common.Activity.pick({
    state: true,
    details: true,
    timestamps: true,
    assets: true,
    party: true,
    secrets: true,
    buttons: true,
    instance: true,
    supported_platforms: true,
    type: true,
})
    .extend({
    type: common.Activity.shape.type.optional(),
    instance: common.Activity.shape.instance.optional(),
})
    .nullable();
/**
 *
 * @description
 * RPC documentation here: https://discord.com/developers/docs/topics/rpc#setactivity
 * Calling setActivity allows modifying how your activity's rich presence is displayed in the Discord App
 *
 * Supported Platforms
 * | Web | iOS | Android |
 * |-----|-----|---------|
 * | ✅  | ✅  | ✅      |
 *
 * Required scopes: [rpc.activities.write]
 *
 * @example
 * await discordSdk.commands.setActivity({
 *   activity: {
 *     type: 0,
 *     details: 'Details',
 *     state: 'Playing',
 *   },
 * });
 */
const setActivity = (sendCommand) => commandFactory.commandFactory(sendCommand, common.Commands.SET_ACTIVITY, responses.SetActivityResponse);

exports.setActivity = setActivity;
