'use strict';

var index = require('../lib/zod@3.22.4/lib/zod/lib/index.cjs');
var zodUtils = require('../utils/zodUtils.cjs');

/**
 * This file is generated.
 * Run "pnpm sync" to regenerate file.
 * @generated
 */
// INITIATE_IMAGE_UPLOAD
const InitiateImageUploadResponseSchema = index.default.object({ image_url: index.default.string() });
// OPEN_SHARE_MOMENT_DIALOG
const OpenShareMomentDialogRequestSchema = index.default.object({ mediaUrl: index.default.string().max(1024) });
// AUTHENTICATE
const AuthenticateRequestSchema = index.default.object({ access_token: index.default.union([index.default.string(), index.default.null()]).optional() });
const AuthenticateResponseSchema = index.default.object({
    access_token: index.default.string(),
    user: index.default.object({
        username: index.default.string(),
        discriminator: index.default.string(),
        id: index.default.string(),
        avatar: index.default.union([index.default.string(), index.default.null()]).optional(),
        public_flags: index.default.number(),
        global_name: index.default.union([index.default.string(), index.default.null()]).optional(),
    }),
    scopes: index.default.array(zodUtils.fallbackToDefault(index.default
        .enum([
        'identify',
        'email',
        'connections',
        'guilds',
        'guilds.join',
        'guilds.members.read',
        'gdm.join',
        'rpc',
        'rpc.notifications.read',
        'rpc.voice.read',
        'rpc.voice.write',
        'rpc.video.read',
        'rpc.video.write',
        'rpc.screenshare.read',
        'rpc.screenshare.write',
        'rpc.activities.write',
        'bot',
        'webhook.incoming',
        'messages.read',
        'applications.builds.upload',
        'applications.builds.read',
        'applications.commands',
        'applications.commands.update',
        'applications.commands.permissions.update',
        'applications.store.update',
        'applications.entitlements',
        'activities.read',
        'activities.write',
        'relationships.read',
        'voice',
        'dm_channels.read',
        'role_connections.write',
    ])
        .or(index.default.literal(-1))
        .default(-1))),
    expires: index.default.string(),
    application: index.default.object({
        description: index.default.string(),
        icon: index.default.union([index.default.string(), index.default.null()]).optional(),
        id: index.default.string(),
        rpc_origins: index.default.array(index.default.string()).optional(),
        name: index.default.string(),
    }),
});
// GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS
const GetActivityInstanceConnectedParticipantsResponseSchema = index.default.object({
    participants: index.default.array(index.default.object({
        id: index.default.string(),
        username: index.default.string(),
        global_name: index.default.union([index.default.string(), index.default.null()]).optional(),
        discriminator: index.default.string(),
        avatar: index.default.union([index.default.string(), index.default.null()]).optional(),
        flags: index.default.number(),
        bot: index.default.boolean(),
        avatar_decoration_data: index.default
            .union([index.default.object({ asset: index.default.string(), skuId: index.default.string().optional() }), index.default.null()])
            .optional(),
        premium_type: index.default.union([index.default.number(), index.default.null()]).optional(),
        nickname: index.default.string().optional(),
    })),
});
/**
 * RPC Commands which support schemas.
 */
exports.Command = void 0;
(function (Command) {
    Command["INITIATE_IMAGE_UPLOAD"] = "INITIATE_IMAGE_UPLOAD";
    Command["OPEN_SHARE_MOMENT_DIALOG"] = "OPEN_SHARE_MOMENT_DIALOG";
    Command["AUTHENTICATE"] = "AUTHENTICATE";
    Command["GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"] = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS";
})(exports.Command || (exports.Command = {}));
const emptyResponseSchema = index.default.object({}).optional().nullable();
const emptyRequestSchema = index.default.void();
/**
 * Request & Response schemas for each supported RPC Command.
 */
const Schemas = {
    [exports.Command.INITIATE_IMAGE_UPLOAD]: {
        request: emptyRequestSchema,
        response: InitiateImageUploadResponseSchema,
    },
    [exports.Command.OPEN_SHARE_MOMENT_DIALOG]: {
        request: OpenShareMomentDialogRequestSchema,
        response: emptyResponseSchema,
    },
    [exports.Command.AUTHENTICATE]: {
        request: AuthenticateRequestSchema,
        response: AuthenticateResponseSchema,
    },
    [exports.Command.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]: {
        request: emptyRequestSchema,
        response: GetActivityInstanceConnectedParticipantsResponseSchema,
    },
};

exports.AuthenticateRequestSchema = AuthenticateRequestSchema;
exports.AuthenticateResponseSchema = AuthenticateResponseSchema;
exports.GetActivityInstanceConnectedParticipantsResponseSchema = GetActivityInstanceConnectedParticipantsResponseSchema;
exports.InitiateImageUploadResponseSchema = InitiateImageUploadResponseSchema;
exports.OpenShareMomentDialogRequestSchema = OpenShareMomentDialogRequestSchema;
exports.Schemas = Schemas;
