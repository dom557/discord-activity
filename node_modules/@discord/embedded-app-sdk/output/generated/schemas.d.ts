/**
 * This file is generated.
 * Run "pnpm sync" to regenerate file.
 * @generated
 */
import { z, infer as zInfer } from 'zod';
export declare const InitiateImageUploadResponseSchema: z.ZodObject<{
    image_url: z.ZodString;
}, "strip", z.ZodTypeAny, {
    image_url: string;
}, {
    image_url: string;
}>;
export type InitiateImageUploadResponse = zInfer<typeof InitiateImageUploadResponseSchema>;
export declare const OpenShareMomentDialogRequestSchema: z.ZodObject<{
    mediaUrl: z.ZodString;
}, "strip", z.ZodTypeAny, {
    mediaUrl: string;
}, {
    mediaUrl: string;
}>;
export type OpenShareMomentDialogRequest = zInfer<typeof OpenShareMomentDialogRequestSchema>;
export declare const AuthenticateRequestSchema: z.ZodObject<{
    access_token: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
}, "strip", z.ZodTypeAny, {
    access_token?: string | null | undefined;
}, {
    access_token?: string | null | undefined;
}>;
export type AuthenticateRequest = zInfer<typeof AuthenticateRequestSchema>;
export declare const AuthenticateResponseSchema: z.ZodObject<{
    access_token: z.ZodString;
    user: z.ZodObject<{
        username: z.ZodString;
        discriminator: z.ZodString;
        id: z.ZodString;
        avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
        public_flags: z.ZodNumber;
        global_name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
    }, "strip", z.ZodTypeAny, {
        username: string;
        discriminator: string;
        id: string;
        public_flags: number;
        avatar?: string | null | undefined;
        global_name?: string | null | undefined;
    }, {
        username: string;
        discriminator: string;
        id: string;
        public_flags: number;
        avatar?: string | null | undefined;
        global_name?: string | null | undefined;
    }>;
    scopes: z.ZodArray<import("../utils/zodUtils").ZodEffectOverlayType<z.ZodDefault<z.ZodUnion<[z.ZodEnum<["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]>, z.ZodLiteral<-1>]>>>, "many">;
    expires: z.ZodString;
    application: z.ZodObject<{
        description: z.ZodString;
        icon: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
        id: z.ZodString;
        rpc_origins: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        description: string;
        name: string;
        icon?: string | null | undefined;
        rpc_origins?: string[] | undefined;
    }, {
        id: string;
        description: string;
        name: string;
        icon?: string | null | undefined;
        rpc_origins?: string[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    access_token: string;
    user: {
        username: string;
        discriminator: string;
        id: string;
        public_flags: number;
        avatar?: string | null | undefined;
        global_name?: string | null | undefined;
    };
    scopes: (-1 | "identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "gdm.join" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "bot" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.update" | "applications.commands.permissions.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "relationships.read" | "voice" | "dm_channels.read" | "role_connections.write")[];
    expires: string;
    application: {
        id: string;
        description: string;
        name: string;
        icon?: string | null | undefined;
        rpc_origins?: string[] | undefined;
    };
}, {
    access_token: string;
    user: {
        username: string;
        discriminator: string;
        id: string;
        public_flags: number;
        avatar?: string | null | undefined;
        global_name?: string | null | undefined;
    };
    scopes: (-1 | "identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "gdm.join" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "bot" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.update" | "applications.commands.permissions.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "relationships.read" | "voice" | "dm_channels.read" | "role_connections.write" | undefined)[];
    expires: string;
    application: {
        id: string;
        description: string;
        name: string;
        icon?: string | null | undefined;
        rpc_origins?: string[] | undefined;
    };
}>;
export type AuthenticateResponse = zInfer<typeof AuthenticateResponseSchema>;
export declare const GetActivityInstanceConnectedParticipantsResponseSchema: z.ZodObject<{
    participants: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        username: z.ZodString;
        global_name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
        discriminator: z.ZodString;
        avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
        flags: z.ZodNumber;
        bot: z.ZodBoolean;
        avatar_decoration_data: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
            asset: z.ZodString;
            skuId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            asset: string;
            skuId?: string | undefined;
        }, {
            asset: string;
            skuId?: string | undefined;
        }>, z.ZodNull]>>;
        premium_type: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull]>>;
        nickname: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        flags: number;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        avatar_decoration_data?: {
            asset: string;
            skuId?: string | undefined;
        } | null | undefined;
        premium_type?: number | null | undefined;
        nickname?: string | undefined;
    }, {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        flags: number;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        avatar_decoration_data?: {
            asset: string;
            skuId?: string | undefined;
        } | null | undefined;
        premium_type?: number | null | undefined;
        nickname?: string | undefined;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    participants: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        flags: number;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        avatar_decoration_data?: {
            asset: string;
            skuId?: string | undefined;
        } | null | undefined;
        premium_type?: number | null | undefined;
        nickname?: string | undefined;
    }[];
}, {
    participants: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        flags: number;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        avatar_decoration_data?: {
            asset: string;
            skuId?: string | undefined;
        } | null | undefined;
        premium_type?: number | null | undefined;
        nickname?: string | undefined;
    }[];
}>;
export type GetActivityInstanceConnectedParticipantsResponse = zInfer<typeof GetActivityInstanceConnectedParticipantsResponseSchema>;
/**
 * RPC Commands which support schemas.
 */
export declare enum Command {
    INITIATE_IMAGE_UPLOAD = "INITIATE_IMAGE_UPLOAD",
    OPEN_SHARE_MOMENT_DIALOG = "OPEN_SHARE_MOMENT_DIALOG",
    AUTHENTICATE = "AUTHENTICATE",
    GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS = "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS"
}
/**
 * Request & Response schemas for each supported RPC Command.
 */
export declare const Schemas: {
    readonly INITIATE_IMAGE_UPLOAD: {
        readonly request: z.ZodVoid;
        readonly response: z.ZodObject<{
            image_url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            image_url: string;
        }, {
            image_url: string;
        }>;
    };
    readonly OPEN_SHARE_MOMENT_DIALOG: {
        readonly request: z.ZodObject<{
            mediaUrl: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            mediaUrl: string;
        }, {
            mediaUrl: string;
        }>;
        readonly response: z.ZodNullable<z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>>;
    };
    readonly AUTHENTICATE: {
        readonly request: z.ZodObject<{
            access_token: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
        }, "strip", z.ZodTypeAny, {
            access_token?: string | null | undefined;
        }, {
            access_token?: string | null | undefined;
        }>;
        readonly response: z.ZodObject<{
            access_token: z.ZodString;
            user: z.ZodObject<{
                username: z.ZodString;
                discriminator: z.ZodString;
                id: z.ZodString;
                avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
                public_flags: z.ZodNumber;
                global_name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
            }, "strip", z.ZodTypeAny, {
                username: string;
                discriminator: string;
                id: string;
                public_flags: number;
                avatar?: string | null | undefined;
                global_name?: string | null | undefined;
            }, {
                username: string;
                discriminator: string;
                id: string;
                public_flags: number;
                avatar?: string | null | undefined;
                global_name?: string | null | undefined;
            }>;
            scopes: z.ZodArray<import("../utils/zodUtils").ZodEffectOverlayType<z.ZodDefault<z.ZodUnion<[z.ZodEnum<["identify", "email", "connections", "guilds", "guilds.join", "guilds.members.read", "gdm.join", "rpc", "rpc.notifications.read", "rpc.voice.read", "rpc.voice.write", "rpc.video.read", "rpc.video.write", "rpc.screenshare.read", "rpc.screenshare.write", "rpc.activities.write", "bot", "webhook.incoming", "messages.read", "applications.builds.upload", "applications.builds.read", "applications.commands", "applications.commands.update", "applications.commands.permissions.update", "applications.store.update", "applications.entitlements", "activities.read", "activities.write", "relationships.read", "voice", "dm_channels.read", "role_connections.write"]>, z.ZodLiteral<-1>]>>>, "many">;
            expires: z.ZodString;
            application: z.ZodObject<{
                description: z.ZodString;
                icon: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
                id: z.ZodString;
                rpc_origins: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                description: string;
                name: string;
                icon?: string | null | undefined;
                rpc_origins?: string[] | undefined;
            }, {
                id: string;
                description: string;
                name: string;
                icon?: string | null | undefined;
                rpc_origins?: string[] | undefined;
            }>;
        }, "strip", z.ZodTypeAny, {
            access_token: string;
            user: {
                username: string;
                discriminator: string;
                id: string;
                public_flags: number;
                avatar?: string | null | undefined;
                global_name?: string | null | undefined;
            };
            scopes: (-1 | "identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "gdm.join" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "bot" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.update" | "applications.commands.permissions.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "relationships.read" | "voice" | "dm_channels.read" | "role_connections.write")[];
            expires: string;
            application: {
                id: string;
                description: string;
                name: string;
                icon?: string | null | undefined;
                rpc_origins?: string[] | undefined;
            };
        }, {
            access_token: string;
            user: {
                username: string;
                discriminator: string;
                id: string;
                public_flags: number;
                avatar?: string | null | undefined;
                global_name?: string | null | undefined;
            };
            scopes: (-1 | "identify" | "email" | "connections" | "guilds" | "guilds.join" | "guilds.members.read" | "gdm.join" | "rpc" | "rpc.notifications.read" | "rpc.voice.read" | "rpc.voice.write" | "rpc.video.read" | "rpc.video.write" | "rpc.screenshare.read" | "rpc.screenshare.write" | "rpc.activities.write" | "bot" | "webhook.incoming" | "messages.read" | "applications.builds.upload" | "applications.builds.read" | "applications.commands" | "applications.commands.update" | "applications.commands.permissions.update" | "applications.store.update" | "applications.entitlements" | "activities.read" | "activities.write" | "relationships.read" | "voice" | "dm_channels.read" | "role_connections.write" | undefined)[];
            expires: string;
            application: {
                id: string;
                description: string;
                name: string;
                icon?: string | null | undefined;
                rpc_origins?: string[] | undefined;
            };
        }>;
    };
    readonly GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS: {
        readonly request: z.ZodVoid;
        readonly response: z.ZodObject<{
            participants: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                username: z.ZodString;
                global_name: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
                discriminator: z.ZodString;
                avatar: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNull]>>;
                flags: z.ZodNumber;
                bot: z.ZodBoolean;
                avatar_decoration_data: z.ZodOptional<z.ZodUnion<[z.ZodObject<{
                    asset: z.ZodString;
                    skuId: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    asset: string;
                    skuId?: string | undefined;
                }, {
                    asset: string;
                    skuId?: string | undefined;
                }>, z.ZodNull]>>;
                premium_type: z.ZodOptional<z.ZodUnion<[z.ZodNumber, z.ZodNull]>>;
                nickname: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                flags: number;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                avatar_decoration_data?: {
                    asset: string;
                    skuId?: string | undefined;
                } | null | undefined;
                premium_type?: number | null | undefined;
                nickname?: string | undefined;
            }, {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                flags: number;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                avatar_decoration_data?: {
                    asset: string;
                    skuId?: string | undefined;
                } | null | undefined;
                premium_type?: number | null | undefined;
                nickname?: string | undefined;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            participants: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                flags: number;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                avatar_decoration_data?: {
                    asset: string;
                    skuId?: string | undefined;
                } | null | undefined;
                premium_type?: number | null | undefined;
                nickname?: string | undefined;
            }[];
        }, {
            participants: {
                username: string;
                discriminator: string;
                id: string;
                bot: boolean;
                flags: number;
                global_name?: string | null | undefined;
                avatar?: string | null | undefined;
                avatar_decoration_data?: {
                    asset: string;
                    skuId?: string | undefined;
                } | null | undefined;
                premium_type?: number | null | undefined;
                nickname?: string | undefined;
            }[];
        }>;
    };
};
