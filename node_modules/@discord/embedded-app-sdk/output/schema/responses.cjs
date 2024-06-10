'use strict';

var index = require('../lib/zod@3.22.4/lib/zod/lib/index.cjs');
var common = require('./common.cjs');
var zodUtils = require('../utils/zodUtils.cjs');
var schemas = require('../generated/schemas.cjs');
var assertUnreachable = require('../utils/assertUnreachable.cjs');

const EmptyResponse = index.object({}).nullable();
const AuthorizeResponse = index.object({
    code: index.string(),
});
const GetGuildsResponse = index.object({
    guilds: index.array(index.object({
        id: index.string(),
        name: index.string(),
    })),
});
const GetGuildResponse = index.object({
    id: index.string(),
    name: index.string(),
    icon_url: index.string().optional(),
    members: index.array(common.GuildMember),
});
const GetChannelResponse = index.object({
    id: index.string(),
    type: zodUtils.zodCoerceUnhandledValue(common.ChannelTypesObject),
    guild_id: index.string().optional().nullable(),
    name: index.string().optional().nullable(),
    topic: index.string().optional().nullable(),
    bitrate: index.number().optional().nullable(),
    user_limit: index.number().optional().nullable(),
    position: index.number().optional().nullable(),
    voice_states: index.array(common.UserVoiceState),
    messages: index.array(common.Message),
});
const GetChannelsResponse = index.object({
    channels: index.array(common.Channel),
});
const NullableChannelResponse = GetChannelResponse.nullable();
const SelectVoiceChannelResponse = GetChannelResponse.nullable();
const SelectTextChannelResponse = GetChannelResponse.nullable();
const VoiceSettingsResponse = index.object({
    input: common.VoiceSettingsIO,
    output: common.VoiceSettingsIO,
    mode: common.VoiceSettingsMode,
    automatic_gain_control: index.boolean(),
    echo_cancellation: index.boolean(),
    noise_suppression: index.boolean(),
    qos: index.boolean(),
    silence_warning: index.boolean(),
    deaf: index.boolean(),
    mute: index.boolean(),
});
const SubscribeResponse = index.object({
    evt: index.string(),
});
const CaptureShortcutResponse = index.object({ shortcut: common.ShortcutKey });
const SetActivityResponse = common.Activity;
const GetSkusResponse = index.object({ skus: index.array(common.Sku) });
const GetEntitlementsResponse = index.object({ entitlements: index.array(common.Entitlement) });
const StartPurchaseResponse = index.array(common.Entitlement).nullable();
const SetConfigResponse = index.object({
    use_interactive_pip: index.boolean(),
});
const UserSettingsGetLocaleResponse = index.object({
    locale: index.string(),
});
const EncourageHardwareAccelerationResponse = index.object({
    enabled: index.boolean(),
});
const GetChannelPermissionsResponse = index.object({
    permissions: index.bigint().or(index.string()),
});
/**
 * Because of the nature of Platform Behavior changes
 * every key/value is optional and may eventually be removed
 */
const GetPlatformBehaviorsResponse = index.object({
    iosKeyboardResizesView: index.optional(index.boolean()),
});
const ResponseFrame = common.ReceiveFramePayload.extend({
    cmd: index.nativeEnum(common.Commands),
    evt: index.null(),
});
function parseResponseData({ cmd, data }) {
    switch (cmd) {
        case common.Commands.AUTHORIZE:
            return AuthorizeResponse.parse(data);
        case common.Commands.CAPTURE_SHORTCUT:
            return CaptureShortcutResponse.parse(data);
        case common.Commands.ENCOURAGE_HW_ACCELERATION:
            return EncourageHardwareAccelerationResponse.parse(data);
        case common.Commands.GET_CHANNEL:
            return GetChannelResponse.parse(data);
        case common.Commands.GET_CHANNELS:
            return GetChannelsResponse.parse(data);
        case common.Commands.GET_CHANNEL_PERMISSIONS:
            return GetChannelPermissionsResponse.parse(data);
        case common.Commands.GET_GUILD:
            return GetGuildResponse.parse(data);
        case common.Commands.GET_GUILDS:
            return GetGuildsResponse.parse(data);
        case common.Commands.GET_PLATFORM_BEHAVIORS:
            return GetPlatformBehaviorsResponse.parse(data);
        case common.Commands.GET_CHANNEL:
            return GetChannelResponse.parse(data);
        case common.Commands.SELECT_TEXT_CHANNEL:
            return SelectTextChannelResponse.parse(data);
        case common.Commands.SELECT_VOICE_CHANNEL:
            return SelectVoiceChannelResponse.parse(data);
        case common.Commands.SET_ACTIVITY:
            return SetActivityResponse.parse(data);
        case common.Commands.GET_SKUS_EMBEDDED:
            return GetSkusResponse.parse(data);
        case common.Commands.GET_ENTITLEMENTS_EMBEDDED:
            return GetEntitlementsResponse.parse(data);
        case common.Commands.SET_CONFIG:
            return SetConfigResponse.parse(data);
        case common.Commands.START_PURCHASE:
            return StartPurchaseResponse.parse(data);
        case common.Commands.SUBSCRIBE:
        case common.Commands.UNSUBSCRIBE:
            return SubscribeResponse.parse(data);
        case common.Commands.USER_SETTINGS_GET_LOCALE:
            return UserSettingsGetLocaleResponse.parse(data);
        // Empty Responses
        case common.Commands.OPEN_EXTERNAL_LINK:
        case common.Commands.SET_ORIENTATION_LOCK_STATE:
        case common.Commands.SET_CERTIFIED_DEVICES:
        case common.Commands.SEND_ANALYTICS_EVENT:
        case common.Commands.OPEN_INVITE_DIALOG:
        case common.Commands.CAPTURE_LOG:
        case common.Commands.GET_SKUS:
        case common.Commands.GET_ENTITLEMENTS:
            return EmptyResponse.parse(data);
        // Generated Responses
        case common.Commands.AUTHENTICATE:
        case common.Commands.INITIATE_IMAGE_UPLOAD:
        case common.Commands.OPEN_SHARE_MOMENT_DIALOG:
        case common.Commands.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:
            const { response } = schemas.Schemas[cmd];
            return response.parse(data);
        default:
            assertUnreachable.default(cmd, new Error(`Unrecognized command ${cmd}`));
    }
}
function parseResponsePayload(payload) {
    return Object.assign(Object.assign({}, payload), { data: parseResponseData(payload) });
}

exports.AuthenticateResponse = schemas.AuthenticateResponseSchema;
exports.InitiateImageUploadResponse = schemas.InitiateImageUploadResponseSchema;
exports.AuthorizeResponse = AuthorizeResponse;
exports.CaptureShortcutResponse = CaptureShortcutResponse;
exports.EmptyResponse = EmptyResponse;
exports.EncourageHardwareAccelerationResponse = EncourageHardwareAccelerationResponse;
exports.GetChannelPermissionsResponse = GetChannelPermissionsResponse;
exports.GetChannelResponse = GetChannelResponse;
exports.GetChannelsResponse = GetChannelsResponse;
exports.GetEntitlementsResponse = GetEntitlementsResponse;
exports.GetGuildResponse = GetGuildResponse;
exports.GetGuildsResponse = GetGuildsResponse;
exports.GetPlatformBehaviorsResponse = GetPlatformBehaviorsResponse;
exports.GetSkusResponse = GetSkusResponse;
exports.NullableChannelResponse = NullableChannelResponse;
exports.ResponseFrame = ResponseFrame;
exports.SelectTextChannelResponse = SelectTextChannelResponse;
exports.SelectVoiceChannelResponse = SelectVoiceChannelResponse;
exports.SetActivityResponse = SetActivityResponse;
exports.SetConfigResponse = SetConfigResponse;
exports.StartPurchaseResponse = StartPurchaseResponse;
exports.SubscribeResponse = SubscribeResponse;
exports.UserSettingsGetLocaleResponse = UserSettingsGetLocaleResponse;
exports.VoiceSettingsResponse = VoiceSettingsResponse;
exports.parseResponsePayload = parseResponsePayload;
