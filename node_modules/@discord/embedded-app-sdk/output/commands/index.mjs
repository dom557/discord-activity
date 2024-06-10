export { Commands } from '../schema/common.mjs';
import { authenticate } from './authenticate.mjs';
import { authorize } from './authorize.mjs';
import { captureLog } from './captureLog.mjs';
import { encourageHardwareAcceleration } from './encourageHardwareAcceleration.mjs';
import { getEntitlements } from './getEntitlements.mjs';
import { getSkus } from './getSkus.mjs';
import { getChannelPermissions } from './getChannelPermissions.mjs';
import { getPlatformBehaviors } from './getPlatformBehaviors.mjs';
import { openExternalLink } from './openExternalLink.mjs';
import { openInviteDialog } from './openInviteDialog.mjs';
import { openShareMomentDialog } from './openShareMomentDialog.mjs';
import { setActivity } from './setActivity.mjs';
import { setConfig } from './setConfig.mjs';
import { setOrientationLockState } from './setOrientationLockState.mjs';
import { startPurchase } from './startPurchase.mjs';
import { userSettingsGetLocale } from './userSettingsGetLocale.mjs';
import { initiateImageUpload } from './initiateImageUpload.mjs';
import { getChannel } from './getChannel.mjs';
import { getInstanceConnectedParticipants } from './getInstanceConnectedParticipants.mjs';

function commands(sendCommand) {
    return {
        authenticate: authenticate(sendCommand),
        authorize: authorize(sendCommand),
        captureLog: captureLog(sendCommand),
        encourageHardwareAcceleration: encourageHardwareAcceleration(sendCommand),
        getChannel: getChannel(sendCommand),
        getChannelPermissions: getChannelPermissions(sendCommand),
        getEntitlements: getEntitlements(sendCommand),
        getPlatformBehaviors: getPlatformBehaviors(sendCommand),
        getSkus: getSkus(sendCommand),
        openExternalLink: openExternalLink(sendCommand),
        openInviteDialog: openInviteDialog(sendCommand),
        openShareMomentDialog: openShareMomentDialog(sendCommand),
        setActivity: setActivity(sendCommand),
        setConfig: setConfig(sendCommand),
        setOrientationLockState: setOrientationLockState(sendCommand),
        startPurchase: startPurchase(sendCommand),
        userSettingsGetLocale: userSettingsGetLocale(sendCommand),
        initiateImageUpload: initiateImageUpload(sendCommand),
        getInstanceConnectedParticipants: getInstanceConnectedParticipants(sendCommand),
    };
}

export { commands as default };
