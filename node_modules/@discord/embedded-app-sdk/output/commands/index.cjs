'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var common = require('../schema/common.cjs');
var authenticate = require('./authenticate.cjs');
var authorize = require('./authorize.cjs');
var captureLog = require('./captureLog.cjs');
var encourageHardwareAcceleration = require('./encourageHardwareAcceleration.cjs');
var getEntitlements = require('./getEntitlements.cjs');
var getSkus = require('./getSkus.cjs');
var getChannelPermissions = require('./getChannelPermissions.cjs');
var getPlatformBehaviors = require('./getPlatformBehaviors.cjs');
var openExternalLink = require('./openExternalLink.cjs');
var openInviteDialog = require('./openInviteDialog.cjs');
var openShareMomentDialog = require('./openShareMomentDialog.cjs');
var setActivity = require('./setActivity.cjs');
var setConfig = require('./setConfig.cjs');
var setOrientationLockState = require('./setOrientationLockState.cjs');
var startPurchase = require('./startPurchase.cjs');
var userSettingsGetLocale = require('./userSettingsGetLocale.cjs');
var initiateImageUpload = require('./initiateImageUpload.cjs');
var getChannel = require('./getChannel.cjs');
var getInstanceConnectedParticipants = require('./getInstanceConnectedParticipants.cjs');

function commands(sendCommand) {
    return {
        authenticate: authenticate.authenticate(sendCommand),
        authorize: authorize.authorize(sendCommand),
        captureLog: captureLog.captureLog(sendCommand),
        encourageHardwareAcceleration: encourageHardwareAcceleration.encourageHardwareAcceleration(sendCommand),
        getChannel: getChannel.getChannel(sendCommand),
        getChannelPermissions: getChannelPermissions.getChannelPermissions(sendCommand),
        getEntitlements: getEntitlements.getEntitlements(sendCommand),
        getPlatformBehaviors: getPlatformBehaviors.getPlatformBehaviors(sendCommand),
        getSkus: getSkus.getSkus(sendCommand),
        openExternalLink: openExternalLink.openExternalLink(sendCommand),
        openInviteDialog: openInviteDialog.openInviteDialog(sendCommand),
        openShareMomentDialog: openShareMomentDialog.openShareMomentDialog(sendCommand),
        setActivity: setActivity.setActivity(sendCommand),
        setConfig: setConfig.setConfig(sendCommand),
        setOrientationLockState: setOrientationLockState.setOrientationLockState(sendCommand),
        startPurchase: startPurchase.startPurchase(sendCommand),
        userSettingsGetLocale: userSettingsGetLocale.userSettingsGetLocale(sendCommand),
        initiateImageUpload: initiateImageUpload.initiateImageUpload(sendCommand),
        getInstanceConnectedParticipants: getInstanceConnectedParticipants.getInstanceConnectedParticipants(sendCommand),
    };
}

Object.defineProperty(exports, "Commands", {
    enumerable: true,
    get: function () { return common.Commands; }
});
exports.default = commands;
