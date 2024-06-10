'use strict';

var index = require('../lib/zod@3.22.4/lib/zod/lib/index.cjs');
var zodUtils = require('../utils/zodUtils.cjs');
var schemas = require('../generated/schemas.cjs');

// DISPATCH is sent as cmd but is a special case, so is excluded from Commands enum
const DISPATCH = 'DISPATCH';
exports.Commands = void 0;
(function (Commands) {
    Commands["AUTHORIZE"] = "AUTHORIZE";
    Commands["AUTHENTICATE"] = "AUTHENTICATE";
    Commands["GET_GUILDS"] = "GET_GUILDS";
    Commands["GET_GUILD"] = "GET_GUILD";
    Commands["GET_CHANNEL"] = "GET_CHANNEL";
    Commands["GET_CHANNELS"] = "GET_CHANNELS";
    Commands["SELECT_VOICE_CHANNEL"] = "SELECT_VOICE_CHANNEL";
    Commands["SELECT_TEXT_CHANNEL"] = "SELECT_TEXT_CHANNEL";
    Commands["SUBSCRIBE"] = "SUBSCRIBE";
    Commands["UNSUBSCRIBE"] = "UNSUBSCRIBE";
    Commands["CAPTURE_SHORTCUT"] = "CAPTURE_SHORTCUT";
    Commands["SET_CERTIFIED_DEVICES"] = "SET_CERTIFIED_DEVICES";
    Commands["SET_ACTIVITY"] = "SET_ACTIVITY";
    Commands["GET_SKUS"] = "GET_SKUS";
    Commands["GET_ENTITLEMENTS"] = "GET_ENTITLEMENTS";
    Commands["GET_SKUS_EMBEDDED"] = "GET_SKUS_EMBEDDED";
    Commands["GET_ENTITLEMENTS_EMBEDDED"] = "GET_ENTITLEMENTS_EMBEDDED";
    Commands["START_PURCHASE"] = "START_PURCHASE";
    Commands["SET_CONFIG"] = "SET_CONFIG";
    Commands["SEND_ANALYTICS_EVENT"] = "SEND_ANALYTICS_EVENT";
    Commands["USER_SETTINGS_GET_LOCALE"] = "USER_SETTINGS_GET_LOCALE";
    Commands["OPEN_EXTERNAL_LINK"] = "OPEN_EXTERNAL_LINK";
    Commands["ENCOURAGE_HW_ACCELERATION"] = "ENCOURAGE_HW_ACCELERATION";
    Commands["CAPTURE_LOG"] = "CAPTURE_LOG";
    Commands["SET_ORIENTATION_LOCK_STATE"] = "SET_ORIENTATION_LOCK_STATE";
    Commands["OPEN_INVITE_DIALOG"] = "OPEN_INVITE_DIALOG";
    Commands["GET_PLATFORM_BEHAVIORS"] = "GET_PLATFORM_BEHAVIORS";
    Commands["GET_CHANNEL_PERMISSIONS"] = "GET_CHANNEL_PERMISSIONS";
    Commands["OPEN_SHARE_MOMENT_DIALOG"] = "OPEN_SHARE_MOMENT_DIALOG";
    Commands["INITIATE_IMAGE_UPLOAD"] = "INITIATE_IMAGE_UPLOAD";
    Commands["GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"] = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS";
})(exports.Commands || (exports.Commands = {}));
const ReceiveFramePayload = index.object({
    cmd: index.string(),
    data: index.unknown(),
    evt: index.null(),
    nonce: index.string(),
})
    .passthrough();
const ScopesObject = Object.assign(Object.assign({}, schemas.AuthenticateResponseSchema.shape.scopes.element.overlayType._def.innerType.options[0].Values), { UNHANDLED: -1 });
const Scopes = zodUtils.zodCoerceUnhandledValue(ScopesObject);
const User = index.object({
    id: index.string(),
    username: index.string(),
    discriminator: index.string(),
    global_name: index.string().optional().nullable(),
    avatar: index.string().optional().nullable(),
    avatar_decoration_data: index.object({
        asset: index.string(),
        sku_id: index.string().optional(),
    })
        .nullable(),
    bot: index.boolean(),
    flags: index.number().optional().nullable(),
    premium_type: index.number().optional().nullable(),
});
const GuildMember = index.object({
    user: User,
    nick: index.string().optional().nullable(),
    roles: index.array(index.string()),
    joined_at: index.string(),
    deaf: index.boolean(),
    mute: index.boolean(),
});
const Emoji = index.object({
    id: index.string(),
    name: index.string().optional().nullable(),
    roles: index.array(index.string()).optional().nullable(),
    user: User.optional().nullable(),
    require_colons: index.boolean().optional().nullable(),
    managed: index.boolean().optional().nullable(),
    animated: index.boolean().optional().nullable(),
    available: index.boolean().optional().nullable(),
});
const VoiceState = index.object({
    mute: index.boolean(),
    deaf: index.boolean(),
    self_mute: index.boolean(),
    self_deaf: index.boolean(),
    suppress: index.boolean(),
});
const UserVoiceState = index.object({
    mute: index.boolean(),
    nick: index.string(),
    user: User,
    voice_state: VoiceState,
    volume: index.number(),
});
const StatusObject = {
    UNHANDLED: -1,
    IDLE: 'idle',
    DND: 'dnd',
    ONLINE: 'online',
    OFFLINE: 'offline',
};
const Status = zodUtils.zodCoerceUnhandledValue(StatusObject);
const Activity = index.object({
    name: index.string(),
    type: index.number(),
    url: index.string().optional().nullable(),
    created_at: index.number().optional().nullable(),
    timestamps: index.object({
        start: index.number(),
        end: index.number(),
    })
        .partial()
        .optional()
        .nullable(),
    application_id: index.string().optional().nullable(),
    details: index.string().optional().nullable(),
    state: index.string().optional().nullable(),
    emoji: Emoji.optional().nullable(),
    party: index.object({
        id: index.string().optional().nullable(),
        size: index.array(index.number()).optional().nullable(),
    })
        .optional()
        .nullable(),
    assets: index.object({
        large_image: index.string().nullable(),
        large_text: index.string().nullable(),
        small_image: index.string().nullable(),
        small_text: index.string().nullable(),
    })
        .partial()
        .optional()
        .nullable(),
    secrets: index.object({
        join: index.string(),
        match: index.string(),
    })
        .partial()
        .optional()
        .nullable(),
    instance: index.boolean().optional().nullable(),
    flags: index.number().optional().nullable(),
});
const PermissionOverwriteTypeObject = {
    UNHANDLED: -1,
    ROLE: 0,
    MEMBER: 1,
};
const PermissionOverwrite = index.object({
    id: index.string(),
    type: zodUtils.zodCoerceUnhandledValue(PermissionOverwriteTypeObject),
    allow: index.string(),
    deny: index.string(),
});
const ChannelTypesObject = {
    UNHANDLED: -1,
    DM: 1,
    GROUP_DM: 3,
    GUILD_TEXT: 0,
    GUILD_VOICE: 2,
    GUILD_CATEGORY: 4,
    GUILD_ANNOUNCEMENT: 5,
    GUILD_STORE: 6,
    ANNOUNCEMENT_THREAD: 10,
    PUBLIC_THREAD: 11,
    PRIVATE_THREAD: 12,
    GUILD_STAGE_VOICE: 13,
    GUILD_DIRECTORY: 14,
    GUILD_FORUM: 15,
};
const Channel = index.object({
    id: index.string(),
    type: zodUtils.zodCoerceUnhandledValue(ChannelTypesObject),
    guild_id: index.string().optional().nullable(),
    position: index.number().optional().nullable(),
    permission_overwrites: index.array(PermissionOverwrite).optional().nullable(),
    name: index.string().optional().nullable(),
    topic: index.string().optional().nullable(),
    nsfw: index.boolean().optional().nullable(),
    last_message_id: index.string().optional().nullable(),
    bitrate: index.number().optional().nullable(),
    user_limit: index.number().optional().nullable(),
    rate_limit_per_user: index.number().optional().nullable(),
    recipients: index.array(User).optional().nullable(),
    icon: index.string().optional().nullable(),
    owner_id: index.string().optional().nullable(),
    application_id: index.string().optional().nullable(),
    parent_id: index.string().optional().nullable(),
    last_pin_timestamp: index.string().optional().nullable(),
});
const PresenceUpdate = index.object({
    user: User,
    guild_id: index.string(),
    status: Status,
    activities: index.array(Activity),
    client_status: index.object({
        desktop: Status,
        mobile: Status,
        web: Status,
    })
        .partial(),
});
const Role = index.object({
    id: index.string(),
    name: index.string(),
    color: index.number(),
    hoist: index.boolean(),
    position: index.number(),
    permissions: index.string(),
    managed: index.boolean(),
    mentionable: index.boolean(),
});
const Guild = index.object({
    id: index.string(),
    name: index.string(),
    owner_id: index.string(),
    icon: index.string().nullable(),
    icon_hash: index.string().optional().nullable(),
    splash: index.string().nullable(),
    discovery_splash: index.string().nullable(),
    owner: index.boolean().optional().nullable(),
    permissions: index.string().optional().nullable(),
    region: index.string(),
    afk_channel_id: index.string().nullable(),
    afk_timeout: index.number(),
    widget_enabled: index.boolean().optional().nullable(),
    widget_channel_id: index.string().optional().nullable(),
    verification_level: index.number(),
    default_message_notifications: index.number(),
    explicit_content_filter: index.number(),
    roles: index.array(Role),
    emojis: index.array(Emoji),
    features: index.array(index.string()),
    mfa_level: index.number(),
    application_id: index.string().nullable(),
    system_channel_id: index.string().nullable(),
    system_channel_flags: index.number(),
    rules_channel_id: index.string().nullable(),
    joined_at: index.string().optional().nullable(),
    large: index.boolean().optional().nullable(),
    unavailable: index.boolean().optional().nullable(),
    member_count: index.number().optional().nullable(),
    voice_states: index.array(VoiceState).optional().nullable(),
    members: index.array(GuildMember).optional().nullable(),
    channels: index.array(Channel).optional().nullable(),
    presences: index.array(PresenceUpdate).optional().nullable(),
    max_presences: index.number().optional().nullable(),
    max_members: index.number().optional().nullable(),
    vanity_url_code: index.string().nullable(),
    description: index.string().nullable(),
    banner: index.string().nullable(),
    premium_tier: index.number(),
    premium_subscription_count: index.number().optional().nullable(),
    preferred_locale: index.string(),
    public_updates_channel_id: index.string().nullable(),
    max_video_channel_users: index.number().optional().nullable(),
    approximate_member_count: index.number().optional().nullable(),
    approximate_presence_count: index.number().optional().nullable(),
});
const ChannelMention = index.object({
    id: index.string(),
    guild_id: index.string(),
    type: index.number(),
    name: index.string(),
});
const Attachment = index.object({
    id: index.string(),
    filename: index.string(),
    size: index.number(),
    url: index.string(),
    proxy_url: index.string(),
    height: index.number().optional().nullable(),
    width: index.number().optional().nullable(),
});
const EmbedFooter = index.object({
    text: index.string(),
    icon_url: index.string().optional().nullable(),
    proxy_icon_url: index.string().optional().nullable(),
});
const Image = index.object({
    url: index.string().optional().nullable(),
    proxy_url: index.string().optional().nullable(),
    height: index.number().optional().nullable(),
    width: index.number().optional().nullable(),
});
const Video = Image.omit({ proxy_url: true });
const EmbedProvider = index.object({
    name: index.string().optional().nullable(),
    url: index.string().optional().nullable(),
});
const EmbedAuthor = index.object({
    name: index.string().optional().nullable(),
    url: index.string().optional().nullable(),
    icon_url: index.string().optional().nullable(),
    proxy_icon_url: index.string().optional().nullable(),
});
const EmbedField = index.object({
    name: index.string(),
    value: index.string(),
    inline: index.boolean(),
});
const Embed = index.object({
    title: index.string().optional().nullable(),
    type: index.string().optional().nullable(),
    description: index.string().optional().nullable(),
    url: index.string().optional().nullable(),
    timestamp: index.string().optional().nullable(),
    color: index.number().optional().nullable(),
    footer: EmbedFooter.optional().nullable(),
    image: Image.optional().nullable(),
    thumbnail: Image.optional().nullable(),
    video: Video.optional().nullable(),
    provider: EmbedProvider.optional().nullable(),
    author: EmbedAuthor.optional().nullable(),
    fields: index.array(EmbedField).optional().nullable(),
});
const Reaction = index.object({
    count: index.number(),
    me: index.boolean(),
    emoji: Emoji,
});
const MessageActivity = index.object({
    type: index.number(),
    party_id: index.string().optional().nullable(),
});
const MessageApplication = index.object({
    id: index.string(),
    cover_image: index.string().optional().nullable(),
    description: index.string(),
    icon: index.string().optional().nullable(),
    name: index.string(),
});
const MessageReference = index.object({
    message_id: index.string().optional().nullable(),
    channel_id: index.string().optional().nullable(),
    guild_id: index.string().optional().nullable(),
});
const Message = index.object({
    id: index.string(),
    channel_id: index.string(),
    guild_id: index.string().optional().nullable(),
    author: User.optional().nullable(),
    member: GuildMember.optional().nullable(),
    content: index.string(),
    timestamp: index.string(),
    edited_timestamp: index.string().optional().nullable(),
    tts: index.boolean(),
    mention_everyone: index.boolean(),
    mentions: index.array(User),
    mention_roles: index.array(index.string()),
    mention_channels: index.array(ChannelMention),
    attachments: index.array(Attachment),
    embeds: index.array(Embed),
    reactions: index.array(Reaction).optional().nullable(),
    nonce: index.union([index.string(), index.number()]).optional().nullable(),
    pinned: index.boolean(),
    webhook_id: index.string().optional().nullable(),
    type: index.number(),
    activity: MessageActivity.optional().nullable(),
    application: MessageApplication.optional().nullable(),
    message_reference: MessageReference.optional().nullable(),
    flags: index.number().optional().nullable(),
    stickers: index.array(index.unknown()).optional().nullable(),
    // Cannot self reference, but this is possibly a Message
    referenced_message: index.unknown().optional().nullable(),
});
const VoiceDevice = index.object({
    id: index.string(),
    name: index.string(),
});
const KeyTypesObject = {
    UNHANDLED: -1,
    KEYBOARD_KEY: 0,
    MOUSE_BUTTON: 1,
    KEYBOARD_MODIFIER_KEY: 2,
    GAMEPAD_BUTTON: 3,
};
const ShortcutKey = index.object({
    type: zodUtils.zodCoerceUnhandledValue(KeyTypesObject),
    code: index.number(),
    name: index.string(),
});
const VoiceSettingModeTypeObject = {
    UNHANDLED: -1,
    PUSH_TO_TALK: 'PUSH_TO_TALK',
    VOICE_ACTIVITY: 'VOICE_ACTIVITY',
};
const VoiceSettingsMode = index.object({
    type: zodUtils.zodCoerceUnhandledValue(VoiceSettingModeTypeObject),
    auto_threshold: index.boolean(),
    threshold: index.number(),
    shortcut: index.array(ShortcutKey),
    delay: index.number(),
});
const VoiceSettingsIO = index.object({
    device_id: index.string(),
    volume: index.number(),
    available_devices: index.array(VoiceDevice),
});
const CertifiedDeviceTypeObject = {
    UNHANDLED: -1,
    AUDIO_INPUT: 'AUDIO_INPUT',
    AUDIO_OUTPUT: 'AUDIO_OUTPUT',
    VIDEO_INPUT: 'VIDEO_INPUT',
};
const CertifiedDevice = index.object({
    type: zodUtils.zodCoerceUnhandledValue(CertifiedDeviceTypeObject),
    id: index.string(),
    vendor: index.object({
        name: index.string(),
        url: index.string(),
    }),
    model: index.object({
        name: index.string(),
        url: index.string(),
    }),
    related: index.array(index.string()),
    echo_cancellation: index.boolean().optional().nullable(),
    noise_suppression: index.boolean().optional().nullable(),
    automatic_gain_control: index.boolean().optional().nullable(),
    hardware_mute: index.boolean().optional().nullable(),
});
const SkuTypeObject = {
    UNHANDLED: -1,
    APPLICATION: 1,
    DLC: 2,
    CONSUMABLE: 3,
    BUNDLE: 4,
    SUBSCRIPTION: 5,
};
const Sku = index.object({
    id: index.string(),
    name: index.string(),
    type: zodUtils.zodCoerceUnhandledValue(SkuTypeObject),
    price: index.object({
        amount: index.number(),
        currency: index.string(),
    }),
    application_id: index.string(),
    flags: index.number(),
    release_date: index.string().nullable(),
});
const EntitlementTypesObject = {
    UNHANDLED: -1,
    PURCHASE: 1,
    PREMIUM_SUBSCRIPTION: 2,
    DEVELOPER_GIFT: 3,
    TEST_MODE_PURCHASE: 4,
    FREE_PURCHASE: 5,
    USER_GIFT: 6,
    PREMIUM_PURCHASE: 7,
};
const Entitlement = index.object({
    id: index.string(),
    sku_id: index.string(),
    application_id: index.string(),
    user_id: index.string(),
    gift_code_flags: index.number(),
    type: zodUtils.zodCoerceUnhandledValue(EntitlementTypesObject),
    gifter_user_id: index.string().optional().nullable(),
    branches: index.array(index.string()).optional().nullable(),
    starts_at: index.string().optional().nullable(),
    ends_at: index.string().optional().nullable(),
    parent_id: index.string().optional().nullable(),
    consumed: index.boolean().optional().nullable(),
    deleted: index.boolean().optional().nullable(),
    gift_code_batch_id: index.string().optional().nullable(),
});
const OrientationLockStateTypeObject = {
    UNHANDLED: -1,
    UNLOCKED: 1,
    PORTRAIT: 2,
    LANDSCAPE: 3,
};
const OrientationLockState = zodUtils.zodCoerceUnhandledValue(OrientationLockStateTypeObject);
const ThermalStateTypeObject = {
    UNHANDLED: -1,
    NOMINAL: 0,
    FAIR: 1,
    SERIOUS: 2,
    CRITICAL: 3,
};
const ThermalState = zodUtils.zodCoerceUnhandledValue(ThermalStateTypeObject);
const OrientationTypeObject = {
    UNHANDLED: -1,
    PORTRAIT: 0,
    LANDSCAPE: 1,
};
const Orientation = zodUtils.zodCoerceUnhandledValue(OrientationTypeObject);
const LayoutModeTypeObject = {
    UNHANDLED: -1,
    FOCUSED: 0,
    PIP: 1,
    GRID: 2,
};
const LayoutMode = zodUtils.zodCoerceUnhandledValue(LayoutModeTypeObject);

exports.Activity = Activity;
exports.Attachment = Attachment;
exports.CertifiedDevice = CertifiedDevice;
exports.CertifiedDeviceTypeObject = CertifiedDeviceTypeObject;
exports.Channel = Channel;
exports.ChannelMention = ChannelMention;
exports.ChannelTypesObject = ChannelTypesObject;
exports.DISPATCH = DISPATCH;
exports.Embed = Embed;
exports.EmbedAuthor = EmbedAuthor;
exports.EmbedField = EmbedField;
exports.EmbedFooter = EmbedFooter;
exports.EmbedProvider = EmbedProvider;
exports.Emoji = Emoji;
exports.Entitlement = Entitlement;
exports.EntitlementTypesObject = EntitlementTypesObject;
exports.Guild = Guild;
exports.GuildMember = GuildMember;
exports.Image = Image;
exports.KeyTypesObject = KeyTypesObject;
exports.LayoutMode = LayoutMode;
exports.LayoutModeTypeObject = LayoutModeTypeObject;
exports.Message = Message;
exports.MessageActivity = MessageActivity;
exports.MessageApplication = MessageApplication;
exports.MessageReference = MessageReference;
exports.Orientation = Orientation;
exports.OrientationLockState = OrientationLockState;
exports.OrientationLockStateTypeObject = OrientationLockStateTypeObject;
exports.OrientationTypeObject = OrientationTypeObject;
exports.PermissionOverwrite = PermissionOverwrite;
exports.PermissionOverwriteTypeObject = PermissionOverwriteTypeObject;
exports.PresenceUpdate = PresenceUpdate;
exports.Reaction = Reaction;
exports.ReceiveFramePayload = ReceiveFramePayload;
exports.Role = Role;
exports.Scopes = Scopes;
exports.ScopesObject = ScopesObject;
exports.ShortcutKey = ShortcutKey;
exports.Sku = Sku;
exports.SkuTypeObject = SkuTypeObject;
exports.Status = Status;
exports.StatusObject = StatusObject;
exports.ThermalState = ThermalState;
exports.ThermalStateTypeObject = ThermalStateTypeObject;
exports.User = User;
exports.UserVoiceState = UserVoiceState;
exports.Video = Video;
exports.VoiceDevice = VoiceDevice;
exports.VoiceSettingModeTypeObject = VoiceSettingModeTypeObject;
exports.VoiceSettingsIO = VoiceSettingsIO;
exports.VoiceSettingsMode = VoiceSettingsMode;
exports.VoiceState = VoiceState;
