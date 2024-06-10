import * as zod from 'zod';
import { Commands } from './common';
import { AuthenticateResponseSchema, InitiateImageUploadResponseSchema } from '../generated/schemas';
export declare const EmptyResponse: zod.ZodNullable<zod.ZodObject<{}, "strip", zod.ZodTypeAny, {}, {}>>;
export declare const AuthorizeResponse: zod.ZodObject<{
    code: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    code: string;
}, {
    code: string;
}>;
export { AuthenticateResponseSchema as AuthenticateResponse };
export declare const GetGuildsResponse: zod.ZodObject<{
    guilds: zod.ZodArray<zod.ZodObject<{
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
    guilds: {
        id: string;
        name: string;
    }[];
}, {
    guilds: {
        id: string;
        name: string;
    }[];
}>;
export declare const GetGuildResponse: zod.ZodObject<{
    id: zod.ZodString;
    name: zod.ZodString;
    icon_url: zod.ZodOptional<zod.ZodString>;
    members: zod.ZodArray<zod.ZodObject<{
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
    }>, "many">;
}, "strip", zod.ZodTypeAny, {
    id: string;
    name: string;
    members: {
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
    }[];
    icon_url?: string | undefined;
}, {
    id: string;
    name: string;
    members: {
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
    }[];
    icon_url?: string | undefined;
}>;
export declare const GetChannelResponse: zod.ZodObject<{
    id: zod.ZodString;
    type: zod.ZodEffects<zod.ZodType<0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15, zod.ZodTypeDef, 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15>, 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15, unknown>;
    guild_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    topic: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    bitrate: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    user_limit: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    position: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    voice_states: zod.ZodArray<zod.ZodObject<{
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
    }>, "many">;
    messages: zod.ZodArray<zod.ZodObject<{
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
    }>, "many">;
}, "strip", zod.ZodTypeAny, {
    type: 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15;
    id: string;
    voice_states: {
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
    }[];
    messages: {
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
    }[];
    guild_id?: string | null | undefined;
    name?: string | null | undefined;
    topic?: string | null | undefined;
    bitrate?: number | null | undefined;
    user_limit?: number | null | undefined;
    position?: number | null | undefined;
}, {
    id: string;
    voice_states: {
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
    }[];
    messages: {
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
    }[];
    type?: unknown;
    guild_id?: string | null | undefined;
    name?: string | null | undefined;
    topic?: string | null | undefined;
    bitrate?: number | null | undefined;
    user_limit?: number | null | undefined;
    position?: number | null | undefined;
}>;
export declare const GetChannelsResponse: zod.ZodObject<{
    channels: zod.ZodArray<zod.ZodObject<{
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
    }>, "many">;
}, "strip", zod.ZodTypeAny, {
    channels: {
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
    }[];
}, {
    channels: {
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
    }[];
}>;
export declare const NullableChannelResponse: zod.ZodNullable<zod.ZodObject<{
    id: zod.ZodString;
    type: zod.ZodEffects<zod.ZodType<0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15, zod.ZodTypeDef, 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15>, 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15, unknown>;
    guild_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    topic: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    bitrate: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    user_limit: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    position: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    voice_states: zod.ZodArray<zod.ZodObject<{
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
    }>, "many">;
    messages: zod.ZodArray<zod.ZodObject<{
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
    }>, "many">;
}, "strip", zod.ZodTypeAny, {
    type: 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15;
    id: string;
    voice_states: {
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
    }[];
    messages: {
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
    }[];
    guild_id?: string | null | undefined;
    name?: string | null | undefined;
    topic?: string | null | undefined;
    bitrate?: number | null | undefined;
    user_limit?: number | null | undefined;
    position?: number | null | undefined;
}, {
    id: string;
    voice_states: {
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
    }[];
    messages: {
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
    }[];
    type?: unknown;
    guild_id?: string | null | undefined;
    name?: string | null | undefined;
    topic?: string | null | undefined;
    bitrate?: number | null | undefined;
    user_limit?: number | null | undefined;
    position?: number | null | undefined;
}>>;
export declare const SelectVoiceChannelResponse: zod.ZodNullable<zod.ZodObject<{
    id: zod.ZodString;
    type: zod.ZodEffects<zod.ZodType<0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15, zod.ZodTypeDef, 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15>, 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15, unknown>;
    guild_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    topic: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    bitrate: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    user_limit: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    position: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    voice_states: zod.ZodArray<zod.ZodObject<{
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
    }>, "many">;
    messages: zod.ZodArray<zod.ZodObject<{
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
    }>, "many">;
}, "strip", zod.ZodTypeAny, {
    type: 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15;
    id: string;
    voice_states: {
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
    }[];
    messages: {
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
    }[];
    guild_id?: string | null | undefined;
    name?: string | null | undefined;
    topic?: string | null | undefined;
    bitrate?: number | null | undefined;
    user_limit?: number | null | undefined;
    position?: number | null | undefined;
}, {
    id: string;
    voice_states: {
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
    }[];
    messages: {
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
    }[];
    type?: unknown;
    guild_id?: string | null | undefined;
    name?: string | null | undefined;
    topic?: string | null | undefined;
    bitrate?: number | null | undefined;
    user_limit?: number | null | undefined;
    position?: number | null | undefined;
}>>;
export declare const SelectTextChannelResponse: zod.ZodNullable<zod.ZodObject<{
    id: zod.ZodString;
    type: zod.ZodEffects<zod.ZodType<0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15, zod.ZodTypeDef, 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15>, 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15, unknown>;
    guild_id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    name: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    topic: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    bitrate: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    user_limit: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    position: zod.ZodNullable<zod.ZodOptional<zod.ZodNumber>>;
    voice_states: zod.ZodArray<zod.ZodObject<{
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
    }>, "many">;
    messages: zod.ZodArray<zod.ZodObject<{
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
    }>, "many">;
}, "strip", zod.ZodTypeAny, {
    type: 0 | 10 | 1 | 4 | 3 | -1 | 2 | 5 | 6 | 11 | 12 | 13 | 14 | 15;
    id: string;
    voice_states: {
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
    }[];
    messages: {
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
    }[];
    guild_id?: string | null | undefined;
    name?: string | null | undefined;
    topic?: string | null | undefined;
    bitrate?: number | null | undefined;
    user_limit?: number | null | undefined;
    position?: number | null | undefined;
}, {
    id: string;
    voice_states: {
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
    }[];
    messages: {
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
    }[];
    type?: unknown;
    guild_id?: string | null | undefined;
    name?: string | null | undefined;
    topic?: string | null | undefined;
    bitrate?: number | null | undefined;
    user_limit?: number | null | undefined;
    position?: number | null | undefined;
}>>;
export declare const VoiceSettingsResponse: zod.ZodObject<{
    input: zod.ZodObject<{
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
    output: zod.ZodObject<{
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
    mode: zod.ZodObject<{
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
    automatic_gain_control: zod.ZodBoolean;
    echo_cancellation: zod.ZodBoolean;
    noise_suppression: zod.ZodBoolean;
    qos: zod.ZodBoolean;
    silence_warning: zod.ZodBoolean;
    deaf: zod.ZodBoolean;
    mute: zod.ZodBoolean;
}, "strip", zod.ZodTypeAny, {
    deaf: boolean;
    mute: boolean;
    echo_cancellation: boolean;
    noise_suppression: boolean;
    automatic_gain_control: boolean;
    input: {
        volume: number;
        device_id: string;
        available_devices: {
            id: string;
            name: string;
        }[];
    };
    output: {
        volume: number;
        device_id: string;
        available_devices: {
            id: string;
            name: string;
        }[];
    };
    mode: {
        type: -1 | "PUSH_TO_TALK" | "VOICE_ACTIVITY";
        auto_threshold: boolean;
        threshold: number;
        shortcut: {
            code: number;
            type: 0 | 1 | 3 | -1 | 2;
            name: string;
        }[];
        delay: number;
    };
    qos: boolean;
    silence_warning: boolean;
}, {
    deaf: boolean;
    mute: boolean;
    echo_cancellation: boolean;
    noise_suppression: boolean;
    automatic_gain_control: boolean;
    input: {
        volume: number;
        device_id: string;
        available_devices: {
            id: string;
            name: string;
        }[];
    };
    output: {
        volume: number;
        device_id: string;
        available_devices: {
            id: string;
            name: string;
        }[];
    };
    mode: {
        auto_threshold: boolean;
        threshold: number;
        shortcut: {
            code: number;
            name: string;
            type?: unknown;
        }[];
        delay: number;
        type?: unknown;
    };
    qos: boolean;
    silence_warning: boolean;
}>;
export declare const SubscribeResponse: zod.ZodObject<{
    evt: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    evt: string;
}, {
    evt: string;
}>;
export declare const CaptureShortcutResponse: zod.ZodObject<{
    shortcut: zod.ZodObject<{
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
}, "strip", zod.ZodTypeAny, {
    shortcut: {
        code: number;
        type: 0 | 1 | 3 | -1 | 2;
        name: string;
    };
}, {
    shortcut: {
        code: number;
        name: string;
        type?: unknown;
    };
}>;
export declare const SetActivityResponse: zod.ZodObject<{
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
export declare const GetSkusResponse: zod.ZodObject<{
    skus: zod.ZodArray<zod.ZodObject<{
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
    }>, "many">;
}, "strip", zod.ZodTypeAny, {
    skus: {
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
    }[];
}, {
    skus: {
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
    }[];
}>;
export declare const GetEntitlementsResponse: zod.ZodObject<{
    entitlements: zod.ZodArray<zod.ZodObject<{
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
    }>, "many">;
}, "strip", zod.ZodTypeAny, {
    entitlements: {
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
    }[];
}, {
    entitlements: {
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
    }[];
}>;
export declare const StartPurchaseResponse: zod.ZodNullable<zod.ZodArray<zod.ZodObject<{
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
}>, "many">>;
export declare const SetConfigResponse: zod.ZodObject<{
    use_interactive_pip: zod.ZodBoolean;
}, "strip", zod.ZodTypeAny, {
    use_interactive_pip: boolean;
}, {
    use_interactive_pip: boolean;
}>;
export declare const UserSettingsGetLocaleResponse: zod.ZodObject<{
    locale: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    locale: string;
}, {
    locale: string;
}>;
export declare const EncourageHardwareAccelerationResponse: zod.ZodObject<{
    enabled: zod.ZodBoolean;
}, "strip", zod.ZodTypeAny, {
    enabled: boolean;
}, {
    enabled: boolean;
}>;
export declare const GetChannelPermissionsResponse: zod.ZodObject<{
    permissions: zod.ZodUnion<[zod.ZodBigInt, zod.ZodString]>;
}, "strip", zod.ZodTypeAny, {
    permissions: string | bigint;
}, {
    permissions: string | bigint;
}>;
export { InitiateImageUploadResponseSchema as InitiateImageUploadResponse };
/**
 * Because of the nature of Platform Behavior changes
 * every key/value is optional and may eventually be removed
 */
export declare const GetPlatformBehaviorsResponse: zod.ZodObject<{
    iosKeyboardResizesView: zod.ZodOptional<zod.ZodBoolean>;
}, "strip", zod.ZodTypeAny, {
    iosKeyboardResizesView?: boolean | undefined;
}, {
    iosKeyboardResizesView?: boolean | undefined;
}>;
export declare const ResponseFrame: zod.ZodObject<{
    data: zod.ZodUnknown;
    nonce: zod.ZodString;
    cmd: zod.ZodNativeEnum<typeof Commands>;
    evt: zod.ZodNull;
}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
    data: zod.ZodUnknown;
    nonce: zod.ZodString;
    cmd: zod.ZodNativeEnum<typeof Commands>;
    evt: zod.ZodNull;
}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
    data: zod.ZodUnknown;
    nonce: zod.ZodString;
    cmd: zod.ZodNativeEnum<typeof Commands>;
    evt: zod.ZodNull;
}, zod.ZodTypeAny, "passthrough">>;
export declare function parseResponsePayload(payload: zod.infer<typeof ResponseFrame>): {
    data: {} | null | undefined;
    cmd: Commands;
    evt: null;
    nonce: string;
};
