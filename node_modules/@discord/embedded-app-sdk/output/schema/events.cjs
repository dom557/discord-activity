'use strict';

var index = require('../lib/zod@3.22.4/lib/zod/lib/index.cjs');
var Constants = require('../Constants.cjs');
var common = require('./common.cjs');
var zodUtils = require('../utils/zodUtils.cjs');
var schemas = require('../generated/schemas.cjs');

// ERROR is sent as evt but is a special case, so is excluded from Events enum
const ERROR = 'ERROR';
exports.Events = void 0;
(function (Events) {
    Events["READY"] = "READY";
    Events["VOICE_STATE_UPDATE"] = "VOICE_STATE_UPDATE";
    Events["SPEAKING_START"] = "SPEAKING_START";
    Events["SPEAKING_STOP"] = "SPEAKING_STOP";
    Events["ACTIVITY_LAYOUT_MODE_UPDATE"] = "ACTIVITY_LAYOUT_MODE_UPDATE";
    Events["ORIENTATION_UPDATE"] = "ORIENTATION_UPDATE";
    Events["CURRENT_USER_UPDATE"] = "CURRENT_USER_UPDATE";
    Events["ENTITLEMENT_CREATE"] = "ENTITLEMENT_CREATE";
    Events["THERMAL_STATE_UPDATE"] = "THERMAL_STATE_UPDATE";
    Events["ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE"] = "ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE";
})(exports.Events || (exports.Events = {}));
const DispatchEventFrame = common.ReceiveFramePayload.extend({
    evt: index.nativeEnum(exports.Events),
    nonce: index.string().nullable(),
    cmd: index.literal(common.DISPATCH),
    data: index.object({}).passthrough(),
});
const ErrorEvent = common.ReceiveFramePayload.extend({
    evt: index.literal(ERROR),
    data: index.object({
        code: index.number(),
        message: index.string().optional(),
    })
        .passthrough(),
    cmd: index.nativeEnum(common.Commands),
    nonce: index.string().nullable(),
});
const OtherEvent = DispatchEventFrame.extend({
    evt: index.string(),
});
const EventFrame = index.union([DispatchEventFrame, OtherEvent, ErrorEvent]);
function parseEventPayload(data) {
    const event = data.evt;
    if (!(event in exports.Events)) {
        throw new Error(`Unrecognized event type ${data.evt}`);
    }
    const eventSchema = EventSchema[event];
    return eventSchema.payload.parse(data);
}
const EventSchema = {
    /**
     * @description
     * The READY event is emitted by Discord's RPC server in reply to a client
     * initiating the RPC handshake. The event includes information about
     * - the rpc server version
     * - the discord client configuration
     * - the (basic) user object
     *
     * Unlike other events, READY will only be omitted once, immediately after the
     * Embedded App SDK is initialized
     *
     * # Supported Platforms
     * | Web | iOS | Android |
     * |-----|-----|---------|
     * | ✅  | ✅  | ✅      |
     *
     * Required scopes: []
     *
     */
    [exports.Events.READY]: {
        payload: DispatchEventFrame.extend({
            evt: index.literal(exports.Events.READY),
            data: index.object({
                v: index.number(),
                config: index.object({
                    cdn_host: index.string().optional(),
                    api_endpoint: index.string(),
                    environment: index.string(),
                }),
                user: index.object({
                    id: index.string(),
                    username: index.string(),
                    discriminator: index.string(),
                    avatar: index.string().optional(),
                })
                    .optional(),
            }),
        }),
    },
    [exports.Events.VOICE_STATE_UPDATE]: {
        payload: DispatchEventFrame.extend({
            evt: index.literal(exports.Events.VOICE_STATE_UPDATE),
            data: common.UserVoiceState,
        }),
        subscribeArgs: index.object({
            channel_id: index.string(),
        }),
    },
    [exports.Events.SPEAKING_START]: {
        payload: DispatchEventFrame.extend({
            evt: index.literal(exports.Events.SPEAKING_START),
            data: index.object({
                lobby_id: index.string().optional(),
                channel_id: index.string().optional(),
                user_id: index.string(),
            }),
        }),
        subscribeArgs: index.object({
            lobby_id: index.string().nullable().optional(),
            channel_id: index.string().nullable().optional(),
        }),
    },
    [exports.Events.SPEAKING_STOP]: {
        payload: DispatchEventFrame.extend({
            evt: index.literal(exports.Events.SPEAKING_STOP),
            data: index.object({
                lobby_id: index.string().optional(),
                channel_id: index.string().optional(),
                user_id: index.string(),
            }),
        }),
        subscribeArgs: index.object({
            lobby_id: index.string().nullable().optional(),
            channel_id: index.string().nullable().optional(),
        }),
    },
    [exports.Events.ACTIVITY_LAYOUT_MODE_UPDATE]: {
        payload: DispatchEventFrame.extend({
            evt: index.literal(exports.Events.ACTIVITY_LAYOUT_MODE_UPDATE),
            data: index.object({
                layout_mode: zodUtils.zodCoerceUnhandledValue(common.LayoutModeTypeObject),
            }),
        }),
    },
    [exports.Events.ORIENTATION_UPDATE]: {
        payload: DispatchEventFrame.extend({
            evt: index.literal(exports.Events.ORIENTATION_UPDATE),
            data: index.object({
                screen_orientation: zodUtils.zodCoerceUnhandledValue(common.OrientationTypeObject),
                /**
                 * @deprecated use screen_orientation instead
                 */
                orientation: index.nativeEnum(Constants.Orientation),
            }),
        }),
    },
    [exports.Events.CURRENT_USER_UPDATE]: {
        payload: DispatchEventFrame.extend({
            evt: index.literal(exports.Events.CURRENT_USER_UPDATE),
            data: common.User,
        }),
    },
    [exports.Events.ENTITLEMENT_CREATE]: {
        payload: DispatchEventFrame.extend({
            evt: index.literal(exports.Events.ENTITLEMENT_CREATE),
            data: index.object({ entitlement: common.Entitlement }),
        }),
    },
    [exports.Events.THERMAL_STATE_UPDATE]: {
        payload: DispatchEventFrame.extend({
            evt: index.literal(exports.Events.THERMAL_STATE_UPDATE),
            data: index.object({ thermal_state: common.ThermalState }),
        }),
    },
    [exports.Events.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]: {
        payload: DispatchEventFrame.extend({
            evt: index.literal(exports.Events.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),
            data: index.object({
                participants: schemas.GetActivityInstanceConnectedParticipantsResponseSchema.shape.participants,
            }),
        }),
    },
};

exports.DispatchEventFrame = DispatchEventFrame;
exports.ERROR = ERROR;
exports.ErrorEvent = ErrorEvent;
exports.EventFrame = EventFrame;
exports.EventSchema = EventSchema;
exports.OtherEvent = OtherEvent;
exports.parseEventPayload = parseEventPayload;
