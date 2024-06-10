import EventEmitter from './lib/eventemitter3@4.0.7/lib/eventemitter3/index.mjs';
import bigInt from './lib/big-integer@1.6.48/lib/big-integer/BigInteger.mjs';
import transform from './lib/lodash.transform@4.6.0/lib/lodash.transform/index.mjs';
import { Platform } from './Constants.mjs';
import getDefaultSdkConfiguration from './utils/getDefaultSdkConfiguration.mjs';
import { ChannelTypesObject } from './schema/common.mjs';

class DiscordSDKMock {
    constructor(clientId, guildId, channelId) {
        this.platform = Platform.DESKTOP;
        this.instanceId = '123456789012345678';
        this.configuration = getDefaultSdkConfiguration();
        this.source = null;
        this.sourceOrigin = '';
        this.frameId = 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa';
        this.eventBus = new EventEmitter();
        this.clientId = clientId;
        this.commands = this._updateCommandMocks({});
        this.guildId = guildId;
        this.channelId = channelId;
    }
    _updateCommandMocks(newCommands) {
        // Wrap all the command functions with logging
        this.commands = transform(Object.assign({}, commandsMockDefault, newCommands), (mock, func, name) => {
            mock[name] = async (...args) => {
                console.info(`DiscordSDKMock: ${String(name)}(${JSON.stringify(args)})`);
                return await func(...args);
            };
        });
        // redundant return here to satisfy the constructor defining commands
        return this.commands;
    }
    emitReady() {
        this.emitEvent('READY', undefined);
    }
    close(...args) {
        console.info(`DiscordSDKMock: close(${JSON.stringify(args)})`);
    }
    ready() {
        return Promise.resolve();
    }
    async subscribe(event, listener, ..._subscribeArgs) {
        return await this.eventBus.on(event, listener);
    }
    async unsubscribe(event, listener, ..._unsubscribeArgs) {
        return await this.eventBus.off(event, listener);
    }
    emitEvent(event, data) {
        this.eventBus.emit(event, data);
    }
}
/** Default return values for all discord SDK commands */
const commandsMockDefault = {
    authorize: () => Promise.resolve({ code: 'mock_code' }),
    authenticate: () => Promise.resolve({
        access_token: 'mock_token',
        user: {
            username: 'mock_user_username',
            discriminator: 'mock_user_discriminator',
            id: 'mock_user_id',
            avatar: null,
            public_flags: 1,
        },
        scopes: [],
        expires: new Date(2121, 1, 1).toString(),
        application: {
            description: 'mock_app_description',
            icon: 'mock_app_icon',
            id: 'mock_app_id',
            name: 'mock_app_name',
        },
    }),
    setActivity: () => Promise.resolve({
        name: 'mock_activity_name',
        type: 0,
    }),
    getChannel: () => Promise.resolve({
        id: 'mock_channel_id',
        name: 'mock_channel_name',
        type: ChannelTypesObject.GUILD_TEXT,
        voice_states: [],
        messages: [],
    }),
    getSkus: () => Promise.resolve({ skus: [] }),
    getEntitlements: () => Promise.resolve({ entitlements: [] }),
    startPurchase: () => Promise.resolve([]),
    setConfig: () => Promise.resolve({ use_interactive_pip: false }),
    userSettingsGetLocale: () => Promise.resolve({ locale: '' }),
    openExternalLink: () => Promise.resolve(null),
    encourageHardwareAcceleration: () => Promise.resolve({ enabled: true }),
    captureLog: () => Promise.resolve(null),
    setOrientationLockState: () => Promise.resolve(null),
    openInviteDialog: () => Promise.resolve(null),
    getPlatformBehaviors: () => Promise.resolve({
        iosKeyboardResizesView: true,
    }),
    getChannelPermissions: () => Promise.resolve({ permissions: bigInt(1234567890) }),
    openShareMomentDialog: () => Promise.resolve(null),
    initiateImageUpload: () => Promise.resolve({
        image_url: 'https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b52aa9e99b832574a53_full_logo_blurple_RGB.png',
    }),
    getInstanceConnectedParticipants: () => Promise.resolve({ participants: [] }),
};

export { DiscordSDKMock, commandsMockDefault };
