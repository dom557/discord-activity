import * as zod from 'zod';
export declare const DISPATCH = "DISPATCH";
export declare enum Commands {
    AUTHORIZE = "AUTHORIZE",
    AUTHENTICATE = "AUTHENTICATE",
    GET_GUILDS = "GET_GUILDS",
    GET_GUILD = "GET_GUILD",
    GET_CHANNEL = "GET_CHANNEL",
    GET_CHANNELS = "GET_CHANNELS",
    SELECT_VOICE_CHANNEL = "SELECT_VOICE_CHANNEL",
    SELECT_TEXT_CHANNEL = "SELECT_TEXT_CHANNEL",
    SUBSCRIBE = "SUBSCRIBE",
    UNSUBSCRIBE = "UNSUBSCRIBE",
    CAPTURE_SHORTCUT = "CAPTURE_SHORTCUT",
    SET_CERTIFIED_DEVICES = "SET_CERTIFIED_DEVICES",
    SET_ACTIVITY = "SET_ACTIVITY",
    GET_SKUS = "GET_SKUS",
    GET_ENTITLEMENTS = "GET_ENTITLEMENTS",
    GET_SKUS_EMBEDDED = "GET_SKUS_EMBEDDED",
    GET_ENTITLEMENTS_EMBEDDED = "GET_ENTITLEMENTS_EMBEDDED",
    START_PURCHASE = "START_PURCHASE",
    SET_CONFIG = "SET_CONFIG",
    SEND_ANALYTICS_EVENT = "SEND_ANALYTICS_EVENT",
    USER_SETTINGS_GET_LOCALE = "USER_SETTINGS_GET_LOCALE",
    OPEN_EXTERNAL_LINK = "OPEN_EXTERNAL_LINK",
    ENCOURAGE_HW_ACCELERATION = "ENCOURAGE_HW_ACCELERATION",
    CAPTURE_LOG = "CAPTURE_LOG",
    SET_ORIENTATION_LOCK_STATE = "SET_ORIENTATION_LOCK_STATE",
    OPEN_INVITE_DIALOG = "OPEN_INVITE_DIALOG",
    GET_PLATFORM_BEHAVIORS = "GET_PLATFORM_BEHAVIORS",
    GET_CHANNEL_PERMISSIONS = "GET_CHANNEL_PERMISSIONS",
    OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG",
    INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD",
    GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
}
export declare const ReceiveFramePayload: zod.ZodObject<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
    cmd: zod.ZodString;
    data: zod.ZodUnknown;
    evt: zod.ZodNull;
    nonce: zod.ZodString;
}, zod.ZodTypeAny, "passthrough">>;
export declare const ScopesObject: {
    readonly UNHANDLED: -1;
    readonly identify: "identify";
    readonly email: "email";
    readonly connections: "connections";
    readonly guilds: "guilds";
    readonly "guilds.join": "guilds.join";
    readonly "guilds.members.read": "guilds.members.read";
    readonly "gdm.join": "gdm.join";
    readonly rpc: "rpc";
    readonly "rpc.notifications.read": "rpc.notifications.read";
    readonly "rpc.voice.read": "rpc.voice.read";
    readonly "rpc.voice.write": "rpc.voice.write";
    readonly "rpc.video.read": "rpc.video.read";
    readonly "rpc.video.write": "rpc.video.write";
    readonly "rpc.screenshare.read": "rpc.screenshare.read";
    readonly "rpc.screenshare.write": "rpc.screenshare.write";
    readonly "rpc.activities.write": "rpc.activities.write";
    readonly bot: "bot";
    readonly "webhook.incoming": "webhook.incoming";
    readonly "messages.read": "messages.read";
    readonly "applications.builds.upload": "applications.builds.upload";
    readonly "applications.builds.read": "applications.builds.read";
    readonly "applications.commands": "applications.commands";
    readonly "applications.commands.update": "applications.commands.update";
    readonly "applications.commands.permissions.update": "applications.commands.permissions.update";
    readonly "applications.store.update": "applications.store.update";
    readonly "applications.entitlements": "applications.entitlements";
    readonly "activities.read": "activities.read";
    readonly "activities.write": "activities.write";
    readonly "relationships.read": "relationships.read";
    readonly voice: "voice";
    readonly "dm_channels.read": "dm_channels.read";
    readonly "role_connections.write": "role_connections.write";
};
export declare const Scopes: zod.ZodEffects<zod.ZodType<-1 | "identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "gdm.join" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "bot" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.update" | "applications.commands.permissions.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "relationships.read" | "voice" | "dm_channels.read" | "role_connections.write", zod.ZodTypeDef, -1 | "identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "gdm.join" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "bot" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.update" | "applications.commands.permissions.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "relationships.read" | "voice" | "dm_channels.read" | "role_connections.write">, -1 | "identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "gdm.join" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "bot" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.update" | "applications.commands.permissions.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "relationships.read" | "voice" | "dm_channels.read" | "role_connections.write", unknown>;
export declare const User: zod.ZodObject<{
    id: zod.ZodString;
    username: zod.ZodString;
    discriminator: zod.ZodString;
    global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
        asset: zod.ZodString;
        sku_id: zod.ZodOptional<zod.ZodString>;
    }, "strip", zod.ZodTypeAny, {
        asset: string;
        sku_id?: string | undefined;
    }, {
        asset: string;
        sku_id?: string | undefined;
    }>>;
    bot: zod.ZodBoolean;
    flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
}, "strip", zod.ZodTypeAny, {
    username: string;
    discriminator: string;
    id: string;
    bot: boolean;
    avatar_decoration_data: {
        asset: string;
        sku_id?: string | undefined;
    } | null;
    global_name?: string | null | undefined;
    avatar?: string | null | undefined;
    flags?: number | null | undefined;
    premium_type?: number | null | undefined;
}, {
    username: string;
    discriminator: string;
    id: string;
    bot: boolean;
    avatar_decoration_data: {
        asset: string;
        sku_id?: string | undefined;
    } | null;
    global_name?: string | null | undefined;
    avatar?: string | null | undefined;
    flags?: number | null | undefined;
    premium_type?: number | null | undefined;
}>;
export declare const GuildMember: zod.ZodObject<{
    user: zod.ZodObject<{
        id: zod.ZodString;
        username: zod.ZodString;
        discriminator: zod.ZodString;
        global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
            asset: zod.ZodString;
            sku_id: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            asset: string;
            sku_id?: string | undefined;
        }, {
            asset: string;
            sku_id?: string | undefined;
        }>>;
        bot: zod.ZodBoolean;
        flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    }, "strip", zod.ZodTypeAny, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }>;
    nick: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    roles: zod.ZodArray<zod.ZodString, "many">;
    joined_at: zod.ZodString;
    deaf: zod.ZodBoolean;
    mute: zod.ZodBoolean;
}, "strip", zod.ZodTypeAny, {
    user: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    };
    roles: string[];
    joined_at: string;
    deaf: boolean;
    mute: boolean;
    nick?: string | null | undefined;
}, {
    user: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    };
    roles: string[];
    joined_at: string;
    deaf: boolean;
    mute: boolean;
    nick?: string | null | undefined;
}>;
export declare const Emoji: zod.ZodObject<{
    id: zod.ZodString;
    name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    roles: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>>;
    user: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        id: zod.ZodString;
        username: zod.ZodString;
        discriminator: zod.ZodString;
        global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
            asset: zod.ZodString;
            sku_id: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            asset: string;
            sku_id?: string | undefined;
        }, {
            asset: string;
            sku_id?: string | undefined;
        }>>;
        bot: zod.ZodBoolean;
        flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    }, "strip", zod.ZodTypeAny, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }>>>;
    require_colons: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    managed: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    animated: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    available: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
}, "strip", zod.ZodTypeAny, {
    id: string;
    name?: string | null | undefined;
    roles?: string[] | null | undefined;
    user?: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    } | null | undefined;
    require_colons?: boolean | null | undefined;
    managed?: boolean | null | undefined;
    animated?: boolean | null | undefined;
    available?: boolean | null | undefined;
}, {
    id: string;
    name?: string | null | undefined;
    roles?: string[] | null | undefined;
    user?: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    } | null | undefined;
    require_colons?: boolean | null | undefined;
    managed?: boolean | null | undefined;
    animated?: boolean | null | undefined;
    available?: boolean | null | undefined;
}>;
export declare const VoiceState: zod.ZodObject<{
    mute: zod.ZodBoolean;
    deaf: zod.ZodBoolean;
    self_mute: zod.ZodBoolean;
    self_deaf: zod.ZodBoolean;
    suppress: zod.ZodBoolean;
}, "strip", zod.ZodTypeAny, {
    deaf: boolean;
    mute: boolean;
    self_mute: boolean;
    self_deaf: boolean;
    suppress: boolean;
}, {
    deaf: boolean;
    mute: boolean;
    self_mute: boolean;
    self_deaf: boolean;
    suppress: boolean;
}>;
export declare const UserVoiceState: zod.ZodObject<{
    mute: zod.ZodBoolean;
    nick: zod.ZodString;
    user: zod.ZodObject<{
        id: zod.ZodString;
        username: zod.ZodString;
        discriminator: zod.ZodString;
        global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
            asset: zod.ZodString;
            sku_id: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            asset: string;
            sku_id?: string | undefined;
        }, {
            asset: string;
            sku_id?: string | undefined;
        }>>;
        bot: zod.ZodBoolean;
        flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    }, "strip", zod.ZodTypeAny, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }>;
    voice_state: zod.ZodObject<{
        mute: zod.ZodBoolean;
        deaf: zod.ZodBoolean;
        self_mute: zod.ZodBoolean;
        self_deaf: zod.ZodBoolean;
        suppress: zod.ZodBoolean;
    }, "strip", zod.ZodTypeAny, {
        deaf: boolean;
        mute: boolean;
        self_mute: boolean;
        self_deaf: boolean;
        suppress: boolean;
    }, {
        deaf: boolean;
        mute: boolean;
        self_mute: boolean;
        self_deaf: boolean;
        suppress: boolean;
    }>;
    volume: zod.ZodNumber;
}, "strip", zod.ZodTypeAny, {
    user: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    };
    nick: string;
    mute: boolean;
    voice_state: {
        deaf: boolean;
        mute: boolean;
        self_mute: boolean;
        self_deaf: boolean;
        suppress: boolean;
    };
    volume: number;
}, {
    user: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    };
    nick: string;
    mute: boolean;
    voice_state: {
        deaf: boolean;
        mute: boolean;
        self_mute: boolean;
        self_deaf: boolean;
        suppress: boolean;
    };
    volume: number;
}>;
export declare const StatusObject: {
    readonly UNHANDLED: -1;
    readonly IDLE: "idle";
    readonly DND: "dnd";
    readonly ONLINE: "online";
    readonly OFFLINE: "offline";
};
export declare const Status: zod.ZodEffects<zod.ZodType<-1 | "idle" | "dnd" | "online" | "offline", zod.ZodTypeDef, -1 | "idle" | "dnd" | "online" | "offline">, -1 | "idle" | "dnd" | "online" | "offline", unknown>;
export declare const Activity: zod.ZodObject<{
    name: zod.ZodString;
    type: zod.ZodNumber;
    url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    created_at: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    timestamps: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        start: zod.ZodOptional<zod.ZodNumber>;
        end: zod.ZodOptional<zod.ZodNumber>;
    }, "strip", zod.ZodTypeAny, {
        start?: number | undefined;
        end?: number | undefined;
    }, {
        start?: number | undefined;
        end?: number | undefined;
    }>>>;
    application_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    details: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    state: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    emoji: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        id: zod.ZodString;
        name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        roles: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>>;
        user: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
            id: zod.ZodString;
            username: zod.ZodString;
            discriminator: zod.ZodString;
            global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
                asset: zod.ZodString;
                sku_id: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                asset: string;
                sku_id?: string | undefined;
            }, {
                asset: string;
                sku_id?: string | undefined;
            }>>;
            bot: zod.ZodBoolean;
            flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        }, "strip", zod.ZodTypeAny, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }>>>;
        require_colons: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        managed: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        animated: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        available: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    }, "strip", zod.ZodTypeAny, {
        id: string;
        name?: string | null | undefined;
        roles?: string[] | null | undefined;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        animated?: boolean | null | undefined;
        available?: boolean | null | undefined;
    }, {
        id: string;
        name?: string | null | undefined;
        roles?: string[] | null | undefined;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        animated?: boolean | null | undefined;
        available?: boolean | null | undefined;
    }>>>;
    party: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        size: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodNumber, "many">>>;
    }, "strip", zod.ZodTypeAny, {
        id?: string | null | undefined;
        size?: number[] | null | undefined;
    }, {
        id?: string | null | undefined;
        size?: number[] | null | undefined;
    }>>>;
    assets: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        large_image: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
        large_text: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
        small_image: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
        small_text: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
    }, "strip", zod.ZodTypeAny, {
        large_image?: string | null | undefined;
        large_text?: string | null | undefined;
        small_image?: string | null | undefined;
        small_text?: string | null | undefined;
    }, {
        large_image?: string | null | undefined;
        large_text?: string | null | undefined;
        small_image?: string | null | undefined;
        small_text?: string | null | undefined;
    }>>>;
    secrets: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        join: zod.ZodOptional<zod.ZodString>;
        match: zod.ZodOptional<zod.ZodString>;
    }, "strip", zod.ZodTypeAny, {
        join?: string | undefined;
        match?: string | undefined;
    }, {
        join?: string | undefined;
        match?: string | undefined;
    }>>>;
    instance: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
}, "strip", zod.ZodTypeAny, {
    type: number;
    name: string;
    url?: string | null | undefined;
    created_at?: number | null | undefined;
    timestamps?: {
        start?: number | undefined;
        end?: number | undefined;
    } | null | undefined;
    application_id?: string | null | undefined;
    details?: string | null | undefined;
    state?: string | null | undefined;
    emoji?: {
        id: string;
        name?: string | null | undefined;
        roles?: string[] | null | undefined;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        animated?: boolean | null | undefined;
        available?: boolean | null | undefined;
    } | null | undefined;
    party?: {
        id?: string | null | undefined;
        size?: number[] | null | undefined;
    } | null | undefined;
    assets?: {
        large_image?: string | null | undefined;
        large_text?: string | null | undefined;
        small_image?: string | null | undefined;
        small_text?: string | null | undefined;
    } | null | undefined;
    secrets?: {
        join?: string | undefined;
        match?: string | undefined;
    } | null | undefined;
    instance?: boolean | null | undefined;
    flags?: number | null | undefined;
}, {
    type: number;
    name: string;
    url?: string | null | undefined;
    created_at?: number | null | undefined;
    timestamps?: {
        start?: number | undefined;
        end?: number | undefined;
    } | null | undefined;
    application_id?: string | null | undefined;
    details?: string | null | undefined;
    state?: string | null | undefined;
    emoji?: {
        id: string;
        name?: string | null | undefined;
        roles?: string[] | null | undefined;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        animated?: boolean | null | undefined;
        available?: boolean | null | undefined;
    } | null | undefined;
    party?: {
        id?: string | null | undefined;
        size?: number[] | null | undefined;
    } | null | undefined;
    assets?: {
        large_image?: string | null | undefined;
        large_text?: string | null | undefined;
        small_image?: string | null | undefined;
        small_text?: string | null | undefined;
    } | null | undefined;
    secrets?: {
        join?: string | undefined;
        match?: string | undefined;
    } | null | undefined;
    instance?: boolean | null | undefined;
    flags?: number | null | undefined;
}>;
export declare const PermissionOverwriteTypeObject: {
    readonly UNHANDLED: -1;
    readonly ROLE: 0;
    readonly MEMBER: 1;
};
export declare const PermissionOverwrite: zod.ZodObject<{
    id: zod.ZodString;
    type: zod.ZodEffects<zod.ZodType<0 | 1 | -1, zod.ZodTypeDef, 0 | 1 | -1>, 0 | 1 | -1, unknown>;
    allow: zod.ZodString;
    deny: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    type: 0 | 1 | -1;
    id: string;
    allow: string;
    deny: string;
}, {
    id: string;
    allow: string;
    deny: string;
    type?: unknown;
}>;
export declare const ChannelTypesObject: {
    readonly UNHANDLED: -1;
    readonly DM: 1;
    readonly GROUP_DM: 3;
    readonly GUILD_TEXT: 0;
    readonly GUILD_VOICE: 2;
    readonly GUILD_CATEGORY: 4;
    readonly GUILD_ANNOUNCEMENT: 5;
    readonly GUILD_STORE: 6;
    readonly ANNOUNCEMENT_THREAD: 10;
    readonly PUBLIC_THREAD: 11;
    readonly PRIVATE_THREAD: 12;
    readonly GUILD_STAGE_VOICE: 13;
    readonly GUILD_DIRECTORY: 14;
    readonly GUILD_FORUM: 15;
};
export declare const Channel: zod.ZodObject<{
    id: zod.ZodString;
    type: zod.ZodEffects<zod.ZodType<0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15, zod.ZodTypeDef, 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15>, 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15, unknown>;
    guild_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    position: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    permission_overwrites: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
        id: zod.ZodString;
        type: zod.ZodEffects<zod.ZodType<0 | 1 | -1, zod.ZodTypeDef, 0 | 1 | -1>, 0 | 1 | -1, unknown>;
        allow: zod.ZodString;
        deny: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        type: 0 | 1 | -1;
        id: string;
        allow: string;
        deny: string;
    }, {
        id: string;
        allow: string;
        deny: string;
        type?: unknown;
    }>, "many">>>;
    name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    topic: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    nsfw: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    last_message_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    bitrate: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    user_limit: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    rate_limit_per_user: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    recipients: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
        id: zod.ZodString;
        username: zod.ZodString;
        discriminator: zod.ZodString;
        global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
            asset: zod.ZodString;
            sku_id: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            asset: string;
            sku_id?: string | undefined;
        }, {
            asset: string;
            sku_id?: string | undefined;
        }>>;
        bot: zod.ZodBoolean;
        flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    }, "strip", zod.ZodTypeAny, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }>, "many">>>;
    icon: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    owner_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    application_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    parent_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    last_pin_timestamp: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
}, "strip", zod.ZodTypeAny, {
    type: 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15;
    id: string;
    guild_id?: string | null | undefined;
    position?: number | null | undefined;
    permission_overwrites?: {
        type: 0 | 1 | -1;
        id: string;
        allow: string;
        deny: string;
    }[] | null | undefined;
    name?: string | null | undefined;
    topic?: string | null | undefined;
    nsfw?: boolean | null | undefined;
    last_message_id?: string | null | undefined;
    bitrate?: number | null | undefined;
    user_limit?: number | null | undefined;
    rate_limit_per_user?: number | null | undefined;
    recipients?: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }[] | null | undefined;
    icon?: string | null | undefined;
    owner_id?: string | null | undefined;
    application_id?: string | null | undefined;
    parent_id?: string | null | undefined;
    last_pin_timestamp?: string | null | undefined;
}, {
    id: string;
    type?: unknown;
    guild_id?: string | null | undefined;
    position?: number | null | undefined;
    permission_overwrites?: {
        id: string;
        allow: string;
        deny: string;
        type?: unknown;
    }[] | null | undefined;
    name?: string | null | undefined;
    topic?: string | null | undefined;
    nsfw?: boolean | null | undefined;
    last_message_id?: string | null | undefined;
    bitrate?: number | null | undefined;
    user_limit?: number | null | undefined;
    rate_limit_per_user?: number | null | undefined;
    recipients?: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }[] | null | undefined;
    icon?: string | null | undefined;
    owner_id?: string | null | undefined;
    application_id?: string | null | undefined;
    parent_id?: string | null | undefined;
    last_pin_timestamp?: string | null | undefined;
}>;
export declare const PresenceUpdate: zod.ZodObject<{
    user: zod.ZodObject<{
        id: zod.ZodString;
        username: zod.ZodString;
        discriminator: zod.ZodString;
        global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
            asset: zod.ZodString;
            sku_id: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            asset: string;
            sku_id?: string | undefined;
        }, {
            asset: string;
            sku_id?: string | undefined;
        }>>;
        bot: zod.ZodBoolean;
        flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    }, "strip", zod.ZodTypeAny, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }>;
    guild_id: zod.ZodString;
    status: zod.ZodEffects<zod.ZodType<-1 | "idle" | "dnd" | "online" | "offline", zod.ZodTypeDef, -1 | "idle" | "dnd" | "online" | "offline">, -1 | "idle" | "dnd" | "online" | "offline", unknown>;
    activities: zod.ZodArray<zod.ZodObject<{
        name: zod.ZodString;
        type: zod.ZodNumber;
        url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        created_at: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        timestamps: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
            start: zod.ZodOptional<zod.ZodNumber>;
            end: zod.ZodOptional<zod.ZodNumber>;
        }, "strip", zod.ZodTypeAny, {
            start?: number | undefined;
            end?: number | undefined;
        }, {
            start?: number | undefined;
            end?: number | undefined;
        }>>>;
        application_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        details: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        state: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        emoji: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
            id: zod.ZodString;
            name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            roles: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>>;
            user: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                id: zod.ZodString;
                username: zod.ZodString;
                discriminator: zod.ZodString;
                global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
                    asset: zod.ZodString;
                    sku_id: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    asset: string;
                    sku_id?: string | undefined;
                }, {
                    asset: string;
                    sku_id?: string | undefined;
                }>>;
                bot: zod.ZodBoolean;
                flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            }, "strip", zod.ZodTypeAny, {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            }, {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            }>>>;
            require_colons: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
            managed: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
            animated: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
            available: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        }, "strip", zod.ZodTypeAny, {
            id: string;
            name?: string | null | undefined;
            roles?: string[] | null | undefined;
            user?: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            } | null | undefined;
            require_colons?: boolean | null | undefined;
            managed?: boolean | null | undefined;
            animated?: boolean | null | undefined;
            available?: boolean | null | undefined;
        }, {
            id: string;
            name?: string | null | undefined;
            roles?: string[] | null | undefined;
            user?: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            } | null | undefined;
            require_colons?: boolean | null | undefined;
            managed?: boolean | null | undefined;
            animated?: boolean | null | undefined;
            available?: boolean | null | undefined;
        }>>>;
        party: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
            id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            size: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodNumber, "many">>>;
        }, "strip", zod.ZodTypeAny, {
            id?: string | null | undefined;
            size?: number[] | null | undefined;
        }, {
            id?: string | null | undefined;
            size?: number[] | null | undefined;
        }>>>;
        assets: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
            large_image: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            large_text: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            small_image: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            small_text: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
        }, "strip", zod.ZodTypeAny, {
            large_image?: string | null | undefined;
            large_text?: string | null | undefined;
            small_image?: string | null | undefined;
            small_text?: string | null | undefined;
        }, {
            large_image?: string | null | undefined;
            large_text?: string | null | undefined;
            small_image?: string | null | undefined;
            small_text?: string | null | undefined;
        }>>>;
        secrets: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
            join: zod.ZodOptional<zod.ZodString>;
            match: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            join?: string | undefined;
            match?: string | undefined;
        }, {
            join?: string | undefined;
            match?: string | undefined;
        }>>>;
        instance: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    }, "strip", zod.ZodTypeAny, {
        type: number;
        name: string;
        url?: string | null | undefined;
        created_at?: number | null | undefined;
        timestamps?: {
            start?: number | undefined;
            end?: number | undefined;
        } | null | undefined;
        application_id?: string | null | undefined;
        details?: string | null | undefined;
        state?: string | null | undefined;
        emoji?: {
            id: string;
            name?: string | null | undefined;
            roles?: string[] | null | undefined;
            user?: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            } | null | undefined;
            require_colons?: boolean | null | undefined;
            managed?: boolean | null | undefined;
            animated?: boolean | null | undefined;
            available?: boolean | null | undefined;
        } | null | undefined;
        party?: {
            id?: string | null | undefined;
            size?: number[] | null | undefined;
        } | null | undefined;
        assets?: {
            large_image?: string | null | undefined;
            large_text?: string | null | undefined;
            small_image?: string | null | undefined;
            small_text?: string | null | undefined;
        } | null | undefined;
        secrets?: {
            join?: string | undefined;
            match?: string | undefined;
        } | null | undefined;
        instance?: boolean | null | undefined;
        flags?: number | null | undefined;
    }, {
        type: number;
        name: string;
        url?: string | null | undefined;
        created_at?: number | null | undefined;
        timestamps?: {
            start?: number | undefined;
            end?: number | undefined;
        } | null | undefined;
        application_id?: string | null | undefined;
        details?: string | null | undefined;
        state?: string | null | undefined;
        emoji?: {
            id: string;
            name?: string | null | undefined;
            roles?: string[] | null | undefined;
            user?: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            } | null | undefined;
            require_colons?: boolean | null | undefined;
            managed?: boolean | null | undefined;
            animated?: boolean | null | undefined;
            available?: boolean | null | undefined;
        } | null | undefined;
        party?: {
            id?: string | null | undefined;
            size?: number[] | null | undefined;
        } | null | undefined;
        assets?: {
            large_image?: string | null | undefined;
            large_text?: string | null | undefined;
            small_image?: string | null | undefined;
            small_text?: string | null | undefined;
        } | null | undefined;
        secrets?: {
            join?: string | undefined;
            match?: string | undefined;
        } | null | undefined;
        instance?: boolean | null | undefined;
        flags?: number | null | undefined;
    }>, "many">;
    client_status: zod.ZodObject<{
        desktop: zod.ZodOptional<zod.ZodEffects<zod.ZodType<-1 | "idle" | "dnd" | "online" | "offline", zod.ZodTypeDef, -1 | "idle" | "dnd" | "online" | "offline">, -1 | "idle" | "dnd" | "online" | "offline", unknown>>;
        mobile: zod.ZodOptional<zod.ZodEffects<zod.ZodType<-1 | "idle" | "dnd" | "online" | "offline", zod.ZodTypeDef, -1 | "idle" | "dnd" | "online" | "offline">, -1 | "idle" | "dnd" | "online" | "offline", unknown>>;
        web: zod.ZodOptional<zod.ZodEffects<zod.ZodType<-1 | "idle" | "dnd" | "online" | "offline", zod.ZodTypeDef, -1 | "idle" | "dnd" | "online" | "offline">, -1 | "idle" | "dnd" | "online" | "offline", unknown>>;
    }, "strip", zod.ZodTypeAny, {
        desktop?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
        mobile?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
        web?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
    }, {
        desktop?: unknown;
        mobile?: unknown;
        web?: unknown;
    }>;
}, "strip", zod.ZodTypeAny, {
    status: -1 | "idle" | "dnd" | "online" | "offline";
    user: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    };
    guild_id: string;
    activities: {
        type: number;
        name: string;
        url?: string | null | undefined;
        created_at?: number | null | undefined;
        timestamps?: {
            start?: number | undefined;
            end?: number | undefined;
        } | null | undefined;
        application_id?: string | null | undefined;
        details?: string | null | undefined;
        state?: string | null | undefined;
        emoji?: {
            id: string;
            name?: string | null | undefined;
            roles?: string[] | null | undefined;
            user?: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            } | null | undefined;
            require_colons?: boolean | null | undefined;
            managed?: boolean | null | undefined;
            animated?: boolean | null | undefined;
            available?: boolean | null | undefined;
        } | null | undefined;
        party?: {
            id?: string | null | undefined;
            size?: number[] | null | undefined;
        } | null | undefined;
        assets?: {
            large_image?: string | null | undefined;
            large_text?: string | null | undefined;
            small_image?: string | null | undefined;
            small_text?: string | null | undefined;
        } | null | undefined;
        secrets?: {
            join?: string | undefined;
            match?: string | undefined;
        } | null | undefined;
        instance?: boolean | null | undefined;
        flags?: number | null | undefined;
    }[];
    client_status: {
        desktop?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
        mobile?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
        web?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
    };
}, {
    user: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    };
    guild_id: string;
    activities: {
        type: number;
        name: string;
        url?: string | null | undefined;
        created_at?: number | null | undefined;
        timestamps?: {
            start?: number | undefined;
            end?: number | undefined;
        } | null | undefined;
        application_id?: string | null | undefined;
        details?: string | null | undefined;
        state?: string | null | undefined;
        emoji?: {
            id: string;
            name?: string | null | undefined;
            roles?: string[] | null | undefined;
            user?: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            } | null | undefined;
            require_colons?: boolean | null | undefined;
            managed?: boolean | null | undefined;
            animated?: boolean | null | undefined;
            available?: boolean | null | undefined;
        } | null | undefined;
        party?: {
            id?: string | null | undefined;
            size?: number[] | null | undefined;
        } | null | undefined;
        assets?: {
            large_image?: string | null | undefined;
            large_text?: string | null | undefined;
            small_image?: string | null | undefined;
            small_text?: string | null | undefined;
        } | null | undefined;
        secrets?: {
            join?: string | undefined;
            match?: string | undefined;
        } | null | undefined;
        instance?: boolean | null | undefined;
        flags?: number | null | undefined;
    }[];
    client_status: {
        desktop?: unknown;
        mobile?: unknown;
        web?: unknown;
    };
    status?: unknown;
}>;
export declare const Role: zod.ZodObject<{
    id: zod.ZodString;
    name: zod.ZodString;
    color: zod.ZodNumber;
    hoist: zod.ZodBoolean;
    position: zod.ZodNumber;
    permissions: zod.ZodString;
    managed: zod.ZodBoolean;
    mentionable: zod.ZodBoolean;
}, "strip", zod.ZodTypeAny, {
    id: string;
    name: string;
    managed: boolean;
    position: number;
    color: number;
    hoist: boolean;
    permissions: string;
    mentionable: boolean;
}, {
    id: string;
    name: string;
    managed: boolean;
    position: number;
    color: number;
    hoist: boolean;
    permissions: string;
    mentionable: boolean;
}>;
export declare const Guild: zod.ZodObject<{
    id: zod.ZodString;
    name: zod.ZodString;
    owner_id: zod.ZodString;
    icon: zod.ZodNullable<zod.ZodString>;
    icon_hash: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    splash: zod.ZodNullable<zod.ZodString>;
    discovery_splash: zod.ZodNullable<zod.ZodString>;
    owner: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    permissions: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    region: zod.ZodString;
    afk_channel_id: zod.ZodNullable<zod.ZodString>;
    afk_timeout: zod.ZodNumber;
    widget_enabled: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    widget_channel_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    verification_level: zod.ZodNumber;
    default_message_notifications: zod.ZodNumber;
    explicit_content_filter: zod.ZodNumber;
    roles: zod.ZodArray<zod.ZodObject<{
        id: zod.ZodString;
        name: zod.ZodString;
        color: zod.ZodNumber;
        hoist: zod.ZodBoolean;
        position: zod.ZodNumber;
        permissions: zod.ZodString;
        managed: zod.ZodBoolean;
        mentionable: zod.ZodBoolean;
    }, "strip", zod.ZodTypeAny, {
        id: string;
        name: string;
        managed: boolean;
        position: number;
        color: number;
        hoist: boolean;
        permissions: string;
        mentionable: boolean;
    }, {
        id: string;
        name: string;
        managed: boolean;
        position: number;
        color: number;
        hoist: boolean;
        permissions: string;
        mentionable: boolean;
    }>, "many">;
    emojis: zod.ZodArray<zod.ZodObject<{
        id: zod.ZodString;
        name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        roles: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>>;
        user: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
            id: zod.ZodString;
            username: zod.ZodString;
            discriminator: zod.ZodString;
            global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
                asset: zod.ZodString;
                sku_id: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                asset: string;
                sku_id?: string | undefined;
            }, {
                asset: string;
                sku_id?: string | undefined;
            }>>;
            bot: zod.ZodBoolean;
            flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        }, "strip", zod.ZodTypeAny, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }>>>;
        require_colons: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        managed: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        animated: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        available: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    }, "strip", zod.ZodTypeAny, {
        id: string;
        name?: string | null | undefined;
        roles?: string[] | null | undefined;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        animated?: boolean | null | undefined;
        available?: boolean | null | undefined;
    }, {
        id: string;
        name?: string | null | undefined;
        roles?: string[] | null | undefined;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        animated?: boolean | null | undefined;
        available?: boolean | null | undefined;
    }>, "many">;
    features: zod.ZodArray<zod.ZodString, "many">;
    mfa_level: zod.ZodNumber;
    application_id: zod.ZodNullable<zod.ZodString>;
    system_channel_id: zod.ZodNullable<zod.ZodString>;
    system_channel_flags: zod.ZodNumber;
    rules_channel_id: zod.ZodNullable<zod.ZodString>;
    joined_at: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    large: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    unavailable: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    member_count: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    voice_states: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
        mute: zod.ZodBoolean;
        deaf: zod.ZodBoolean;
        self_mute: zod.ZodBoolean;
        self_deaf: zod.ZodBoolean;
        suppress: zod.ZodBoolean;
    }, "strip", zod.ZodTypeAny, {
        deaf: boolean;
        mute: boolean;
        self_mute: boolean;
        self_deaf: boolean;
        suppress: boolean;
    }, {
        deaf: boolean;
        mute: boolean;
        self_mute: boolean;
        self_deaf: boolean;
        suppress: boolean;
    }>, "many">>>;
    members: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
        user: zod.ZodObject<{
            id: zod.ZodString;
            username: zod.ZodString;
            discriminator: zod.ZodString;
            global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
                asset: zod.ZodString;
                sku_id: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                asset: string;
                sku_id?: string | undefined;
            }, {
                asset: string;
                sku_id?: string | undefined;
            }>>;
            bot: zod.ZodBoolean;
            flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        }, "strip", zod.ZodTypeAny, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }>;
        nick: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        roles: zod.ZodArray<zod.ZodString, "many">;
        joined_at: zod.ZodString;
        deaf: zod.ZodBoolean;
        mute: zod.ZodBoolean;
    }, "strip", zod.ZodTypeAny, {
        user: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        };
        roles: string[];
        joined_at: string;
        deaf: boolean;
        mute: boolean;
        nick?: string | null | undefined;
    }, {
        user: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        };
        roles: string[];
        joined_at: string;
        deaf: boolean;
        mute: boolean;
        nick?: string | null | undefined;
    }>, "many">>>;
    channels: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
        id: zod.ZodString;
        type: zod.ZodEffects<zod.ZodType<0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15, zod.ZodTypeDef, 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15>, 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15, unknown>;
        guild_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        position: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        permission_overwrites: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
            id: zod.ZodString;
            type: zod.ZodEffects<zod.ZodType<0 | 1 | -1, zod.ZodTypeDef, 0 | 1 | -1>, 0 | 1 | -1, unknown>;
            allow: zod.ZodString;
            deny: zod.ZodString;
        }, "strip", zod.ZodTypeAny, {
            type: 0 | 1 | -1;
            id: string;
            allow: string;
            deny: string;
        }, {
            id: string;
            allow: string;
            deny: string;
            type?: unknown;
        }>, "many">>>;
        name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        topic: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        nsfw: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        last_message_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        bitrate: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        user_limit: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        rate_limit_per_user: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        recipients: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
            id: zod.ZodString;
            username: zod.ZodString;
            discriminator: zod.ZodString;
            global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
                asset: zod.ZodString;
                sku_id: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                asset: string;
                sku_id?: string | undefined;
            }, {
                asset: string;
                sku_id?: string | undefined;
            }>>;
            bot: zod.ZodBoolean;
            flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        }, "strip", zod.ZodTypeAny, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }>, "many">>>;
        icon: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        owner_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        application_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        parent_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        last_pin_timestamp: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    }, "strip", zod.ZodTypeAny, {
        type: 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15;
        id: string;
        guild_id?: string | null | undefined;
        position?: number | null | undefined;
        permission_overwrites?: {
            type: 0 | 1 | -1;
            id: string;
            allow: string;
            deny: string;
        }[] | null | undefined;
        name?: string | null | undefined;
        topic?: string | null | undefined;
        nsfw?: boolean | null | undefined;
        last_message_id?: string | null | undefined;
        bitrate?: number | null | undefined;
        user_limit?: number | null | undefined;
        rate_limit_per_user?: number | null | undefined;
        recipients?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }[] | null | undefined;
        icon?: string | null | undefined;
        owner_id?: string | null | undefined;
        application_id?: string | null | undefined;
        parent_id?: string | null | undefined;
        last_pin_timestamp?: string | null | undefined;
    }, {
        id: string;
        type?: unknown;
        guild_id?: string | null | undefined;
        position?: number | null | undefined;
        permission_overwrites?: {
            id: string;
            allow: string;
            deny: string;
            type?: unknown;
        }[] | null | undefined;
        name?: string | null | undefined;
        topic?: string | null | undefined;
        nsfw?: boolean | null | undefined;
        last_message_id?: string | null | undefined;
        bitrate?: number | null | undefined;
        user_limit?: number | null | undefined;
        rate_limit_per_user?: number | null | undefined;
        recipients?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }[] | null | undefined;
        icon?: string | null | undefined;
        owner_id?: string | null | undefined;
        application_id?: string | null | undefined;
        parent_id?: string | null | undefined;
        last_pin_timestamp?: string | null | undefined;
    }>, "many">>>;
    presences: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
        user: zod.ZodObject<{
            id: zod.ZodString;
            username: zod.ZodString;
            discriminator: zod.ZodString;
            global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
                asset: zod.ZodString;
                sku_id: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                asset: string;
                sku_id?: string | undefined;
            }, {
                asset: string;
                sku_id?: string | undefined;
            }>>;
            bot: zod.ZodBoolean;
            flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        }, "strip", zod.ZodTypeAny, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }>;
        guild_id: zod.ZodString;
        status: zod.ZodEffects<zod.ZodType<-1 | "idle" | "dnd" | "online" | "offline", zod.ZodTypeDef, -1 | "idle" | "dnd" | "online" | "offline">, -1 | "idle" | "dnd" | "online" | "offline", unknown>;
        activities: zod.ZodArray<zod.ZodObject<{
            name: zod.ZodString;
            type: zod.ZodNumber;
            url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            created_at: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            timestamps: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                start: zod.ZodOptional<zod.ZodNumber>;
                end: zod.ZodOptional<zod.ZodNumber>;
            }, "strip", zod.ZodTypeAny, {
                start?: number | undefined;
                end?: number | undefined;
            }, {
                start?: number | undefined;
                end?: number | undefined;
            }>>>;
            application_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            details: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            state: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            emoji: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                id: zod.ZodString;
                name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                roles: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>>;
                user: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                    id: zod.ZodString;
                    username: zod.ZodString;
                    discriminator: zod.ZodString;
                    global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                    avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
                        asset: zod.ZodString;
                        sku_id: zod.ZodOptional<zod.ZodString>;
                    }, "strip", zod.ZodTypeAny, {
                        asset: string;
                        sku_id?: string | undefined;
                    }, {
                        asset: string;
                        sku_id?: string | undefined;
                    }>>;
                    bot: zod.ZodBoolean;
                    flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                    premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                }, "strip", zod.ZodTypeAny, {
                    username: string;
                    discriminator: string;
                    id: string;
                    bot: boolean;
                    avatar_decoration_data: {
                        asset: string;
                        sku_id?: string | undefined;
                    } | null;
                    global_name?: string | null | undefined;
                    avatar?: string | null | undefined;
                    flags?: number | null | undefined;
                    premium_type?: number | null | undefined;
                }, {
                    username: string;
                    discriminator: string;
                    id: string;
                    bot: boolean;
                    avatar_decoration_data: {
                        asset: string;
                        sku_id?: string | undefined;
                    } | null;
                    global_name?: string | null | undefined;
                    avatar?: string | null | undefined;
                    flags?: number | null | undefined;
                    premium_type?: number | null | undefined;
                }>>>;
                require_colons: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
                managed: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
                animated: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
                available: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
            }, "strip", zod.ZodTypeAny, {
                id: string;
                name?: string | null | undefined;
                roles?: string[] | null | undefined;
                user?: {
                    username: string;
                    discriminator: string;
                    id: string;
                    bot: boolean;
                    avatar_decoration_data: {
                        asset: string;
                        sku_id?: string | undefined;
                    } | null;
                    global_name?: string | null | undefined;
                    avatar?: string | null | undefined;
                    flags?: number | null | undefined;
                    premium_type?: number | null | undefined;
                } | null | undefined;
                require_colons?: boolean | null | undefined;
                managed?: boolean | null | undefined;
                animated?: boolean | null | undefined;
                available?: boolean | null | undefined;
            }, {
                id: string;
                name?: string | null | undefined;
                roles?: string[] | null | undefined;
                user?: {
                    username: string;
                    discriminator: string;
                    id: string;
                    bot: boolean;
                    avatar_decoration_data: {
                        asset: string;
                        sku_id?: string | undefined;
                    } | null;
                    global_name?: string | null | undefined;
                    avatar?: string | null | undefined;
                    flags?: number | null | undefined;
                    premium_type?: number | null | undefined;
                } | null | undefined;
                require_colons?: boolean | null | undefined;
                managed?: boolean | null | undefined;
                animated?: boolean | null | undefined;
                available?: boolean | null | undefined;
            }>>>;
            party: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                size: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodNumber, "many">>>;
            }, "strip", zod.ZodTypeAny, {
                id?: string | null | undefined;
                size?: number[] | null | undefined;
            }, {
                id?: string | null | undefined;
                size?: number[] | null | undefined;
            }>>>;
            assets: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                large_image: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                large_text: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                small_image: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
                small_text: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
            }, "strip", zod.ZodTypeAny, {
                large_image?: string | null | undefined;
                large_text?: string | null | undefined;
                small_image?: string | null | undefined;
                small_text?: string | null | undefined;
            }, {
                large_image?: string | null | undefined;
                large_text?: string | null | undefined;
                small_image?: string | null | undefined;
                small_text?: string | null | undefined;
            }>>>;
            secrets: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                join: zod.ZodOptional<zod.ZodString>;
                match: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                join?: string | undefined;
                match?: string | undefined;
            }, {
                join?: string | undefined;
                match?: string | undefined;
            }>>>;
            instance: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
            flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        }, "strip", zod.ZodTypeAny, {
            type: number;
            name: string;
            url?: string | null | undefined;
            created_at?: number | null | undefined;
            timestamps?: {
                start?: number | undefined;
                end?: number | undefined;
            } | null | undefined;
            application_id?: string | null | undefined;
            details?: string | null | undefined;
            state?: string | null | undefined;
            emoji?: {
                id: string;
                name?: string | null | undefined;
                roles?: string[] | null | undefined;
                user?: {
                    username: string;
                    discriminator: string;
                    id: string;
                    bot: boolean;
                    avatar_decoration_data: {
                        asset: string;
                        sku_id?: string | undefined;
                    } | null;
                    global_name?: string | null | undefined;
                    avatar?: string | null | undefined;
                    flags?: number | null | undefined;
                    premium_type?: number | null | undefined;
                } | null | undefined;
                require_colons?: boolean | null | undefined;
                managed?: boolean | null | undefined;
                animated?: boolean | null | undefined;
                available?: boolean | null | undefined;
            } | null | undefined;
            party?: {
                id?: string | null | undefined;
                size?: number[] | null | undefined;
            } | null | undefined;
            assets?: {
                large_image?: string | null | undefined;
                large_text?: string | null | undefined;
                small_image?: string | null | undefined;
                small_text?: string | null | undefined;
            } | null | undefined;
            secrets?: {
                join?: string | undefined;
                match?: string | undefined;
            } | null | undefined;
            instance?: boolean | null | undefined;
            flags?: number | null | undefined;
        }, {
            type: number;
            name: string;
            url?: string | null | undefined;
            created_at?: number | null | undefined;
            timestamps?: {
                start?: number | undefined;
                end?: number | undefined;
            } | null | undefined;
            application_id?: string | null | undefined;
            details?: string | null | undefined;
            state?: string | null | undefined;
            emoji?: {
                id: string;
                name?: string | null | undefined;
                roles?: string[] | null | undefined;
                user?: {
                    username: string;
                    discriminator: string;
                    id: string;
                    bot: boolean;
                    avatar_decoration_data: {
                        asset: string;
                        sku_id?: string | undefined;
                    } | null;
                    global_name?: string | null | undefined;
                    avatar?: string | null | undefined;
                    flags?: number | null | undefined;
                    premium_type?: number | null | undefined;
                } | null | undefined;
                require_colons?: boolean | null | undefined;
                managed?: boolean | null | undefined;
                animated?: boolean | null | undefined;
                available?: boolean | null | undefined;
            } | null | undefined;
            party?: {
                id?: string | null | undefined;
                size?: number[] | null | undefined;
            } | null | undefined;
            assets?: {
                large_image?: string | null | undefined;
                large_text?: string | null | undefined;
                small_image?: string | null | undefined;
                small_text?: string | null | undefined;
            } | null | undefined;
            secrets?: {
                join?: string | undefined;
                match?: string | undefined;
            } | null | undefined;
            instance?: boolean | null | undefined;
            flags?: number | null | undefined;
        }>, "many">;
        client_status: zod.ZodObject<{
            desktop: zod.ZodOptional<zod.ZodEffects<zod.ZodType<-1 | "idle" | "dnd" | "online" | "offline", zod.ZodTypeDef, -1 | "idle" | "dnd" | "online" | "offline">, -1 | "idle" | "dnd" | "online" | "offline", unknown>>;
            mobile: zod.ZodOptional<zod.ZodEffects<zod.ZodType<-1 | "idle" | "dnd" | "online" | "offline", zod.ZodTypeDef, -1 | "idle" | "dnd" | "online" | "offline">, -1 | "idle" | "dnd" | "online" | "offline", unknown>>;
            web: zod.ZodOptional<zod.ZodEffects<zod.ZodType<-1 | "idle" | "dnd" | "online" | "offline", zod.ZodTypeDef, -1 | "idle" | "dnd" | "online" | "offline">, -1 | "idle" | "dnd" | "online" | "offline", unknown>>;
        }, "strip", zod.ZodTypeAny, {
            desktop?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
            mobile?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
            web?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
        }, {
            desktop?: unknown;
            mobile?: unknown;
            web?: unknown;
        }>;
    }, "strip", zod.ZodTypeAny, {
        status: -1 | "idle" | "dnd" | "online" | "offline";
        user: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        };
        guild_id: string;
        activities: {
            type: number;
            name: string;
            url?: string | null | undefined;
            created_at?: number | null | undefined;
            timestamps?: {
                start?: number | undefined;
                end?: number | undefined;
            } | null | undefined;
            application_id?: string | null | undefined;
            details?: string | null | undefined;
            state?: string | null | undefined;
            emoji?: {
                id: string;
                name?: string | null | undefined;
                roles?: string[] | null | undefined;
                user?: {
                    username: string;
                    discriminator: string;
                    id: string;
                    bot: boolean;
                    avatar_decoration_data: {
                        asset: string;
                        sku_id?: string | undefined;
                    } | null;
                    global_name?: string | null | undefined;
                    avatar?: string | null | undefined;
                    flags?: number | null | undefined;
                    premium_type?: number | null | undefined;
                } | null | undefined;
                require_colons?: boolean | null | undefined;
                managed?: boolean | null | undefined;
                animated?: boolean | null | undefined;
                available?: boolean | null | undefined;
            } | null | undefined;
            party?: {
                id?: string | null | undefined;
                size?: number[] | null | undefined;
            } | null | undefined;
            assets?: {
                large_image?: string | null | undefined;
                large_text?: string | null | undefined;
                small_image?: string | null | undefined;
                small_text?: string | null | undefined;
            } | null | undefined;
            secrets?: {
                join?: string | undefined;
                match?: string | undefined;
            } | null | undefined;
            instance?: boolean | null | undefined;
            flags?: number | null | undefined;
        }[];
        client_status: {
            desktop?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
            mobile?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
            web?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
        };
    }, {
        user: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        };
        guild_id: string;
        activities: {
            type: number;
            name: string;
            url?: string | null | undefined;
            created_at?: number | null | undefined;
            timestamps?: {
                start?: number | undefined;
                end?: number | undefined;
            } | null | undefined;
            application_id?: string | null | undefined;
            details?: string | null | undefined;
            state?: string | null | undefined;
            emoji?: {
                id: string;
                name?: string | null | undefined;
                roles?: string[] | null | undefined;
                user?: {
                    username: string;
                    discriminator: string;
                    id: string;
                    bot: boolean;
                    avatar_decoration_data: {
                        asset: string;
                        sku_id?: string | undefined;
                    } | null;
                    global_name?: string | null | undefined;
                    avatar?: string | null | undefined;
                    flags?: number | null | undefined;
                    premium_type?: number | null | undefined;
                } | null | undefined;
                require_colons?: boolean | null | undefined;
                managed?: boolean | null | undefined;
                animated?: boolean | null | undefined;
                available?: boolean | null | undefined;
            } | null | undefined;
            party?: {
                id?: string | null | undefined;
                size?: number[] | null | undefined;
            } | null | undefined;
            assets?: {
                large_image?: string | null | undefined;
                large_text?: string | null | undefined;
                small_image?: string | null | undefined;
                small_text?: string | null | undefined;
            } | null | undefined;
            secrets?: {
                join?: string | undefined;
                match?: string | undefined;
            } | null | undefined;
            instance?: boolean | null | undefined;
            flags?: number | null | undefined;
        }[];
        client_status: {
            desktop?: unknown;
            mobile?: unknown;
            web?: unknown;
        };
        status?: unknown;
    }>, "many">>>;
    max_presences: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    max_members: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    vanity_url_code: zod.ZodNullable<zod.ZodString>;
    description: zod.ZodNullable<zod.ZodString>;
    banner: zod.ZodNullable<zod.ZodString>;
    premium_tier: zod.ZodNumber;
    premium_subscription_count: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    preferred_locale: zod.ZodString;
    public_updates_channel_id: zod.ZodNullable<zod.ZodString>;
    max_video_channel_users: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    approximate_member_count: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    approximate_presence_count: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
}, "strip", zod.ZodTypeAny, {
    id: string;
    description: string | null;
    icon: string | null;
    name: string;
    roles: {
        id: string;
        name: string;
        managed: boolean;
        position: number;
        color: number;
        hoist: boolean;
        permissions: string;
        mentionable: boolean;
    }[];
    application_id: string | null;
    owner_id: string;
    splash: string | null;
    discovery_splash: string | null;
    region: string;
    afk_channel_id: string | null;
    afk_timeout: number;
    verification_level: number;
    default_message_notifications: number;
    explicit_content_filter: number;
    emojis: {
        id: string;
        name?: string | null | undefined;
        roles?: string[] | null | undefined;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        animated?: boolean | null | undefined;
        available?: boolean | null | undefined;
    }[];
    features: string[];
    mfa_level: number;
    system_channel_id: string | null;
    system_channel_flags: number;
    rules_channel_id: string | null;
    vanity_url_code: string | null;
    banner: string | null;
    premium_tier: number;
    preferred_locale: string;
    public_updates_channel_id: string | null;
    icon_hash?: string | null | undefined;
    owner?: boolean | null | undefined;
    permissions?: string | null | undefined;
    widget_enabled?: boolean | null | undefined;
    widget_channel_id?: string | null | undefined;
    joined_at?: string | null | undefined;
    large?: boolean | null | undefined;
    unavailable?: boolean | null | undefined;
    member_count?: number | null | undefined;
    voice_states?: {
        deaf: boolean;
        mute: boolean;
        self_mute: boolean;
        self_deaf: boolean;
        suppress: boolean;
    }[] | null | undefined;
    members?: {
        user: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        };
        roles: string[];
        joined_at: string;
        deaf: boolean;
        mute: boolean;
        nick?: string | null | undefined;
    }[] | null | undefined;
    channels?: {
        type: 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15;
        id: string;
        guild_id?: string | null | undefined;
        position?: number | null | undefined;
        permission_overwrites?: {
            type: 0 | 1 | -1;
            id: string;
            allow: string;
            deny: string;
        }[] | null | undefined;
        name?: string | null | undefined;
        topic?: string | null | undefined;
        nsfw?: boolean | null | undefined;
        last_message_id?: string | null | undefined;
        bitrate?: number | null | undefined;
        user_limit?: number | null | undefined;
        rate_limit_per_user?: number | null | undefined;
        recipients?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }[] | null | undefined;
        icon?: string | null | undefined;
        owner_id?: string | null | undefined;
        application_id?: string | null | undefined;
        parent_id?: string | null | undefined;
        last_pin_timestamp?: string | null | undefined;
    }[] | null | undefined;
    presences?: {
        status: -1 | "idle" | "dnd" | "online" | "offline";
        user: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        };
        guild_id: string;
        activities: {
            type: number;
            name: string;
            url?: string | null | undefined;
            created_at?: number | null | undefined;
            timestamps?: {
                start?: number | undefined;
                end?: number | undefined;
            } | null | undefined;
            application_id?: string | null | undefined;
            details?: string | null | undefined;
            state?: string | null | undefined;
            emoji?: {
                id: string;
                name?: string | null | undefined;
                roles?: string[] | null | undefined;
                user?: {
                    username: string;
                    discriminator: string;
                    id: string;
                    bot: boolean;
                    avatar_decoration_data: {
                        asset: string;
                        sku_id?: string | undefined;
                    } | null;
                    global_name?: string | null | undefined;
                    avatar?: string | null | undefined;
                    flags?: number | null | undefined;
                    premium_type?: number | null | undefined;
                } | null | undefined;
                require_colons?: boolean | null | undefined;
                managed?: boolean | null | undefined;
                animated?: boolean | null | undefined;
                available?: boolean | null | undefined;
            } | null | undefined;
            party?: {
                id?: string | null | undefined;
                size?: number[] | null | undefined;
            } | null | undefined;
            assets?: {
                large_image?: string | null | undefined;
                large_text?: string | null | undefined;
                small_image?: string | null | undefined;
                small_text?: string | null | undefined;
            } | null | undefined;
            secrets?: {
                join?: string | undefined;
                match?: string | undefined;
            } | null | undefined;
            instance?: boolean | null | undefined;
            flags?: number | null | undefined;
        }[];
        client_status: {
            desktop?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
            mobile?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
            web?: (-1 | "idle" | "dnd" | "online" | "offline") | undefined;
        };
    }[] | null | undefined;
    max_presences?: number | null | undefined;
    max_members?: number | null | undefined;
    premium_subscription_count?: number | null | undefined;
    max_video_channel_users?: number | null | undefined;
    approximate_member_count?: number | null | undefined;
    approximate_presence_count?: number | null | undefined;
}, {
    id: string;
    description: string | null;
    icon: string | null;
    name: string;
    roles: {
        id: string;
        name: string;
        managed: boolean;
        position: number;
        color: number;
        hoist: boolean;
        permissions: string;
        mentionable: boolean;
    }[];
    application_id: string | null;
    owner_id: string;
    splash: string | null;
    discovery_splash: string | null;
    region: string;
    afk_channel_id: string | null;
    afk_timeout: number;
    verification_level: number;
    default_message_notifications: number;
    explicit_content_filter: number;
    emojis: {
        id: string;
        name?: string | null | undefined;
        roles?: string[] | null | undefined;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        animated?: boolean | null | undefined;
        available?: boolean | null | undefined;
    }[];
    features: string[];
    mfa_level: number;
    system_channel_id: string | null;
    system_channel_flags: number;
    rules_channel_id: string | null;
    vanity_url_code: string | null;
    banner: string | null;
    premium_tier: number;
    preferred_locale: string;
    public_updates_channel_id: string | null;
    icon_hash?: string | null | undefined;
    owner?: boolean | null | undefined;
    permissions?: string | null | undefined;
    widget_enabled?: boolean | null | undefined;
    widget_channel_id?: string | null | undefined;
    joined_at?: string | null | undefined;
    large?: boolean | null | undefined;
    unavailable?: boolean | null | undefined;
    member_count?: number | null | undefined;
    voice_states?: {
        deaf: boolean;
        mute: boolean;
        self_mute: boolean;
        self_deaf: boolean;
        suppress: boolean;
    }[] | null | undefined;
    members?: {
        user: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        };
        roles: string[];
        joined_at: string;
        deaf: boolean;
        mute: boolean;
        nick?: string | null | undefined;
    }[] | null | undefined;
    channels?: {
        id: string;
        type?: unknown;
        guild_id?: string | null | undefined;
        position?: number | null | undefined;
        permission_overwrites?: {
            id: string;
            allow: string;
            deny: string;
            type?: unknown;
        }[] | null | undefined;
        name?: string | null | undefined;
        topic?: string | null | undefined;
        nsfw?: boolean | null | undefined;
        last_message_id?: string | null | undefined;
        bitrate?: number | null | undefined;
        user_limit?: number | null | undefined;
        rate_limit_per_user?: number | null | undefined;
        recipients?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }[] | null | undefined;
        icon?: string | null | undefined;
        owner_id?: string | null | undefined;
        application_id?: string | null | undefined;
        parent_id?: string | null | undefined;
        last_pin_timestamp?: string | null | undefined;
    }[] | null | undefined;
    presences?: {
        user: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        };
        guild_id: string;
        activities: {
            type: number;
            name: string;
            url?: string | null | undefined;
            created_at?: number | null | undefined;
            timestamps?: {
                start?: number | undefined;
                end?: number | undefined;
            } | null | undefined;
            application_id?: string | null | undefined;
            details?: string | null | undefined;
            state?: string | null | undefined;
            emoji?: {
                id: string;
                name?: string | null | undefined;
                roles?: string[] | null | undefined;
                user?: {
                    username: string;
                    discriminator: string;
                    id: string;
                    bot: boolean;
                    avatar_decoration_data: {
                        asset: string;
                        sku_id?: string | undefined;
                    } | null;
                    global_name?: string | null | undefined;
                    avatar?: string | null | undefined;
                    flags?: number | null | undefined;
                    premium_type?: number | null | undefined;
                } | null | undefined;
                require_colons?: boolean | null | undefined;
                managed?: boolean | null | undefined;
                animated?: boolean | null | undefined;
                available?: boolean | null | undefined;
            } | null | undefined;
            party?: {
                id?: string | null | undefined;
                size?: number[] | null | undefined;
            } | null | undefined;
            assets?: {
                large_image?: string | null | undefined;
                large_text?: string | null | undefined;
                small_image?: string | null | undefined;
                small_text?: string | null | undefined;
            } | null | undefined;
            secrets?: {
                join?: string | undefined;
                match?: string | undefined;
            } | null | undefined;
            instance?: boolean | null | undefined;
            flags?: number | null | undefined;
        }[];
        client_status: {
            desktop?: unknown;
            mobile?: unknown;
            web?: unknown;
        };
        status?: unknown;
    }[] | null | undefined;
    max_presences?: number | null | undefined;
    max_members?: number | null | undefined;
    premium_subscription_count?: number | null | undefined;
    max_video_channel_users?: number | null | undefined;
    approximate_member_count?: number | null | undefined;
    approximate_presence_count?: number | null | undefined;
}>;
export declare const ChannelMention: zod.ZodObject<{
    id: zod.ZodString;
    guild_id: zod.ZodString;
    type: zod.ZodNumber;
    name: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    type: number;
    id: string;
    name: string;
    guild_id: string;
}, {
    type: number;
    id: string;
    name: string;
    guild_id: string;
}>;
export declare const Attachment: zod.ZodObject<{
    id: zod.ZodString;
    filename: zod.ZodString;
    size: zod.ZodNumber;
    url: zod.ZodString;
    proxy_url: zod.ZodString;
    height: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    width: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
}, "strip", zod.ZodTypeAny, {
    id: string;
    url: string;
    size: number;
    filename: string;
    proxy_url: string;
    height?: number | null | undefined;
    width?: number | null | undefined;
}, {
    id: string;
    url: string;
    size: number;
    filename: string;
    proxy_url: string;
    height?: number | null | undefined;
    width?: number | null | undefined;
}>;
export declare const EmbedFooter: zod.ZodObject<{
    text: zod.ZodString;
    icon_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    proxy_icon_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
}, "strip", zod.ZodTypeAny, {
    text: string;
    icon_url?: string | null | undefined;
    proxy_icon_url?: string | null | undefined;
}, {
    text: string;
    icon_url?: string | null | undefined;
    proxy_icon_url?: string | null | undefined;
}>;
export declare const Image: zod.ZodObject<{
    url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    proxy_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    height: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    width: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
}, "strip", zod.ZodTypeAny, {
    url?: string | null | undefined;
    proxy_url?: string | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
}, {
    url?: string | null | undefined;
    proxy_url?: string | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
}>;
export declare const Video: zod.ZodObject<Omit<{
    url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    proxy_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    height: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    width: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
}, "proxy_url">, "strip", zod.ZodTypeAny, {
    url?: string | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
}, {
    url?: string | null | undefined;
    height?: number | null | undefined;
    width?: number | null | undefined;
}>;
export declare const EmbedProvider: zod.ZodObject<{
    name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
}, "strip", zod.ZodTypeAny, {
    name?: string | null | undefined;
    url?: string | null | undefined;
}, {
    name?: string | null | undefined;
    url?: string | null | undefined;
}>;
export declare const EmbedAuthor: zod.ZodObject<{
    name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    icon_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    proxy_icon_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
}, "strip", zod.ZodTypeAny, {
    name?: string | null | undefined;
    url?: string | null | undefined;
    icon_url?: string | null | undefined;
    proxy_icon_url?: string | null | undefined;
}, {
    name?: string | null | undefined;
    url?: string | null | undefined;
    icon_url?: string | null | undefined;
    proxy_icon_url?: string | null | undefined;
}>;
export declare const EmbedField: zod.ZodObject<{
    name: zod.ZodString;
    value: zod.ZodString;
    inline: zod.ZodBoolean;
}, "strip", zod.ZodTypeAny, {
    value: string;
    name: string;
    inline: boolean;
}, {
    value: string;
    name: string;
    inline: boolean;
}>;
export declare const Embed: zod.ZodObject<{
    title: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    type: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    description: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    timestamp: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    color: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    footer: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        text: zod.ZodString;
        icon_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        proxy_icon_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    }, "strip", zod.ZodTypeAny, {
        text: string;
        icon_url?: string | null | undefined;
        proxy_icon_url?: string | null | undefined;
    }, {
        text: string;
        icon_url?: string | null | undefined;
        proxy_icon_url?: string | null | undefined;
    }>>>;
    image: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        proxy_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        height: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        width: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    }, "strip", zod.ZodTypeAny, {
        url?: string | null | undefined;
        proxy_url?: string | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
    }, {
        url?: string | null | undefined;
        proxy_url?: string | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
    }>>>;
    thumbnail: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        proxy_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        height: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        width: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    }, "strip", zod.ZodTypeAny, {
        url?: string | null | undefined;
        proxy_url?: string | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
    }, {
        url?: string | null | undefined;
        proxy_url?: string | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
    }>>>;
    video: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<Omit<{
        url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        proxy_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        height: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        width: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    }, "proxy_url">, "strip", zod.ZodTypeAny, {
        url?: string | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
    }, {
        url?: string | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
    }>>>;
    provider: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    }, "strip", zod.ZodTypeAny, {
        name?: string | null | undefined;
        url?: string | null | undefined;
    }, {
        name?: string | null | undefined;
        url?: string | null | undefined;
    }>>>;
    author: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        icon_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        proxy_icon_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    }, "strip", zod.ZodTypeAny, {
        name?: string | null | undefined;
        url?: string | null | undefined;
        icon_url?: string | null | undefined;
        proxy_icon_url?: string | null | undefined;
    }, {
        name?: string | null | undefined;
        url?: string | null | undefined;
        icon_url?: string | null | undefined;
        proxy_icon_url?: string | null | undefined;
    }>>>;
    fields: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
        name: zod.ZodString;
        value: zod.ZodString;
        inline: zod.ZodBoolean;
    }, "strip", zod.ZodTypeAny, {
        value: string;
        name: string;
        inline: boolean;
    }, {
        value: string;
        name: string;
        inline: boolean;
    }>, "many">>>;
}, "strip", zod.ZodTypeAny, {
    title?: string | null | undefined;
    type?: string | null | undefined;
    description?: string | null | undefined;
    url?: string | null | undefined;
    timestamp?: string | null | undefined;
    color?: number | null | undefined;
    footer?: {
        text: string;
        icon_url?: string | null | undefined;
        proxy_icon_url?: string | null | undefined;
    } | null | undefined;
    image?: {
        url?: string | null | undefined;
        proxy_url?: string | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
    } | null | undefined;
    thumbnail?: {
        url?: string | null | undefined;
        proxy_url?: string | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
    } | null | undefined;
    video?: {
        url?: string | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
    } | null | undefined;
    provider?: {
        name?: string | null | undefined;
        url?: string | null | undefined;
    } | null | undefined;
    author?: {
        name?: string | null | undefined;
        url?: string | null | undefined;
        icon_url?: string | null | undefined;
        proxy_icon_url?: string | null | undefined;
    } | null | undefined;
    fields?: {
        value: string;
        name: string;
        inline: boolean;
    }[] | null | undefined;
}, {
    title?: string | null | undefined;
    type?: string | null | undefined;
    description?: string | null | undefined;
    url?: string | null | undefined;
    timestamp?: string | null | undefined;
    color?: number | null | undefined;
    footer?: {
        text: string;
        icon_url?: string | null | undefined;
        proxy_icon_url?: string | null | undefined;
    } | null | undefined;
    image?: {
        url?: string | null | undefined;
        proxy_url?: string | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
    } | null | undefined;
    thumbnail?: {
        url?: string | null | undefined;
        proxy_url?: string | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
    } | null | undefined;
    video?: {
        url?: string | null | undefined;
        height?: number | null | undefined;
        width?: number | null | undefined;
    } | null | undefined;
    provider?: {
        name?: string | null | undefined;
        url?: string | null | undefined;
    } | null | undefined;
    author?: {
        name?: string | null | undefined;
        url?: string | null | undefined;
        icon_url?: string | null | undefined;
        proxy_icon_url?: string | null | undefined;
    } | null | undefined;
    fields?: {
        value: string;
        name: string;
        inline: boolean;
    }[] | null | undefined;
}>;
export declare const Reaction: zod.ZodObject<{
    count: zod.ZodNumber;
    me: zod.ZodBoolean;
    emoji: zod.ZodObject<{
        id: zod.ZodString;
        name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        roles: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>>;
        user: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
            id: zod.ZodString;
            username: zod.ZodString;
            discriminator: zod.ZodString;
            global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
                asset: zod.ZodString;
                sku_id: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                asset: string;
                sku_id?: string | undefined;
            }, {
                asset: string;
                sku_id?: string | undefined;
            }>>;
            bot: zod.ZodBoolean;
            flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        }, "strip", zod.ZodTypeAny, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }>>>;
        require_colons: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        managed: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        animated: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        available: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    }, "strip", zod.ZodTypeAny, {
        id: string;
        name?: string | null | undefined;
        roles?: string[] | null | undefined;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        animated?: boolean | null | undefined;
        available?: boolean | null | undefined;
    }, {
        id: string;
        name?: string | null | undefined;
        roles?: string[] | null | undefined;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        animated?: boolean | null | undefined;
        available?: boolean | null | undefined;
    }>;
}, "strip", zod.ZodTypeAny, {
    emoji: {
        id: string;
        name?: string | null | undefined;
        roles?: string[] | null | undefined;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        animated?: boolean | null | undefined;
        available?: boolean | null | undefined;
    };
    count: number;
    me: boolean;
}, {
    emoji: {
        id: string;
        name?: string | null | undefined;
        roles?: string[] | null | undefined;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        animated?: boolean | null | undefined;
        available?: boolean | null | undefined;
    };
    count: number;
    me: boolean;
}>;
export declare const MessageActivity: zod.ZodObject<{
    type: zod.ZodNumber;
    party_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
}, "strip", zod.ZodTypeAny, {
    type: number;
    party_id?: string | null | undefined;
}, {
    type: number;
    party_id?: string | null | undefined;
}>;
export declare const MessageApplication: zod.ZodObject<{
    id: zod.ZodString;
    cover_image: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    description: zod.ZodString;
    icon: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    name: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    id: string;
    description: string;
    name: string;
    cover_image?: string | null | undefined;
    icon?: string | null | undefined;
}, {
    id: string;
    description: string;
    name: string;
    cover_image?: string | null | undefined;
    icon?: string | null | undefined;
}>;
export declare const MessageReference: zod.ZodObject<{
    message_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    channel_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    guild_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
}, "strip", zod.ZodTypeAny, {
    message_id?: string | null | undefined;
    channel_id?: string | null | undefined;
    guild_id?: string | null | undefined;
}, {
    message_id?: string | null | undefined;
    channel_id?: string | null | undefined;
    guild_id?: string | null | undefined;
}>;
export declare const Message: zod.ZodObject<{
    id: zod.ZodString;
    channel_id: zod.ZodString;
    guild_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    author: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        id: zod.ZodString;
        username: zod.ZodString;
        discriminator: zod.ZodString;
        global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
            asset: zod.ZodString;
            sku_id: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            asset: string;
            sku_id?: string | undefined;
        }, {
            asset: string;
            sku_id?: string | undefined;
        }>>;
        bot: zod.ZodBoolean;
        flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    }, "strip", zod.ZodTypeAny, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }>>>;
    member: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        user: zod.ZodObject<{
            id: zod.ZodString;
            username: zod.ZodString;
            discriminator: zod.ZodString;
            global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
                asset: zod.ZodString;
                sku_id: zod.ZodOptional<zod.ZodString>;
            }, "strip", zod.ZodTypeAny, {
                asset: string;
                sku_id?: string | undefined;
            }, {
                asset: string;
                sku_id?: string | undefined;
            }>>;
            bot: zod.ZodBoolean;
            flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        }, "strip", zod.ZodTypeAny, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }, {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        }>;
        nick: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        roles: zod.ZodArray<zod.ZodString, "many">;
        joined_at: zod.ZodString;
        deaf: zod.ZodBoolean;
        mute: zod.ZodBoolean;
    }, "strip", zod.ZodTypeAny, {
        user: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        };
        roles: string[];
        joined_at: string;
        deaf: boolean;
        mute: boolean;
        nick?: string | null | undefined;
    }, {
        user: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        };
        roles: string[];
        joined_at: string;
        deaf: boolean;
        mute: boolean;
        nick?: string | null | undefined;
    }>>>;
    content: zod.ZodString;
    timestamp: zod.ZodString;
    edited_timestamp: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    tts: zod.ZodBoolean;
    mention_everyone: zod.ZodBoolean;
    mentions: zod.ZodArray<zod.ZodObject<{
        id: zod.ZodString;
        username: zod.ZodString;
        discriminator: zod.ZodString;
        global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
            asset: zod.ZodString;
            sku_id: zod.ZodOptional<zod.ZodString>;
        }, "strip", zod.ZodTypeAny, {
            asset: string;
            sku_id?: string | undefined;
        }, {
            asset: string;
            sku_id?: string | undefined;
        }>>;
        bot: zod.ZodBoolean;
        flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    }, "strip", zod.ZodTypeAny, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }>, "many">;
    mention_roles: zod.ZodArray<zod.ZodString, "many">;
    mention_channels: zod.ZodArray<zod.ZodObject<{
        id: zod.ZodString;
        guild_id: zod.ZodString;
        type: zod.ZodNumber;
        name: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        type: number;
        id: string;
        name: string;
        guild_id: string;
    }, {
        type: number;
        id: string;
        name: string;
        guild_id: string;
    }>, "many">;
    attachments: zod.ZodArray<zod.ZodObject<{
        id: zod.ZodString;
        filename: zod.ZodString;
        size: zod.ZodNumber;
        url: zod.ZodString;
        proxy_url: zod.ZodString;
        height: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        width: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    }, "strip", zod.ZodTypeAny, {
        id: string;
        url: string;
        size: number;
        filename: string;
        proxy_url: string;
        height?: number | null | undefined;
        width?: number | null | undefined;
    }, {
        id: string;
        url: string;
        size: number;
        filename: string;
        proxy_url: string;
        height?: number | null | undefined;
        width?: number | null | undefined;
    }>, "many">;
    embeds: zod.ZodArray<zod.ZodObject<{
        title: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        type: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        description: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        timestamp: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        color: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        footer: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
            text: zod.ZodString;
            icon_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            proxy_icon_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        }, "strip", zod.ZodTypeAny, {
            text: string;
            icon_url?: string | null | undefined;
            proxy_icon_url?: string | null | undefined;
        }, {
            text: string;
            icon_url?: string | null | undefined;
            proxy_icon_url?: string | null | undefined;
        }>>>;
        image: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
            url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            proxy_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            height: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            width: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        }, "strip", zod.ZodTypeAny, {
            url?: string | null | undefined;
            proxy_url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        }, {
            url?: string | null | undefined;
            proxy_url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        }>>>;
        thumbnail: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
            url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            proxy_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            height: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            width: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        }, "strip", zod.ZodTypeAny, {
            url?: string | null | undefined;
            proxy_url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        }, {
            url?: string | null | undefined;
            proxy_url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        }>>>;
        video: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<Omit<{
            url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            proxy_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            height: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            width: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
        }, "proxy_url">, "strip", zod.ZodTypeAny, {
            url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        }, {
            url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        }>>>;
        provider: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
            name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        }, "strip", zod.ZodTypeAny, {
            name?: string | null | undefined;
            url?: string | null | undefined;
        }, {
            name?: string | null | undefined;
            url?: string | null | undefined;
        }>>>;
        author: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
            name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            icon_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            proxy_icon_url: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        }, "strip", zod.ZodTypeAny, {
            name?: string | null | undefined;
            url?: string | null | undefined;
            icon_url?: string | null | undefined;
            proxy_icon_url?: string | null | undefined;
        }, {
            name?: string | null | undefined;
            url?: string | null | undefined;
            icon_url?: string | null | undefined;
            proxy_icon_url?: string | null | undefined;
        }>>>;
        fields: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
            name: zod.ZodString;
            value: zod.ZodString;
            inline: zod.ZodBoolean;
        }, "strip", zod.ZodTypeAny, {
            value: string;
            name: string;
            inline: boolean;
        }, {
            value: string;
            name: string;
            inline: boolean;
        }>, "many">>>;
    }, "strip", zod.ZodTypeAny, {
        title?: string | null | undefined;
        type?: string | null | undefined;
        description?: string | null | undefined;
        url?: string | null | undefined;
        timestamp?: string | null | undefined;
        color?: number | null | undefined;
        footer?: {
            text: string;
            icon_url?: string | null | undefined;
            proxy_icon_url?: string | null | undefined;
        } | null | undefined;
        image?: {
            url?: string | null | undefined;
            proxy_url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        } | null | undefined;
        thumbnail?: {
            url?: string | null | undefined;
            proxy_url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        } | null | undefined;
        video?: {
            url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        } | null | undefined;
        provider?: {
            name?: string | null | undefined;
            url?: string | null | undefined;
        } | null | undefined;
        author?: {
            name?: string | null | undefined;
            url?: string | null | undefined;
            icon_url?: string | null | undefined;
            proxy_icon_url?: string | null | undefined;
        } | null | undefined;
        fields?: {
            value: string;
            name: string;
            inline: boolean;
        }[] | null | undefined;
    }, {
        title?: string | null | undefined;
        type?: string | null | undefined;
        description?: string | null | undefined;
        url?: string | null | undefined;
        timestamp?: string | null | undefined;
        color?: number | null | undefined;
        footer?: {
            text: string;
            icon_url?: string | null | undefined;
            proxy_icon_url?: string | null | undefined;
        } | null | undefined;
        image?: {
            url?: string | null | undefined;
            proxy_url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        } | null | undefined;
        thumbnail?: {
            url?: string | null | undefined;
            proxy_url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        } | null | undefined;
        video?: {
            url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        } | null | undefined;
        provider?: {
            name?: string | null | undefined;
            url?: string | null | undefined;
        } | null | undefined;
        author?: {
            name?: string | null | undefined;
            url?: string | null | undefined;
            icon_url?: string | null | undefined;
            proxy_icon_url?: string | null | undefined;
        } | null | undefined;
        fields?: {
            value: string;
            name: string;
            inline: boolean;
        }[] | null | undefined;
    }>, "many">;
    reactions: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodObject<{
        count: zod.ZodNumber;
        me: zod.ZodBoolean;
        emoji: zod.ZodObject<{
            id: zod.ZodString;
            name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
            roles: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>>;
            user: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
                id: zod.ZodString;
                username: zod.ZodString;
                discriminator: zod.ZodString;
                global_name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                avatar: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
                avatar_decoration_data: zod.ZodNullable<zod.ZodObject<{
                    asset: zod.ZodString;
                    sku_id: zod.ZodOptional<zod.ZodString>;
                }, "strip", zod.ZodTypeAny, {
                    asset: string;
                    sku_id?: string | undefined;
                }, {
                    asset: string;
                    sku_id?: string | undefined;
                }>>;
                bot: zod.ZodBoolean;
                flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
                premium_type: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
            }, "strip", zod.ZodTypeAny, {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            }, {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            }>>>;
            require_colons: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
            managed: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
            animated: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
            available: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
        }, "strip", zod.ZodTypeAny, {
            id: string;
            name?: string | null | undefined;
            roles?: string[] | null | undefined;
            user?: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            } | null | undefined;
            require_colons?: boolean | null | undefined;
            managed?: boolean | null | undefined;
            animated?: boolean | null | undefined;
            available?: boolean | null | undefined;
        }, {
            id: string;
            name?: string | null | undefined;
            roles?: string[] | null | undefined;
            user?: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            } | null | undefined;
            require_colons?: boolean | null | undefined;
            managed?: boolean | null | undefined;
            animated?: boolean | null | undefined;
            available?: boolean | null | undefined;
        }>;
    }, "strip", zod.ZodTypeAny, {
        emoji: {
            id: string;
            name?: string | null | undefined;
            roles?: string[] | null | undefined;
            user?: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            } | null | undefined;
            require_colons?: boolean | null | undefined;
            managed?: boolean | null | undefined;
            animated?: boolean | null | undefined;
            available?: boolean | null | undefined;
        };
        count: number;
        me: boolean;
    }, {
        emoji: {
            id: string;
            name?: string | null | undefined;
            roles?: string[] | null | undefined;
            user?: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            } | null | undefined;
            require_colons?: boolean | null | undefined;
            managed?: boolean | null | undefined;
            animated?: boolean | null | undefined;
            available?: boolean | null | undefined;
        };
        count: number;
        me: boolean;
    }>, "many">>>;
    nonce: zod.ZodNullable<zod.ZodOptional<zod.ZodUnion<[zod.ZodString, zod.ZodNumber]>>>;
    pinned: zod.ZodBoolean;
    webhook_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    type: zod.ZodNumber;
    activity: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        type: zod.ZodNumber;
        party_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    }, "strip", zod.ZodTypeAny, {
        type: number;
        party_id?: string | null | undefined;
    }, {
        type: number;
        party_id?: string | null | undefined;
    }>>>;
    application: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        id: zod.ZodString;
        cover_image: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        description: zod.ZodString;
        icon: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        name: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        id: string;
        description: string;
        name: string;
        cover_image?: string | null | undefined;
        icon?: string | null | undefined;
    }, {
        id: string;
        description: string;
        name: string;
        cover_image?: string | null | undefined;
        icon?: string | null | undefined;
    }>>>;
    message_reference: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        message_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        channel_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        guild_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    }, "strip", zod.ZodTypeAny, {
        message_id?: string | null | undefined;
        channel_id?: string | null | undefined;
        guild_id?: string | null | undefined;
    }, {
        message_id?: string | null | undefined;
        channel_id?: string | null | undefined;
        guild_id?: string | null | undefined;
    }>>>;
    flags: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    stickers: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodUnknown, "many">>>;
    referenced_message: zod.ZodNullable<zod.ZodOptional<zod.ZodUnknown>>;
}, "strip", zod.ZodTypeAny, {
    type: number;
    id: string;
    timestamp: string;
    channel_id: string;
    content: string;
    tts: boolean;
    mention_everyone: boolean;
    mentions: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }[];
    mention_roles: string[];
    mention_channels: {
        type: number;
        id: string;
        name: string;
        guild_id: string;
    }[];
    attachments: {
        id: string;
        url: string;
        size: number;
        filename: string;
        proxy_url: string;
        height?: number | null | undefined;
        width?: number | null | undefined;
    }[];
    embeds: {
        title?: string | null | undefined;
        type?: string | null | undefined;
        description?: string | null | undefined;
        url?: string | null | undefined;
        timestamp?: string | null | undefined;
        color?: number | null | undefined;
        footer?: {
            text: string;
            icon_url?: string | null | undefined;
            proxy_icon_url?: string | null | undefined;
        } | null | undefined;
        image?: {
            url?: string | null | undefined;
            proxy_url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        } | null | undefined;
        thumbnail?: {
            url?: string | null | undefined;
            proxy_url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        } | null | undefined;
        video?: {
            url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        } | null | undefined;
        provider?: {
            name?: string | null | undefined;
            url?: string | null | undefined;
        } | null | undefined;
        author?: {
            name?: string | null | undefined;
            url?: string | null | undefined;
            icon_url?: string | null | undefined;
            proxy_icon_url?: string | null | undefined;
        } | null | undefined;
        fields?: {
            value: string;
            name: string;
            inline: boolean;
        }[] | null | undefined;
    }[];
    pinned: boolean;
    guild_id?: string | null | undefined;
    author?: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    } | null | undefined;
    member?: {
        user: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        };
        roles: string[];
        joined_at: string;
        deaf: boolean;
        mute: boolean;
        nick?: string | null | undefined;
    } | null | undefined;
    edited_timestamp?: string | null | undefined;
    reactions?: {
        emoji: {
            id: string;
            name?: string | null | undefined;
            roles?: string[] | null | undefined;
            user?: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            } | null | undefined;
            require_colons?: boolean | null | undefined;
            managed?: boolean | null | undefined;
            animated?: boolean | null | undefined;
            available?: boolean | null | undefined;
        };
        count: number;
        me: boolean;
    }[] | null | undefined;
    nonce?: string | number | null | undefined;
    webhook_id?: string | null | undefined;
    activity?: {
        type: number;
        party_id?: string | null | undefined;
    } | null | undefined;
    application?: {
        id: string;
        description: string;
        name: string;
        cover_image?: string | null | undefined;
        icon?: string | null | undefined;
    } | null | undefined;
    message_reference?: {
        message_id?: string | null | undefined;
        channel_id?: string | null | undefined;
        guild_id?: string | null | undefined;
    } | null | undefined;
    flags?: number | null | undefined;
    stickers?: unknown[] | null | undefined;
    referenced_message?: unknown;
}, {
    type: number;
    id: string;
    timestamp: string;
    channel_id: string;
    content: string;
    tts: boolean;
    mention_everyone: boolean;
    mentions: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    }[];
    mention_roles: string[];
    mention_channels: {
        type: number;
        id: string;
        name: string;
        guild_id: string;
    }[];
    attachments: {
        id: string;
        url: string;
        size: number;
        filename: string;
        proxy_url: string;
        height?: number | null | undefined;
        width?: number | null | undefined;
    }[];
    embeds: {
        title?: string | null | undefined;
        type?: string | null | undefined;
        description?: string | null | undefined;
        url?: string | null | undefined;
        timestamp?: string | null | undefined;
        color?: number | null | undefined;
        footer?: {
            text: string;
            icon_url?: string | null | undefined;
            proxy_icon_url?: string | null | undefined;
        } | null | undefined;
        image?: {
            url?: string | null | undefined;
            proxy_url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        } | null | undefined;
        thumbnail?: {
            url?: string | null | undefined;
            proxy_url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        } | null | undefined;
        video?: {
            url?: string | null | undefined;
            height?: number | null | undefined;
            width?: number | null | undefined;
        } | null | undefined;
        provider?: {
            name?: string | null | undefined;
            url?: string | null | undefined;
        } | null | undefined;
        author?: {
            name?: string | null | undefined;
            url?: string | null | undefined;
            icon_url?: string | null | undefined;
            proxy_icon_url?: string | null | undefined;
        } | null | undefined;
        fields?: {
            value: string;
            name: string;
            inline: boolean;
        }[] | null | undefined;
    }[];
    pinned: boolean;
    guild_id?: string | null | undefined;
    author?: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        avatar_decoration_data: {
            asset: string;
            sku_id?: string | undefined;
        } | null;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        flags?: number | null | undefined;
        premium_type?: number | null | undefined;
    } | null | undefined;
    member?: {
        user: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        };
        roles: string[];
        joined_at: string;
        deaf: boolean;
        mute: boolean;
        nick?: string | null | undefined;
    } | null | undefined;
    edited_timestamp?: string | null | undefined;
    reactions?: {
        emoji: {
            id: string;
            name?: string | null | undefined;
            roles?: string[] | null | undefined;
            user?: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                avatar_decoration_data: {
                    asset: string;
                    sku_id?: string | undefined;
                } | null;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                flags?: number | null | undefined;
                premium_type?: number | null | undefined;
            } | null | undefined;
            require_colons?: boolean | null | undefined;
            managed?: boolean | null | undefined;
            animated?: boolean | null | undefined;
            available?: boolean | null | undefined;
        };
        count: number;
        me: boolean;
    }[] | null | undefined;
    nonce?: string | number | null | undefined;
    webhook_id?: string | null | undefined;
    activity?: {
        type: number;
        party_id?: string | null | undefined;
    } | null | undefined;
    application?: {
        id: string;
        description: string;
        name: string;
        cover_image?: string | null | undefined;
        icon?: string | null | undefined;
    } | null | undefined;
    message_reference?: {
        message_id?: string | null | undefined;
        channel_id?: string | null | undefined;
        guild_id?: string | null | undefined;
    } | null | undefined;
    flags?: number | null | undefined;
    stickers?: unknown[] | null | undefined;
    referenced_message?: unknown;
}>;
export declare const VoiceDevice: zod.ZodObject<{
    id: zod.ZodString;
    name: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    id: string;
    name: string;
}, {
    id: string;
    name: string;
}>;
export declare const KeyTypesObject: {
    readonly UNHANDLED: -1;
    readonly KEYBOARD_KEY: 0;
    readonly MOUSE_BUTTON: 1;
    readonly KEYBOARD_MODIFIER_KEY: 2;
    readonly GAMEPAD_BUTTON: 3;
};
export declare const ShortcutKey: zod.ZodObject<{
    type: zod.ZodEffects<zod.ZodType<0 | 1 | 3 | -1 | 2, zod.ZodTypeDef, 0 | 1 | 3 | -1 | 2>, 0 | 1 | 3 | -1 | 2, unknown>;
    code: zod.ZodNumber;
    name: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    code: number;
    type: 0 | 1 | 3 | -1 | 2;
    name: string;
}, {
    code: number;
    name: string;
    type?: unknown;
}>;
export declare const VoiceSettingModeTypeObject: {
    readonly UNHANDLED: -1;
    readonly PUSH_TO_TALK: "PUSH_TO_TALK";
    readonly VOICE_ACTIVITY: "VOICE_ACTIVITY";
};
export declare const VoiceSettingsMode: zod.ZodObject<{
    type: zod.ZodEffects<zod.ZodType<-1 | "PUSH_TO_TALK" | "VOICE_ACTIVITY", zod.ZodTypeDef, -1 | "PUSH_TO_TALK" | "VOICE_ACTIVITY">, -1 | "PUSH_TO_TALK" | "VOICE_ACTIVITY", unknown>;
    auto_threshold: zod.ZodBoolean;
    threshold: zod.ZodNumber;
    shortcut: zod.ZodArray<zod.ZodObject<{
        type: zod.ZodEffects<zod.ZodType<0 | 1 | 3 | -1 | 2, zod.ZodTypeDef, 0 | 1 | 3 | -1 | 2>, 0 | 1 | 3 | -1 | 2, unknown>;
        code: zod.ZodNumber;
        name: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        code: number;
        type: 0 | 1 | 3 | -1 | 2;
        name: string;
    }, {
        code: number;
        name: string;
        type?: unknown;
    }>, "many">;
    delay: zod.ZodNumber;
}, "strip", zod.ZodTypeAny, {
    type: -1 | "PUSH_TO_TALK" | "VOICE_ACTIVITY";
    auto_threshold: boolean;
    threshold: number;
    shortcut: {
        code: number;
        type: 0 | 1 | 3 | -1 | 2;
        name: string;
    }[];
    delay: number;
}, {
    auto_threshold: boolean;
    threshold: number;
    shortcut: {
        code: number;
        name: string;
        type?: unknown;
    }[];
    delay: number;
    type?: unknown;
}>;
export declare const VoiceSettingsIO: zod.ZodObject<{
    device_id: zod.ZodString;
    volume: zod.ZodNumber;
    available_devices: zod.ZodArray<zod.ZodObject<{
        id: zod.ZodString;
        name: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">;
}, "strip", zod.ZodTypeAny, {
    volume: number;
    device_id: string;
    available_devices: {
        id: string;
        name: string;
    }[];
}, {
    volume: number;
    device_id: string;
    available_devices: {
        id: string;
        name: string;
    }[];
}>;
export declare const CertifiedDeviceTypeObject: {
    readonly UNHANDLED: -1;
    readonly AUDIO_INPUT: "AUDIO_INPUT";
    readonly AUDIO_OUTPUT: "AUDIO_OUTPUT";
    readonly VIDEO_INPUT: "VIDEO_INPUT";
};
export declare const CertifiedDevice: zod.ZodObject<{
    type: zod.ZodEffects<zod.ZodType<-1 | "AUDIO_INPUT" | "AUDIO_OUTPUT" | "VIDEO_INPUT", zod.ZodTypeDef, -1 | "AUDIO_INPUT" | "AUDIO_OUTPUT" | "VIDEO_INPUT">, -1 | "AUDIO_INPUT" | "AUDIO_OUTPUT" | "VIDEO_INPUT", unknown>;
    id: zod.ZodString;
    vendor: zod.ZodObject<{
        name: zod.ZodString;
        url: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        name: string;
        url: string;
    }, {
        name: string;
        url: string;
    }>;
    model: zod.ZodObject<{
        name: zod.ZodString;
        url: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        name: string;
        url: string;
    }, {
        name: string;
        url: string;
    }>;
    related: zod.ZodArray<zod.ZodString, "many">;
    echo_cancellation: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    noise_suppression: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    automatic_gain_control: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    hardware_mute: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
}, "strip", zod.ZodTypeAny, {
    type: -1 | "AUDIO_INPUT" | "AUDIO_OUTPUT" | "VIDEO_INPUT";
    id: string;
    vendor: {
        name: string;
        url: string;
    };
    model: {
        name: string;
        url: string;
    };
    related: string[];
    echo_cancellation?: boolean | null | undefined;
    noise_suppression?: boolean | null | undefined;
    automatic_gain_control?: boolean | null | undefined;
    hardware_mute?: boolean | null | undefined;
}, {
    id: string;
    vendor: {
        name: string;
        url: string;
    };
    model: {
        name: string;
        url: string;
    };
    related: string[];
    type?: unknown;
    echo_cancellation?: boolean | null | undefined;
    noise_suppression?: boolean | null | undefined;
    automatic_gain_control?: boolean | null | undefined;
    hardware_mute?: boolean | null | undefined;
}>;
export declare const SkuTypeObject: {
    readonly UNHANDLED: -1;
    readonly APPLICATION: 1;
    readonly DLC: 2;
    readonly CONSUMABLE: 3;
    readonly BUNDLE: 4;
    readonly SUBSCRIPTION: 5;
};
export declare const Sku: zod.ZodObject<{
    id: zod.ZodString;
    name: zod.ZodString;
    type: zod.ZodEffects<zod.ZodType<1 | 4 | 3 | -1 | 2 | 5, zod.ZodTypeDef, 1 | 4 | 3 | -1 | 2 | 5>, 1 | 4 | 3 | -1 | 2 | 5, unknown>;
    price: zod.ZodObject<{
        amount: zod.ZodNumber;
        currency: zod.ZodString;
    }, "strip", zod.ZodTypeAny, {
        amount: number;
        currency: string;
    }, {
        amount: number;
        currency: string;
    }>;
    application_id: zod.ZodString;
    flags: zod.ZodNumber;
    release_date: zod.ZodNullable<zod.ZodString>;
}, "strip", zod.ZodTypeAny, {
    type: 1 | 4 | 3 | -1 | 2 | 5;
    id: string;
    name: string;
    flags: number;
    application_id: string;
    price: {
        amount: number;
        currency: string;
    };
    release_date: string | null;
}, {
    id: string;
    name: string;
    flags: number;
    application_id: string;
    price: {
        amount: number;
        currency: string;
    };
    release_date: string | null;
    type?: unknown;
}>;
export declare const EntitlementTypesObject: {
    readonly UNHANDLED: -1;
    readonly PURCHASE: 1;
    readonly PREMIUM_SUBSCRIPTION: 2;
    readonly DEVELOPER_GIFT: 3;
    readonly TEST_MODE_PURCHASE: 4;
    readonly FREE_PURCHASE: 5;
    readonly USER_GIFT: 6;
    readonly PREMIUM_PURCHASE: 7;
};
export declare const Entitlement: zod.ZodObject<{
    id: zod.ZodString;
    sku_id: zod.ZodString;
    application_id: zod.ZodString;
    user_id: zod.ZodString;
    gift_code_flags: zod.ZodNumber;
    type: zod.ZodEffects<zod.ZodType<1 | 4 | 3 | -1 | 2 | 5 | 6 | 7, zod.ZodTypeDef, 1 | 4 | 3 | -1 | 2 | 5 | 6 | 7>, 1 | 4 | 3 | -1 | 2 | 5 | 6 | 7, unknown>;
    gifter_user_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    branches: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodString, "many">>>;
    starts_at: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    ends_at: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    parent_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    consumed: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    deleted: zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>;
    gift_code_batch_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
}, "strip", zod.ZodTypeAny, {
    type: 1 | 4 | 3 | -1 | 2 | 5 | 6 | 7;
    id: string;
    sku_id: string;
    application_id: string;
    user_id: string;
    gift_code_flags: number;
    gifter_user_id?: string | null | undefined;
    branches?: string[] | null | undefined;
    starts_at?: string | null | undefined;
    ends_at?: string | null | undefined;
    parent_id?: string | null | undefined;
    consumed?: boolean | null | undefined;
    deleted?: boolean | null | undefined;
    gift_code_batch_id?: string | null | undefined;
}, {
    id: string;
    sku_id: string;
    application_id: string;
    user_id: string;
    gift_code_flags: number;
    type?: unknown;
    gifter_user_id?: string | null | undefined;
    branches?: string[] | null | undefined;
    starts_at?: string | null | undefined;
    ends_at?: string | null | undefined;
    parent_id?: string | null | undefined;
    consumed?: boolean | null | undefined;
    deleted?: boolean | null | undefined;
    gift_code_batch_id?: string | null | undefined;
}>;
export declare const OrientationLockStateTypeObject: {
    readonly UNHANDLED: -1;
    readonly UNLOCKED: 1;
    readonly PORTRAIT: 2;
    readonly LANDSCAPE: 3;
};
export declare const OrientationLockState: zod.ZodEffects<zod.ZodType<1 | 3 | -1 | 2, zod.ZodTypeDef, 1 | 3 | -1 | 2>, 1 | 3 | -1 | 2, unknown>;
export declare const ThermalStateTypeObject: {
    readonly UNHANDLED: -1;
    readonly NOMINAL: 0;
    readonly FAIR: 1;
    readonly SERIOUS: 2;
    readonly CRITICAL: 3;
};
export declare const ThermalState: zod.ZodEffects<zod.ZodType<0 | 1 | 3 | -1 | 2, zod.ZodTypeDef, 0 | 1 | 3 | -1 | 2>, 0 | 1 | 3 | -1 | 2, unknown>;
export declare const OrientationTypeObject: {
    readonly UNHANDLED: -1;
    readonly PORTRAIT: 0;
    readonly LANDSCAPE: 1;
};
export declare const Orientation: zod.ZodEffects<zod.ZodType<0 | 1 | -1, zod.ZodTypeDef, 0 | 1 | -1>, 0 | 1 | -1, unknown>;
export declare const LayoutModeTypeObject: {
    readonly UNHANDLED: -1;
    readonly FOCUSED: 0;
    readonly PIP: 1;
    readonly GRID: 2;
};
export declare const LayoutMode: zod.ZodEffects<zod.ZodType<0 | 1 | -1 | 2, zod.ZodTypeDef, 0 | 1 | -1 | 2>, 0 | 1 | -1 | 2, unknown>;
